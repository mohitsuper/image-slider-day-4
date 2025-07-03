const left = document.querySelector(".left");
const right = document.querySelector(".right");
const silder = document.querySelectorAll(".silder");
let sliderValue = 0;
const silderLenth = silder.length;
const maxSlider = -100*(silderLenth-1);
console.log(maxSlider);
    right.addEventListener("click",()=>{
        if(sliderValue>maxSlider){
            sliderValue -=100;
            silder.forEach((value)=>{
                value.style.transform = `translateX(${sliderValue}%)`;
            })
        }
    })


left.addEventListener("click",()=>{
    if(sliderValue<0){
        sliderValue +=100;
        silder.forEach((value)=>{
                value.style.transform = `translateX(${sliderValue}%)`;
        })
    }
    console.log(sliderValue);
})

