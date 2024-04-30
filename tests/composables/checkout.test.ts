import { checkout } from "../../composables/checkout.js"

import { describe, test, expect } from "vitest";

describe("checkout", () => {
    test("貸出処理のテスト", async () => {

        const checkout = {
            id: 3,
            user: 'checkouttest0001',
            approve: 4,
            key: 0,
            // return_date: new Date('1970-01-01T00:00:000Z')
        }

        const approve = {
            id: 4,
            user: "testauthorizer01",
            status: true,
        }

        const userApprove = {
            id: "testauthorizer01",
            name: "テスト承認者",
            authorizer: "testauthorizer01",
            mail: "test@test.com",
        }

        await checkout()
        const result = await checkoutRead(2);
        console.log("checkoutテスト側:関数返却値")
        console.log(result);
        expect(result).toMatchObject(checkouttest)
        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    })
})

// describe("approve", () => {
//     test("approve table insert test", async () => {
//         const test = {
//             id: 3,
//             user: "testauthorizer01",
//             status: false,
//         }
//         await approveInsert();
//         const result = await approveIdRead();

//         expect(result).toMatchObject(test)
//         // expect(result).not.toBeUndefined();
//         // expect(result).toBeUndefined();
//     })
// })

// describe("exituser", () => {
//     test("ユーザーが存在するかのテスト", async () => {
//         const test = {
//             id: "checkouttest0001",
//         }

//         const result = await userRead();

//         expect(result).toMatchObject(test)
//         // expect(result).not.toBeUndefined();
//         // expect(result).toBeUndefined();
//     })
// })

// describe("notExituser", () => {
//     test("ユーザーが存在しないときのテスト", async () => {
//         const test = "ユーザーが確認できませんでした"

//         const result = await notUser();
//         console.log(result)

//         expect(result).toEqual(test)
//         // expect(result).not.toBeUndefined();
//         // expect(result).toBeUndefined();
//     })
// })

describe("failureApproveInsert", () => {
    test("approve tableインサート失敗", async () => {
        const test = "登録できませんでした"

        const result = await failureApproveInsert();
        console.log(result)

        expect(result).toEqual(test)
        // expect(result).not.toBeUndefined();
        // expect(result).toBeUndefined();
    })
})
