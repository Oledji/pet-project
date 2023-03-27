<template>
    <div :class="{ active: menuActive, menu__container: true }">
        <nav class="navigation__container">
            <router-link class="navigation__box" v-bind:to="{ name: 'home' }">
                <font-awesome-icon class="topics__icon" icon="fa-solid fa-chart-line" />
                <span class="span">Top searches</span>
            </router-link>

            <router-link class="navigation__box" v-bind:to="{ name: 'Topics' }">
                <font-awesome-icon class="topics__icon" icon="fa-solid fa-bookmark" />
                <span class="span">Topics</span>
            </router-link>

            <router-link class="navigation__box" v-bind:to="{ name: 'home' }">
                <font-awesome-icon class="topics__icon" icon="fa-solid fa-images" />
                <span class="span">Categories</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return{
           
        }
    },
    props: {
        menuActive: {
            type: Boolean
        }
    }
}

</script>

<style scoped>
    .menu__container {
        position: fixed;
        width: 40px;
        height: 100vh;
        background-color: rgb(147, 158, 158);
        -webkit-transition:  0.3s;
        -moz-transition:  0.3s;
        transition:  0.3s;
    }
    .active {
        background-color: rgb(101, 105, 109);
        width: 140px;
    }
    .topics__icon {
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0px;
        width: 40px;
    }
    .navigation__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-x: hidden;
    }
    .navigation__box {
        display: flex;
        width: 150px;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        color: var(--main-color);
        margin: 5px 10px 5px 0px;
        overflow-x: hidden;
    }

</style>