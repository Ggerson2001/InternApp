import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // sampleBlogCards:[
    //   {blogTitle:"Intnernship Card #1",blogCoverPhoto:"stock-1",blogDate:"May 1,2021"},
    //   {blogTitle:"Internship Card #2",blogCoverPhoto:"stock-2",blogDate:"May 1,2021"},
    //   {blogTitle:"Internship Card #3",blogCoverPhoto:"stock-3",blogDate:"May 1,2021"},
    //   {blogTitle:"Internship Card #4",blogCoverPhoto:"stock-4",blogDate:"May 1,2021"}

    // ],
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogLocation: "",
    employees: "",
    type:"",
    website:"",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,

    editPost: null,
    user: null,
    profileAdmin : null,

    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileAddress:null,
    profileCity:null,
    profileZip:null,
    profileCountry:null,
    profileMajor:null,

    profileId: null,
    profileInitials: null,
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    updateBlogLocation(state, payload) {
      state.blogLocation = payload;
    },
    updateBlogEmployees(state, payload) {
      state.blogEmployees = payload;
    },
    updateEmployees(state, payload) {
      state.employees = payload;
    },
    updateType(state, payload) {
      state.type = payload;
    }
    ,
    updateWebsite(state, payload) {
      state.website = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    filterBlogPost(state, payload) {
      state.blogPosts = state.blogPosts.filter(
        (post) => post.blogID !== payload
      );
    },

    setBlogState(state,payload){
      state.blogTitle=payload.blogTitle;
      state.blogLocation=payload.blogLocation;
      state.employees=payload.employees;
      state.type=payload.type;
      state.website=payload.website;
      state.blogHTML=payload.blogHTML;
      state.blogPhotoFileURL=payload.blogCoverPhoto;
      state.blogPhotoName=payload.blogCoverPhotoName;
    },

    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
    setProfileAdmin(state,payload){
        state.profileAdmin=payload;
        console.log(state.profileAdmin);

    }
    ,
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;

      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileAddress=doc.data().address;
      state.profileCity=doc.data().city;
      state.profileCountry=doc.data().country;
      state.profileZip=doc.data().zip;
      state.profileMajor=doc.data().major;
    },
    setProfileInitials(state){
      state.profileInitials =
      state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },

    updateUser(state, payload) {
      state.user = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },

    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
    changeEmail(state, payload) {
      state.profileEmail = payload;
    },
    changeAddress(state, payload) {
      state.profileAddress = payload;
    },
    changeCountry(state, payload) {
      state.profileCountry = payload;
    },
    changeZip(state, payload) {
      state.profileZip = payload;
    },
    changeCity(state, payload) {
      state.profileCity = payload;
    },
    changeMajor(state, payload) {
      state.profileMajor = payload;
    }
  },
  actions: {
    async getCurrentUser({ commit },user) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token =await user.getIdTokenResult();
      const admin =await token.claims.admin;

      commit("setProfileAdmin",admin)


      // console.log("Current user method")
    },
    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogLocation: doc.data().blogLocation,
            employees:doc.data().employees,
            type:doc.data().type,
            website:doc.data().website,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
      console.log(state.blogPosts);
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("blogPosts").doc(payload);
      await getPost.delete();
      commit("filterBlogPost", payload);
    },

    async updatePost({commit,dispatch},payload){
      commit("filterBlogPost",payload);
      await dispatch("getPost");
    },

    async updateUserSetting({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
        email: state.profileEmail,
        country:state.profileCountry,
        city:state.profileCity,
        zip:state.profileZip,
        address:state.profileAddress,
        major:state.profielMajor
      });
      commit("setProfileInitials");
    },
  },

  modules: {},
});
