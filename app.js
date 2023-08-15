const app = Vue.createApp({
    // Data or functions we want here
    // Template: '<h2>I am a template<h2>'
    // Best to keep this clear and create the template in the HTML file
    data() {
        return {
            showBooks: true,
            books:[
                {title: 'The Discovery of Tahiti', author: 'Joan Druett', img: 'assets/1.jpg', isFav: true},
                {title: 'So Far the World', author: 'Tavae Raioaoa', img: 'assets/2.jpg', isFav: false},
                {title: 'Kawai: For Such a Time as This', author: 'Monty Soutar', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app');


// Challenge - Add to Favs
//  - attach a click event to each li tag (for each book)
//  - when a user clicks an li, toggle the 'isFav' property of that book