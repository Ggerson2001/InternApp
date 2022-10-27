<template>
  <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle}}</h2>
     <h4>Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", { dateStyle: "long" }) }}</h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
    
<div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Location:</label>
    <div class="col-sm-10">
       <div class="col-sm-2 col-form-label col-form-label-lg" v-html="this.currentBlog[0].blogLocation"></div>
    </div>
  </div>


<div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Number of employees:</label>
    <div class="col-sm-10">
       <div class="col-sm-2 col-form-label col-form-label-lg" v-html="this.currentBlog[0].employees"></div>
    </div>
  </div>


<div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Type:</label>
    <div class="col-sm-10">
       <div class="col-sm-2 col-form-label col-form-label-lg" v-html="this.currentBlog[0].type"></div>
    </div>
  </div>



<div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Description:</label>
    <div class="col-sm-10">
  
    </div>
  </div>
  
         <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>


<div class="menu">
  <div>
    <a href="https://www.amazon.jobs/en/jobs/1793690/software-development-engineer-internship-2022-amsterdam-netherlands" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Apply to company through this website</a>
  <!-- <button type="button" href="https://www.amazon.jobs/en/jobs/1793690/software-development-engineer-internship-2022-amsterdam-netherlands" class="btn btn-primary">Apply to company through this website</button> -->
</div>

  <a href=# v-html="this.currentBlog[0].website" class="link-primary">Primary link</a>

</div>

 
  
    </div>
  </div>
</template>

<script>
export default {
    name:"ViewBlog",
    data(){
        return{
            currentBlog:null,

        }
    },
    async mounted(){
        this.currentBlog=await this.$store.state.blogPosts.filter(post=>{
            return post.blogID===this.$route.params.blogid;
        })
    }
}
</script>

<style lang="scss">
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}

.menu{
  font-size: 25px;
}
</style>