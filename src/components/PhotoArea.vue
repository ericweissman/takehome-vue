<template>
  <div class="photo-area">
    <h4>{{data.title}}</h4>
    <button v-if="!showInfo" v-on:click="toggleInfo">more info</button>
    <button v-if="showInfo" v-on:click="toggleInfo">hide info</button>
    <transition name="fade">
      <p v-if="showInfo" class="info">{{data.explanation}}</p>
    </transition>
    <div>
      <img
        v-if="!data.url.includes('youtube')"
        :src="data.url"
        alt="photo from universe"
        class="photo"
      >
      <iframe v-if="data.url.includes('youtube')" class="video" :src="data.url" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoArea",
  props: ["data", "error"],
  data() {
    return {
      showInfo: false
    };
  },
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    }
  }
};
</script>

<style scoped>
.photo-area {
  margin: 25px 0;
}

.photo {
  width: 900px;
  border-radius: 5px;
  padding: 15px 0;
}

.video {
  width: 900px;
  height: 506px;
  border-radius: 5px;
  padding: 15px 0;
}

.info {
  margin: 10px auto;
  width: 50%;
  font-size: 16px;
}

h4 {
  font-size: 24px;
  font-weight: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

button {
  width: 78px;
  height: 28px;
  border-radius: 45px;
  border: none;
  font-family: "Avenir", sans-serif;
  letter-spacing: 1.25px;
  background: linear-gradient(to bottom, #29323c, #485563);
  color: #F8F9FA;
  outline: none;
  font-size: 10px;
  margin: 5px 0;
}
</style>
