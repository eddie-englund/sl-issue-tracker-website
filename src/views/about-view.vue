<template>
  <div class="about">
    <div class="container">
      <h1>About</h1>
      <p>
        Stockholms Lokaltrafik (SL) is the only public transport company in
        Stockholm, Sweden and it has constant issues. So, this website was
        created to track all the issues that I find and have with the service.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/colors.scss' as c;
.about {
  display: flex;
  justify-content: center;
  text-align: center;
  min-width: 100%;

  p {
    max-width: 40rem;
    color: c.$text-secondary;
    padding: 1rem;
  }
}
</style>
