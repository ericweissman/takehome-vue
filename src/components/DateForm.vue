<template>
  <div class="date-form">
    <form @submit="setDate">
      <!-- <p>choose a date between 06/16/1995 and {{currDay}}</p>
      <input v-model="year" type="number" placeholder="YYYY">
      <input v-model="month" type="number" placeholder="MM">
      <input v-model="day" type="number" placeholder="DD">
      <input type="submit" placeholder="Submit">-->
      <!-- <button class="submit-btn">space out.</button> -->
      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option v-for="option in options">{{option}}</option>
      </select>
      <input type="submit" placeholder="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "DateForm",
  props: ["currDay"],
  data() {
    return {
      year: "YYYY",
      month: "MM",
      day: "DD",
      selected: "",
      options: this.setDays()
    };
  },
  methods: {
    setDate(e) {
      e.preventDefault();
      this.$emit("set-date", this.selected);
    },
    // setDate(e) {
    //   e.preventDefault();
    //   const date = {
    //     year: this.year,
    //     month: this.month,
    //     day: this.day
    //     // year: parseInt(this.year),
    //     // month: parseInt(this.month),
    //     // day: parseInt(this.day),
    //   };
    //   this.$emit("set-date", date);
    //   this.year = "YYYY";
    //   this.month = "MM";
    //   this.day = "DD";
    // },
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
  // created() {
  //   this.options = this.setDays(currDay)
  // }
};
</script>

<style scoped>
.date-form {
  margin-top: 20px;
}

input {
  background-color: rgb(249, 240, 240);
  height: 35px;
  border: none;
}

#__lpform_input_idx_1_icon {
  display: none;
}
</style>

