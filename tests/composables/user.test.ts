import { add } from "../../composables/user.js"
import { describe, test, expect } from "vitest";

describe("add user sucess", () => {
    test("ユーザー登録処理成功 テスト", async () => {

        /**
         * Arrange
         */
        const testId = "testtesttest0012"
        const addUser = "testUser";
        const approver = "testApprover0000";
        const mail = "test@test.com"

        const failureId = "testtesttest0001";

        /**
         * Act
         */
        const success = await add(testId, addUser, approver, mail);
        const failure = await add(failureId, addUser, approver, mail);

        /**
         * Assert
         */

        // expect(result).toBeTruthy();
        expect(success).toBe("ユーザー登録完了");
        expect(failure).toBe("ユーザー登録失敗");
        // expect(test).toBeTruthy();
    })
    // test("insert処理の異常処理テスト", async () => {
    // })
})