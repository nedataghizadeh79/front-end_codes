

let show_modal=document.querySelector(".show-modal")
let modal=document.querySelector(".modal")
let backdrop=document.querySelector(".backdrop")
let close_modal=document.querySelector(".close-modal")

show_modal.addEventListener( "click" , ()=>{
    modal.style.opacity="1"
    backdrop.style.display="block"
    modal.style.transform = "translateY(20vh)"      
})


function close(){
    modal.style.opacity="0"
    modal.style.transform="translateY(-100vh)"
    backdrop.style.display="none"
}

backdrop.addEventListener("click",close)
close_modal.addEventListener("click" , close)



