<template>
  <div class="form-container">
    <h3>{{ payment ? 'Edit Payment' : 'Add Payment' }}</h3>
    <form @submit.prevent="save">
      <label>User:</label>
      <input v-model="form.user" required />
      <label>Amount:</label>
      <input v-model="form.amount" type="number" required />
      <label>Date:</label>
      <input v-model="form.date" type="date" required />
      <button type="submit">Save</button>
      <button type="button" @click="close">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  props: {
    payment: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        id: this.payment?.id || null,
        user: this.payment?.user || '',
        amount: this.payment?.amount || 0,
        date: this.payment?.date || '',
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