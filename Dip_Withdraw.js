const btnDeposit=document.getElementById('btnDeposit');


btnDeposit.addEventListener('click',function(){
    var totalDepo=parseFloat(document.getElementById("totalDepo").innerText);
    var DepositAmmount=parseFloat(document.getElementById("DepositAmmount").value);
    totalDepo=totalDepo+DepositAmmount;
    console.log(totalDepo);
    document.getElementById("totalDepo").innerHTML = totalDepo ;

    var totalBal=parseFloat(document.getElementById("totalBal").innerText);
    totalBal=totalBal+DepositAmmount;
    console.log(totalBal);
    document.getElementById("totalBal").innerText=totalBal;   
 });


const btnWithdraw=document.getElementById('btnWithdraw');


btnWithdraw.addEventListener('click',function(){
    var totalWithdraw=parseFloat(document.getElementById("totalWithdraw").innerText);
    var WithdrawAmmount=parseFloat(document.getElementById("WithdrawAmmount").value);
    totalWithdraw=totalWithdraw+WithdrawAmmount;
    console.log(totalWithdraw);
    document.getElementById("totalWithdraw").innerHTML = totalWithdraw ;

    var totalBal=parseFloat(document.getElementById("totalBal").innerText);
    totalBal=totalBal-WithdrawAmmount;
    console.log(totalBal);
    document.getElementById("totalBal").innerText=totalBal;   
 });


