const { createApp } = Vue;

createApp({
    data() {
        return {
            urlAdress: './server.php',
            discList: []
        }
    },

    methods: {
        getDiscsInfos() {
            axios.get(this.urlAdress, {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data);
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