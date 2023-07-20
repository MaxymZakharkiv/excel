import "./scss/index.scss";
import { Excel } from "./components/excel/Excel";

const app = document.querySelector("#app");

const excel = new Excel("#app", {
  components: [],
});

console.log(excel);
