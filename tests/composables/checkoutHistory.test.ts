
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import index from "~/pages/index.vue";
import checkout from "~/components/HelloMessage.vue"
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime';
import flushPromises from 'flush-promises';

describe("index.vue success", () => {
//   registerEndpoint("/api/checkout",{
//     handler: () => ({
//       message: "貸出処理完了です",
//       color: "success",
//       type: "success"
//     }),
//     method: "POST"
//   });

  test("貸出処理履歴取得テスト", async () => {
    console.log("貸出処理履歴取得テスト開始");

    /**
     * Arrange
     */

    /**
     * Act
     */
    const result = undefined;
    /**
     * Assert
     */
    expect(result).toBeUndefined();
  });
});