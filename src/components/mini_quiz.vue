<template>
  <div v-if="page === 'quiz'">
    <div class="alert alert-danger" role="alert" v-if="back">{{back}}</div>
    <div class="contain-quiz" v-if="pageNumber === 0">
      <h4 class>Binatang peliharaan manakah yang akan kamu pilih?</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio1">kucing berkaki satu</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio2">naga pekayon</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio3">honda beat</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 1">
      <h4 class>"Kamu bisa menjawab pertanyaan ini dengan benar." Apakah pernyataan ini benar?</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio1">Benar, benar bingung</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
        <label
          class="custom-control-label"
          for="customRadio2"
        >Itu benar ketika jawabanku "benar" dan itu salah ketika jawabanku "salah"</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
        <label
          class="custom-control-label"
          for="customRadio3"
        >Salah! Aku bahkan tidak tahu apa pertanyaannya</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 2">
      <h4 class>Jika 2+2=ikan, 3+3=infiniti, lalu 7+7=?</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio1">bulat</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio2">taurus</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio3">binturong</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 3">
      <h4 class>apa hal yang paling kamu takuti?</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio1">typophobia</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio2">live code</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
        <label
          class="custom-control-label"
          for="customRadio3"
        >panjang umur tapi menyaksiakan keluarga dan teman meninggalakan dunia hingga kamu tinggal kamu sendiri</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 4">
      <h4
        class
      >jika kamu harus menamai anakmu dengan referensi javascript, manakah yang akan kamu pilih?</h4>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio1">johnny regex</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio2">komar is not a function</label>
      </div>
      <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
        <label class="custom-control-label" for="customRadio3">[object object]</label>
      </div>
    </div>

    <div class="contain-quiz" v-if="pageNumber === 5">
      <h4 class="mb-4 ">Upload your profile pic</h4>
      <form action="/profile" method="post" enctype="multipart/form-data" @submit.prevent="submitFile">
          <div class="custom-file" >
            <input type="file" class="custom-file-input" id="customFile" @change="fileChange"/>
            <label class="custom-file-label" for="customFile" >Choose file</label>
          </div>
          <div class="form-group mt-3">
            <input type="submit" class="form-control btn btn-warning">
          </div>
    </form>
  {{image}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      image: ''
    };
  },
  props: ["page", "pageNumber", "back"],
  methods: {
    fileChange (event) {
      console.log(event.target.files[0], '<<>>')
      this.image = event.target.files[0]
    },
    submitFile() {
      let formData = new FormData();
      console.log(this.image, 'imagenya ga ada apa ada ya')
      formData.append("image", this.image);
      console.log(">> formData >> ", formData);

      // You should have a server side REST API
      axios
        .post("http://localhost:3000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(">>>> 1st element in files array >>>> ", this.file);
    }
  }
};
</script>
<style lang="css" scoped>
.contain-quiz {
  background-color: white;
  opacity: 0.8;
  border-radius: 5px;
  padding: 4rem;
}
</style>