<template>
    <v-container>
        <v-data-table
            :items="desserts"
            :headers="headers"
            id="checkoutTable"
        ></v-data-table>
    </v-container>
</template>

<script lang="ts" setup>
    import { ref,onMounted  } from "vue";

    const KEY_TYPE_PICA = 0;
    const KEY_TYPE_DORA = 1;
    let render = ref(0);

    const desserts = ref<Array<Object>>([]);
    onMounted(async () => {
        console.log("onMounted");
        try {
            const response = await useFetch("/api/checkout/read", {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            })

            // responseの処理
            response.data.value.forEach( checkout => {
                const row : Object = {
                    id: checkout.id,
                    checkout_date: normalizationDate(checkout.checkout_date),
                    name: checkout.user,
                    key_type: checkout.key === KEY_TYPE_PICA ? 'ピカチュウ' : 'ドラえもん',
                    return_date: normalizationDate(checkout.return_date)
                }
                desserts.value.push(row);
            });
        //     render.value++;
        } 
        catch (err) {
            console.log("貸出履歴表示失敗");
        }
    })

    function normalizationDate(dateArg : string) : string {
        const typeDate = new Date(dateArg)
        const localeStringDate : string = typeDate.toLocaleString("ja-JP", {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        return localeStringDate.replaceAll('/', '-');
    }

    const headers = [
        { title: 'id', value: 'id', align: 'end'},
        { title: '貸出日時', value: 'checkout_date', align: 'end' },
        { title: '名前', value: 'name', align: 'end' },
        { title: '鍵種', value: 'key_type', align: 'end' },
        { title: '返却日時', value: 'return_date', align: 'end' },
    ];
</script>