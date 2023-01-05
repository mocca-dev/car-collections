export default function handler(req, res) {
  res.status(200).json({
    name: 'John Doe',
    at: 'John_Doe1',
    status: {
      followers: '4K',
      following: '1.1K',
      cars: '8',
    },
    collection: [],
  });
}
