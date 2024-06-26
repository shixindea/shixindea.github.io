import gTooltip from './index.vue';
gTooltip.install = app => {
    app.component(gTooltip.name, gTooltip)
}
export default gTooltip