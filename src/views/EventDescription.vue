<template>
  <div class="singleevent-container">
    <h1 class="event-category">Category : {{ event.type }}</h1>
    <div class="event-body">
      <div class="event-left">
        <img
          class="event-image"
          :src="require('@/assets/images/' + event.image)"
        />
        <h2 class="event-price">Price : {{ event.price }} SEK</h2>
      </div>
      <div class="event-right">
        <h3>{{ event.name }}</h3>
        <h4>Duration : {{ event.duration }}</h4>
        <h4>Seats available : {{ event.seats_available }}</h4>
        <h4>Date : {{ event.available_date }}</h4>
        <h4>Location : {{ event.location }}</h4>
        <h4>Start time : {{ event.start_time }}</h4>
        <button class="event-button" @click="bookEvent">
          Book Event
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EventDescription",
  mounted() {
    const event_id = this.$route.params.id;
    this.$store.dispatch("getEventInfo", event_id);
  },
  computed: mapState(["event"]),
  methods: {
    bookEvent() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
.singleevent-container {
  width: 100%;
  height: 900px;
}
.event-image {
  width: 250px;
  height: 300px;
  border-radius: 15px;
  margin: 20px;
}
.event-body {
  width: 750px;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background: linear-gradient(#e66465, #9198e5);
}
.event-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  font-size: bold;
}

.event-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.event-right h4 {
  font-size: 24px;
  display: flex;
  justify-content: center;
  margin: 10px;
}
.event-right h3 {
  font-size: 32px;
  display: flex;
  justify-content: flex-start;
  margin: 15px;
}
.event-category {
  height: 50px;
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.event-button {
  color: Black;
  font-size: 18px;
  background: white;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  margin: 30px;
}
.event-button:hover {
  background: gray;
}
.event-button:active {
  border-radius: 12.5px;
}
</style>
