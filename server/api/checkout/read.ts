import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    console.log("サーバー側処理 : /api/checkout/read")

    if (event.node.req.method === 'GET') 
    {
        return await read();
    }
})

export async function read() : Promise<any>{
    console.log("front からよばれる");
    const createUser = await prisma.checkout.findMany({

    }).catch((error) => {
        console.error(error);
    });
    return createUser;
}
