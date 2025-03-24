<template>
    <div>
      <h2>Thêm Trainer</h2>
      <form @submit.prevent="saveTrainer">
        <label>Name:</label>
        <input v-model="form.name" required />
        <label>Specialization:</label>
        <input v-model="form.specialization" required />
        <button type="submit">Lưu</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'TrainersAdd',
    data() {
      return {
        form: {
          name: '',
          specialization: '',
        },
      };
    },
    methods: {
      async saveTrainer() {
        await api.createTrainer(this.form);
        this.$router.push('/trainers/view');
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
  </style>