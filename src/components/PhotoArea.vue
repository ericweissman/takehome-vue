<template>
  <div class="photo-area">
    <h4>{{data.title}}</h4>
    <img
      v-if="!data.url.includes('youtube')"
      :src="data.url"
      alt="photo from universe"
      class="photo"
    >
    <iframe v-if="data.url.includes('youtube')" class="video" :src="data.url" frameborder="0"></iframe>
    <p class="info">{{data.explanation}}</p>
  </div>
</template>

<script>
export default {
  name: "PhotoArea",
  props: ["data", "error"]
};
</script>

<style scoped>
.photo-area {
  margin: 25px 0;
}

.photo {
  width: 500px;
  border-radius: 5px;
  padding: 15px 0;
}

.video {
  width: 500px;
  height: 400px;
  border-radius: 5px;
  padding: 15px 0;
}

.info {
  margin: 10px auto;
  width: 85%;
  font-size: 16px;
}

h4 {
  font-size: 24px;
  font-weight: 100;
}
</style>
