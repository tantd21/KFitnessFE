<template>
    <nav class="navbar">
      <div class="left">
        <button @click="$emit('toggle-sidebar')" class="menu-btn">
          <Menu class="icon" />
        </button>
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        <router-link to="/users" class="nav-link">Users</router-link>
        <router-link to="/settings" class="nav-link">Settings</router-link>
      </div>
  
      <div class="right">
        <Bell class="icon hover-effect" />
        <List class="icon hover-effect" />
        <Mail class="icon hover-effect" />
        <Sun class="icon hover-effect" @click="toggleTheme" />
        
        <div class="profile">
          <img src="../assets/profile.jpg" alt="User" class="avatar" @click="toggleDropdown" />
          <div v-if="dropdownOpen" class="dropdown">
            <router-link to="/profile">Profile</router-link>
            <button @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { Menu, Bell, List, Mail, Sun } from 'lucide-vue-next'; 
  export default {
    components: {
      Menu, Bell, List, Mail, Sun
    },
    data() {
      return {
        dropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      toggleTheme() {
        document.documentElement.classList.toggle("dark");
      },
      logout() {
        alert("Logged out!");
        // Thêm logic logout nếu cần
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .menu-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  
  .right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  
  .hover-effect {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  .hover-effect:hover {
    transform: scale(1.1);
    color: #007bff;
  }
  
  /* Profile */
  .profile {
    position: relative;
  }
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
  }
  
  .dropdown a, .dropdown button {
    display: block;
    padding: 10px;
    text-align: left;
    width: 120px;
    background: white;
    border: none;
    cursor: pointer;
  }
  
  .dropdown a:hover, .dropdown button:hover {
    background: #f1f1f1;
  }
  </style>
  