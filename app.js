const app = Vue.createApp({
    // Data or functions we want here
    // Template: '<h2>I am a template<h2>'
    // Best to keep this clear and create the template in the HTML file
    data() {
        return {
            title: 'Tahitian Holiday',
            author: 'Polynesian Writer',
            age: '30'
        }
    }
});

app.mount('#app');