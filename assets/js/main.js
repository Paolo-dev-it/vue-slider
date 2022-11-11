/* Realizzare uno slider
Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini */


var app = new Vue({
  el: '#root',
  data: {
    images: [
          { id: 1, image: 'https://picsum.photos/700/300' },
          { id: 2, image: 'https://picsum.photos/700/300' },
          { id: 3, image: 'https://picsum.photos/700/300' },
    ],

    indice: 0,
  },
  methods: {
    rightDirection: function(){
        if( this.indice >= this.images.length ){
        return this.indice = 0;
      } else {
        return this.indice++;
      }
    }
  }
})

