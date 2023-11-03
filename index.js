import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  /*const newUser = await prisma.users.create({
    data: {
      name: "Wuilmer",
      lastname: "carbajal",
      email: "@example.com"
    }
  })
  console.log(newUser)*/
 /* const users = await prisma.users.findMany()
  users.map(user => console.log(`el id: ${user.id} le pertenece a usuario: ${user.name}`))*/

  const user = await prisma.users.findFirst({
    where: {
     OR: [
       {name: "Wuilmer"},
       {id: 1}
     ]
    }
  });
  console.log(user);
}
main();