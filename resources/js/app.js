require('./bootstrap');

window.Vue = require('vue');

Vue.component('front-page', require('./components/Front.vue').default);
let categoriesCreate = Vue.component('categories-create', require('./components/CategoriesCreate.vue').default);

const app = new Vue({
    el: '#app',
    components: {
        categoriesCreate: categoriesCreate
    }
});
