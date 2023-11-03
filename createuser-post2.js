import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main(){

        const user = await prisma.users.create({
            data: {
                name: 'arthur',
                email: 'arthur@gmail.com',
                lastname: 'gonza',
                posts: {
                    create: {
                        title: 'Otro post',
                        content: 'De otro forma el post',

                    }
                }
            }

            
        })
        console.log(user)

}

main();