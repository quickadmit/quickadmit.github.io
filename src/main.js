// main.js
import { createApp } from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/css/buefy.css";
import router from "./router"; // Import your router config
import "@fortawesome/fontawesome-free/css/all.css"; // optional

// Create Vue 3 app instance
const app = createApp(App);

// Use Buefy plugin
app.use(Buefy, {
  defaultIconPack: "fas", // Font Awesome Solid
});

// Use Vue Router
app.use(router);

// Mount the app
app.mount("#app");
