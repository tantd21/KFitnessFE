import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import UsersView from '@/views/users/UsersView.vue';
import UsersAdd from '@/views/users/UsersAdd.vue';
import MembershipsView from '@/views/memberships/MembershipsView.vue';
import MembershipsAdd from '@/views/memberships/MembershipsAdd.vue';
import TrainersView from '@/views/trainers/TrainersView.vue';
import TrainersAdd from '@/views/trainers/TrainersAdd.vue';
import WorkoutsView from '@/views/workouts/WorkoutsView.vue';
import WorkoutsAdd from '@/views/workouts/WorkoutsAdd.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/users/view', component: UsersView },
  { path: '/users/add', component: UsersAdd },
  { path: '/memberships/view', component: MembershipsView },
  { path: '/memberships/add', component: MembershipsAdd },
  { path: '/trainers/view', component: TrainersView },
  { path: '/trainers/add', component: TrainersAdd },
  { path: '/workouts/view', component: WorkoutsView },
  { path: '/workouts/add', component: WorkoutsAdd },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;