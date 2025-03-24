<template>
    <div>
      <h2>Reports</h2>
      <button @click="generateReport">Generate Report</button>
      <div v-if="reportData">
        <h3>Report Data</h3>
        <pre>{{ reportData }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    name: 'Reports',
    data() {
      return {
        reportData: null,
      };
    },
    methods: {
      async generateReport() {
        this.reportData = await api.generateReport();
      },
    },
  };
  </script>
  
  <style scoped>
  pre {
    background: #f5f5f5;
    padding: 1rem;
    border: 1px solid #ddd;
  }
  </style>