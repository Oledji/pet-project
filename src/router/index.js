import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home';
import Pictures from '@/views/Pictures';
import Search from '@/views/Search';
import Topics from '@/views/topics';
import LikedPictures from '@/views/LikedPictures';

const routes = [
  {
    path: '',
    name: 'home',
    component: home
},
{
  path: '/photos/?query=:query',
  name: 'Pictures',
  component: Pictures
},
{
  path: '/photos/?query=:query/?photo_id=:photo_id',
  name: 'picturesPhoto',
  component: Pictures
},
{
  path: '/search?search=:search',
  name: 'Search',
  component: Search
},
{
  path: '/search?search=:search/?photo_id=:photo_id',
  name: 'SearchPhoto',
  component: Search
},
{
  path: '/topics',
  name: 'Topics',
  component: Topics
},
{
  path: '/topics/?tp_id=:topic_id',
  name: 'topic',
  component: Topics
},
{
  path: '/topics/?tp_id=:topic_id/?photo_id=:photo_id',
  name: 'topicsPhoto',
  component: Topics
},
{
  path: '/liked_pictures',
  name: 'liked',
  component: LikedPictures
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
