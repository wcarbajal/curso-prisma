import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main() {
    const users = await prisma.users.findMany({
        include: {
            posts: true
        }
    })

    users.map((user) => {
        console.log('--------------------------------')
        console.log('Id: ', user.id)
        console.log('Usuario: ', user.name)
        console.log('Apellido: ', user.lastname)
        console.log('Email: ', user.email)

        user.posts.map((post) => {
            
            console.log('titulo: ', post.title)
            console.log('contenido: ', post.content)
        })
    })
}
main();