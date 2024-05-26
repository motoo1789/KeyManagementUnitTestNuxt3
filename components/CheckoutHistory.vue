<template>
    <v-container>
        <v-data-table
            :items="desserts"
            :headers="headers"
        ></v-data-table>
    </v-container>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    const desserts = [
        {
            checkout_date: '2024-04-02 00:00:00',
            name: "テストさん",
            key_type: "ドラえもん",
            return_date: '2024-04-03 00:00:00',
        },
        {
            checkout_date: '2024-04-02 00:00:00',
            name: "テストさん2",
            key_type: "ピカチュウ",
            return_date: '2024-04-03 00:00:00',
        },
    ]

    const headers = [
                { title: '貸出日時', value: 'checkout_date', align: 'end' },
                { title: '名前', value: 'name', align: 'end' },
                { title: '鍵種', value: 'key_type', align: 'end' },
                { title: '返却日時', value: 'return_date', align: 'end' },
    ];

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