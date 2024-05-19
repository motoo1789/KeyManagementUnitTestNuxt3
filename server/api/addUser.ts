import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const success = {
    message: "ユーザー登録完了",
    color: "success",
    type: "success"
}

const error = {
    message: "ユーザー登録失敗",
    color: "error",
    type: "error"
}

export default defineEventHandler(async (event) => {
    console.log("サーバー側処理 : addUser")

    const post = await readBody(event);

    if (event.node.req.method === 'POST') 
    {
        let approver = post.approver
        if(approver === "" || approver === null || approver === undefined)
        {
            approver = "NoApprover";
        }
        return await add(post.user, approver, post.mail);
    }
})


export async function add(user: string, approver: string, mail: string) : Promise<any>{ 
    
    const create = await prisma.user.create({
        data: {
            id: "testtesttest0099",
            name: user,
            approver: approver,
            create_date: new Date(),
            mail: mail
        }
    }).catch((err) => {
        console.log("error!!");
        console.error(err);
        return null;
    });

    return create === null ? error : success; 
};

