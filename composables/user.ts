import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function findUser(user: string): Promise<any> {

    const result = await prisma.user.findUnique({
        where: {
            id: user
        }
    })
    .catch((error) => {
        console.error(error);
    });  

    return result ?? null;
}

export async function add(id: string, user: string, approver: string, mail: string) : Promise<any>{ 
    
    const create = await prisma.user.create({
        data: {
            id: id,
            name: user,
            approver: approver,
            create_date: new Date(),
            mail: mail
        }
    }).catch((error) => {
        console.log("error!!");
        console.error(error);
    });
    console.log(create);
    return create === undefined ? 'ユーザー登録失敗' : 'ユーザー登録完了'; 
};