<template>
  <div class="contactus-container">
    <h1 class="contact-header">Contact Us</h1>
    <form @submit.prevent="handleSubmit()" class="contact-form">
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
      <textarea name="message" rows="4" placeholder="Your Message"></textarea>
      <!-- <button class="form-button" @click.stop.prevent="handleSubmit()">Send</button> -->
      <input type="submit" />
    </form>
    <div class="msg" v-if="submitted.value">
      Thank you for your Message, {{ user.userName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
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
    };
  },
  methods: {
    handleSubmit() {
      this.submitted.value = true;
      setTimeout(() => {
        this.$router.push("/");
      }, 5000);
    },
  },
};
</script>

<style scoped>
.contactus-container {
  background: lightslategray;
  width: 70%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
}
.contact-header {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.contact-form {
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
.contact-form > input,
.contact-form > textarea,
.contact-form > button {
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
  font-weight: bolder;
}
</style>
