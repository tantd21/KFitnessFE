<template>
  <div class="layout">
    <Sidebar :collapsed="sidebarCollapsed" />
    <div class="main-content">
      <Navbar @toggle-sidebar="toggleSidebar" />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      sidebarCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background: #f8f9fa;
  overflow-y: auto;
}
</style>
