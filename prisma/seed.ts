import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Jack",
      email: "jack@me.com",
      messages: {
        create: [
          {
            body: "A Note for Jack",
          },
          {
            body: "Another note for Jack",
          },
        ],
      },
    },
  });
}

main();
