let cursor=document.body.querySelector(".cursor")
let fullScreen=document.body
fullScreen.addEventListener("mousemove",(dets) => {
  // console.log(dets.x," ",dets.y)
  gsap.to(cursor,{
      x:dets.x-12,
      y:dets.y-12

  })
}
)

let projectLinks=document.querySelectorAll(".projectLink")
projectLinks.forEach(projectLink => {
  projectLink.addEventListener("mouseover",() => {
    cursor.style.display="none"
    document.body.style.cursor = "auto"; // default cursor show karna

});
}
)
projectLinks.forEach(projectLink => {
  projectLink.addEventListener("mouseout",() => {
    cursor.style.display="block"
    document.body.style.cursor = "none"; // default cursor show karna

});
}
)

let socialLinks=document.querySelector(".socialLinks")

  socialLinks.addEventListener("mouseover",() => {
    cursor.style.display="none"
    document.body.style.cursor = "auto"; // default cursor show karna

});



  socialLinks.addEventListener("mouseout",() => {
    cursor.style.display="block"
    document.body.style.cursor = "none"; // default cursor show karna

});
