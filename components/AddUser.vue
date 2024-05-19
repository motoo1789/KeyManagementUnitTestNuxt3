<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" >
                <v-text-field
                    v-model="registName"
                    :counter="10"
                    :rules="nameRules"
                    label="ユーザー名"
                    hide-details
                    required
                    class="d-flex justify-center"
                ></v-text-field>

                <v-text-field
                    v-model="approver"
                    :counter="10"
                    :rules="nameRules"
                    label="承認者"
                    hide-details
                    required
                    class="d-flex justify-center"
                ></v-text-field>

                <v-text-field
                    v-model="mail"
                    :counter="10"
                    :rules="nameRules"
                    label="メール"
                    hide-details
                    required
                    class="d-flex justify-center"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-btn @click="add()" id="addButton">
                ユーザー登録
            </v-btn>
        </v-row>
        <v-row>
            <v-alert
                v-model="userAddAlert"
                :color="alertAddUserColor"
                :title="alertUserAddText"
                :key="renderKey"
                :type="alertAddUserColor"
                class="addUserAlert"
                id="addUserAlert"
            >
            </v-alert>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    // ユーザー追加アラート
    const userAddAlert = ref(true);
    let alertUserAddText = ref("ユーザー登録結果が表示されます");
    let alertAddUserColor = ref("info");
    let renderKey = ref(0);

    // 登録
    const registName = ref("テスト");
    const approver = ref("NoApprover")
    const mail = ref("test@test.com");

    const add = async () : Promise<any> => {
        try {
            const response : object = await useFetch("/api/addUser", {
                method: 'POST',
                body: {
                    user: registName,
                    approver: approver,
                    mail: mail
                },
                headers: {
                    Accept: 'application/json'
                }
            })

            // responseの処理
            alertUserAddText.value = response.data.value.message;
            alertAddUserColor = response.data.value.color;
            renderKey.value++;
        } 
        catch (err) {
            console.log("ユーザー登録失敗");
            alertUserAddText.value = "ユーザー登録失敗";
            alertAddUserColor.value = 'error';
            renderKey.value++;
        }
    }
</script>