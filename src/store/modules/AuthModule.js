import axios from "axios"

export const AuthModule = {

    state() {
        return {
            isAuth: false,
            client_id: 'qymywqpdL0TwRkKDzrMxcXoYpRVKy5PNC-k_zZK2FaI',
            client_secret: 'p8xANlI0pO4HMlLFwxyJWWwYFhdkSY_KrTMOvdem3uY',
            response_type: 'code',
            scope: 'public+read_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections',
            URL: 'http://localhost:8080',
            auth_code: null,
            access_token: localStorage.getItem('access_token') || null
        }
    },
    getters: {

    },
    mutations: {
        onLog__success(state, data) {
            state.access_token = data.data.access_token
            localStorage.setItem('access_token',data.data.access_token)
            state.isAuth = true;
        },
        onLogOut__success(state) {
            state.access_token = ''
            localStorage.removeItem('access_token')
            state.isAuth = false;
        },
        isAuthorize(state) {
            console.log('worked')
            if(state.access_token != null) return state.isAuth = true
            return state.isAuth = false
        }
    },
    actions: {
        async getAuthorize({ state }) {
            window.location.replace(`https://unsplash.com/oauth/authorize?client_id=${state.client_id}&redirect_uri=${state.URL}/&response_type=${state.response_type}&scope=${state.scope}`)
        },
        async onLogAuth({ state }) {
            if (state.auth_code != null && !state.access_token) {
                let response = await axios(
                {
                    method: 'POST',
                    url: 'https://unsplash.com/oauth/token',
                    params: {
                        client_id: state.client_id,
                        client_secret: state.client_secret,
                        redirect_uri: state.URL,
                        code: state.auth_code,
                        grant_type: 'authorization_code'
                    },
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache',
                        'Expires': '0',
                    }
                })
                console.log(response);
                this.commit('onLog__success', response);
            }
        },
    }
}