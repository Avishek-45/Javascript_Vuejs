new Vue({
  el: "#vue_app",
  data: {
    name: "Avishek",
    job: "Web developer",
    website: "http://avishekguragain.com.np",
    X: 0,
    Y: 0,
    number: 100,
    available:false,
    nearby:false,
  },
  methods: {
    Coordinates: function (event) {
      this.X = event.offsetX;
      this.Y = event.offsetY;
    },
    enter: function () {
      console.log("Helllo");
    },
  },
  computed: {
    greet: function () {
      return "Hello";
    },

    dynamicCSS: function () {
        return {
            
            available:this.available,
            nearby:this.nearby
        }
    }
  },
});
