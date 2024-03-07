import Message from '../../models/Message.js'

export const newMessage = async (req, res) => {
  const newMessage = new Message(req.body)
  try {
    const savedMessge = await newMessage.save()
    res.status(200).json(savedMessge)
  } catch (error) {
    res.status(500).json(error)
  }
}
