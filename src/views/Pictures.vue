<template>
    <div class="pictures">
        <images :images="images"></images>
        <div class="paginate">
            <paginate
                :page-count="pages" class="paginate"
                :click-handler="onPageClick"
                :prev-text="'&#8592;'"
                :next-text="'&#8594;'"
                :container-class="'paginate__container'"
            ></paginate>
        </div>
    </div>
</template>

<script>

import images from '../components/images.vue';
export default {
  components: { images },
    name: 'Pictures',
    data() {
        return{
            page: 1,
            count: 28,
        }
    },
    created() {
        this.clearPhotos();
        this.getPhotos();
    },
    methods: {
        getPhotos() {
            this.$store.dispatch('getPhotos', {
                page:  this.page,
                count: this.count,
                query: this.$route.params.query
            });
        },
        onPageClick(page) {
            this.page = page;
            this.getPhotos();
        },
        clearPhotos() {
            this.$store.commit('clearPhotos');
        }
    },
    computed: {
        pages() {
            return this.$store.state.allPages;
        },
        images() {
            return this.$store.state.animePhotos;
        }
    },
    unmounted() {
        this.clearPhotos();
    }
}
</script>

<style>
.pictures {
    display: flex;
    flex-wrap: wrap;
    width: 1300px;
    flex-direction: row;
}
.paginate {
    display: flex;
    justify-content: center;
}
.paginate__container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.paginate__container li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
}
.paginate {
    margin: 0 auto;
    color: rgb(199, 199, 199);
    padding: 10px;
}
</style>