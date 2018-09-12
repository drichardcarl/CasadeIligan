<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" />
      </a>
      </div>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <div class="searchbar">
        <form class="example" action="action_page.php">
        <input type="text" placeholder="  Search . . ." name="search">
        <button type="submit" class="btn btn-outline-primary navbar-btn btn-md"><i class="fa fa-search"></i></button>
      </form>
      </div>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/">Home </a></li><span class="caret"></span>
        <li class="nav-item">
          <a class="nav-link" href="/contact-us">Contact Us </a></li><span class="caret"></span>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> Types of Homes </a>
          <ul class="dropdown-menu">
            <li class="nav-item"><a class="nav-link" href="#">Transient House </a></li>
            <li class="nav-item"><a class="nav-link" href="#">Apartment </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Boarding House</a></li>
          </ul>
        </li>
      </ul>
      <a href="/register"><button class="btn btn-outline-success navbar-btn btn-md">Register</button></a>
    </div>
    </nav>
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
