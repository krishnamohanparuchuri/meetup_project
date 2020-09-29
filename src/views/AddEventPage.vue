<template>
  <div class="addevent-container">
    <h1 class="addevent-header">Add new Event</h1>
    <form @submit.prevent="addEvent()" class="event-form">
      <label for="name">Name of the Event</label>
      <input type="text" placeholder="event name" v-model="event.name" />
      <label for="date">Date</label>
      <input type="date" placeholder="Date" v-model="event.available_date" />
      <label for="time">Time</label>
      <input type="time" placeholder="time" v-model="event.start_time" />
      <label for="duration">Duration</label>
      <input type="text" placeholder="duration" v-model="event.duration" />
      <label for="location">Location</label>
      <input type="text" placeholder="Location" v-model="event.location" />
      <label for="price">Price</label>
      <input type="text" placeholder="price" v-model="event.price" />
      <label for="seats_available">Seats</label>
      <input
        type="text"
        placeholder="seats available"
        v-model="event.seats_available"
      />
      <label for="image">Image File </label>
      <input type="file" placeholder="image file" v-bind="event.image" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
// import { uuid } from "vue-uuid";
export default {
  name: "AddEventPage",
  data() {
    return {
      event: {
        id: 13,
        name: "",
        price: "",
        seats_available: "",
        duration: "",
        location: "",
        image: "",
        start_time: "",
        available_date: "",
      },
    };
  },
  methods: {
    addEvent() {
      this.$store.dispatch("addEvent", this.event);
      setTimeout(() => {
        this.$router.push("/events");
      }, 4000);
    },
  },
};
</script>

<style scoped>
.addevent-container {
  width: 70%;
  height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.addevent-header {
  width: 40%;
  height: 50px;
  margin: 0 auto;
}
.event-form {
  width: 50%;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.event-form > input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 10px;
}
.event-form > label {
  width: 80%;
  height: 40px;
  font-size: 24px;
}
</style>
