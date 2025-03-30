import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default {
  getUsers() {
    return apiClient.get('/users');
  },
  createUser(user) {
    return apiClient.post('/users', user);
  },
  updateUser(user) {
    return apiClient.put(`/users/${user.id}`, user);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  },

  // Payments
  getPayments() {
    return apiClient.get('/payments');
  },
  createPayment(payment) {
    return apiClient.post('/payments', payment);
  },
  updatePayment(payment) {
    return apiClient.put(`/payments/${payment.id}`, payment);
  },
  deletePayment(id) {
    return apiClient.delete(`/payments/${id}`);
  },
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