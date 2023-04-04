import { createStore } from 'vuex'
import axios from 'axios'
import { AuthModule } from './modules/AuthModule'

export default createStore({
  state: {
    photos: [],
    animePhotos: [],
    topics: [],
    topicsPhotos: [],
    likedPhotos: [],
    client_id: 'qymywqpdL0TwRkKDzrMxcXoYpRVKy5PNC-k_zZK2FaI',
    client_secret: 'p8xANlI0pO4HMlLFwxyJWWwYFhdkSY_KrTMOvdem3uY',
    allPages: 0,
    user:  null
  },
  getters: {

  },
  mutations: {
    getPhotos__success(state, data) {

      state.animePhotos = data.data.results
      state.allPages = data.data.total_pages
    },
    getTopics__success(state, data) {
      state.topics = data
    },
    getTopicsPhoto__success(state, data) {
      state.topicsPhotos = data.data
      state.topics.data.forEach((item) => {
        if (item.slug === data.config.params.query) {
          state.allPages = Math.ceil(Number(item.total_photos) / 28);
        }
      })
    },
    likePhoto__success(state, data) {
      state.likedPhotos.push(data);
    },
    unlikePhoto__success(state, data) {
      state.likedPhotos = state.likedPhotos.data.filter(item => item.id != data.id)
    },
    clearPhotos(state) {
      state.photos = [];
      state.animePhotos = [];
    },
    clearTopicPhotos(state) {
      state.topicsPhotos = [];
    },
    userInfo__success(state,data) {
      localStorage.setItem('username', data.data.username)
      state.user = data.data
    },
    getLikedPhotos__success(state,data) {
      state.likedPhotos = data.data
    }
  },
  actions: {
    async getPhotos({ state }, data) {
      let response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: data.query,
          page: data.page,
          per_page: data.count,
          client_id: state.client_id,
        },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      })
      response.then(response => {
        this.commit('getPhotos__success', response);
        console.log(response);
      })
      response.catch(e => {
        console.log(e)
      })
    },
    async getTopics({ state }, data) {
      let response = await axios.get('https://api.unsplash.com/topics', {
        params: {
          client_id: state.client_id,
          order_by: data.order_by,
          page: data.page,
          per_page: data.per_page
        },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      })
      response.then(response => {
        this.dispatch('getTopicsPhoto', {
          page: 1,
          count: 28,
          query: response.data[0].id,
          order_by: 'latest'
        });
        this.commit('getTopics__success', response)
        console.log(response);
      })
      response.catch(e => {
        console.log(e)
      })
    },
    async getTopicsPhoto({ state }, data) {
      let response = await axios.get(`https://api.unsplash.com/topics/${data.query}/photos`, {
        params: {
          client_id: state.client_id,
          query: data.query,
          page: data.page,
          per_page: data.count,
          order_by: data.order_by
        },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      })
      response.then(response => {
        this.commit('getTopicsPhoto__success', response);
        console.log(response);
      })
      response.catch(e => {
        console.log(e)
      })
    },
    async likePhoto({ state }, data) {
      let response = await axios(
        {
          method: 'POST',
          url: `https://api.unsplash.com/photos/${data.query}/like`,
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Authorization': `Bearer ${state.AuthModule.access_token}`
          }
        })
      response.then(response => {
        this.commit('likePhoto__success', response);
        console.log(response);
      })
      response.catch(e => {
        console.log(e)
      })
    },
    async unlikePhoto({ state }, data) {
      let response = await axios(
        {
          method: 'DELETE',
          url: `https://api.unsplash.com/photos/${data.query}/like`,
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Authorization': `Bearer ${state.AuthModule.access_token}`
          }
      })
      response.then(response => {
        this.commit('unlikePhoto__success', response);
        console.log(response);
      })
      response.catch(e => {
        console.log(e)
      })
    },
    async getUserInfo({ state }) {
      if(state.user == null) {
        let response = await axios(
          {
            method: 'GET',
            url: `https://api.unsplash.com/me`,
            params: {
              scope: 'read_user'
            },
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
              'Authorization': `Bearer ${state.AuthModule.access_token}`
            }
        })
        response.then(response => {
          this.commit('userInfo__success', response);
          console.log(response);
        })
        response.catch(e => {
          console.log(e)
        })
      }
    },
    async getLikedPhotos({ state },data) {
      let username = localStorage.getItem('username')
      {
        try {
          let response = await axios(
            {
              method: 'GET',
              url: `https://api.unsplash.com/users/${username}/likes`,
              params: {
                page: data.page,
                per_page: data.count,
                order_by: data.order_by,
                orientation: 'portrait'
              },
              headers: {
                'Authorization': `Bearer ${state.AuthModule.access_token}`
              }
            })
          this.commit('getLikedPhotos__success', response);
          console.log(response);
        } catch(e) {
          console.log(e)
        }
      }
    },
  },
  modules: {
    AuthModule,
  }
})
