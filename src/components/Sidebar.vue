<template>
  <div class="sidebar">
    <h2>K-FITNESS</h2>
    <ul>
      <li>
        <router-link to="/" exact-active-class="active">
          <Home class="icon" />
          <span class="text">Dashboard</span>
        </router-link>
      </li>

      <!-- Users Dropdown -->
      <li>
        <a @click="toggleDropdown('users')" :class="{ active: dropdowns.users || isActive('/users') }">
          <Users class="icon" />
          <span class="text">Users</span>
          <span class="arrow" :class="{ rotated: dropdowns.users }">&#9660;</span>
        </a>
        <ul :class="{ dropdown: true, open: dropdowns.users }">
          <li><router-link to="/users/view" active-class="sub-active">Xem</router-link></li>
          <li><router-link to="/users/add" active-class="sub-active">Thêm</router-link></li>
        </ul>
      </li>

      <!-- Memberships Dropdown -->
      <li>
        <a @click="toggleDropdown('memberships')" :class="{ active: dropdowns.memberships || isActive('/memberships') }">
          <BadgePercent class="icon" />
          <span class="text">Memberships</span>
          <span class="arrow" :class="{ rotated: dropdowns.memberships }">&#9660;</span>
        </a>
        <ul :class="{ dropdown: true, open: dropdowns.memberships }">
          <li><router-link to="/memberships/view" active-class="sub-active">Xem</router-link></li>
          <li><router-link to="/memberships/add" active-class="sub-active">Thêm</router-link></li>
        </ul>
      </li>

      <!-- Other Links -->
      <li>
        <router-link to="/payments" active-class="active">
          <Wallet class="icon" />
          <span class="text">Payments</span>
        </router-link>
      </li>
      <li>
        <router-link to="/reports" active-class="active">
          <FileText class="icon" />
          <span class="text">Reports</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings" active-class="active">
          <Settings class="icon" />
          <span class="text">Settings</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Home, Users, BadgePercent, Wallet, FileText, Settings } from 'lucide-vue-next';

export default {
  name: 'Sidebar',
  components: {
    Home,
    Users,
    BadgePercent,
    Wallet,
    FileText,
    Settings,
  },
  data() {
    return {
      dropdowns: {
        users: false,
        memberships: false,
      },
    };
  },
  methods: {
    toggleDropdown(menu) {
      this.dropdowns[menu] = !this.dropdowns[menu];
    },
    isActive(path) {
      return this.$route.path.startsWith(path);
    },
  },
};
</script>

<style scoped>
/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: #2c3e50;
  color: #fff;
  height: 100vh;
  padding: 1rem;
  overflow-y: auto;
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 1rem 0;
}

.sidebar ul li a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

/* Icon Styles */
.icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.sidebar ul li a .text {
  margin-left: 30px;
  flex-grow: 1;
}

.sidebar ul li a .arrow {
  transition: transform 0.3s ease;
}

/* Hover Effect */
.sidebar ul li a:hover {
  background-color: #34495e;
  transform: translateX(5px);
}

/* Khi menu mẹ mở, nhưng không đổi màu */
.sidebar ul li a.active {
  background-color: transparent; /* Giữ màu gốc */
  color: #fff;
}

/* Dropdown Styling */
.dropdown {
  margin-left: 1rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease;
  opacity: 0;
}

.dropdown.open {
  max-height: 200px;
  opacity: 1;
}

/* Mũi tên cho Dropdown */
.sidebar ul li a .arrow.rotated {
  transform: rotate(180deg);
}

/* Định dạng mục con */
.dropdown li {
  margin: 0.5rem 0;
}

/* Hiệu ứng hover mục con */
.dropdown li a {
  padding: 0.5rem;
  display: block;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dropdown li a:hover {
  background-color: #34495e;
  transform: translateX(5px);
}

/* 🔥 Đổi màu khi mục con được chọn */
.dropdown li a.sub-active {
  background-color: #1abc9c; /* Màu nền khi chọn */
  width: 100%;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>
