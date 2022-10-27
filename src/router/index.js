import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import ViewBlog from "../views/ViewBlog.vue";
import BlogPreview from "../views/BlogPreview.vue";
import EditBlog from "../views/EditBlog.vue";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:'Home'
    }
  }, 
  {
    path: "/internships",
    name: "Internships",
    component: Blogs,
    meta:{
      title:'Internships'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      title:'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta:{
      title:'Register'
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta:{
      title:'Forgot Password'
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      title:'Profile'
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta:{
      title:'Admin'
    }
  },
  {
    path: "/createPosts",
    name: "CreatePost",
    component: CreatePost,
    meta:{
      title:'CreatePost'
    }
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta:{
      title:'Preview Blog Post'
    }
  },
  {
    path: "/view-internship/:blogid",
    name: "ViewBlog",
    component: ViewBlog,
    meta:{
      title:'View Blog Post'
    }
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlog",
    component: EditBlog,
    meta:{
      title:'Edit Blog Post'
    }
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
    meta:{
      title:'Profile'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>
{
  document.title=`${to.meta.title} | Internship`;
  next(); 
})

export default router;
