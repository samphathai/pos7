import { createApp } from 'vue';
import App from './App.vue'

require('./bootstrap');

// ປະກ່າດໂຕປ່ຽນເພືອໃຊ້ໃນການລັນ
const app = createApp(App)
app.mount("#app-vue")