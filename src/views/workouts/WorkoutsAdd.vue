<template>
    <div>
      <h2>Thêm Workout</h2>
      <form @submit.prevent="saveWorkout">
        <label>Name:</label>
        <input v-model="form.name" required />
        <label>Description:</label>
        <textarea v-model="form.description" required></textarea>
        <button type="submit">Lưu</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'WorkoutsAdd',
    data() {
      return {
        form: {
          name: '',
          description: '',
        },
      };
    },
    methods: {
      async saveWorkout() {
        await api.createWorkout(this.form);
        this.$router.push('/workouts/view');
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
  </style>