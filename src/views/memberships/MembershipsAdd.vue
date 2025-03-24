<template>
    <div>
      <h2>Thêm Membership</h2>
      <form @submit.prevent="saveMembership">
        <label>Name:</label>
        <input v-model="form.name" required />
        <label>Price:</label>
        <input v-model="form.price" type="number" required />
        <label>Duration (days):</label>
        <input v-model="form.duration" type="number" required />
        <button type="submit">Lưu</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'MembershipsAdd',
    data() {
      return {
        form: {
          name: '',
          price: 0,
          duration: 0,
        },
      };
    },
    methods: {
      async saveMembership() {
        await api.createMembership(this.form);
        this.$router.push('/memberships/view');
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