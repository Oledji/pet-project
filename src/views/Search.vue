<template>
    <div class="pictures">
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
        this.getPhotos();
    },
    watch: {
        '$route.search'(){
            this.getPhotos();
        }
    },
    methods: {
        getPhotos() {
                this.$store.dispatch('getPhotos', {
                    page:  this.page,
                    count: this.count,
                    query: this.$route.params.search
                });
            },
            onPageClick(page) {
                this.page = page;
                this.getPhotos();
            },
            clearPhotos() {
                this.$store.commit('clearPhotos')
            },
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
        
    }
}
</script>

<style>
.pictures {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
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
.page-item {
    cursor: pointer;
    border: 1px solid darkgray;
    padding: var(--padding-x15);
    border-radius: var(--border-radius-x15);
    background: var(--color-secondary-800);
}

.page-item.active {
    background: var(--color-secondary-600);
}
</style>