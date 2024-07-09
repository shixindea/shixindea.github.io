import gText from "./index.vue";
gText.install = (app) => {
  app.component(gText.name, gText);
};
export default gText;
