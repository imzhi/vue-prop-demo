Vue.component('brother1', {
    template: '#brother1',
    data: function() {
        return {
            message: ''
        }
    },
})

Vue.component('brother2', {
    template: '#brother2',
    props: [
        'brothermessage',
    ],
})


new Vue({
    el: '#app',
    data: {
        brothermessage: '',
    },
    methods: {
        transfer: function(arg) {
            this.brothermessage = arg;
        },
    },
})
