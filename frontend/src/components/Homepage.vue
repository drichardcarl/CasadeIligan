<template>
  <div>
    <div class="container-fluid">
      <div class="row">

        <div id="slides" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" class="active"></li>
            <li data-target="#slides" data-slide-to="1" ></li>
            <li data-target="#slides" data-slide-to="2" ></li>
            <li data-target="#slides" data-slide-to="3" ></li>
          </ul>	
          <div class="carousel-inner" >
            <div class="carousel-item active" >
              <img src="../assets/carousel-01.png">
              <div class="carousel-caption">
                  <h2 class="display-2"> WELCOME </h2>
                  <h3 class="display-2">Casa de Iligan </h3>
              </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/carousel-02.png">
                <div class="carousel-caption">
                    <h4 class="display-2"> Transient Houses </h4>
                    <button type="button" class="btn btn-info btn-lg" onclick="window.location.href='/transient'"> Learn More </button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/carousel-03.png">
                <div class="carousel-caption">
                    <h4 class="display-2"> Dormitories </h4>
                    <button type="button" class="btn btn-info btn-lg" onclick="window.location.href='/dorm'"> Learn More </button>
                </div>
            </div>

            <div class="carousel-item">
                <img src="../assets/carousel-04.png">
                <div class="carousel-caption">
                    <h4 class="display-2"> Apartments </h4>
                    <button type="button" class="btn btn-info btn-lg" onclick="window.location.href='/apartment'"> Learn More </button>
                </div>
            </div>

          </div>
          <a class="carousel-control-prev" href="#slides" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#slides" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class=" jumbotron">
            <div class="col-xs-12 col-sm-12 col-md-9 col-xl-10">
                <p class="lead">Casa de Iligan is an online marketplace and hospitality service, enabling people to lease or rent short-term lodging including vacation rentals, apartment rentals, homestays, hostel beds, or hotel rooms within the City of Iligan. </p>
            </div>
        </div>
      </div>
    </div>

    <div class="container-fluid padding">
    <div class="row padding">
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" id="card-img-home" src="../assets/card-01.png">
                <div class="card-body">
                    <h4 class="card-title">Transient Houses</h4><br>
                    <p class="card-text"> Transient Houses offer self-catering studios and apartments with free WiFi. </p><br>
                    
                    
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" id="card-img-home" src="../assets/card-02.png">
                <div class="card-body">
                    <h4 class="card-title">Apartments</h4><br>
                    <p class="card-text"> A suite of rooms forming one residence, typically in a building containing a number of these..</p>
                    <p>A large building containing residential suites; an apartment building.</p>
                    
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" id="card-img-home" src="../assets/card-03.png">
                <div class="card-body">
                    <h4 class="card-title">Boarding Houses</h4><br>
                    <p class="card-text"> A large bedroom for a number of people in a school or institution..</p>
                    <p>A university or college hall of residence or hostel.</p>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// import APIService from "../APIService";
// const api = new APIService();
// export default {
//   data: function() {
//     return {
//       users: []
//     };
//   },
//   name: "Homepage",
//   methods: {},
//   mounted: function() {
//     this.users = api.getUsers();
//     console.log(this.users);
//   }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*CAROUSEL*/
.carousel-caption {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.carousel-caption h2 {
  font-size: 500%;
  text-shadow: 1px 1px 15px #000;
}
.carousel-caption h3 {
  margin-top: 10px;
  font-size: 300%;
  font-weight: 500%;
  text-shadow: 1px 1px 15px #000;
  padding-bottom: 1rem;
}
.carousel-caption h4 {
  margin-top: 100px;
  font-size: 300%;
  font-weight: 500%;
  text-shadow: 1px 1px 15px #000;
  padding-bottom: 1rem;
}
.carousel-item {
  width: 100%;
  height: 400px;
}

.carousel-item > img {
  width: 100%;
  height: auto;
}

.btn-outline-info {
  margin: 5px 0 20px 10px;
}
.btn-outline-info:hover {
  background-color: #0066cc;
  border: 1px solid #563d7c;
}

.jumbotron {
  padding: 20px;
  border-radius: 0;
}
/*LOGIN*/

.login {
  margin-top: 30px;
  background-color: #ccebff;
  border: 2px solid #563d7c;
}
hr {
  border-top: 2px solid #b4b4b4;
  width: 45%;
}
.login-head h5 {
  text-align: center;
  padding-top: 0.5rem;
  color: #1aa3ff;
}
.login-head p {
  color: blue;
}
.login-field label {
  text-align: left;
  display: inline-block;
  width: 80px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.login-field {
  padding-top: 10px;
}
.login-field a {
  padding: 0;
  padding-bottom: 0.5rem;
}
.login-field button {
  margin-bottom: 40px;
}
/** CARDS for WELCOME page**/

#card-img-home {
  width: 85%;
  height: 260px;
  border-radius: 90%;
}
.card {
  height: 100%;
}

/**-- Registration Form-- **/

.card-img-top {
  margin-top: 35px;
}
.login-head {
  margin-top: 30px;
}
.reg-label {
  text-align: left;
  display: inline-block;
  width: 135px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#reg-img {
  width: 65%;
  height: 250px;
  border: 1px solid #563d7c;
  border-radius: 80%;
}
#reg-card {
  margin-top: 5px;
  width: 470px;
  height: 830px;
  margin-bottom: 0;
}
.reg-body {
  box-sizing: border-box;
  width: 80%;
  border: 1.2px solid #563d7c;
  float: center;
}
#reg-submit {
  margin: 20px 0 20px 0;
}

.reg-form .radio {
  margin-left: 90px;
}
.reg-form input[id="cust"] {
  margin-left: 20px;
}
/** For Hompage**/
.card-container {
  border: 2px solid black;
  margin-top: 30px;
}
.card-boundary {
  margin-bottom: 55px;
}
.box-img {
  height: 50px;
  width: 40%;
  float: left;
}
.owner-box {
  text-align: left;
  box-sizing: border-box;
  width: 90%;
  height: 150px;
  padding: 20px;
  border: 1px solid black;
  float: right;
}
</style>
