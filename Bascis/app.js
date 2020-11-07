new Vue({
    el: '#vue_app',
    data: {
        name: 'Avishek',
        job: 'Web developer',
        website: 'http://avishekguragain.com.np',
        X:0,
        Y:0,
        number:100

    },
    methods: {
        greet:function(){
            return 'Hello'
        },
        Coordinates:function(event){
                this.X=event.offsetX
                this.Y=event.offsetY
        }
    }
})