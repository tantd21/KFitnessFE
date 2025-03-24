<template>
    <div>
      <h2>Danh sách Trainers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trainer in trainers" :key="trainer.id">
            <td>{{ trainer.id }}</td>
            <td>{{ trainer.name }}</td>
            <td>{{ trainer.specialization }}</td>
            <td>
              <button @click="editTrainer(trainer)">Sửa</button>
              <button @click="deleteTrainer(trainer.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'TrainersView',
    data() {
      return {
        trainers: [],
      };
    },
    async created() {
      this.trainers = await api.getTrainers();
    },
    methods: {
      editTrainer(trainer) {
        this.$router.push(`/trainers/edit/${trainer.id}`);
      },
      async deleteTrainer(id) {
        await api.deleteTrainer(id);
        this.trainers = this.trainers.filter((t) => t.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 0.5rem;
    border: 1px solid #ddd;
  }
  </style>