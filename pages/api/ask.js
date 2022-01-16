export default function handler(req, res) {
  res.status(200).json({ question: req.body.question })
}
