import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {

  const post1 = await prisma.creatura.upsert({
    where: { name: 'Aliens' },
    update: {},
    create: {
      name: 'Aliens',
      description: 'fictional being from another world.',
      lastSee:
        "Simón Bolívar 1-62 y Manuel Vega",
      countLastSee:12,  
      extinct: false,
    },
  });

    const post2 = await prisma.creatura.upsert({
    where: { name: 'Vampires' },
    update: {},
    create: {
      name: 'Vampires',
      description: 'leave its grave at night to drink the blood of the living by biting their necks with long pointed canine teeth.',
      lastSee:
        "Calderon Park",
      countLastSee:5,  
      extinct: false,
    },
  });



  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {

    await prisma.$disconnect();
  });