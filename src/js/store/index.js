import Vue from 'vue'
import Vuex from 'vuex'
import Posts from './modules/Post'
import Chat from './modules/Chat'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		posts : Posts,
		chat : Chat
	}
  
})

import Echo from 'laravel-echo';

window.io = require('socket.io-client');

if (typeof io !== 'undefined') {
  window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: 'http://139.180.135.129:6001',
    pingTimeout : 120000,
    pingInterval : 25000
    
  });

}