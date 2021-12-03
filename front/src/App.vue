<template>
  <div id="app">
    <header>
      <nav class="navbar shadow-1 primary">
        <a href="#" target="_blank" class="navbar-brand">Axentix</a>
        <div class="navbar-menu ml-auto">
          <router-link to="/">1</router-link> |
          <router-link to="/">2</router-link>
        </div>
      </nav>
    </header>


    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import 'node_modules/axentix/src/only';
</style>
