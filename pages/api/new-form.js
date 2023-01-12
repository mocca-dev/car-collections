export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.title || !body.date) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({
    data: `title: ${body.title} date: ${body.date} picture: ${body.picture} category: ${body.category} description: ${body.description}`,
  });
}
