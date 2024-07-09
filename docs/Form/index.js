import gForm from './index.vue';
gForm.install = app => {
  app.component(gForm.name, gForm)
}
export default gForm