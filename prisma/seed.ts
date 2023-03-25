import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const car1 = await prisma.car.upsert({
    where: { id: 'cle1ubsoq0000y2krm1l4lblx' },
    update: {},
    create: {
      name: 'Nissan Skyline GT-R (R35)',
      description:
        "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan, unveiled in 2007.[3][4][5] It is the successor to the Nissan Skyline GT-R, a high performance variant of the Nissan Skyline. Although this model was the sixth-generation to bear the GT-R name, it is no longer part of the Nissan Skyline line-up since that name is now reserved for Nissan's luxury-sport vehicles. The GT-R is built on the exclusively-developed PM platform, which is an evolution of the FM platform used in the separate Nissan Skyline luxury car and the Nissan Z sports car. The GT-R abbreviation stands for Gran Turismo–Racing, obtained from the Skyline GT-R.[6]",
      image:
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
  });

  const car2 = await prisma.car.upsert({
    where: { id: 'cle1ux8eo0000y2vrydk8cr3t' },
    update: {},
    create: {
      name: 'BMW (E92) GTR-S3',
      description:
        "The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH. M3 models have been produced for every generation of 3 Series since the E30 M3 was introduced in 1986.",
      image:
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
