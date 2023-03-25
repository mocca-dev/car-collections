// export default function handler(req, res) {
//   res.status(200).json({
//     categoryList: [
//       { description: 'Audi RS5 2120', userName: 'Shmee150' },
//       { description: 'Audi RS5 2021', userName: 'Toneko' },
//       { description: 'Audi RS5 2022', userName: 'Juancito' },
//       { description: 'Audi RS5 2023', userName: 'Pepito' },
//     ],
//     mostPopular: [
//       { description: 'Audi RS5 2120', userName: 'Shmee150' },
//       { description: 'Audi RS5 2021', userName: 'Toneko' },
//       { description: 'Audi RS5 2022', userName: 'Juancito' },
//       { description: 'Audi RS5 2023', userName: 'Pepito' },
//       { description: 'Audi RS5 2024', userName: 'Pepito' },
//     ],
//   });
// }

import { getSession } from 'next-auth/react';
import prisma from './../../lib/prisma';

// POST /api/post
export default async function handler(req, res) {
  // const { name, image, brand, description } = req.body;

  // const session = await getSession({ req });
  const result = await prisma.car.findMany();
  res.status(200).json(result);
}
