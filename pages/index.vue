<template>
  <div class="container">
    <div>Home Page</div>
    <input class="input" placeholder="change name" v-model="value"/>
    <input class="input" placeholder="change age" v-model="age"/>
    <button class="btn btn-primary" @click="handleChangeUsername">CLICK</button>
    <div style="margin-bottom: 20px;"></div>
    <h1>You are {{ username }}</h1>
    <h1>You are {{ age }} years old</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
  },
  data() {
    return {
      value: ""
    }
  },
  methods: {
    handleChangeUsername() {
      this.$store.dispatch('user/changeUsername', this.value);
    }
  },
  computed:{
    ...mapState('user', ['username']),
    age:{
      get() {
        return this.$store.state.user.age;
      },
      set(value) {
        return this.$store.dispatch('user/changeAge', value)
      }
    }
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
