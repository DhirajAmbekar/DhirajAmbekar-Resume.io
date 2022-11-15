
let m = document.getElementsByClassName("icon-circle1")[0].style
let k = document.getElementsByClassName("icon-circle2")[0].style
let l = document.getElementsByClassName("icon-circle3")[0].style
let o = document.getElementsByClassName("icon-circle4")[0].style
document.getElementById("menubar").addEventListener("click",()=>{
   
    if(m.bottom == "100px"|| k.bottom == "170px" || l.bottom == "240px" || o.bottom == "310px" ){
        m.bottom = "30px"
        m.transition = ".3s"
        k.bottom = "30px"
        k.transition = ".3s"
        l.bottom = "30px"
        l.transition = ".3s"
        o.bottom = "30px"
        o.transition = ".3s"
    }
    else{
        m.bottom = "100px"
        m.transition = ".3s"
        k.bottom = "170px"
        k.transition = ".3s"
        l.bottom = "240px"
        l.transition = ".3s"
        o.bottom = "310px"
        o.transition = ".3s"
    }
})
function backtohome(){
    if(m.bottom == "100px"|| k.bottom == "170px" || l.bottom == "240px" || o.bottom == "310px" ){
        m.bottom = "30px"
        m.transition = ".3s"
        k.bottom = "30px"
        k.transition = ".3s"
        l.bottom = "30px"
        l.transition = ".3s"
        o.bottom = "30px"
        o.transition = ".3s"
    }
}