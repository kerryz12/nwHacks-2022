export default function handler(req, res) {
    const body = req.body;
    if (!body.question) {
      return res.status(500).json({msg: 'Question was not found'});
    }
  
    res.status(200).json({question: `${body.question}`});
  }