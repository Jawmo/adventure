import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedUsers() {
  const bob = await prisma.user.upsert({
    where: { email: "bob@mail.com" },
    update: {},
    create: {
      email: "bob@mail.com",
      name: "Bob",
    },
  });

  const alice = await prisma.user.upsert({
    where: { email: "alice@mail.com" },
    update: {},
    create: {
      email: "alice@mail.com",
      name: "Alice",
    },
  });

  console.log(`Seeded users: ${bob.name} and ${alice.name}`);
}

Promise.all([seedUsers()])
  .catch((error) => {
    console.error("Error seeding data", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
