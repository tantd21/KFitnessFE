<template>
    <div>
      <h2>Settings</h2>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
  </template>
  
  <script>
  import { toggleTheme } from '../utils/theme';
  
  export default {
    name: 'Settings',
    methods: {
      toggleTheme() {
        toggleTheme();
      },
    },
  };
  </script>