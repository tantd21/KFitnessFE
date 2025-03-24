import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://your-api-endpoint.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Memberships
  getMemberships() {
    return apiClient.get('/memberships');
  },
  createMembership(membership) {
    return apiClient.post('/memberships', membership);
  },
  updateMembership(membership) {
    return apiClient.put(`/memberships/${membership.id}`, membership);
  },
  deleteMembership(id) {
    return apiClient.delete(`/memberships/${id}`);
  },

  // Trainers
  getTrainers() {
    return apiClient.get('/trainers');
  },
  createTrainer(trainer) {
    return apiClient.post('/trainers', trainer);
  },
  updateTrainer(trainer) {
    return apiClient.put(`/trainers/${trainer.id}`, trainer);
  },
  deleteTrainer(id) {
    return apiClient.delete(`/trainers/${id}`);
  },

  // Workouts
  getWorkouts() {
    return apiClient.get('/workouts');
  },
  createWorkout(workout) {
    return apiClient.post('/workouts', workout);
  },
  updateWorkout(workout) {
    return apiClient.put(`/workouts/${workout.id}`, workout);
  },
  deleteWorkout(id) {
    return apiClient.delete(`/workouts/${id}`);
  },
};