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
        <img :src="user.avatar || 'https://via.placeholder.com/100'" alt="User Avatar" />
        <p>{{ user.name }}</p>
      </div>
    </div>

    <!-- Modal hiển thị thông tin user -->
    <div v-if="selectedUser" class="modal">
      <div class="modal-content">
        <span class="close" @click="selectedUser = null">&times;</span>
        <img :src="selectedUser.avatar || 'https://via.placeholder.com/150'" alt="User Avatar" />
        <h3>{{ selectedUser.name }}</h3>
        <p>Email: {{ selectedUser.email }}</p>
        <p>ID: {{ selectedUser.id }}</p>
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
      users: [   { id: 1, name: "Nguyễn Văn A", email: "a@example.com", avatar: "https://i.pravatar.cc/100?img=1" },
      { id: 2, name: "Trần Thị B", email: "b@example.com", avatar: "https://i.pravatar.cc/100?img=2" },
      { id: 3, name: "Lê Văn C", email: "c@example.com", avatar: "https://i.pravatar.cc/100?img=3" },
      { id: 4, name: "Phạm Thị D", email: "d@example.com", avatar: "https://i.pravatar.cc/100?img=4" },
      { id: 5, name: "Hoàng Văn E", email: "e@example.com", avatar: "https://i.pravatar.cc/100?img=5" },
      { id: 6, name: "Đỗ Thị F", email: "f@example.com", avatar: "https://i.pravatar.cc/100?img=6" },
      { id: 7, name: "Bùi Văn G", email: "g@example.com", avatar: "https://i.pravatar.cc/100?img=7" },
      { id: 8, name: "Ngô Thị H", email: "h@example.com", avatar: "https://i.pravatar.cc/100?img=8" },
      { id: 9, name: "Dương Văn I", email: "i@example.com", avatar: "https://i.pravatar.cc/100?img=9" },
      { id: 10, name: "Vũ Thị J", email: "j@example.com", avatar: "https://i.pravatar.cc/100?img=10" },
      { id: 11, name: "Phan Văn K", email: "k@example.com", avatar: "https://i.pravatar.cc/100?img=11" },
      { id: 12, name: "Mai Thị L", email: "l@example.com", avatar: "https://i.pravatar.cc/100?img=12" },
      { id: 13, name: "Lương Văn M", email: "m@example.com", avatar: "https://i.pravatar.cc/100?img=13" },
      { id: 14, name: "Hà Thị N", email: "n@example.com", avatar: "https://i.pravatar.cc/100?img=14" },
      { id: 15, name: "Tạ Văn O", email: "o@example.com", avatar: "https://i.pravatar.cc/100?img=15" },
      { id: 16, name: "Chu Thị P", email: "p@example.com", avatar: "https://i.pravatar.cc/100?img=16" },
      { id: 17, name: "Đinh Văn Q", email: "q@example.com", avatar: "https://i.pravatar.cc/100?img=17" },
      { id: 18, name: "Thái Thị R", email: "r@example.com", avatar: "https://i.pravatar.cc/100?img=18" },
      { id: 19, name: "Trịnh Văn S", email: "s@example.com", avatar: "https://i.pravatar.cc/100?img=19" },
      { id: 20, name: "Cao Thị T", email: "t@example.com", avatar: "https://i.pravatar.cc/100?img=20" },
   ],
      viewMode: 'list',
      selectedUser: null, // Lưu user đang được chọn để hiển thị modal
    };
  },
  async created() {
    this.users = await api.getUsers();
  },
  methods: {
    editUser(user) {
      this.$router.push(`/users/edit/${user.id}`);
    },
    async deleteUser(id) {
      await api.deleteUser(id);
      this.users = this.users.filter((user) => user.id !== id);
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
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
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
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  width: 300px;
}
.modal-content img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}
.modal-content h3 {
  margin: 10px 0;
}
.modal-content p {
  margin: 5px 0;
}
.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}
</style>
