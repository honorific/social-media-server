import bcrypt from 'bcrypt'
import User from '../../models/User.js'

export const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch (error) {
        return res.status(500).json(error)
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).json('account has been updated')
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('You can update only your account!')
  }
}

export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      return res.status(200).json('account has been deleted')
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('You can delete only your account!')
  }
}

export const getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId)
      }),
    )
    let friendList = []
    friends.map((friend) => {
      const {_id, username, profilePicture} = friend
      friendList.push({_id, username, profilePicture})
    })
    res.status(200).json(friendList)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUser = async (req, res) => {
  const userId = req.query.userId
  const username = req.query.username
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({username})
    const {password, updatedAt, ...other} = user._doc
    res.status(200).json(other)
  } catch (error) {
    res.status(500).json({error})
  }
}

export const followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({$push: {followers: req.body.userId}})
        await currentUser.updateOne({$push: {followings: req.params.id}})
        res.status(201).json('user has been followed')
      } else {
        res.status(403).json('you already follow this user')
      }
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('you cant follow yourself')
  }
}

export const unFollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({$pull: {followers: req.body.userId}})
        await currentUser.updateOne({$pull: {followings: req.params.id}})
        res.status(201).json('you dont follow this user')
      } else {
        res.status(403).json('you already unfollow this user')
      }
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json('you cant unfollow yourself')
  }
}
