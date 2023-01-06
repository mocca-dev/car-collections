export default function handler(req, res) {
  res.status(200).json([
    { description: 'Audi RS5 2120', userName: 'Shmee150' },
    { description: 'Audi RS5 2021', userName: 'Toneko' },
    { description: 'Audi RS5 2022', userName: 'Juancito' },
    { description: 'Audi RS5 2023', userName: 'Pepito' },
  ]);
}
