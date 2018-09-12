<template>
  <div>
    <div id="reg-main">

    <!-- Registration Form -->
        <div class="login" id="reg-card">

        <img class="card-img-top" id="reg-img" src="../assets/reg-background.png"><br><br>

        <div class="reg-body">
        <div class="login-head">
        <hr class="horizontal-reg">
        <h5>Register </h5>
        <hr class="horizontal-reg"> 
        </div>

        <div class="reg-form">    
        <form action="" method = "post">

            <label class="reg-label" id="reg-name">Name :</label>
            <input type="text" name = "reg-name" placeholder=" Ex. Juan De la Cruz ,   . . ." align="left" required>        
            <br>
            <label class="reg-label" id="reg-email">Email :</label>
            <input type="email" name="reg-email" placeholder=" Ex. juan@gmail.com ,   . . ." align="right" required>
            <br>
            <label class="reg-label" id="reg-username">Username :</label>
            <input type="text" name = "reg-username" placeholder=" Ex. Juan1234 ,   . . ." align="left" required>        
            <br>
            <label class="reg-label" id="reg-pass">Password :</label>
            <input type="password" name="reg-pass" align="right" required>
            <br>
            <label class="reg-label" id="reg-pass-confirm">Confirm Password :</label>
            <input type="password" name= "reg-pass-confirm" align="right" required>
            <br><br>
            <h6 class="reg-option">Register as:</h6>

            <div class="radio">
            <label><input type="radio" name="optradio" id="own" >Owner</label>
            </div>

            <div class="radio ">
            <label><input type="radio" name="optradio" id="cust">Customer</label>
            </div>
        
            <button class="btn btn-outline-info btn-md" id="reg-submit">Sign me up!</button>   
            

        </form>
        </div>
        </div>

        </div><!-- End of Reg Form -->
    </div>	
  </div>
</template>

<script>
export default {
  name: "Registration"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
