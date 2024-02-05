<template>
  <div>
    <div
      class="jumbotron jumbotron-fluid text-white"
      style="
        background-image: url('https://zoobarcelona.cat/sites/default/files/animal/2016-12/1400x846%20HYDHYD%202.jpg');
      "
    >
      <div class="container text-center">
        <h1 class="display-4">¡Bienvenido a Mi Sitio!</h1>
        <p class="lead">Explora nuestro contenido interesante y relevante.</p>
      </div>
    </div>

    <main id="main" class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://t1.ea.ltmcdn.com/es/posts/5/8/1/cuidados_de_una_capibara_20185_600.jpg"
            class="img-fluid rounded"
            alt="Imagen de muestra"
          />
        </div>
        <div class="col-md-6">
          <h2 class="mb-4">Contenido Destacado</h2>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            lacus et mi efficitur condimentum. Nulla venenatis libero in
            pharetra eleifend.
          </p>
          <p>
            Sed eu lacus et mi efficitur condimentum. Nulla venenatis libero in
            pharetra eleifend.
          </p>
          <b-col lg="4" class="pb-2"
            ><b-button
              size="lg"
              variant="primary"
              href="http://localhost:5173/#/inicio"
              >Inicio</b-button
            ></b-col
          >
        </div>
      </div>
    </main>

    <footer id="footer" class="bg-dark text-light text-center py-4 mt-5">
      <div class="container">
        <p>Capibaras god</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jumbotron {
  background-size: cover;
  background-position: center;
  height: 600px;
  margin-bottom: 0;
}

#main h2 {
  font-size: 2.5rem;
  color: #333;
}

#main p {
  font-size: 1.1rem;
}

#footer {
  background-color: #343a40;
}

#footer p {
  margin-bottom: 0;
}
</style>
