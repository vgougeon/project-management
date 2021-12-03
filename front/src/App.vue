<template>
  <div class="layout" id="app">
    <header>
      <nav class="navbar shadow-1 tertiary">
        <router-link to="/"><i class="mdi mdi-dots-horizontal font-s6 my-auto d-block"></i></router-link>
        <div class="navbar-menu ml-auto">
          <router-link class="navbar-link" to="/login"><i class="mdi mdi-power font-s6 my-auto d-block"></i></router-link>
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
$axentix-palette: (
  'primary': #2E4C6D,
  'secondary': #FC997C,
  'tertiary': #747C83,
  'success': #2BA84A,
  'warning': #FFB800,
  'error': #EE5F5F,
  'white': #fff,
  'black': #000,
  'transparent': transparent,
);
@import 'node_modules/axentix/src/only';


</style>
