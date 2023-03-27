<template>
  <div class="topics">
    <div class="toogle__menu" @click="menuClick">
      <div class="toogle__menu__container">
        <font-awesome-icon
          v-if="marginRight!=0"
          class="left_icon"
          icon="fa-solid fa-chevron-left"
          @click="menuLeft"
        />
        <div 
        class="topic" 
        @click="onTopicClick"
        :style="{ marginRight: marginRight + 'px' }"
        >
          <div
            class="topic__item"
            v-for="topic in topics"
            :key="'topic-' + topic.id"
          >
            <button @click="onClick" :value="topic.slug">
              {{ topic.title }}
            </button>
          </div>
        </div>
        <font-awesome-icon
          v-if="marginRight!=4800"
          class="right_icon"
          icon="fa-solid fa-chevron-right"
          @click="menuRight"
        >
        </font-awesome-icon>
      </div>
    </div>
    <images :images="images" />
    <div class="paginate">
      <paginate v-bind:page-count="pages" class="paginate" v-bind:click-handler="onPageClick" v-bind:prev-text="'&#8592;'"
        v-bind:next-text="'&#8594;'" v-bind:container-class="'paginate__container'"></paginate>
    </div>
  </div>
</template>

<script>
import images from "../components/images.vue";

export default {
  name: "Topics",
  components: {
    images,
  },
  data() {
    return {
      page: 1,
      count: 28,
      order_by: "latest",
      per_page: 20,
      query: null,
      marginRight: 0
    };
  },
  methods: {
    getTopics() {
      this.$store.dispatch("getTopics", {
        order_by: this.order_by,
        page: this.page,
        per_page: this.per_page,
      });
    },
    onPageClick(page) {
      this.page = page;
      this.getTopicPhotos();
    },
    getTopicPhotos() {
      this.$store.dispatch("getTopicsPhoto", {
        page: this.page,
        count: this.count,
        query: this.query,
        order_by: this.order_by,
      });
    },
    clearPhotos() {
      this.$store.commit("clearPhotos");
    },
    onClick(e) {
      this.clearPhotos();
      this.query = e.target.value;
      this.$router.push({ name: "topic", params: { topic_id: this.query } });
      this.page = 1;
    },
    clearTopicsPhoto() {
      this.$store.commit("clearTopicPhotos");
    },
    menuRight() {
      console.log('clicked')
      this.marginRight += 2400;
    },
    // onTopicClick(e) {
    //   console.log(e.target.parentNode.parentNode.getBoundingClientRect().width )
    // },
    menuLeft() {
      console.log('clicked')
      this.marginRight -= 2400;
    }
  },
  computed: {
    pages() {
      return this.$store.state.allPages;
    },
    topics() {
      return this.$store.state.topics.data;
    },
    images() {
      return this.$store.state.topicsPhotos
    }
  },
  watch: {
    query() {
      this.getTopicPhotos();
    },
  },
  created() {
    this.clearPhotos();
    this.getTopics();
  },
  unmounted() {
    this.clearTopicsPhoto();
  },
};
</script>

<style>
.topics {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
}

.toogle__menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.menu__container {
  max-width: 1300px;
  margin: 0 auto;
  overflow: hidden;
}

.topic {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1300px;
  transition: all 1s ease-in-out;
}

.toogle__menu__container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  overflow: hidden;
}

button {
  width: 150px;
  height: 50px;
  /* display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        padding: 5px;
        border: none;
        background-color: none;
        cursor: pointer; */
  border: none;
  outline: none;
  background: none;
  color: var(--color-secondary-100);
}

button:hover {
  color: var(--color-secondary-900);
  background-color: #7a838b;
  transition: 0.4s ease-in-out;
}

.right_icon {
  width: 30px;
  height: 30px;
  position: absolute;
  right: -25px;
  cursor: pointer;
}

.left_icon {
  width: 30px;
  height: 30px;
  position: absolute;
  left: -20px;
  cursor: pointer;
}
</style>