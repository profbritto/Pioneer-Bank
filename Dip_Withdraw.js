const btnDeposit=document.getElementById('btnDeposit');


btnDeposit.addEventListener('click',function(){
    var totalDepo=parseFloat(document.getElementById("totalDepo").innerText);
    var DepositAmmount=parseFloat(document.getElementById("DepositAmmount").value);
    if (DepositAmmount>=0) {
        
    
    totalDepo=totalDepo+DepositAmmount;
    console.log(totalDepo);
    document.getElementById("totalDepo").innerHTML = totalDepo ;

    var totalBal=parseFloat(document.getElementById("totalBal").innerText);
    totalBal=totalBal+DepositAmmount;
    console.log(totalBal);
    document.getElementById("totalBal").innerText=totalBal; 
    }else{
        alert("Enter a valid amount");

    }  
 });


const btnWithdraw=document.getElementById('btnWithdraw');


btnWithdraw.addEventListener('click',function(){
    var totalBal=parseFloat(document.getElementById("totalBal").innerText);
    if(totalBal>0){
    var totalWithdraw=parseFloat(document.getElementById("totalWithdraw").innerText);
    var WithdrawAmmount=parseFloat(document.getElementById("WithdrawAmmount").value);
    if (WithdrawAmmount>=0) {
        
        totalWithdraw=totalWithdraw+WithdrawAmmount;
        console.log(totalWithdraw);
        document.getElementById("totalWithdraw").innerHTML = totalWithdraw ;
        
        totalBal=totalBal-WithdrawAmmount;
        if(totalBal<0){
            totalBal=totalBal+WithdrawAmmount;
            totalWithdraw=totalWithdraw-WithdrawAmmount;
            document.getElementById("totalWithdraw").innerHTML = totalWithdraw ;
            alert("Please Change the Ammount!");
        }
        console.log(totalBal);
        document.getElementById("totalBal").innerText=totalBal; 
    }else{
        alert("Enter a valid amount");
    }
    }else{
        document.getElementById("totalBal").innerText=0;
        alert("You have no balance to withdraw");
        
    }  
 });


