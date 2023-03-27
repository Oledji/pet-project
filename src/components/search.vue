<template>
    <div class="search_box">
        <input v-model="searchText" class="search_input" type="text" @keyup.enter="onClick">
        <font-awesome-icon class="search_icon" icon="fa-solid fa-magnifying-glass" @click="onClick" />
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                searchText: null,
            }
        },
        methods: {
            onClick() {
                this.$router.push({name: 'Search', params:{ search:  this.searchText } })
            }
        }
    }
</script>

<style>
.search_input {
    width: 400px;
    height: 30px;
    border-radius: 9px;
    padding: 0px 0px 0px 35px;
}
.search_icon {
    position: absolute;
    left: 2%;
    height: 20px;
    top: calc(50% - 20px/2);
    color: var(--main-color);
}
.search_box {
    position: relative;
    margin: auto;
}
</style>