<template>
  <div class="sidebar">   
    <h2>K-FITNESS</h2>
    <ul>
      <li>
        <router-link to="/">
          <Home class="icon" />
          <span class="text">Dashboard</span>
        </router-link>
      </li>

      <!-- Users Dropdown -->
      <li>
        <a @click="toggleDropdown('users')" :class="{ active: dropdowns.users }">
          <Users class="icon" />
          <span class="text">Users</span>
          <span class="arrow" :class="{ rotated: dropdowns.users }">&#9660;</span>
        </a>
        <ul :class="{ dropdown: true, open: dropdowns.users }">
          <li><router-link to="/users/view">Xem</router-link></li>
          <li><router-link to="/users/add">Thêm</router-link></li>
        </ul>
      </li>

      <!-- Memberships Dropdown -->
      <li>
        <a @click="toggleDropdown('memberships')" :class="{ active: dropdowns.memberships }">
          <BadgePercent class="icon" />
          <span class="text">Memberships</span>
          <span class="arrow" :class="{ rotated: dropdowns.memberships }">&#9660;</span>
        </a>
        <ul :class="{ dropdown: true, open: dropdowns.memberships }">
          <li><router-link to="/memberships/view">Xem</router-link></li>
          <li><router-link to="/memberships/add">Thêm</router-link></li>
        </ul>
      </li>

      <!-- Trainers Dropdown -->
      <li>
        <a @click="toggleDropdown('trainers')" :class="{ active: dropdowns.trainers }">
          <ClipboardList class="icon" />
          <span class="text">Trainers</span>
          <span class="arrow" :class="{ rotated: dropdowns.trainers }">&#9660;</span>
        </a>
        <ul :class="{ dropdown: true, open: dropdowns.trainers }">
          <li><router-link to="/trainers/view">Xem</router-link></li>
          <li><router-link to="/trainers/add">Thêm</router-link></li>
        </ul>
      </li>

      <!-- Workouts Dropdown -->
      <li>
        <a @click="toggleDropdown('workouts')" :class="{ active: dropdowns.workouts }">
          <Dumbbell class="icon" />
          <span class="text">Workouts</span>
          <span class="arrow" :class="{ rotated: dropdowns.workouts }">&#9660;</span>
        </a>
        <ul :class="{ dropdown: true, open: dropdowns.workouts }">
          <li><router-link to="/workouts/view">Xem</router-link></li>
          <li><router-link to="/workouts/add">Thêm</router-link></li>
        </ul>
      </li>

      <!-- Other Links -->
      <li>
        <router-link to="/payments">
          <Wallet class="icon" />
          <span class="text">Payments</span>
        </router-link>
      </li>
      <li>
        <router-link to="/reports">
          <FileText class="icon" />
          <span class="text">Reports</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <Settings class="icon" />
          <span class="text">Settings</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Home, Users, BadgePercent, Dumbbell, ClipboardList, Wallet, FileText, Settings } from 'lucide-vue-next';

export default {
  name: 'Sidebar',
  components: {
    Home,
    Users,
    BadgePercent,
    Dumbbell,
    ClipboardList,
    Wallet,
    FileText,
    Settings
  },
  data() {
    return {
      dropdowns: {
        users: false,
        memberships: false,
        trainers: false,
        workouts: false,
      },
    };
  },
  methods: {
    toggleDropdown(menu) {
      this.dropdowns[menu] = !this.dropdowns[menu];
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #2c3e50;
  color: #fff;
  height: 100vh; /* Giữ nguyên chiều cao 100vh */
  padding: 1rem;
  overflow-y: auto; /* Cho phép cuộn */
}

.container {
  display: flex; /* Nếu chưa có, thêm thuộc tính này */
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  padding-left: 0;

}

.sidebar ul li {
  
  margin: 1rem 0;
}
.icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0; /* Giữ nguyên kích thước icon */
}

.sidebar ul li a {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Giữ mũi tên bên phải */
  padding: 0.5rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.sidebar ul li a .icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.sidebar ul li a .text {
  margin-left: 30px; /* Giảm khoảng cách giữa icon và chữ */
  flex-grow: 1; /* Đẩy chữ sát icon hơn và giữ mũi tên ở xa */
}

.sidebar ul li a .arrow {
  transition: transform 0.3s ease;
}

.sidebar ul li a:hover {
  background-color: #34495e;
  transform: translateX(5px);
}

.sidebar ul li a.active {
  background-color: #34495e;
}

.sidebar ul li a .arrow {
  transition: transform 0.3s ease;
}

.sidebar ul li a .arrow.rotated {
  transform: rotate(180deg);
}

/* Loại bỏ border trái */
.dropdown {
  margin-left: 1rem;
  padding-left: 0; /* Không cần padding để giữ layout */
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.3s ease;
  opacity: 0;
}

/* Hiển thị menu dropdown khi mở */
.dropdown.open {
  max-height: 200px;
  opacity: 1;
}

/* Định dạng lại mục con */
.dropdown li {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
}

/* Thêm icon mũi tên */
.dropdown li::before {
  content: "➤"; /* Mũi tên phải */
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
  transition: transform 0.3s ease;
}

/* Hiệu ứng hover */
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

</style>