<template>
    <div class="form-container">
      <h3>{{ trainer ? 'Edit Trainer' : 'Add Trainer' }}</h3>
      <form @submit.prevent="save">
        <label>Name:</label>
        <input v-model="form.name" required />
        <label>Specialization:</label>
        <input v-model="form.specialization" required />
        <button type="submit">Save</button>
        <button type="button" @click="close">Cancel</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TrainerForm',
    props: {
      trainer: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        form: {
          id: this.trainer?.id || null,
          name: this.trainer?.name || '',
          specialization: this.trainer?.specialization || '',
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
  .form-container {
    background: #fff;
    padding: 1rem;
    border: 1px solid #ddd;
  }
  </style>