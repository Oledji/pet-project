<template>
    <div class="img__container">
        <div class="item"
        v-for="image in images"
        :key="('photo-' + image.id)">
            <my-image :image="image"/>
        </div>
    </div>
</template>

<script>
import myImage from './myImage.vue';
export default {
    name: 'images',
    components: {
        myImage,
    },
    props: {
        images: {
            type: Array,
            reguired: true
        }
    },
    data() {
        return {  
            
        }
    },
    computed: {

    },
    methods: {

    },
    beforeUpdate() {
        
    }
}
</script>

<style>
.img__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 30px;
}
.item {
    margin: 10px;
    width: 300px;
    height: 200px;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
}
.item image img {
    min-width: 100%;
    min-height: 100%;
    max-width: 200%;
    max-height: 200%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>