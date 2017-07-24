import _ from "lodash";
import VueRouter from "vue-router";
import Vue from 'vue'
import App from './App.vue'


const Landing = () => import(/* webpackChunkName: "Landing" */ "./pages/Landing.vue");

// import ViewPage from "./pages/ViewPage.vue";
const ViewPage = () => import(/* webpackChunkName: "ViewPage" */ "./pages/ViewPage.vue");

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", component: Landing, name: "landingPage" },
        { path: "/viewPage/:someKey", component: ViewPage, name: "viewPage", props: true }
    ]
});

function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
} 

var oldPage = getQueryStringValue("view");
var oldKey = getQueryStringValue("key");

if (!_.isEmpty(oldPage) && !_.isEmpty(oldKey)) {
    if (oldPage === "oldUrl") {
        router.replace({ name: 'viewPage', params: { someKey: oldKey } });
    }
}

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
