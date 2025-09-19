let cursor=document.body.querySelector(".cursor")
let fullScreen=document.body
fullScreen.addEventListener("mousemove",(dets) => {
  console.log(dets.x," ",dets.y)
  gsap.to(cursor,{
      x:dets.x-12,
      y:dets.y-12

  })
}
)