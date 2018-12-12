<template>
  <div class="container">
    <div class="welcome">
      <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">
          Welcome
        </h2>
        <form @submit.prevent="Login">
          <input type="text" name="name" v-model="name" placeholder="Username">
          <p v-if="errorText" class="text-danger">{{errorText}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>


export default {
    name: 'Login',
    data() {
        return {
            name: "",
            errorText: null
        }
    },
    methods: {
        Login() {
            if(this.name) {
                this.$router.push({name: 'Chat', params: {name: this.name}});
            } else {
                this.errorText = "Please input a username"
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container .welcome{
  align-content: center;
  margin-top: 100px;
  box-shadow: 5px 10px #696565;
}
.btn{
  margin-top: 20px;
  background-image: linear-gradient(to right bottom, rgb(50, 151, 151), green);
}

.card-content {
  background-image: linear-gradient(to right bottom, rgb(88, 21, 175), rgb(216, 27, 159));
}
</style>
