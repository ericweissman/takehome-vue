<template>
  <form class="date-form">
    <p>choose a date.</p>
    <input type="text" placeholder="YYYY-MM-DD">
    <button class="submit-btn">space out.</button>
  </form>
</template>

<script>
export default {
  name: "DateForm",
}
</script>

<style scoped>
  .date-form {
    margin-top: 20px;
  }
</style>

