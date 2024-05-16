
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import index from "~/pages/index.vue";
import checkout from "~/components/HelloMessage.vue"
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime';
import flushPromises from 'flush-promises';

registerEndpoint("/api/checkout",{
  handler: () => ({
    message: "貸出処理完了です",
    color: "success",
    type: "success"
  }),
  method: "POST"
});

describe("index.vue", () => {
  test("貸出処理のフロントテスト", async () => {
    console.log("テスト開始");
    const wrapper = mount(index);
    console.log("画面の文字列表示");
    console.log(wrapper.findComponent('.checkoutAlert').text());
    await wrapper.findComponent('.keyType1').trigger("click");
    await flushPromises(); // すべての非同期処理が完了するのを待つ
    await wrapper.vm.$nextTick(); // 再描画を待つ
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.findComponent('.checkoutAlert').text()).toContain("貸出処理完了です");
    console.log(wrapper.findComponent('.checkoutAlert').text());
  });
});