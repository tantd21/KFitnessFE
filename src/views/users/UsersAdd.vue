<template>
  <div>
    <h2 class="mb-4">Thêm User</h2>
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

      <div class="col-span-3 flex justify-end">
        <button type="submit" class="btn btn-primary">Lưu</button>
      </div>
    </form>

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
  },
};
</script>

<style scoped>
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
</style>
