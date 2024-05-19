import { describe, test, expect } from "vitest";
import index  from "~/components/AddUser.vue"
import { mount } from "@vue/test-utils";
// import index from "~/pages/index.vue";
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime';
import flushPromises from 'flush-promises';

describe("index.vue add user failure", () => {
    registerEndpoint("/api/addUser",{
      handler: () => ({
        message: "ユーザー登録失敗",
        color: "error",
        type: "error"
      }),
      method: "POST"
    });
  
    test("ユーザー追加処理のフロントテスト 失敗", async () => {
      console.log("フロントユーザー追加テスト開始");

      /**
       * Arrange
       */
      const wrapper = mount(index);
      
      /**
       * Act
       */
      await wrapper.findComponent('#addButton').trigger('click');
      await flushPromises(); // すべての非同期処理が完了するのを待つ
      await wrapper.vm.$nextTick(); // 再描画を待つ

      const alert = wrapper.findComponent('#addUserAlert');
      const alertText = alert.text();
      console.log(alertText);

      /**
       * Assert
       */
      expect(index).toBeTruthy();
      // expect(html).toBeTruthy();
      expect(alert).toBeTruthy();
      expect(alertText).toBe("ユーザー登録失敗");
      // expect(result).toBe("ユーザー登録完了");
      // expect(test).toBe("ユーザー登録完了");
      // expect(test).toBeTruthy();
    });
  });