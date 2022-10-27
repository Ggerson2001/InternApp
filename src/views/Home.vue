<template>


  <div class="home">

    <InternshipPost  :post="welcomeScreen" />
    <!-- <InternshipPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    /> -->

    
 


    <!-- <div  class="updates">
      <div class="container">
        <h2>Never miss an internship.Register for your free account today</h2>
        <router-link class="router-button" to="#"
          >Register for InternshipPost <Arrow class="arrow arrow-light"
        /></router-link>
      </div>
    </div> -->


         <div class="container mt-5" id="about">
                   <h1 class="text-center py-4">Why to choose InternWeb</h1>
                   <div class="container">
   <section class="section-tours">
      <div class="row">
         <div class="col-lg-4 mb-4">
            <div class="my-flip-container">
               <div class="my-flip-inner my-flip-right">
                  <div class="my-flip-inner-wrapper">
                     <div class="my-flip-side my-flip-front">
                        <div class="my-flip-image my-flip-image--1">
                           <img src="../assets/company.jpg">                                 
                        </div>
                        <div class="my-flip-details">
                           <h4 class="my-flip-heading">Variety</h4>
                           <div class="my-flip-text">
                              <p>Internweb offers a variety of companies that users can apply for their internship.There are aroun 500 international companies and 30 internship types for different majors.</p>
                           </div>
                        </div>
                     </div>
                     <div class="my-flip-side my-flip-back my-flip-back-1">
                        <div class="my-flip-back-inner">
                           <div class="my-flip-price">
                              <h3>Variety</h3>
                           </div>
                           <div class="my-flip-back-text">
                              <ul>
                                 <li>500 Companies</li>
                                 <li>30 Job Types</li>
                                 <li>International Companies</li>
                            
                              </ul>
                           </div>
                           <!-- <div class="my-flip-btn-box"><a href="#0" class="my-flip-btn">Book Now</a></div> -->
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-4 mb-4">
            <div class="my-flip-container">
               <div class="my-flip-inner my-flip-right">
                  <div class="my-flip-inner-wrapper">
                     <div class="my-flip-side my-flip-front">
                        <div class="my-flip-image my-flip-image--2">
                         <img src="../assets/network.jpg">                 
                        </div>
                        <div class="my-flip-details">
                           <h4 class="my-flip-heading">Network</h4>
                           <div class="my-flip-text">
                              <p>InternWeb also offers you an excellent opportunity to network with other professionals in your field. And the faster you start this networking, the better it will be down the line.  </p>
                           </div>
                        </div>
                     </div>
                     <div class="my-flip-side my-flip-back my-flip-back-2">
                        <div class="my-flip-back-inner">
                           <div class="my-flip-price">
                              <h3>Network</h3>
                           </div>
                           <div class="my-flip-back-text">
                              <ul>
                                 <li>500,000 Users</li>
                                 <li>100,000 Professionals</li>
                                 <li>Networking oppurtunity</li>
                            
                              </ul>
                           </div>
                         
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-4 mb-4">
            <div class="my-flip-container">
               <div class="my-flip-inner my-flip-right">
                  <div class="my-flip-inner-wrapper">
                     <div class="my-flip-side my-flip-front">
                        <div class="my-flip-image my-flip-image--3">
                          <img src="../assets/effectivity.jpg">                               
                        </div>
                        <div class="my-flip-details">
                           <h4 class="my-flip-heading">Effectivity</h4>
                           <div class="my-flip-text">
                              <p>Internweb will help you find a job faster because most hiring managers and recruiters are already using it. A whopping 87% of recruiters find InternWeb to be the most effective when vetting candidates during the hiring process.</p>
                           </div>
                        </div>
                     </div>
                     <div class="my-flip-side my-flip-back my-flip-back-3">
                        <div class="my-flip-back-inner">
                           <div class="my-flip-price">
                              <h3>Effectivity</h3>
                           </div>
                           <div class="my-flip-back-text">
                              <ul>
                                 <li>87% effective</li>
                                 <li>Unlimited Section</li>
                                 <li>Lifetime Subscription</li>
                              </ul>
                           </div>
                      
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>

                </div>
  
            
              <!-- price plan starts -->
             <div class="container mt-5">
                <div class="row py-5">
                  <div class="col-md-4">
                    <strong class="d-inline-block mb-2 text-primary">Price plans</strong>
                    <h3 class="mb-0">
                      No hidden charges
                   </h3>
                   <p class="lead text-muted">We have best suitable plans for your bussiness needs.Money back guarantee.</p>
                    <button type="button" class="btn btn-lg btn-primary btn-circle mb-2">Get started</button>
                  </div>
                  <div class="col-md-8">
<div class="row text-center">
                    
                  <div class="col-md-4 mb-2">
                    <div class="card shadow">
                    <div class="card-body">
                      <h3 class="my-3 font-weight-norma text-uppercase">Free</h3>
                     
                      <span class="d-block  text-primary">
                        <span class="align-top">$</span>
                        <span class="display-4 font-weight-bold">0</span>
                        <span class="text-muted">/month</span>
                      </span>
                      <ul class="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                      </ul>
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-circle">Sign up for free</button>
                    </div>
                  </div>
                </div>
                  <div class="col-md-4 mb-2">
                   <div class="card shadow">
                    <div class="card-body">
                       <h3 class="my-3 font-weight-norma text-uppercase">Pro</h3>
                       <span class="d-block  text-primary">
                        <span class="align-top">$</span>
                        <span class="display-4 font-weight-bold">19</span>
                        <span class="text-muted">/month</span>
                      </span>
                      <ul class="list-unstyled mt-3 mb-4">
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                      </ul>
                      <button type="button" class="btn btn-lg btn-block btn-primary btn-circle">Get started</button>
                    </div>
                  </div>
                </div>
                  <div class="col-md-4 mb-2">
                    <div class="card shadow">
                      <div class="card-body">
                       <h3 class="my-3 font-weight-norma text-uppercase">Enterprise</h3>
                       <span class="d-block  text-primary">
                        <span class="align-top">$</span>
                        <span class="display-4 font-weight-bold">199</span>
                        <span class="text-muted">/month</span>
                      </span>
                      <ul class="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                      </ul>
                      <button type="button" class="btn btn-lg btn-block btn-primary btn-circle">Contact us</button>
                    </div>
                  </div>
                  </div>
                </div>
                </div>
              
             </div>
           </div>
             <!-- price plan ends -->
<!-- footer start -->

  </div>

  
</template>

<script>
import InternshipPost from "../components/InternshipPost";
// import BlogCard from "../components/BlogCard";
// import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: { InternshipPost },
  data() {
    return {
      welcomeScreen: {
        title: "Find your dream Internship",
        blogPost: "Start something that matters",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a filter Title",
          blogHtml: "This is a filler blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a filter Title",
          blogHtml: "This is a filler blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
     user(){
      return this.$store.state.user;
    }
  },
};
</script>


<style lang="scss" scoped>

.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}

a:hover{
    text-decoration: none;
 }
 
 .my-flip-inner-wrapper {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;   
 }
 .my-flip-side {
     display: block;
     height: 500px;
     top: 0;
     right: 0;
     left: 0;
     box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);    
     transition: all .8s ease;    
     -webkit-backface-visibility: hidden;
     backface-visibility: hidden;   
 }
 
 .my-flip-back {
    transform: rotateY(180deg);
    color: #fff;
    position: absolute;
    z-index: -1;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    padding: 46px;   
 }
 
 .my-flip-back-1 {
    background: linear-gradient(to right bottom, #ffb900, #ff7730);
 }
 
 .my-flip-back-2 {
    background: linear-gradient(to right bottom, #000428, #004e92);
 }
 
 .my-flip-back-3 {
    background: linear-gradient(to right bottom, #2998ff, #5643fa);
 }
 
 .my-flip-inner-wrapper:hover .my-flip-front {
    transform: rotateY(-180deg);
 }
 
 .my-flip-inner-wrapper:hover .my-flip-back {
    transform: rotateY(0);
 }
 .my-flip-image {
    height: 15rem;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
 }
 .my-flip-image img{
    width: 100%;
    height: 100%;
    background-blend-mode: screen;
    object-fit: cover;   
 }
 .my-flip-heading {
     margin: 0 0 15px;
 }
 .my-flip-details {
    padding: 2rem;
 }
 .my-flip-details p {
    font-size: 15px;
    margin: 0;
    line-height: 2;
    color: #848484;
 }
 .my-flip-back-inner ul {
    list-style: none;  
    margin: 0 0 1.5rem;
    padding: 0;
 }
 .my-flip-back-text  ul li {
    text-align: center;
    color:#fff;
    font-size: 1rem;
    padding: 0.8rem 0;
 }
 .my-flip-back-inner ul li:not(:last-child) {
    border-bottom: 1px solid #ffffff;
 }
 .my-flip-price {
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
 }
 .my-flip-price h3 {
     font-size: 3rem;
     font-weight: 300;
 }
 .my-flip-btn-box {
     text-align: center;
 }
 .my-flip-btn{
    text-transform: uppercase;
    padding: 1rem 1.8rem;
    font-size: 1rem;
    background-color: #fff;
    color: #000;
    border-radius: 10rem;
    display: inline-block;
    transition: all .2s;
    color: initial;
    position: relative;
 }
 .my-flip-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    color: #000;
 }

</style>


