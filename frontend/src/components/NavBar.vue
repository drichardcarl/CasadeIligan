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
        <button type="button" class="btn btn-outline-dark btn-sm mr-1" data-toggle="modal" data-target="#modalSignUp">
          <i class="fas fa-user-plus mr-2"></i>Sign-Up
        </button>
        <button type="button" class="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#modalSignIn">
          <i class="fas fa-sign-in-alt mr-2"></i>Sign-In
        </button>
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
            <form>
              <div class="form-group">
                <label for="userEmail">Email address</label>
                <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="userPassword">Password</label>
                <input type="password" class="form-control" id="userPassword" placeholder="Password">
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="keepLogged">
                <label class="form-check-label" for="keepLogged">Keep me signed in</label>
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
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="userFName">First Name</label>
                  <input type="text" class="form-control" id="userFName" placeholder="First Name">
                </div>
                <div class="form-group col-md-6">
                  <label for="userLName">Last Name</label>
                  <input type="text" class="form-control" id="userLName" placeholder="Last Name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="userEmail">Email</label>
                  <input type="email" class="form-control" id="userEmail" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                  <label for="userPassword">Password</label>
                  <input type="password" class="form-control" id="userPassword" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <label for="userAddress">Address</label>
                <input type="text" class="form-control" id="userAddress" placeholder="1234 Main St">
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="userCity">City</label>
                  <input type="text" class="form-control" id="userCity">
                </div>
                <div class="form-group col-md-6">
                  <label for="userProvince">Province</label>
                  <input type="text" class="form-control" id="userProvince">
                </div>
                <div class="form-group col-md-3">
                  <label for="userZip">Zip</label>
                  <input type="text" class="form-control" id="userZip">
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
  name: "NavBar"
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
