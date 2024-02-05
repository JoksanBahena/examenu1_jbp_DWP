<template>
  <div>
    <h1>Formulario</h1>
    <div class="form-group">
      <label for="marca">Marca:</label>
      <input
        type="text"
        class="form-control"
        id="marca"
        v-model="marca"
        @input="validateMarca"
      />
      <div v-if="marcaError" class="text-danger">
        Marca debe ser alfanumérica.
      </div>
    </div>
    <div class="form-group">
      <label for="modelo">Modelo:</label>
      <input
        type="text"
        class="form-control"
        id="modelo"
        v-model="modelo"
        @input="validateModelo"
      />
      <div v-if="modeloError" class="text-danger">
        Modelo debe ser alfanumérico.
      </div>
    </div>
    <div class="form-group">
      <label for="anio">Año de Fabricación:</label>
      <input
        type="number"
        class="form-control"
        id="anio"
        v-model="anio"
        @input="validateAnio"
      />
      <div v-if="anioError" class="text-danger">
        El año de fabricación no puede ser mayor al actual.
      </div>
    </div>
    <div class="form-group">
      <label for="numeroSerie">Número de Serie:</label>
      <input
        type="text"
        class="form-control"
        id="numeroSerie"
        v-model="numeroSerie"
        @input="validateNumeroSerie"
      />
      <div v-if="numeroSerieError" class="text-danger">
        El número de serie debe tener el formato (XXXX000-00XX).
      </div>
    </div>
    <button
      class="btn btn-primary mt-3"
      @click="submitForm"
      :disabled="marcaError || modeloError || anioError || numeroSerieError"
    >
      Enviar
    </button>
  </div>
</template>

<script>
import vehiculeService from "../services/Vehicule";
export default {
  data() {
    return {
      marca: "",
      modelo: "",
      anio: "",
      numeroSerie: "",
      marcaError: false,
      modeloError: false,
      anioError: false,
      numeroSerieError: false,
    };
  },
  methods: {
    validateMarca() {
      this.marcaError = !/^[a-zA-Z0-9]*$/.test(this.marca);
    },
    validateModelo() {
      this.modeloError = !/^[a-zA-Z0-9]*$/.test(this.modelo);
    },
    validateAnio() {
      const currentYear = new Date().getFullYear();
      this.anioError = parseInt(this.anio) > currentYear;
    },
    validateNumeroSerie() {
      this.numeroSerieError = !/^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/.test(
        this.numeroSerie
      );
    },
    submitForm() {
      if (
        !this.marcaError &&
        !this.modeloError &&
        !this.anioError &&
        !this.numeroSerieError
      ) {
        const formData = {
          brand: this.marca,
          model: this.modelo,
          year: this.anio,
          serie: this.numeroSerie,
        };
        console.log(formData);
        vehiculeService.postVehicule(formData);
      }
      this.marca = "";
      this.modelo = "";
      this.anio = "";
      this.numeroSerie = "";
    },
  },
};
</script>

<style scoped></style>
