<template>
  <div class="date-form">
    <div class="title">
      <h1>far out.</h1>
      <p>your daily dose of galactic bliss.</p>
    </div>
    <select @change="setDate" v-model="selected">
      <option disabled value>choose a day. see the stars.</option>
      <option v-for="option in options">{{option}}</option>
    </select>
  </div>
</template>


<script>
export default {
  name: "DateForm",
  props: ["currDay"],
  data() {
    return {
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}


h1 {
  font-size: 50px;
  font-weight: 100;
}

.title {
  text-align: left;
  margin-left: 65px;
}

select,
option {
  text-align: center;
  height: 35px;
  border: none;
  width: 250px;
  font-size: 15px;
  border-radius: 100%;
  background: linear-gradient(to bottom, #29323c, #485563);
  color: #f8f9fa;
  font-family: "Avenir", sans-serif;
  outline: none;
  margin: 0 65px;
}

p {
  line-height: 0px;
}

button {
  width: 95px;
  height: 35px;
  border-radius: 45px;
  border: none;
  font-family: "Avenir", sans-serif;
  letter-spacing: 1.25px;
  background: linear-gradient(to bottom, #29323c, #485563);
  color: #f8f9fa;
  outline: none;
}
</style>

