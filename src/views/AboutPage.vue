<template>
  <div class="about-container">
    <h1 class="aboutus-header">About us</h1>
    <div class="about-top">
      <h2>Why we started Meetups</h2>
      <h4>
        <p>
          The idea for Epiloge comes from our own experience working on various
          projects, presentations and papers as students and later in our
          careers. No matter how much effort went into something, there really
          was no tailored platform to showcase work done as a team in a
          multimedia format.
        </p>
        <p>
          That's why we created a platform for people to upload, write or what
          they do in their fields and connect with others on that basis. Things
          we research, develop or write about are, in our view, the best way to
          show who we are.
        </p>
      </h4>
    </div>
    <div class="about-bottom">
      <h2>Build a profile relevant in your field of interest</h2>
      <h4>
        <p>
          From the very beginning, we had no intention to restrict the types of
          topics people can write about on Epiloge. The story of a robotics or
          botany project of a group of students is as welcome as the upload of a
          science or history paper. We believe that Epiloge can only succeed if
          it adds positively to people's lives.
        </p>
        <p>
          Therefore we built the platform for users to connect with each other,
          to follow interesting projects and users, to discover projects and
          articles on university, school or other company profiles and to read
          about new ideas.
        </p>
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutPage",
};
</script>
<style scoped>
.about-container {
  width: 80%;
  margin: 0 auto;
  height: 700px;
}
.aboutus-header {
  font-size: 32px;
  font-style: italic;
  font-display: bold;
  margin: 15px auto;
  display: flex;
  justify-content: center;
}
.about-top {
  width: 100%;
  font-size: 24px;
  font-family: cursive;
}
.about-top > p {
  margin: 5px;
  font-size: 16px;
}
.about-top > h2 {
  margin: 20px;
  font-size: 32px;
}
.about-bottom {
  width: 100%;
  font-size: 24px;
  font-family: cursive;
}
.about-bottom > p {
  margin: 20px;
  font-size: 16px;
}
.about-bottom > h2 {
  margin: 20px;
  font-size: 32px;
}
</style>
