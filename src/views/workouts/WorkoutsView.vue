<template>
    <div>
      <h2>Danh sách Workouts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="workout in workouts" :key="workout.id">
            <td>{{ workout.id }}</td>
            <td>{{ workout.name }}</td>
            <td>{{ workout.description }}</td>
            <td>
              <button @click="editWorkout(workout)">Sửa</button>
              <button @click="deleteWorkout(workout.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'WorkoutsView',
    data() {
      return {
        workouts: [],
      };
    },
    async created() {
      this.workouts = await api.getWorkouts();
    },
    methods: {
      editWorkout(workout) {
        this.$router.push(`/workouts/edit/${workout.id}`);
      },
      async deleteWorkout(id) {
        await api.deleteWorkout(id);
        this.workouts = this.workouts.filter((w) => w.id !== id);
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