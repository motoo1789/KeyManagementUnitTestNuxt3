
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { read } from "~/server/api/checkout/read";

describe("index.vue success", () => {


  test("貸出処理履歴取得テスト", async () => {
    console.log("貸出処理履歴取得テスト開始");

    /**
     * Arrange
     */
    const timezoneOption = {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }

    /**
     * Act
     */
    const result = undefined;
    const funcresult = await read();
    const tmp = funcresult[0];
    const date = new Date(tmp["checkout_date"]);
    console.log(date.toLocaleString("ja-JP", {timeZone: 'Asia/Tokyo'}).replaceAll('/', '-'))
    

    
    /**
     * Assert
     */
    // expect(funcresult).toBe(null);
    // expect(funcresult).not.toBeUndefined();
    expect(funcresult[0].id).toBe(assertDate[0].id);
    expect(funcresult[0].user).toBe(assertDate[0].user);
    expect(funcresult[0].approve).toBe(assertDate[0].approve);
    expect(funcresult[0].key).toBe(assertDate[0].key);
    expect((new Date(funcresult[0].checkout_date)).toLocaleString("ja-JP", {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replaceAll('/', '-')).toBe(assertDate[0].checkout_date);
    expect((new Date(funcresult[0].return_date)).toLocaleString("ja-JP", {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replaceAll('/', '-')).toBe(assertDate[0].return_date);
    
  });
});

const assertDate = [
    {
        id: 1,
        user: "checkouttest0001",
        approve: 1,
        key: 0,
        checkout_date: "2024-05-19 23:34:35",
        return_date: "2024-05-19 23:34:35"
    },
    {
        id: 2,
        user: "testtesttest0001",
        approve: 2,
        key: 0,
        checkout_date: "2024-05-19 23:34:35",
        return_date: "2024-05-19 23:34:35"
    }
]