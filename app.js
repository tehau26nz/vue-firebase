const app = Vue.createApp({
    // Data or functions we want here
    // Template: '<h2>I am a template<h2>'
    // Best to keep this clear and create the template in the HTML file
    data() {
        return {
            showBooks: true,
            title: 'Tahitian Holiday',
            author: 'Polynesian Writer',
            age: '30',
            x: 0,
            y: 0,
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
        }
    }
});

app.mount('#app');