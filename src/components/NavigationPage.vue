<template>
  <div class="nav-container">
    <div class="nav-left">
      <router-link to="/">
        <h1 class="nav-header">Meetups</h1>
        <h3 class="nav-subtitle">lets meet together</h3>
      </router-link>
    </div>
    <div class="nav-right">
      <ul class="nav-links">
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/events">Events</router-link>
        </li>
        <li>
          <router-link to="/contact">ContactUs</router-link>
        </li>
        <li>
          <router-link to="/signup">Signup</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationPage",
};
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: row;
}
.nav-left {
  width: 465px;
  height: 225px;
  left: 10px;
  top: 11px;
  mix-blend-mode: normal;
}
.nav-left .nav-header {
  position: absolute;
  width: 406px;
  height: 174px;
  left: 80px;
  top: 30px;

  font-family: Rock Salt;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 172px;
  display: flex;
  align-items: center;

  color: #ff6347;
}

.nav-left .nav-subtitle {
  position: absolute;
  width: 319px;
  height: 43px;
  left: 98px;
  top: 150px;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  display: flex;
  align-items: center;

  color: #000000;
}

.nav-right {
  width: 800px;
  font-size: 32px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-items: flex-end;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
  padding: 1rem;
  display: block;
}
li :hover {
  color: gray;
}
.toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}
</style>
