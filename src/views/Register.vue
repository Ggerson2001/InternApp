<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create Your InternWeb Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <user class="icon" />
        </div>

         <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <user class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
        <password class="icon" />
        </div>
      <h6>Additional Data</h6>
          <div class="input">
          <input type="text" placeholder="Address" v-model="address" />
       
        </div>

          <div class="input">
          <input type="text" placeholder="City" v-model="city" />
         
        </div>

          <div class="input">
          <input type="text" placeholder="Zip" v-model="zip" />
        
        </div>

          <div class="input">
          <input type="text" placeholder="Country" v-model="country" />
         
        </div>
        <div class="input">
          <input type="text" placeholder="Study Major" v-model="major" />
        
        </div>

        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      address:"",
      city:"",
      zip:"",
      country:"",
      major:"",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== "" &&
        this.address !== "" &&
        this.city !== "" &&
        this.zip !== "" &&
        this.country !== "" &&
         this.major !== "" 
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          address:this.address,
          city:this.city,
          zip:this.zip,
          country:this.country,
          major:this.major
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>