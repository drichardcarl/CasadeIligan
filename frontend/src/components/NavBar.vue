<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Casa de Iligan</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about-us">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact-us">Contact Us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Find
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <h6 class="dropdown-header">Houses</h6>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Apartments</a>
              <a class="dropdown-item" href="#">Dorms</a>
              <a class="dropdown-item" href="#">Boarding Houses</a>
              <a class="dropdown-item" href="#">Bed Spacers</a>
              <a class="dropdown-item" href="#">Transient Homes</a>
            </div>
          </li>
        </ul>

        <template v-if="!authenticated">
          <button type="button" class="btn btn-outline-dark btn-sm mr-1" data-toggle="modal" data-target="#modalSignUp">
            <i class="fas fa-user-plus mr-2"></i>Sign-Up
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#modalSignIn">
            <i class="fas fa-sign-in-alt mr-2"></i>Sign-In
          </button>
        </template>

        <template v-if="authenticated">
          <div class="btn-group">
            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ this.user.username }}
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <h6 class="dropdown-header">{{ this.user.email }}</h6>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Account Settings</a>
              <a class="dropdown-item" href="#" v-on:click="logout">Logout</a>
            </div>
          </div>
        </template>
      </div>
    </nav>

    <!-- Sign-In Modal -->
    <div class="modal fade" id="modalSignIn" tabindex="-1" role="dialog" aria-labelledby="modalSignInTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalSignInTitle">Sign-In</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="onSignIn">
              <div class="form-group">
                <label for="siEmail">Email address</label>
                <input v-model="si_email" type="email" class="form-control" id="siEmail" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="siPassword">Password</label>
                <input v-model="si_password" type="password" class="form-control" id="siPassword" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary col-4 offset-4">Sign-In</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign-Up Modal -->
    <div class="modal fade" id="modalSignUp" tabindex="-1" role="dialog" aria-labelledby="modalSignUpTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalSignUpTitle">Sign-Up</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="onSignUp">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="userFName">First Name</label>
                  <input type="text" class="form-control" id="userFName" placeholder="First Name" v-model="su_fname">
                </div>
                <div class="form-group col-md-6">
                  <label for="userLName">Last Name</label>
                  <input type="text" class="form-control" id="userLName" placeholder="Last Name" v-model="su_lname">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="suEmail">Email</label>
                  <input type="email" class="form-control" id="suEmail" placeholder="Email" v-model="su_email">
                </div>
                <div class="form-group col-md-6">
                  <label for="suPassword">Password</label>
                  <input type="password" class="form-control" id="suPassword" placeholder="Password" v-model="su_password">
                </div>
              </div>
              <div class="form-group">
                <label for="userAddress">Address</label>
                <input type="text" class="form-control" id="userAddress" placeholder="1234 Main St" v-model="su_address">
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="userCity">City</label>
                  <input type="text" class="form-control" id="userCity" v-model="su_city">
                </div>
                <div class="form-group col-md-6">
                  <label for="userProvince">Province</label>
                  <input type="text" class="form-control" id="userProvince" v-model="su_province">
                </div>
                <div class="form-group col-md-3">
                  <label for="userZip">Zip</label>
                  <input type="text" class="form-control" id="userZip" v-model="su_zip">
                </div>
              </div>
              <button type="submit" class="btn btn-primary col-4 offset-4">Sign-Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      si_email: "",
      si_password: "",
      si_username: "",

      su_fname: "",
      su_lname: "",
      su_email: "",
      su_password: "",
      su_address: "",
      su_city: "",
      su_province: "",
      su_zip: "",

      user: {},

      authenticated: false
    };
  },
  name: "NavBar",
  methods: {
    getData() {
      let address =
        this.su_address +
        ", " +
        this.su_city +
        ", " +
        this.su_province +
        ", " +
        this.su_zip;
      let username = this.getUsername(this.su_email);

      let data = {
        username: username,
        email: this.su_email,
        password1: this.su_password,
        password2: this.su_password,
        address: address,
        first_name: this.su_fname,
        last_name: this.su_lname
      };

      console.log(data);
      return data;
    },
    getUsername(email) {
      let username = email.match("[^@]*")[0];
      console.log(username);
      return username;
    },
    getAuthUser() {
      // check if a user is logged-in
      const url = "/auth/user/";
      this.$backend.get(url).then(
        response => {
          // someone is logged-in
          console.log(response);
          this.authenticated = true;
          // this.si_username = response.data.username;
          // this.si_email = response.data.email;
          this.user = response.data;
        },
        error => {
          // no logged-in user
          console.log(error);
          this.authenticated = false;
        }
      );
    },
    logout() {
      const url = "/auth/logout/";
      this.$backend.post(url).then(
        response => {
          console.log(response);
          this.getAuthUser();
        },
        error => {
          console.log(error);
        }
      );
    },

    onSignIn() {
      this.si_username = this.getUsername(this.si_email);
      const url = "/auth/login/";
      this.$backend
        .post(url, {
          username: this.si_username,
          email: this.si_email,
          password: this.si_password
        })
        .then(
          response => {
            console.log(response);
            this.getAuthUser();
            $("#modalSignIn").modal("hide");
          },
          error => {
            alert("Invalid Email Address or Password!");
          }
        );
    },
    onSignUp() {
      const url = "/auth/register/";
      this.$backend.post(url, this.getData()).then(
        response => {
          console.log(response);
          this.getAuthUser();
          $("#modalSignUp").modal("hide");
        },
        error => {
          console.log(error.response);
        }
      );
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.getAuthUser();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-header img {
  width: 70%;
  height: 60px;
  float: left;
}
.navbar-btn {
  margin: 10px;
  padding: 8px 20px 8px 20px;
}
/*
.btn-outline-primary{
	margin-left: 60px;
}*/
.navbar-nav li {
  margin-right: 20px;
}
.row {
  margin-top: 30px;
}

.searchbar {
  margin-left: 0;
}
</style>
