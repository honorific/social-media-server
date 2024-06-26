import Post from '../../models/Post.js'
import User from '../../models/User.js'

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

export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({$push: {likes: req.body.userId}})
      res.status(200).json('post has been liked')
    } else {
      await post.updateOne({$pull: {likes: req.body.userId}})
      res.status(200).json('post has been disliked')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getTimeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    const userPosts = await Post.find({userId: currentUser._id})
    const friendsPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({userId: friendId})
      }),
    )
    console.log('friendPosts is: ', friendsPosts)
    res.status(200).json(userPosts.concat(...friendsPosts))
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUserPosts = async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username})
    const posts = await Post.find({userId: user._id})
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
}
