import Vue from 'vue';
import App from './App.vue';

// $('#customFile').on('change',function(){
//   //get the file name
//   var fileName = $(this).val();
//   //replace the "Choose a file" label
//   $(this).next('.custom-file-label').html(fileName);
// })

$(document).on('change', '.custom-file-input', function (event) {
  $(this).next('.custom-file-label').html(event.target.files[0].name);
})

new Vue({
  render: h => h(App)
}).$mount('#app')