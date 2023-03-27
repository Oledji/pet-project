<template>
    <div class="home">
        <cards></cards>
    </div>
</template>

<script>
import cards from '@/components/cards.vue';
export default {
    name: 'home',
    components: {
        cards,
    },
    data() {
        return {

        }
    },
    methods: {
        auth() {
            this.$store.dispatch('onLogAuth')
        },
    },
    mounted() {
        if(this.$store.state.AuthModule.auth_code) {
            this.auth()
        }
    },
    mounted() {
        
    }
}
</script>

<style>

</style>