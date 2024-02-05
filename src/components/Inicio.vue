<template>
  <div>
    <b-navbar type="dark" variant="dark" style="z-index: 999">
      <b-navbar-nav>
        <b-nav-item href="http://localhost:5173/#/landing"
          >Landing-page</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="sidebar col-3">
          <b-nav vertical>
            <b-nav-item
              ><b-link :to="{ name: 'welcome' }"> Inicio </b-link></b-nav-item
            >
            <b-nav-item
              ><b-link :to="{ name: 'table' }"> Tabla </b-link></b-nav-item
            >
            <b-nav-item
              ><b-link :to="{ name: 'form' }"> Formulario </b-link></b-nav-item
            >
          </b-nav>
        </div>
        <div class="col-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  border: 1px solid black;
  height: calc(100vh - 56px);
  overflow-y: auto;
}
</style>
