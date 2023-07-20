const { createApp } = Vue;

createApp({
    data() {
        return {
            urlAdress: './server.php',
            discList: [],
            apiKey: "a5678786789678dfg6ds86s89g7",
        }
    },

    methods: {
        getDiscsInfos() {
            axios
                .get(this.urlAdress, {
                    params: {
                        api_key: this.apiKey,
                    }
                })
                .then((response) => {
                    console.log(response);
                    this.discList = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },

    created() {
        this.getDiscsInfos()
    }
}).mount('#app')