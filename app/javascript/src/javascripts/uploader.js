import Uploader from './uploader/uploader.vue';
import Vue from 'vue';

export default {
  init() {
    const app = new Vue({
      render: (h) => h(Uploader)
    });

    app.$mount('#uploader');
  }
}
