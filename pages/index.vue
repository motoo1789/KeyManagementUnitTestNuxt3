<template>
    <div>
        <!-- <HelloMessage :name="name" /> -->
        <p>
            <input type="text" v-model="name" />
        </p>
        <v-card>
            <v-tabs
                v-model="tab"
                align-tabs="center"
                color="indigo-accent-4"
            >
              <v-tab value=0>貸出</v-tab>
              <v-tab value=1>ユーザー登録</v-tab>
              <v-tab value=2>貸出履歴</v-tab>
            </v-tabs>
        
            <v-window v-model="tab">
                <v-window-item
                    value=0
                >
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-card 
                                    class="mx-auto keyType1"
                                    height="200"
                                    image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    max-width="200"
                                    theme="dark"
                                    title="keyType1"
                                    @click="clickCheckout(0)"
                                ></v-card>
                            </v-col>
                            <v-col  cols="6">
                                <v-card
                                    class="mx-auto keyType2"
                                    height="200"
                                    image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    max-width="200"
                                    theme="dark"
                                    title="keyType1"
                                    @click="clickCheckout(1)"
                                ></v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-alert
                                v-model="alertSuccess"
                                :color="alertColor"
                                :title="alertSuccessText"
                                :key="renderKey"
                                :type="alertType"
                                class="checkoutAlert"
                            ></v-alert>
                        </v-row>
                    </v-container>
                </v-window-item>

                <v-window-item value = 1>
                    <AddUser />
                </v-window-item>

                <v-window-item value=2>
                    <CheckoutHistory />
                </v-window-item>
            </v-window>
          </v-card>
    </div>
    
</template>

<script setup lang="ts">
    import { ref } from "vue";
    const name = ref("World");

    // 貸出アラート
    const alertSuccess = ref(true);
    const renderKey = ref(0);
    let alertSuccessText = ref("貸出結果が表示されます");
    let alertColor = ref("info");
    let alertType = ref("info");

    // tabs
    const tab = ref(0);

    // 登録
    const registName = ref("");

    const clickCheckout = async (keytype: number) : Promise<any> => {
        try {
            const response = await useFetch("/api/checkout/checkout", {
                method: 'POST',
                body: {
                    user: "checkouttest0001",
                    keytype: keytype,
                },
                headers: {
                    Accept: 'application/json'
                }
            })
            alertSuccessText.value = response.data.value?.message;
            alertColor.value = response.data.value.color;
            alertType.value = response.data.value.type;
            
            // ユーザー操作ではcomponentは更新されないのでalertの再描画処理を記述
            renderKey.value = renderKey.value + 1; 
            return response.data.value.message;
            
        } catch (err) {
            alertSuccessText = ref("貸出失敗");
            alertColor = ref("error");
            alertType = ref("error");
            renderKey.value = renderKey.value + 1; 
            console.log("貸出失敗");
        }
    }

</script>