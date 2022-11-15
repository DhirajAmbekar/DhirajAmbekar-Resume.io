
let m = document.getElementsByClassName("icon-circle1")[0].style
let k = document.getElementsByClassName("icon-circle2")[0].style
let l = document.getElementsByClassName("icon-circle3")[0].style
let o = document.getElementsByClassName("icon-circle4")[0].style
document.getElementById("menubar").addEventListener("click",()=>{
   
    if(m.bottom == "125px"|| k.bottom == "195px" || l.bottom == "265px" || o.bottom == "335px" ){
        m.bottom = "55px"
        m.transition = ".3s"
        k.bottom = "55px"
        k.transition = ".3s"
        l.bottom = "55px"
        l.transition = ".3s"
        o.bottom = "55px"
        o.transition = ".3s"
    }
    else{
        m.bottom = "125px"
        m.transition = ".3s"
        k.bottom = "195px"
        k.transition = ".3s"
        l.bottom = "265px"
        l.transition = ".3s"
        o.bottom = "335px"
        o.transition = ".3s"
    }
})
function backtohome(){
    if(m.bottom == "125px"|| k.bottom == "195px" || l.bottom == "265px" || o.bottom == "335px" ){
        m.bottom = "55px"
        m.transition = ".3s"
        k.bottom = "55px"
        k.transition = ".3s"
        l.bottom = "55px"
        l.transition = ".3s"
        o.bottom = "55px"
        o.transition = ".3s"
    }
}