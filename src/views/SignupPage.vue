<template>
  <div class="signup-container">
    <h1 class="signup-header">Sign up</h1>
    <div class="msg" v-if="submitted.value">
      Thanks, <strong>{{ user.userName }}</strong> Now you can participate in
      the event and you are registered for the event and you will recieve an
      email to <strong> {{ user.userEmail }} </strong> shortly...
    </div>
    <div class="isLoading" v-if="isLoading.value">
      <h2>is loading ....</h2>
    </div>

    <form @submit.prevent="handleSubmit()" class="signup-form">
      <input
        required
        name="name"
        placeholder="Name"
        type="text"
        v-model="user.userName"
        data-userName
      />
      <input
        required
        name="email"
        placeholder="Email"
        type="text"
        v-model="user.userEmail"
        data-userEmail
      />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      user: {
        userName: "",
        userEmail: "",
      },
      submitted: {
        type: Boolean,
        value: false,
      },
      isLoading: {
        type: Boolean,
        value: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("addUser", this.user);
      this.isLoading.value = true;

      setTimeout(() => {
        this.submitted.value = true;
        this.isLoading.value = false;
      }, 5000);

      setTimeout(() => {
        this.$router.push("/events");
      }, 12000);
    },
  },
};
</script>

<style scoped>
.signup-container {
  background: lightslategray;
  width: 70%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
}
.signup-header {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.signup-form {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: row;
  grid-gap: 8px;
  background: rgb(190, 196, 202);
  padding: 30px;
  border: 2px solid lightslategray;
  border-radius: 8px;
  width: 60%;
  margin: 0 auto;
}
.form-button {
  color: black;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  width: 100px;
}
.signup-form > input,
.signup-form > textarea,
.signup-form > button {
  grid-row: auto;
  border: rgb(88, 81, 81);
  padding: 10px;
}
.form-button:hover {
  background-color: limegreen;
}
.msg {
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
}
.isLoading {
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bolder;
  text-align: center;
  font-size: 32px;
}
strong {
  font-weight: 900;
}
</style>
