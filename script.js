  //https://api-thirukkural.vercel.app/api?num=x

async function promise(){
     const number = document.getElementById('Thirukkural').value
     var data = await fetch(`https://api-thirukkural.vercel.app/api?num=${number}`)
     const res  = await data.json()
       console.log(res)
     var data = document.querySelector('.space')  
     
      data.innerHTML=` 
      <div class="img"><img src="https://th.bing.com/th/id/OIP.DlukmfToYVUpp2e5IrvxlAHaH9?w=173&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"></div>
         <div class="tamil"><h4>${res.sect_tam}-${res.chapgrp_tam}</h4></div><br>
         <div class="tamil"><h5>அதிகாரம் : ${res.chap_tam}</h5></div><br>
         <div class="tamil"><h5>திருக்குறள்:<br></h5></div>
         <div class="tamil"><h6> ${res.line1}</h6></div>
         <div class="tamil"><h6>${res.line2}</h6></div>
         <div class="tamil"><h5>குறள் விளக்கம்: <br> <h6>${res.tam_exp}</h6></h5></div>
         <br><hr>

         <div class="english"><h4>${res.sect_eng}-${res.chapgrp_eng}</h4></div><br>
         <div class="english"><h5>Chapter: ${res.chap_eng}</h5></div><br>
         <div class="english"><h5>Thirukkural: <br> <h6>${res.eng}</h6> </h5></div><br>
         <div class="english"><h5>Kural Explanation: <br> <h6>${res.eng_exp}</h6> </h5></div><br>
        
        
      `
}

promise()

 var button= document.querySelector('.btn')
   button.addEventListener('click',promise)

    

    