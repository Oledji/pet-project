<template>
    <div class="header__container">
        <div class="container">
            <font-awesome-icon v-if="!menu" @click="onClick" class="search_icon white" icon="fa-solid fa-bars" />
            <font-awesome-icon v-if="menu" @click="onClick" class="search_icon white" icon="fa-solid fa-xmark" />
            <router-link class="logo__link" v-bind:to="{ name: 'home' }">
             <img class="logo"  v-bind:src="logo">
            </router-link>
            <search></search>
            <my-button v-if="!this.isAuth" @click="getAuth" class="btn">Authorization</my-button>
            <div v-if="this.isAuth" class="user_info">
                <div class="user_info_title" v-if="User">
                    <font-awesome-icon class="user_icon" icon="fa-solid fa-user" /> 
                    <span>Hi, {{ this.User.username }}</span>
                </div>
                <div class="user_info_actions">
                    <hr />
                    <router-link :to="{name: 'liked'}" class="user_info_btn">Liked pictures</router-link>    
                    <hr />
                    <my-button class="btn" @click="onLogOut">Log out</my-button>
                </div>   
            </div>       
        </div>
    </div>
</template>

<script>
import logo from '../assets/logo.png'
import Search from './search.vue';
import myButton from './UI/myButton.vue';
    export default {
        name: 'my-header',
        components: {
            Search,
            myButton
        },
        data() {
            return {
                logo: logo,
                menu: false
            }
        },  
        methods: {
            onClick() {
                this.menu = !this.menu;
                console.log('clicked');
                this.$emit('toggle-menu'); 
            },
            getAuth() {
                this.$store.dispatch('getAuthorize')
            },
            getUser() {
                this.$store.dispatch('getUserInfo')
            },
            onLogOut() {
                this.$store.commit('onLogOut__success')
            }
        },
        computed: {
            User() {
                return this.$store.state.user
            },
            isAuth() {
                this.getUser()
                return this.$store.getters.isAuthToken
            }
        },
        mounted() {
            this.getUser()
        }
    }
</script>

<style>
.header__container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgb(53, 53, 53);
  z-index: 1;
}

.header__container .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.logo {
    height: 50px;
    width: 50px;
    z-index: 2;
}

.logo__link{
    margin: 0 auto;
}

.white{
    color: var(--color-primary-100);
}
.search_icon {
    cursor: pointer;
}

.btn {
    height: 30px;
}

.user_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: -20px;
    transition: all 0.3s ease-out;
}

.user_info_actions {
    display: none;
}

.user_info span {
    margin: 0 var(--margin-x2);
    color: var(--color-secondary-100);
    font-weight: 900;
}
.user_icon {
    color: aliceblue;
}

.user_info:hover .user_info_actions {
    display: block;
}

.user_info:hover {
    padding: 5px;
    background-color: var(--color-secondary-100);
    border-radius: var(--border-radius-x1);
}
.user_info:hover .user_info_title span {
    color: var(--color-secondary-900);
}
.user_info:hover .user_icon {
    color: var(--color-secondary-900);
}
.user_info_btn {
    margin: var(--margin-x2) 0px;
    color: var(--color-secondary-900);
    text-decoration: none;
}
</style>