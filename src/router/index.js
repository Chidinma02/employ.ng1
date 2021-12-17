import { createRouter, createWebHistory } from "vue-router";

import bodyhome from "../components/bodyhome";
import findjob from "../components/findjob";
import loginapp from "../components/loginapp";
import about from "../components/about";
import contact from "../components/contact";
import candidate from "../components/candidate";
import employedash from "../components/candidatefolder/candidatedashboard";
import register from "../components/register";
import CResume from "../components/CResume";

import CApplied from "../components/CApplied"
// import dashboard from "../components/candidatefolder/dashboard.vue";
import profiledashboard from "../components/profiledashboard.vue";
// import CJob from "../components/CJA.vue";
import job from "../components/job"
import Cshort from "../components/Cshort"
import cvmanager from "../components/cvmanager"
const routes = [
  {
    path: "/",
    name: "bodyhome",
    component: bodyhome,
  },
  {
  path:"/cvmanager",
  name:"cvmanager",
  component:cvmanager,
  },
  {
    path:"/Cshort",
    name:"Cshort",
    component:Cshort,
  },
  {
    path:"/job",
    name:"job",
    component:job,
  },

  {
    path: "/findjob",
    name: "findjob",
    component: findjob,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
     path :"/CApplied",
     name:"CApplied",
     component:CApplied
  },
  {
    path: "/CResume",
    component: CResume,
    name: "CResume",
  },
  {
    path: "/candidate",
    component: candidate,
    name: "candidate",
    // children: [
    //   { path: "loginapp", component: loginapp },
    //   { path: "dashboard", component: dashboard },
    // ],
  },

  //   {
  //     path: '/loginapp',
  //     name:'loginapp',
  //     component:loginapp
  //     component: () => import(/* webpackChunkName: 'login' */ '@/components/loginapp'),
  //  meta: {
  //   hideNavbar: true,
  //  }

  //  },
  {
    path: "/loginapp",
    name: "loginapp",
    component: loginapp,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/employedash",
    component: employedash,
  },
  {
    path: "/profiledashboard",
    name: "profiledashboard",
    component: profiledashboard,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
