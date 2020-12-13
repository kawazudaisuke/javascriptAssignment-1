'use strict';
    let milSec = 0;//ミリ秒
    let sec = 0;//秒
    let minute = 0;//分
    
    var intervalID;//setIntervalが代入された変数

    let secPad = 0;//桁数を足す為の変数
    let minutePad = 0;//桁数を足す為の変数
    
    
  function countUp(){
        if (milSec<100){//ミリ秒のカウント
            milSec++;
            document.getElementById("milSec").textContent = Math.floor(milSec/10);//ミリ秒を一桁で表す為に10で割った数の小数点以下を削除
            
          if(milSec === 99){//秒のカウントの条件
              milSec = 0;
              sec++;
                if(sec<10){
                    secPad = "0" + sec;
                }else{
                    secPad = sec;
                }
              document.getElementById("sec").textContent = secPad;
          }
          
             if(sec === 59){//分のカウントの条件
                sec = 0;
                minute++;
                if(minute<10){
                    minutePad = "0" + minute;
                }else{
                    minutePad = minute;
                }
                document.getElementById("minute").textContent = minutePad;
             }
        }
        
  }
   
 function resetCountUp(){
    clearInterval(intervalID);
    document.getElementById("milSec").textContent = "0";
    document.getElementById("sec").textContent = "00";
    document.getElementById("minute").textContent ="00";
    milSec = 0;
    sec = 0;
    minute = 0;
}   
   

function startCountUp(){
  intervalID = setInterval(countUp,10);
    
}

function stopCountUp(){
    clearInterval(intervalID);
}


