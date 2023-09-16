import Post from '../../models/Post.js'

export const newPost = async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(201).json(savedPost)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId == req.body.userId) {
      await post.updateOne({$set: req.body})
      res.status(200).json('post updated')
    } else {
      res.status(403).json('you can update only your post')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId == req.body.userId) {
      await post.deleteOne()
      res.status(200).json('post deleted')
    } else {
      res.status(403).json('you can delete only your post')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}