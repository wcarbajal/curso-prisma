import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(){
    const newUser = await prisma.users.create({
        data: {
            name: 'favio',
            email: 'favio@gmail.com',
            lastname: 'gomez'
        }
    })

    const newPost = await prisma.post.create({
        data:{
            title: `Mi primer publicación - ${newUser.name}` ,
            content: `Este es mi primer post - ${newUser.name}`,
            author: {
                connect: {
                    id: newUser.id
                }
            }
        }     
    })

    console.log(newUser, newPost)
}

main();