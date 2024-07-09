import gSpace from "./index.vue";
gSpace.install = (app) => {
  app.component(gSpace.name, gSpace);
};
export default gSpace;
