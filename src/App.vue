<template>
  <DefaultLayout />
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Dark theme styles */
.dark-theme {
  background-color: #333;
  color: #fff;
}

.dark-theme .sidebar {
  background-color: #222;
}

.dark-theme main {
  background-color: #444;
}
</style>