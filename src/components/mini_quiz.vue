<template>
  <div v-if="page === 'quiz'">
    <div class="contain-quiz" v-if="pageNumber === 0">
      <h4 class="">You found a one legged cat. What will you do?</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio1">mhsdgcmsgcmsgcmshg</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio3">Or toggle this other custom radio</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 1">
      <h4 class="">You found a one legged cat. What will you do? 222</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio1">mhsdgcmsgcmsgcmshg</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio3">Or toggle this other custom radio</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 2">
      <h4 class="">You found a one legged cat. What will you do? 333</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio1">mhsdgcmsgcmsgcmshg</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio3">Or toggle this other custom radio</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 3">
      <h4 class="">You found a one legged cat. What will you do? 444</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio1">mhsdgcmsgcmsgcmshg</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio3">Or toggle this other custom radio</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 4">
      <h4 class="">You found a one legged cat. What will you do? 555</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio1">mhsdgcmsgcmsgcmshg</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio3">Or toggle this other custom radio</label>
      </div>
    </div>

    <div class="custom-file contain-quiz" v-if="pageNumber === 5">
      <input type="file" class="custom-file-input" id="customFile">
      <label class="custom-file-label" for="customFile">Choose file</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page", "pageNumber"]
}
</script>
<style lang="css" scoped>
  .contain-quiz {
    background-color: white;
    opacity: 0.8;
    border-radius: 5px;
    padding: 4rem;
  }
</style>