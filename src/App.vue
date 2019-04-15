<template>
  <div id="app">
    <Header/>
    <DateForm/>
    <PhotoArea v-bind:photo="photo"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PhotoArea from "./components/PhotoArea.vue";
import DateForm from "./components/DateForm.vue";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      photo: ""
    };
  },
  components: {
    Header,
    PhotoArea,
    DateForm
  },
  created() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=oiiBWI12fEIdoozBSJE2Pl6ndgxFyLloKW8nQRnN"
      )
      .then(response => (this.photo = response.data.url))
      .catch(err => console.log(err));
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: black;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: white;
}
</style>
