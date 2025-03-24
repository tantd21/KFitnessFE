<template>
  <div class="form-container">
    <h3>{{ workout ? 'Edit Workout' : 'Add Workout' }}</h3>
    <form @submit.prevent="save">
      <label>Name:</label>
      <input v-model="form.name" required />
      <label>Description:</label>
      <textarea v-model="form.description" required></textarea>
      <button type="submit">Save</button>
      <button type="button" @click="close">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'WorkoutForm',
  props: {
    workout: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        id: this.workout?.id || null,
        name: this.workout?.name || '',
        description: this.workout?.description || '',
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
textarea {
  width: 100%;
  height: 100px;
}
</style>