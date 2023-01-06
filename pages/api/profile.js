export default function handler(req, res) {
  res.status(200).json({
    name: 'John Doe',
    at: 'John_Doe1',
    status: {
      followers: '4K',
      following: '1.1K',
      cars: '4',
    },
    collection: [
      { description: 'Audi RS5 2120', userName: 'Shmee150' },
      { description: 'Audi RS5 2021', userName: 'Toneko' },
      { description: 'Audi RS5 2022', userName: 'Juancito' },
      { description: 'Audi RS5 2023', userName: 'Pepito' },
    ],
  });
}
