import Conversation from '../../models/Conversation.js'

export const newConversation = async (req, res) => {
  const newConv = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  })
  try {
    const savedConversation = await newConv.save()
    res.status(200).json(savedConversation)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: {$in: [req.params.userId]},
    })
    res.status(200).json(conversation)
  } catch (err) {
    res.status(500).json(err)
  }
}
