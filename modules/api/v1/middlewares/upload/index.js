import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    //req.body.name works because it defined before file data in front-end share component
    cb(null, req.body.name)
  },
})

export const uploadMiddleware = {
  upload: multer({storage}),
}
