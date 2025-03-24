<template>
    <div>
      <h2>Payments Management</h2>
      <button @click="openPaymentForm">Add Payment</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.id">
            <td>{{ payment.id }}</td>
            <td>{{ payment.user }}</td>
            <td>{{ payment.amount }}</td>
            <td>{{ payment.date }}</td>
            <td>
              <button @click="editPayment(payment)">Edit</button>
              <button @click="deletePayment(payment.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaymentForm v-if="showPaymentForm" :payment="selectedPayment" @close="closePaymentForm" @save="savePayment" />
    </div>
  </template>
  
  <script>
  import PaymentForm from '../components/PaymentForm.vue';
  import api from '../services/api';
  
  export default {
    name: 'Payments',
    components: {
      PaymentForm,
    },
    data() {
      return {
        payments: [],
        showPaymentForm: false,
        selectedPayment: null,
      };
    },
    async created() {
      this.payments = await api.getPayments();
    },
    methods: {
      openPaymentForm() {
        this.selectedPayment = null;
        this.showPaymentForm = true;
      },
      editPayment(payment) {
        this.selectedPayment = payment;
        this.showPaymentForm = true;
      },
      async deletePayment(id) {
        await api.deletePayment(id);
        this.payments = this.payments.filter((p) => p.id !== id);
      },
      closePaymentForm() {
        this.showPaymentForm = false;
      },
      async savePayment(payment) {
        if (payment.id) {
          await api.updatePayment(payment);
        } else {
          await api.createPayment(payment);
        }
        this.payments = await api.getPayments();
        this.closePaymentForm();
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