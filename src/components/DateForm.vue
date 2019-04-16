<template>
  <div class="date-form">
    <form @submit="setDate">
      <select v-model="selected">
        <option disabled value>choose day.</option>
        <option v-for="option in options">{{option}}</option>
      </select>
      <button>blast off</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DateForm",
  props: ["currDay"],
  data() {
    return {
      // year: "YYYY",
      // month: "MM",
      // day: "DD",
      selected: "",
      options: this.setDays()
    };
  },
  methods: {
    setDate(e) {
      e.preventDefault();
      this.$emit("set-date", this.selected);
    },
    setDays() {
      let date = new Date();
      let day = date.getDate();
      let values = [];
      for (let i = 1; i <= day; i++) {
        values.push(i);
      }
      return values;
    }
  }
};
</script>

<style scoped>
.date-form {
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

select, option {
  text-align: center;
  height: 35px;
  border: none;
  width: 135px;
  font-size: 15px;
  border-radius: 100%;
  background: linear-gradient(to bottom, #29323c, #485563);
  color: white;
  font-family: 'Avenir', sans-serif;
  margin-bottom: 25px;
  outline: none;
}

button {
  width: 95px;
  height: 35px;
  background-color: white;
  border-radius: 45px;
  border: none;
  font-family: 'Avenir', sans-serif;
  letter-spacing: 1.25px;
  background: linear-gradient(to bottom, #29323c, #485563);
  color: white;
  outline: none;
}

button:hover {
  background-color: aqua;
}

</style>

