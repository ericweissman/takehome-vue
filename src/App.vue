<template>
  <div id="app">
    <DateForm 
      v-on:set-date="setDate"
      v-bind:currDay="day"
      />
    <PhotoArea v-bind:data="data" v-bind:error="error"/>
  </div>
</template>

<script>
import PhotoArea from "./components/PhotoArea.vue";
import DateForm from "./components/DateForm.vue";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      year: this.getYear(),
      month: this.getMonth(),
      day: this.getDay(),
      error: {},
      data: {},
    };
  },
  components: {
    PhotoArea,
    DateForm,
  },
  methods: { 
    getDay: function() {
      let today = new Date();
      return today.getDate();
    },
    getMonth: function() {
      let today = new Date();
      return today.getMonth() + 1;
    },
    getYear: function() {
      let today = new Date();
      return today.getFullYear();
    },
    setDate(day) {
      this.day = day;
      this.setPhoto(day);
    },
    setPhoto(day) {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_APIKEY}&date=${
            this.year
          }-${this.month}-${day}`
        )
        .then(response => (this.data = response.data))
        .catch(err => this.error = err);
    }
  },
  created() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_APIKEY}&date=${
          this.year
        }-${this.month}-${this.day}`
      )
      .then(response => (this.data = response.data))
      .catch(err => this.error = err);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #0b0c0d;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 45px 0;
  color: #E5E7EB
;
}
</style>
