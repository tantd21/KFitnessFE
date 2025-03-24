<template>
    <div>
      <h2>Danh sách Memberships</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="membership in memberships" :key="membership.id">
            <td>{{ membership.id }}</td>
            <td>{{ membership.name }}</td>
            <td>{{ membership.price }}</td>
            <td>{{ membership.duration }}</td>
            <td>
              <button @click="editMembership(membership)">Sửa</button>
              <button @click="deleteMembership(membership.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'MembershipsView',
    data() {
      return {
        memberships: [],
      };
    },
    async created() {
      this.memberships = await api.getMemberships();
    },
    methods: {
      editMembership(membership) {
        this.$router.push(`/memberships/edit/${membership.id}`);
      },
      async deleteMembership(id) {
        await api.deleteMembership(id);
        this.memberships = this.memberships.filter((m) => m.id !== id);
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