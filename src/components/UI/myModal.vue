<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div @click.stop class="modal__content">
            <div class="image__container">
                <img :src="imageURL">
                <a :href="downloadURL" target="_blank"><font-awesome-icon class="download_icon" icon="fa-solid fa-download" /></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        props: {
            show: {
                type: Boolean,
                default: false
            },
            imageURL: {
                type: String,
                default: null
            },
            downloadURL: {
                type: String,
                default: null
            }
        },
        methods: {
            hideModal() {
                this.$emit('update:show', false)
                if(this.$route.params.search) {
                    this.$router.push({ name: "Search", params: { query: this.$route.query.search } })
                }
                if(this.$route.params.topic_id) {
                    this.$router.push({ name: "topic", params: { topic_id: this.$route.params.topic_id } })
                }
                if(this.$route.params.query) {
                    this.$router.push({ name: "Pictures", params: { query: this.$route.params.query } })
                }
            },
        }
    }
</script>

<style scoped>
.modal {
    top: 0;
    bottom: 0;  
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.modal__content {
    margin: 0 auto;
    display: block;
    max-width: 700px;
    padding-top: 50px;
}

.image__container {
    position: relative;
    margin: 0 auto;
    width: 600px;
    height: 800px;
}

img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
}

.download_icon {
    cursor: pointer;
    height: 30px;
    width: 30px;
    position: absolute;
    right: 15px;
    top: 40px;
    color: var(--color-success-600);
}

.download_icon:hover {
    opacity: 0.8;
}
</style>