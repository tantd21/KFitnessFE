<template>
  <div>
    <h2>Danh sách Users</h2>
    <div class="view-buttons">
      <button :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">Danh sách</button>
      <button :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">Extra Icon</button>
    </div>

    <!-- Chế độ List -->
    <table v-if="viewMode === 'list'">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="editUser(user)">Sửa</button>
            <button @click="deleteUser(user.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Chế độ Grid -->
    <div v-if="viewMode === 'grid'" class="grid-container">
      <div v-for="user in users" :key="user.id" class="grid-item" @click="openModal(user)">
        <img :src="user.avatar" alt="User Avatar" />
        <p>{{ user.name }}</p>
      </div>
    </div>

    <!-- Modal hiển thị thông tin user -->
    <div v-if="selectedUser" class="modal" @click.self="selectedUser = null">
  <div class="modal-content">
    <span class="close" @click="selectedUser = null">&times;</span>
    <img :src="selectedUser.avatar" alt="User Avatar" />
    <h3>{{ selectedUser.name }}</h3>
    <div class="modal-grid">
      <p><strong>Email:</strong> {{ selectedUser.email }}</p>
      <p><strong>SĐT:</strong> {{ selectedUser.phone }}</p>
      <p><strong>Địa chỉ:</strong> {{ selectedUser.address }}</p>
      <p><strong>CCCD:</strong> {{ selectedUser.cccd }}</p>
      <p><strong>Ngày sinh:</strong> {{ selectedUser.dob }}</p>
      <p><strong>Chiều cao:</strong> {{ selectedUser.height }} cm</p>
      <p><strong>Cân nặng:</strong> {{ selectedUser.weight }} kg</p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'UsersView',
  data() {
    return {
      users: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Người dùng ${i + 1}`,
        email: `user${i + 1}@example.com`,
        avatar: `https://i.pravatar.cc/100?img=${i + 1}`,
        phone: `09${Math.floor(10000000 + Math.random() * 90000000)}`,
        address: `Địa chỉ số ${i + 1}, Thành phố XYZ`,
        cccd: `${Math.floor(100000000000 + Math.random() * 900000000000)}`,
        dob: `199${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9)}`,
        height: Math.floor(150 + Math.random() * 50),
        weight: Math.floor(40 + Math.random() * 60),
      })),
      viewMode: 'list',
      selectedUser: null,
    };
  },
  methods: {
    editUser(user) {
      this.$router.push(`/users/edit/${user.id}`);
    },
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id);
    },
    openModal(user) {
      this.selectedUser = user;
    },
  },
};
</script>

<style scoped>
/* Nút chuyển chế độ xem */
.view-buttons {
  margin-bottom: 1rem;
}
.view-buttons button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: #ddd;
}
.view-buttons button.active {
  background-color: #007bff;
  color: white;
}

/* Bảng danh sách */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 0.5rem;
  border: 1px solid #ddd;
}

/* Grid view */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}
.grid-item {
  text-align: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.grid-item:hover {
  transform: scale(1.05);
}
.grid-item img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  width: 400px;
  position: relative;
}
.modal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: left;
}

/* Căn chỉnh nút đóng modal */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  transition: color 0.3s;
}
.close:hover {
  color: red;
}

</style>
