var Lsignup=document.getElementById('L-signup')
var signup=document.getElementById('signup-page')
var loginPage=document.getElementById('login-page')
var usignin=document.getElementById('u-signin')
var emailInput=document.getElementById('email-input')
var passworInput=document.getElementById('Password-input')
var signupNameInput=document.getElementById('signupNameInput')
var signupEmailInput=document.getElementById('signupEmailInput')
var signupPaswwordInput=document.getElementById('signupPaswwordInput')
var signupbutton=document.getElementById('signupbutton')
var signinemailinput=document.getElementById('email-input')
var signinpassinput=document.getElementById('Password-input')
var homepage=document.getElementById('home-page')
var signinbutton=document.getElementById('signinbutton')
var logout=document.getElementById('logout')
var welcome=document.getElementById('welcome')
var logged=false
var accounts=[]
var account={}
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var nameRegex=/^[a-zA-Z][a-zA-Z0-9]{3,}$/

accounts=JSON.parse(localStorage.getItem('account'))||[]

function signinpage(){
    if(accounts.length==0){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "please sign up first",
            showConfirmButton: false,
            timer: 1500
          }); 
    }
    else{
        for(var i=0;i<accounts.length;i++){
            if((signinemailinput.value==accounts[i].email)&&(signinpassinput.value===accounts[i].password)){
            loginPage.style.display='none'
            homepage.style.display='block'
            welcome.innerHTML=`<div class=" text-center shadow-lg w-50 p-5"><h1>Welcome ${accounts[i].name}</h1></div>`
            logged=true;
            break;
            } 
            
                }
                if(logged==false){
                    Swal
    .fire({
        icon: "error",
        title: "Oops...",
        text: "wrong email or password",
        footer: '<a href="#">Why do I have this issue?</a>'
      }); 
                }
    }
    if(signinemailinput.value==""||signinpassinput==""){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "please fill in  your data",
            showConfirmButton: false,
            timer: 1500
          });
    }
}
signinbutton.addEventListener('click',signinpage)
logout.addEventListener('click',function(){
    loginPage.style.display='block'
    homepage.style.display='none'
})
function signuppage(){
     account={name:signupNameInput.value,
        email:signupEmailInput.value,
       password:signupPaswwordInput.value
    }
if(!check()) {
    if(checkemailvalidation()&&checknamevalidation()){
    accounts.unshift(account)
localStorage.setItem('account',JSON.stringify(accounts))
console.log(accounts)
Swal.fire({
    position: "center",
    icon: "success",
    title: "Your Acoount has been Registred",
    showConfirmButton: false,
    timer: 1500
  });
}else{
    Swal
    .fire({
        icon: "error",
        title: "Oops...",
        text: "Follow the rules",
        footer: '<a href="#">Why do I have this issue?</a>'
      }); 
} 
  }
else{
    Swal
    .fire({
        icon: "error",
        title: "Oops...",
        text: "this email is already in use",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}

}



signupbutton.addEventListener('click',signuppage)

function check(){
    for(var i=0;i<accounts.length;i++){
        if(signupEmailInput.value===accounts[i].email){
            return true
        }
    }
}
signupNameInput.addEventListener('input',checknamevalidation)
signupEmailInput.addEventListener('input',checkemailvalidation)
function checknamevalidation(){
    if(nameRegex.test(signupNameInput.value)){
        signupNameInput.classList.remove('is-invalid')
    signupNameInput.classList.add('is-valid')
    return true
    }
    else{
        
        signupNameInput.classList.add('is-invalid')
        signupNameInput.classList.remove('is-valid')
return false
    }
}
function checkemailvalidation(){
    if(emailRegex.test(signupEmailInput.value)){
    signupEmailInput.classList.add('is-valid')
    signupEmailInput.classList.remove('is-invalid')
return true
    }
    else{
        signupEmailInput.classList.add('is-invalid')
        signupEmailInput.classList.remove('is-valid')
return false
    }
}
Lsignup&&signup&&loginPage
Lsignup.addEventListener('click',function(e){
    signup.style.display='block'
    loginPage.style.display='none'
})
usignin.addEventListener('click',function(e){
    signup.style.display='none'
    loginPage.style.display='block'
})
function signinbase(){
signinemailinput.value=''
signinpassinput.value=''
}
signinbutton.addEventListener('click',signinbase)
function signupbase(){
    signupEmailInput.value=""
    signupNameInput.value=""
    signupPaswwordInput.value=""

}
signupbutton.addEventListener('click',signupbase)