export const uploadHandler = (req, res) => {
  try {
    return res.status(200).json('file uploaded successfully')
  } catch (err) {
    console.log(err)
  }
}
