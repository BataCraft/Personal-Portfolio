let navbar = () =>{
    let menu = document.querySelector(".togle")
    let mbl = document.querySelector(".mbl")
    let a = 0

    menu.addEventListener("click",()=>{
        if (a==0){
            mbl.style.left= 0
            a = 1
        }
        else {
            mbl.style.left = "-100%"
            a = 0
        }
    })

}


navbar();

let loco = () =>{
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#warpper'),
        smooth: true
    });
}
loco();