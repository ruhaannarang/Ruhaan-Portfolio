
let cursor=document.body.querySelector(".cursor")
let fullScreen=document.body
fullScreen.addEventListener("mousemove",(dets) => {
  // console.log(dets.x," ",dets.y)
  // console.log(dets)
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
  document.body.style.cursor = "auto"; 
});



socialLinks.addEventListener("mouseout",() => {
  cursor.style.display="block"
  document.body.style.cursor = "none"; 
  
});

gsap.registerPlugin(ScrollTrigger) 
gsap.fromTo("#firstpagephoto",
  {opacity:"0"},
  {opacity:"1",
    duration:"2",
    scrollTrigger:{
    trigger:"#firstpagephoto",
    toggleActions:"play none none none"
  }}
  
)

gsap.fromTo(".fpleft",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    // stagger:"0.1",
    scrollTrigger:{
    trigger:"#firstpagephoto",
    toggleActions:"play none none none"
  }
  }
)
gsap.fromTo(".aboutTitle",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".aboutTitle",
      // start:"bottom 100px",
      toggleActions:"restart none repeat none",
      scrub:"true"
    }

  }
)

gsap.fromTo(".firstHalf",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".firstHalf",
      start:"top 70%",
      toggleActions:"restart reset restart reset",
      scrub:"true"
    }

  }
)
gsap.fromTo(".secondHalf",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".secondHalf",
      start:"top 50%",
      toggleActions:"restart reset restart reset",
      scrub:"true"
    }

  }
)
gsap.fromTo(".thirdHalf",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".thirdHalf",
      start:"top 20%",
      toggleActions:"restart reset restart reset",
      scrub:"true"
    }

  }
)

gsap.fromTo("#thirdpagephoto",
  {x:"-40%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#thirdpagephoto",
      scrub:"true",
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })

  gsap.fromTo(".side",
  {x:"-40%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#thirdpagephoto",
      scrub:"true",
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })

  // gsap.to("#thirdpagephoto",
  // {x:"0",opacity:"1"},
  // {
  //   x:"100%",opacity:"0",
  //   duration:"1",
  //   scrollTrigger:{
  //     trigger:"#thirdpagephoto",
  //     scrub:"true",
  //     start:"bottom 30%",
  //     end:"bottom 10%",
  //     toggleActions:"restart reset restart reset"
  //   }
  // })

  // gsap.to(".side",
  // {x:"0%",opacity:"0"},
  // {
  //   x:"100%",opacity:"1",
  //   duration:"1",
  //   scrollTrigger:{
  //     trigger:"#thirdpagephoto",
  //     scrub:"true",
  //     start:"bottom 30%",
  //     end:"bottom 90%",
  //     toggleActions:"restart reset restart reset"
  //   }
  // })

  gsap.fromTo(".PROJECTS",
  {opacity:"0",x:"-400px"},
  {
    opacity:"1",
    x:"0",
    duration:"1",
    scrollTrigger:{
      trigger:".PROJECTS",
      // start:"bottom 100px",
      end:"top 50%",
      toggleActions:"restart none repeat none",
      scrub:"true"
    }

  }
)

gsap.fromTo("#firstProject",
  {x:"90%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#firstProject",
      scrub:"true",
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })

  gsap.fromTo("#secondProject",
  {x:"-90%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#secondProject",
      scrub:"true",
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })

  gsap.fromTo("#thirdProject",
  {x:"90%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#thirdProject",
      scrub:"true",
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })

  gsap.fromTo(".quote",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"1",
    scrollTrigger:{
      trigger:".quote",
      // start:"bottom 100px",
      // end:"top 50%",
      toggleActions:"restart none repeat none",
      scrub:"true"
    }

  }
)

gsap.fromTo(".skills",
  {y:"-50%",opacity:"0"},
  {
    y:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".skills",
      scrub:"true",
      start:"top 90%",
      end:"top 30%",
      // dragger:"0.2",
      toggleActions:"restart reset restart reset"
    }
  })
