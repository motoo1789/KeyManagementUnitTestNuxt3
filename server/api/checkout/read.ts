import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function read() : Promise<any>{

    const createUser = await prisma.checkout.findMany({

    }).catch((error) => {
        console.error(error);
    });
    return createUser;
}

export async function tmp() {
    return "test";
}

