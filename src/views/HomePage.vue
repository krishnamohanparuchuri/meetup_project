<template>
  <div class="home">
    <h1 class="home-header">Meetups at one place</h1>
    <h1 class="home-title">{{ message }}</h1>
    <div class="events-list">
      <ul>
        <li
          @click="eventDescription(event)"
          :event="event"
          v-for="event in events"
          :key="event.id"
        >
          <img
            class="event-image"
            :src="require('@/assets/images/' + event.image)"
          />
          <div class="event-info">
            <h3>{{ event.name }}</h3>
            <h4>Category : {{ event.type }}</h4>
            <h5>Seats available : {{ event.seats_available }}</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      message:
        "LETS FIND ATTRACTIVE AND BEST MEETUPS  IN AND AROUND STOCKHOLM HAVE FUN AND LOT OF EXCITEMENT",
    };
  },
  mounted() {
    this.$store.dispatch("loadEvents");
  },
  computed: mapState(["events"]),
  methods: {
    eventDescription(event) {
      this.$router.push({
        name: "EventDescription",
        params: { id: event.id, event },
      });
    },
  },
};
</script>

<style scoped>
@keyframes header1 {
  0% {
    left: 0px;
    top: 0px;
  }
  100% {
    left: 1200px;
    top: 0px;
  }
}
.home-header {
  width: 300px;
  height: 30px;
  font-size: 32px;
  font-weight: bolder;
  opacity: 0.6;
  color: whitesmoke;
  margin: 10px 0;
  position: relative;
  animation-name: header1;
  animation-duration: 6s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}
.home-title {
  width: 800px;
  height: 400px;
  font-family: Racing Sans One;
  font-weight: bold;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  margin: 30px auto;

  color: #000000;
}
.event-list {
  margin-top: 50px;
  width: 1400px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
}

ul {
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
}
.event-image {
  width: 300px;
  height: 250px;
  border-radius: 15px;
  margin: 10px;
}
.event-info {
  margin-left: 10px;
}
</style>
