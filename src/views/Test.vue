<template>
  <div class="page-holder bg-gray-100">
        <div class="container-fluid px-lg-4 px-xl-5 contentDiv">
              <!-- Page Header-->
              <div class="page-header mb-4">
                <h1 class="page-heading">Profile</h1>
              </div>
          <section>
            <div class="row">
              <div class="col-lg-4">
                <div class="card card-profile mb-4">
                  <div class="card-header" style="background-image: url(https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg);"> </div>
                  <div class="card-body text-center"><img class="card-profile-img" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" >
               <h3> {{ this.$store.state.profileFirstName }} {{ this.$store.state.profileLastName }}</h3>  
                    <p class="mb-4">{{ this.$store.state.profileMajor }}</p>
                    <button class="btn btn-outline-dark btn-sm"><span class="fab fa-twitter"></span> Follow</button>
                  </div>
                </div>
         -->
                <form class="card mb-4">
                  <div class="card-header">
                    <h4 class="card-heading">My Profile</h4>
                  </div>
                  <div class="card-body">
                    <div class="row mb-3">
                      <div class="col-auto d-flex align-items-center"><img class="avatar avatar-lg p-1" src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png" alt="Avatar"></div>
                      <div class="col">
                        <label class="form-label">Name</label>
                        <input class="form-control" placeholder="Your name">
                      </div>
                    </div>
                    <div class="mb-3"> 
                      <label class="form-label">Bio</label>
                      <textarea class="form-control" rows="8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</textarea>
                    </div>
                    <div class="mb-3"> 
                      <label class="form-label">Email</label>
                      <input class="form-control" placeholder="you@domain.com">
                    </div>
                    <label class="form-label">Password</label>
                    <input class="form-control" type="password" value="password">
                  </div>
                  <div class="card-footer text-end">
                    <button class="btn btn-primary">Save</button>
                  </div>
                </form>
              </div>
              <div class="col-lg-8">
                <div class="card overflow-hidden mb-4">
  
                </div>
                <form class="card mb-4">
                  <div class="card-header">
                    <h4 class="card-heading">Profile Info</h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-5">
                         <div class="mb-4">
                          <label class="form-label">Email address</label>
                          <input class="form-control" type="email" placeholder="Email" v-model="email">
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-3">
                        <!-- <div class="mb-4">
                          <label class="form-label">Username</label>
                          <input class="form-control" type="text" placeholder="Username" v-model="firstName">
                        </div> -->
                      </div>
                      <div class="col-sm-6 col-md-4">
                       
                      </div>
                      <div class="col-sm-6 col-md-6">
                        <div class="mb-4">
                          <label class="form-label">First Name</label>
                          <input class="form-control" type="text" v-model="firstName">
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6">
                        <div class="mb-4">
                          <label class="form-label">Last Name</label>
                          <input class="form-control" type="text" v-model="lastName">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-4">
                          <label class="form-label">Address</label>
                          <input class="form-control" type="text" placeholder="Home Address" v-model="address">
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4">
                        <div class="mb-4">
                          <label class="form-label">City</label>
                          <input class="form-control" type="text" placeholder="City" v-model="city">
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-3">
                        <div class="mb-4">
                          <label class="form-label">ZIP</label>
                          <input class="form-control" type="number" placeholder="ZIP" v-model="zip">
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="mb-4">
                          <label class="form-label">Country</label>
                         <input class="form-control" type="text" placeholder="Country" v-model="country">
                        </div>

                       

                      </div>
               
                    </div>
                  </div>
                
                </form>
              </div>
            </div>
          </section>
        </div>

      </div>
    
</template>
<script>
//importing bootstrap 5 Modules
import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "../components/Modal";
// import adminIcon from "../assets/Icons/user-crown-light.svg";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Profile",
  components: {
    // Modal,
    // adminIcon,
  },
  data() {
    return {
      modalMessage: "Changes were saved!",
      modalActive: null,
    };
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
    closeModal() {
      this.modalActive = !this.modalActive;
    },
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.profileFirstName;
      },
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.profileLastName;
      },
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    username: {
      get() {
        return this.$store.state.profileUsername;
      },
      set(payload) {
        this.$store.commit("changeUsername", payload);
      },
    },
    email: {
      get() {
        return firebase.auth().currentUser.email;
      },
      set(payload) {
        this.$store.commit("changeEmail", payload);
      },
    },
    address: {
      get() {
        return this.$store.state.profileAddress;
      },
      set(payload) {
        this.$store.commit("changeAddress", payload);
      },
    },
    country: {
      get() {
        return this.$store.state.profileCountry;
      },
      set(payload) {
        this.$store.commit("changeCountry", payload);
      },
    },
      city: {
      get() {
        return this.$store.state.profileCity;
      },
      set(payload) {
        this.$store.commit("changeCity", payload);
      },
    },
     zip: {
      get() {
        return this.$store.state.profileZip;
      },
      set(payload) {
        this.$store.commit("changeZip", payload);
      },
    },
     major: {
      get() {
        return this.$store.state.profileMajor;
      },
      set(payload) {
        this.$store.commit("changeMajor", payload);
      },
    }



  },
};
</script>
<style >
      .card-header:first-child {
  border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}
.card-header {
  position: relative;
  padding: 2rem 2rem;
  border-bottom: none;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  z-index: 2;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #FF7000;
  background-clip: border-box;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 1rem;
}
.bg-gray-100 {
  background-color: #f8f9fa !important;
}
body{
  font-family: 'Poppins'!important;
}
/* .text-primary {
  color: #4650dd !important;
} */
h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
 
  line-height: 1.2;
}
.text-muted {
  color: #6c757d !important;
}
.lead {
  font-size: 1.125rem;
  font-weight: 300;
}
.text-sm {
  font-size: .7875rem !important;
}
h3, .h3 {
  font-size: 1.575rem;
}
.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);
 
  flex-wrap: wrap;
}
/* a {
  color: #4650dd!important;
  text-decoration: underline!important;
  cursor: pointer;
} */
.card-profile-img {
  position: relative;
  max-width: 8rem;
  margin-top: -6rem;
  margin-bottom: 1rem;
  border: 3px solid #FF7000;
  border-radius: 100%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  z-index: 2;
}
img, svg {
  vertical-align: middle;
}
.avatar.avatar-lg {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
}
.avatar {
  display: inline-block;
  position: relative;
  width: 3rem;
  height: 3rem;
  text-align: center;
  border: #FF7000;
  border-radius: 50%;
  background: #FF7000;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  line-height: 3rem;
}
.form-control
{
  color: #343a40;
}
.page-heading {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 300;
}
.contentDiv
{
  padding-top: 4rem;
}
.card-profile .card-header {
  height: 9rem;
  background-position: center center;
  background-size: cover;
}
    </style>