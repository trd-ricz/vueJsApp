const Posts = {

  namespaced : true,

  state: {
    count: 0,
    post : [],
    apiToken : '',
    frontUrl : 'http://laravel7.localhost/',
    backUrl : 'http://192.168.224.5:80/',
  },
  mutations: {
    increment (state,pl) {
      if(pl){
        state.count+=pl
      }else{
        if(pl == 0){return}
        state.count++
      }
    },
    decrement(state, pl){
      state.count--
    },
    addPost(state,pl){
      state.post.push(pl)
    },
    defaultPost(state, pl){
      state.post = pl
    },
    deletePost(state,pl){
      let newSetOfPost = []
      state.post.forEach ( (value, key) => {
        if(value.row_id == pl){
          state.post.splice(key,1)
        }
      })
    },
    updatePost(state,pl){
      let newSetOfPost = []
      state.post.map( (value) => {
        if(value.row_id == pl.postId){
          value.content = pl.value
        }
      })
    },
    setApiToken(state,pl){
     state.apiToken = pl
    },
    updateApi(state,pl){
     state.apiToken = pl
    },

  },
  actions : {
    increment (context,pl){
      context.commit('increment', pl)
    },
    addPost(context,pl){
      context.commit('addPost', pl)
    },
    defaultPost(context,pl){
      context.commit('defaultPost',pl)
    },
    deletePost(context, pl) {
      context.commit('deletePost',pl)
    },
    decrement (context, pl){
      context.commit('decrement')
    },
    updatePost(context, pl){
      context.commit('updatePost',pl)
    },
    generateApiToken(context, pl){
      context.commit('setApiToken',response.data)
    },
    getPostApi(context,pl){
      let url = 'api/get_api'
      axios.defaults.headers.common = { 'Authorization': 'Bearer ' +context.state.apiToken }
      axios.get(
        `${context.state.frontUrl}${url}`
      ).then( (response) => {
       if(!response.data.status){alert(response.data.message); return;}
       context.commit('defaultPost',response.data.value)
       context.commit('increment', response.data.value.length)
     })
    },
    
    updateApi(context, pl){
     context.commit('updateApi',pl.target.value)
    },

  },
  getters: {
    getPostById: (state) => (id) => {
        return state.post.find(post => post.row_id === id)
      } 
   },
}
export default Posts