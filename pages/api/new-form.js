// export default function handler(req, res) {
//   // Get data submitted in request's body.
//   const body = req.body;

//   // Guard clause checks for first and last name,
//   // and returns early if they are not found
//   if (!body.title || !body.date) {
//     // Sends a HTTP bad request error code
//     return res.status(400).json({ data: 'First or last name not found' });
//   }

//   // Found the name.
//   // Sends a HTTP success code
//   res.status(200).json({
//     data: `title: ${body.title} date: ${body.date} picture: ${body.picture} category: ${body.category} description: ${body.description}`,
//   });
// }

// name: event.target.title.value,
//       name: event.target.picture.value,
//       brand: event.target.category.value,
//       description: event.target.description.value,
//       image:

import { getSession } from 'next-auth/react';
import prisma from './../../lib/prisma';

// POST /api/post
export default async function handle(req, res) {
  const { name, image, brand, description } = req.body;

  const session = await getSession({ req });
  const result = await prisma.car.create({
    data: {
      name,
      image,
      brand,
      description,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
