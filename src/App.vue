<template>
  <div id="app">
    <Header/>
    <DateForm 
      v-on:set-date="setDate"
      v-bind:currDay="day"
      />
    <PhotoArea v-bind:data="data" v-bind:error="error"/>
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
      photo: "",
      year: this.getYear(),
      month: this.getMonth(),
      day: this.getDay(),
      error: {},
      data: {},
    };
  },
  components: {
    Header,
    PhotoArea,
    DateForm
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
    // setDate(date) {
    //   let { year, month, day } = date;
    //   if (day < 10) {
    //     day = "0" + day;
    //   }
    //   if (month < 10) {
    //     month = "0" + month
    //   }

    //   this.year = year;
    //   this.month = month;
    //   this.day = day;
    //   this.setPhoto(date);
    // },
  //   setPhoto(date) {
  //     axios
  //       .get(
  //         `https://api.nasa.gov/planetary/apod?api_key=oiiBWI12fEIdoozBSJE2Pl6ndgxFyLloKW8nQRnN&date=${
  //           date.year
  //         }-${date.month}-${date.day}`
  //       )
  //       .then(response => (this.data = response.data))
  //       .catch(err => this.error = err);
  //   }
  // },
    setPhoto(day) {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=oiiBWI12fEIdoozBSJE2Pl6ndgxFyLloKW8nQRnN&date=${
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
        `https://api.nasa.gov/planetary/apod?api_key=oiiBWI12fEIdoozBSJE2Pl6ndgxFyLloKW8nQRnN&date=${
          this.year
        }-${this.month}-${this.day}`
      )
      .then(response => (this.data = response.data))
      // .then(response => (this.photo = response.data.url))
      .catch(err => console.log('hello'));
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
  margin: 45px 0;
  color: white;
}
</style>
