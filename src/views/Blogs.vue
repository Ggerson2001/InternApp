<template>
  

<div class="row">
    <div class="col-6 col-md-2">
      <div class="wrapper">
    <div class="d-md-flex align-items-md-center">
        <div class="h3">Filter internships </div>
       
    </div>

  <div class="py-3">
            <h5 class="font-weight-bold">Search company</h5>
           <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
  aria-describedby="search-addon" />
 
        </div>

        </div>

  <div class="py-3">
            <h5 class="font-weight-bold">Location</h5>
           <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
  aria-describedby="search-addon" />
 
        </div>

        </div>

    <div >
        <div class="">
            <h5 class="font-weight-bold">Categories </h5>
            <ul class="list-group">
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Full-time <span class="badge badge-primary badge-pill">25</span> </li>
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Part-time <span class="badge badge-primary badge-pill">16</span> </li>
               
            </ul>
        </div>
        <div class="py-3">
            <h5 class="font-weight-bold">Compensation</h5>
            <form class="brand">
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Paid <input type="checkbox"> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Unpaid <input type="checkbox" checked> <span class="check"></span> </label> </div>
                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Co-op <input type="checkbox" checked> <span class="check"></span> </label> </div>
               
            </form>
        </div>


        <div class="py-3">
            <h5 class="font-weight-bold">Type</h5>
             <select class="form-select" aria-label="Default select example">
            <option selected>On-site/Remote</option>
             <option value="1">On-site</option>
             <option value="2">Hybrid</option>
             <option value="3">Remote</option>
            </select>
        </div>

          <div class="py-3">
          
<label for="customRange3" class="form-label">Number of employees </label>
<div class="range">
  <input type="range" class="form-range" min="0" max="5" id="customRange2" />
</div>
</div>
      
      
    </div>
    <div class="content py-md-0 py-3">
      
    </div>
</div>
</div>


    
  <div class="col-12 col-md-10"><div class="blog-card-wrap">
    <div class="blog-cards container">
      <div v-if="profileAdmin" class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox"  v-model="editPost" />
      </div>
      <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index" />
    </div></div>
  
</div>
    
  </div>
  
  
</template>

<script>
import BlogCard from "../components/BlogCard";
export default {
  name: "Internships",
  components: { BlogCard },
  computed: {
  //  sampleBlogCards() {
  //     return this.$store.state.sampleBlogCards;
  //   },
  
  blogPosts() {
      return this.$store.state.blogPosts;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
    profileAdmin() {
      return this.$store.state.profileAdmin;
    },
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    span {
      margin-right: 16px;
    }
    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Poppins', sans-serif
// }

.wrapper {
    padding: 30px;
    max-width: 1200px;
    margin: auto
}

.h3 {
    font-weight: 900
}

.views {
    font-size: 0.85rem
}

.btn {
    color: #666;
    font-size: 0.85rem
}

.btn:hover {
    color: #b18b5a
}

.green-label {
    background-color: #defadb;
    color: #b8833e;
    border-radius: 5px;
    font-size: 0.8rem;
    margin: 0 3px
}

.radio,
.checkbox {
    padding: 6px 10px
}

.border {
    border-radius: 12px
}

.options {
    position: relative;
    padding-left: 25px
}

.radio label,
.checkbox label {
    display: block;
    font-size: 14px;
    cursor: pointer;
    margin: 0
}

.options input {
    opacity: 0
}

.checkmark {
    position: absolute;
    top: 0px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 50%
}

.options input:checked~.checkmark:after {
    display: block
}

.options .checkmark:after {
    content: "";
    width: 9px;
    height: 9px;
    display: block;
    background: white;
    position: absolute;
    top: 52%;
    left: 51%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 300ms ease-in-out 0s
}

.options input[type="radio"]:checked~.checkmark {
    background: #b19d5a;
    transition: 300ms ease-in-out 0s
}

.options input[type="radio"]:checked~.checkmark:after {
    transform: translate(-50%, -50%) scale(1)
}

.count {
    font-size: 0.8rem
}

label {
    cursor: pointer
}

.tick {
    display: block;
    position: relative;
    padding-left: 23px;
    cursor: pointer;
    font-size: 0.8rem;
    margin: 0
}

.tick input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
}

.check {
    position: absolute;
    top: 1px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 3px
}

.tick:hover input~.check {
    background-color: #f3f3f3
}

.tick input:checked~.check {
    background-color: #61b15a
}

.check:after {
    content: "";
    position: absolute;
    display: none
}

.tick input:checked~.check:after {
    display: block;
    transform: rotate(45deg) scale(1)
}

.tick .check:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg) scale(2)
}

#country {
    font-size: 0.8rem;
    border: none;
    border-left: 1px solid #ccc;
    padding: 0px 10px;
    outline: none;
    font-weight: 900
}

.close {
    font-size: 1.2rem
}

div.text-muted {
    font-size: 0.85rem
}

#sidebar {
    width: 25%;
    float: left
}

.category {
    font-size: 0.9rem;
    cursor: pointer
}

.list-group-item {
    border: none;
    padding: 0.3rem 0.4rem 0.3rem 0rem
}

.badge-primary {
    background-color: #F9C87C;
    color: #070000
}

.brand .check {
    background-color: #fff;
    top: 3px;
    border: 1px solid #666
}

.brand .tick {
    font-size: 1rem;
    padding-left: 25px
}

.rating .check {
    background-color: #fff;
    border: 1px solid #666;
    top: 0
}

.rating .tick {
    font-size: 0.9rem;
    padding-left: 25px
}

.rating .fas.fa-star {
    color: #ffbb00;
    padding: 0px 3px
}

.brand .tick:hover input~.check,
.rating .tick:hover input~.check {
    background-color: #f9f9f9
}

.brand .tick input:checked~.check,
.rating .tick input:checked~.check {
    background-color: #FF7000
}

#products {
    width: 75%;
    padding-left: 30px;
    margin: 0;
    float: right
}

.card:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    cursor: pointer
}

.card-body {
    padding: 0.5rem
}

.card-body .description {
    font-size: 0.78rem;
    padding-bottom: 8px
}

div.h6,
h6 {
    margin: 0
}

.product .fa-star {
    font-size: 0.9rem
}

.rebate {
    font-size: 0.9rem
}

.btn.btn-primary {
    background-color: #48b83e;
    color: #fff;
    border: 1px solid #008000;
    border-radius: 10px;
    font-weight: 800
}

.btn.btn-primary:hover {
    background-color: #48b83ee8
}

img {
    width: 192px;
    height: 132px;
    object-fit: contain
}

.clear {
    clear: both
}

.btn.btn-success {
    visibility: hidden
}

@media(min-width:992px) {

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(min-width:768px) and (max-width:991px) {

    .radio,
    .checkbox {
        padding: 6px 10px;
        width: 49%;
        float: left;
        margin: 5px 5px 5px 0px
    }

    .filter,
    #mobile-filter {
        display: none
    }
}

@media(min-width:576px) and (max-width:767px) {
    #sidebar {
        width: 35%
    }

    #products {
        width: 65%
    }

    .filter,
    #mobile-filter {
        display: none
    }

    .h3+.ml-auto {
        margin: 0
    }
}

@media(max-width:575px) {
    .wrapper {
        padding: 10px
    }

    .h3 {
        font-size: 1.3rem
    }

    #sidebar {
        display: none
    }

    #products {
        width: 100%;
        float: none
    }

    #products {
        padding: 0
    }

    .clear {
        float: left;
        width: 80%
    }

    .btn.btn-success {
        visibility: visible;
        margin: 10px 0px;
        color: #fff;
        padding: 0.2rem 0.1rem;
        width: 20%
    }

    .green-label {
        width: 50%
    }

    .btn.text-success {
        padding: 0
    }

    .content,
    #mobile-filter {
        clear: both
    }
}

</style>