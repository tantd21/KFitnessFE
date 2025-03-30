<template>
  <div>
    <h2 class="mb-4">Thêm User</h2>
    <!-- Thêm khung bọc form -->
    <div class="form-container p-4 border rounded shadow">
      <form @submit.prevent="saveUser" class="grid grid-cols-3 gap-4">
        <div>
          <label class="form-label">Tên:</label>
          <input v-model="form.name" type="text" class="form-control" required />
        </div>
        <div>
          <label class="form-label">Email:</label>
          <input v-model="form.email" type="email" class="form-control" required />
        </div>
        <div>
          <label class="form-label">Số điện thoại:</label>
          <input v-model="form.phone" type="tel" class="form-control" required />
        </div>
        <div>
          <label class="form-label">Địa chỉ:</label>
          <input v-model="form.address" type="text" class="form-control" required />
        </div>
        <div>
          <label class="form-label">Ngày sinh:</label>
          <input v-model="form.dob" type="date" class="form-control" required />
        </div>
        <div>
          <label class="form-label">CCCD:</label>
          <input v-model="form.cccd" type="text" class="form-control" required />
        </div>
        <div>
          <label class="form-label">Chiều cao (cm):</label>
          <input v-model="form.height" type="number" class="form-control" required />
        </div>
        <div>
          <label class="form-label">Cân nặng (kg):</label>
          <input v-model="form.weight" type="number" class="form-control" required />
        </div>

        <!-- Ô nhập file và nút xem ảnh -->
        <div class="col-span-3 relative">
          <label class="form-label">Ảnh đại diện:</label>
          <div class="relative">
            <input
              type="file"
              @change="handleFileUpload"
              class="form-control pr-10"
              accept="image/*"
            />
            <!-- Nút xem ảnh -->
            <button
              v-if="previewImage"
              @click="showLightbox = true"
              type="button"
              class="eye-button"
            >
              👁️
            </button>
          </div>
        </div>

        <div class="col-span-3 flex justify-end gap-4">
          <button type="button" class="btn btn-secondary" @click="cancel">Hủy</button>
          <button type="submit" class="btn btn-success">Lưu</button>
        </div>
      </form>
    </div>

    <!-- Lightbox hiển thị ảnh -->
    <vue-easy-lightbox
      :visible="showLightbox"
      :imgs="previewImage"
      @hide="showLightbox = false"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import api from '@/services/api';

export default {
  name: 'UsersAdd',
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
        cccd: '',
        height: '',
        weight: '',
        avatar: null,
      },
      previewImage: null, // Lưu URL ảnh để hiển thị preview
      showLightbox: false, // Điều khiển lightbox hiển thị
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.avatar = file;
        this.previewImage = URL.createObjectURL(file); // Tạo URL để preview ảnh
      }
    },
    async saveUser() {
      const formData = new FormData();
      Object.keys(this.form).forEach(key => {
        formData.append(key, this.form[key]);
      });
      await api.createUser(formData);
      this.$router.push('/users/view');
    },
    cancel() {
      this.$router.push('/users/view'); // Điều hướng về trang danh sách user
    },
  },
};
</script>

<style scoped>
/* Làm cho các button đẹp hơn */
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-success {
  background-color: #5a25ec;
  color: white;
}
.btn-success:hover {
  background-color: #14028b;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
}
.btn-secondary:hover {
  background-color: #5a6268;
}
/* Làm cho các input đẹp hơn */
.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

form {  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* Nút con mắt nằm bên phải input */
.eye-button {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Thêm kiểu dáng cho khung bọc form */
.form-container {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #fff;
}
</style>
