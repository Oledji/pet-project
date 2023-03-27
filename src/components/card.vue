<template>
    <router-link v-bind:to="{ name: 'Pictures', params: { query: $props.name }}" class="card__element">
        <div class="card__header">
            <span>{{ $props.name }}</span>
        </div>
        <img class="card__image" :src="$props.img">
    </router-link>
</template>

<script>

export default {
    name: 'card',
    props: {
        name: {
           type: String,
           require: true
        },
        img: {
            type: String,
            require: true
        }
    }
}
</script>

<style>
.card__element {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc((100%/3) - 60px);
    height: 304px;
    margin: 15px;
    overflow: hidden;
    border-radius: 40px;
    background-color: rgb(110, 110, 110);
    text-decoration: none;
    color: var(--main-color);
}
.card__header {
    width: 100%;
    height: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-card) ;
    font-weight: var(--font-weight-card);
    background-color: var(--color-primary-100);
}
.card__image {
    width: 100%;
    height: 280px;
    opacity: 0.7;
}
</style>