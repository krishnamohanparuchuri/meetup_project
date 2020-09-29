<template>
  <div class="events-container">
    <div class="events-searchbar">
      <input type="text" class="searchbar" v-model="search" />
      <div class="addevent-button" @click="movetoAddevent">
        <span>
          Add Event
        </span>
      </div>
    </div>
    <div class="events-list">
      <ul>
        <li
          @click="eventDescription(event)"
          :event="event"
          v-for="event in filteredEvents"
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
  name: "EventsPage",
  data() {
    return {
      search: "",
    };
  },
  mounted() {
    this.$store.dispatch("loadEvents");
  },
  computed: {
    ...mapState(["events"]),
    filteredEvents() {
      return this.events.filter((event) => {
        return event.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    eventDescription(event) {
      this.$router.push(`/events/${event.id}`, event);
    },
    movetoAddevent() {
      this.$router.push("/addevent/");
    },
  },
};
</script>

<style scoped>
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
  margin: 5px;
}
.event-image {
  width: 300px;
  height: 250px;
  border-radius: 15px;
  margin: 10px;
  box-shadow: 2px 2px 2px black;
}
.events-searchbar {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.searchbar {
  width: 750px;
  border-radius: 5px;
  color: black;
  height: 50px;
  box-shadow: 5px 5px 6px black;
  margin-bottom: 50px;
  font-size: 22px;
}
.events-searchbar .addevent-button {
  margin: 0px 20px;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 5px 5px 6px black;
  font-size: 22px;
  height: 50px;
  width: 200px;
  text-align: center;
}
span {
  display: flex;
  justify-content: center;
  align-content: center;
}
.event-info {
  margin-left: 10px;
}
</style>
