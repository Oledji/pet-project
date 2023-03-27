<template>
        <img @click="showModal" :src="image.urls.small" :value="image.urls.regular" :URL="image.links.download">
        <font-awesome-icon v-if="!image.liked_by_user" @click="onLike" :value="image.id" class="like_icon"
            icon="fa-solid fa-heart" />
        <font-awesome-icon v-if="image.liked_by_user" @click="onUnlike" :value="image.id" class="like_icon liked"
            icon="fa-solid fa-heart" />
        <Modal v-model:show="modalVisible" v-model:imageURL="fullImage" v-model:downloadURL="loadURL"/>
</template>

<script>
import Modal from './UI/myModal.vue'
export default {
    name: 'image',
    components: {
        Modal
    },
    props: {
        image: {
            type: Object,
            reguired: true
        }
    },
    data() {
        return {
            modalVisible: false,
            fullImage: null,
            loadURL: null
        }
    },
    methods: {
        onLike(e) {
            this.likePhoto(e.target.parentNode.getAttribute('value'))
        },
        onUnlike(e) {
            this.unlikePhoto(e.target.parentNode.getAttribute('value'))
        },
        likePhoto(query) {
            this.$store.dispatch('likePhoto', {
                query: query
            });
        },
        unlikePhoto(query) {
            this.$store.dispatch('unlikePhoto'), {
                query: query
            }
        },
        showModal(e) {
            this.modalVisible = true;
            this.fullImage = e.target.getAttribute('value')
            this.loadURL = e.target.getAttribute('URL')
            if(this.$route.params.search) {
                this.$router.push({ name: "SearchPhoto", params: { query: this.$route.query.search, photo_id: this.image.id } })
            }
            if(this.$route.params.topic_id) {
                this.$router.push({ name: "topicsPhoto", params: { topic_id: this.$route.params.topic_id,  photo_id: this.image.id } })
            }
            if(this.$route.params.query) {
                this.$router.push({ name: "picturesPhoto", params: { query: this.$route.params.query,  photo_id: this.image.id } })
            }
        }
    },
    beforeUpdate() {
        
    }
}
</script>

<style scoped>
.like_icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
}
.liked {
    color: var(--color-danger-800);
}
</style>