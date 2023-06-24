const loginBtn=document.getElementById("Login");
loginBtn.addEventListener('click',function(event){
    console.log("amake click marse");
     
    const LoginArea=document.getElementById("LoginArea");
    LoginArea.style.display='none';

    const transArea=document.getElementById("Trans-Area");
    transArea.style.display="block";
});