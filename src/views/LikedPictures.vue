<template>
    <div>
        <images :images="images"></images>
        <div class="paginate">
            <paginate
                v-bind:page-count="pages" class="paginate"
                v-bind:click-handler="onPageClick"
                v-bind:prev-text="'&#8592;'"
                v-bind:next-text="'&#8594;'"
                v-bind:container-class="'paginate__container'"
            ></paginate>
        </div>            
    </div>
</template>

<script>
import images from '@/components/images.vue';
    export default {
        name: 'LikedPictures',
        components: {
            images
        },
        data() {
            return {
                page: 1,
                count: 28,
                order_by: 'latest'
            }
        },
        methods: {
            clearTopicsPhoto() {
                this.$store.commit('clearTopicPhotos');
            },
            getLikedPhotos() {
                this.$store.dispatch('getLikedPhotos',{
                    page: this.page,
                    count: this.count,
                    order_by: this.order_by
                })
            }
        },
        computed: {
            images() {
                return this.$store.state.likedPhotos;
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.getLikedPhotos();
            })
        }
        
    }
</script>

<style lang="scss" scoped>

</style>