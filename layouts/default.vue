<template>
  <div id="app">
    <div class="content-page">
      <div class="container">
        <header>
          <nav class="navbar pl-0">
            <a
              @click="$router.go(-1)"
              class="btn btn-primary btn-back"
            >
              <i
                class="fa fa-arrow-left"
              />
            </a>
          </nav>
        </header>
        <div class="content">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
