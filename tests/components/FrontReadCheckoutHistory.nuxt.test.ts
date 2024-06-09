import { describe, test, expect } from "vitest";
import checkoutread  from "~/components/CheckoutHistory.vue"
import { mount } from "@vue/test-utils";
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime';
import flushPromises from 'flush-promises';

describe("index.vue add user success", () => {
    registerEndpoint("/api/checkout/read",{
      handler: () => ({
        id: 1,
        user: "checkouttest0001",
        approve: 1,
        key: 0,
        checkout_date: "2024-05-19 23:34:35",
        return_date: "2024-05-19 23:34:35"
      }),
      method: "GET"
    });
  
    test("ユーザー追加処理のフロントテスト", async () => {
        console.log("フロントユーザー追加テスト開始");

        /**
         * Arrange
         */
        const wrapper = mount(checkoutread); 
        
        /**
         * Act
         */
        const table = wrapper.findComponent('#checkoutTable').text();
        await flushPromises(); // すべての非同期処理が完了するのを待つ
        await wrapper.vm.$nextTick(); // 再描画を待つ
        console.log(table);

        /**
         * Assert
         */
        expect(wrapper).toBeTruthy();
        expect(table).toBeTruthy();
        expect(table).toContain("2024-05-19 23:34:35");
        expect(table).toContain("2024-05-19 23:34:35");
        // expect(result).toBe("ユーザー登録完了");
        expect(null).toBe(null);
        // expect(test).toBeTruthy();
    });
});