/* Realizzare uno slider
Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini */


var app = new Vue({
  el: '#root',
  data: {
    images: [
          { id: 1, image: '/assets/img/pexels-avinash-patel-544542.jpg' },
          { id: 2, image: '/assets/img/pexels-cesar-perez-733745.jpg' },
          { id: 3, image: '/assets/img/pexels-mike-b-244206.jpg' },
    ],

    indice: 0,
  },
  methods: {
    rightDirection: function(){
        if( this.indice < this.images.length  ){
         return this.indice++;
      } 
       return this.indice = 0
      
    },

    leftDirection: function(){
        if( this.indice > 0 ){
        return this.indice--;
      } 
        return this.indice = this.images.length -1
      
    },

    timer: function(){
                setInterval( this.rightDirection, 3000 )
            },
  },

  created () {
            this.timer()
          },
})

