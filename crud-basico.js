import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    /* const newUser = await prisma.users.create({
        data: {
          name: "mary",
          lastname: "robers",
          email: "mrobers@example.com"
        }
      })
      console.log(newUser)
    */
    /* const users = await prisma.users.findMany()
     users.map(user => console.log(`el id: ${user.id} le pertenece a usuario: ${user.name}`))*/

    /*const user = await prisma.users.findFirst({
      where: {
       OR: [
         {name: "Wuilmer"},
         {id: 1}
       ]
      }
      console.log(user);
  */
    /*  const user = await prisma.users.findMany({
         where: {
          OR: [
              { name: "mary"},
              {name: "Mary"}
          ]
         }
      });
  console.log(user);
      
  */

    /*try {
        const user = await prisma.users.delete({
            where: {
                id: 4
            }
        })
        console.log("usuario eliminado: ", user);
    } catch (error) {
        console.log(error.code, "-", error.meta.cause);
    }*/

    /*const user = await prisma.users.update({
        where: {
            id: 1
        },
        data: {
            name: "mary",
            lastname: "cross-fox",
            email: "mcross-fox@gmail.com"
        }
    })
    console.log("usuario actualizado: ", user);*/
  /*  const user = await prisma.users.upsert({
        where: {
            email: "jhon@example.com",
        },
        create: {
            name: "jhon",
            email: "jhon@example.com"
        },
        update: {
            lastname: "Bonachon"
        }
      })
      console.log("usuario creado o actualizado es: ", user);*/

}
main();