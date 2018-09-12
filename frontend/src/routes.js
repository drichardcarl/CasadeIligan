import Homepage from "./components/Homepage.vue";
import Registration from "./components/Registration.vue";
import Owner from "./components/Owner.vue";

export default [
  {
    path: "/",
    component: Homepage
  },
  {
    path: "/register",
    component: Registration
  },
  {
    path: "/owner",
    component: Owner
  }
];
