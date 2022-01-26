window.onload = function loadFunction(){
    let navLink = document.getElementsByClassName("nav");
    for(let a=0;a<navLink.length;a++){
        navLink[a].addEventListener("mouseenter",function(event){
            let divs = event.target.getElementsByClassName("underline");
            divs[0].style.visibility="visible";
            divs[0].style.animation="on 0.25s 1";
            divs[0].style.width="100%";
        });
        navLink[a].addEventListener("mouseleave",function(event){
            let divs = event.target.getElementsByClassName("underline");
            divs[0].style.animation="off 0.25s 1";
            divs[0].style.width="1%";
        });
        let div = navLink[a].getElementsByClassName("underline");
        div[0].addEventListener("animationend",function(event){
            if(event.target.style.animationName == "off"){
                event.target.style.visibility="hidden";
            }
        });
        
    }    
}
