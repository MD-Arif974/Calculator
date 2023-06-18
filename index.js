let btnArr = document.querySelectorAll(".btn");
let ScreenCont = document.querySelector('.input-container');

let result = "";



btnArr.forEach((item) => {
      item.addEventListener('click',function(e) {
          let val = e.target.innerText;
          
         
         if(val === "C") {
               result = "";
               ScreenCont.innerText = "0";
          }
          else if(val === "X") {
             result += "*";
             ScreenCont.innerText += "*";
          }
          else if(val === "=") {
              let ans  = eval(result);
              ScreenCont.innerText = ans;
              console.log(ans)
          }
          else{
            if(result.length === 0 && ScreenCont.innerText === "0") {
                ScreenCont.innerText = "";
            }
            result += val;
            ScreenCont.innerText += val;
          }

          
      })
})