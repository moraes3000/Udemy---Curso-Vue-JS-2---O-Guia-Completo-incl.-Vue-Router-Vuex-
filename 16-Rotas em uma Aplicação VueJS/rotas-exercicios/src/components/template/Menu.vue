<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        <a>inicio</a>
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active">
        <a>usuario</a>
      </router-link>

      <router-link to="/imc" tag="li" active-class="active">
        <a>imc</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
