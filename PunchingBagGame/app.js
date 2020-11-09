new Vue({
    el: '#punchBag',
    data: {
        health:100,
        ended:false

    },
    methods:{
        punch: function () {
            this.health -= 20;
            let sound= new Audio('/Sounds/punch.mp3')
            sound.play();
            if (this.health <= 0){
                this.ended = true;
                let sound2=new Audio('/Sounds/over.mp3')
                sound2.play();
            }
        },
        restart: function () {
            this.health= 100;
            this.ended=false;
            let sound3=new Audio('/Sounds/startSound.mp3')
            sound3.play();
        }
    },
    computed:{

    }
});