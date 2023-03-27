<template>
    <div class="cards__container container">
        <card :img="images.anime" :name="'anime'"></card>
        <card :img="images.car" :name="'car'"></card>
        <card :img="images.destiny" :name="'destiny'"></card>
        <card :img="images.games" :name="'games'"></card>
        <card :img="images.nature" :name="'nature'"></card>
        <card :img="images.space" :name="'space'"></card>
    </div>
</template>

<script>
import anime from '@/assets/anime.jpg'
import car from '@/assets/car.jpg'
import destiny from '@/assets/destiny.jpg'
import games from '@/assets/games.jpg'
import nature from '@/assets/nature.jpg'
import space from '@/assets/space.jpg'
import card from './card.vue'
export default {
    name: 'cards',
    components: {card},
    data() {
      return {
        images: {
          anime: anime,
          car: car,
          destiny: destiny,
          games: games,
          nature: nature,
          space: space
        }
      }
    },
    methods: {
    }

}

</script>

<style>
.cards__container {
  width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

card:hover {
  box-shadow: var(--shadow-w-s-hover);
  transition: var(--transition-fast-smooth);
}
</style>