
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("index.vue success", () => {


  test("貸出処理履歴取得テスト", async () => {
    console.log("貸出処理履歴取得テスト開始");

    /**
     * Arrange
     */

    /**
     * Act
     */
    const result = undefined;
    const funcresult = hisotry();
    /**
     * Assert
     */
    expect(result).toBeUndefined();
  });
});

function hisotry() {
    return undefined;
}

const assertDate = [
    {
        id: 1,
        user: "checkouttest0001",
        approve: 1,
        key: 0,
        checkout_date: "2024-05-19 14:34:35",
        return_date: "2024-05-19 14:34:35"
    },
    {
        id: 2,
        user: "testtesttest0001",
        approve: 2,
        key: 0,
        checkout_date: "2024-05-19 14:34:35",
        return_date: "2024-05-19 14:34:35"
    }
]