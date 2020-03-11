/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import _ from 'lodash';
import Vue from 'vue';
import store from './store'
import Home from './components/Home.vue';
import Post from './components/Posts.vue';

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.App = new Vue({
 el: '#app',
 store,
 components: {Home,Post},
})
