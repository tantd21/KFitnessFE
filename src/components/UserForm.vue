<template>
    <div class="user-form">
      <h3>{{ user ? 'Edit User' : 'Add User' }}</h3>
      <form @submit.prevent="save">
        <label>Name:</label>
        <input v-model="form.name" required />
        <label>Email:</label>
        <input v-model="form.email" type="email" required />
        <button type="submit">Save</button>
        <button type="button" @click="close">Cancel</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserForm',
    props: {
      user: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        form: {
          id: this.user?.id || null,
          name: this.user?.name || '',
          email: this.user?.email || '',
        },
      };
    },
    methods: {
      save() {
        this.$emit('save', this.form);
      },
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .user-form {
    background: #fff;
    padding: 1rem;
    border: 1px solid #ddd;
  }
  </style>