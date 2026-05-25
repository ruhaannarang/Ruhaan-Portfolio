
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




// let navitems=document.querySelector(".navItems")

// navitems.addEventListener("mouseover",() => {
//   cursor.style.display="none"
//   document.body.style.cursor = "auto"; 
// });



// navitems.addEventListener("mouseout",() => {
//   cursor.style.display="block"
//   document.body.style.cursor = "none"; 
  
// });




gsap.registerPlugin(ScrollTrigger) 
gsap.fromTo(".firstpage",
  {opacity:"0"},
  {opacity:"1",
    duration:"2",
    scrollTrigger:{
    trigger:".firstpage",
    toggleActions:"play none none none"
  }}
  
)

gsap.fromTo(".aboutTitle",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".aboutTitle",
      toggleActions:"restart none repeat none",
      scrub:1
    }

  }
)

// gsap.fromTo(".firstHalf",
//   {opacity:"0"},
//   {
//     opacity:"1",
//     duration:"2",
//     scrollTrigger:{
//       trigger:".firstHalf",
//       start:"top 70%",
//       end:"top 30%",
//       toggleActions:"restart reset restart reset",
//       scrub:1
//     }

//   }
// )
gsap.fromTo(".firstHalf",
  {
    opacity: 0,
    z: -400,
    scale: 0.5
  },
  {
    opacity: 1,
    z: 0,
    scale: 1,
    duration: 2,
    ease: "power3.out",

    scrollTrigger:{
      trigger: ".firstHalf",
      start: "top 90%",
      end: "top 30%",
      toggleActions: "restart reset restart reset",
      scrub: 1
    }
  }
)

gsap.fromTo(".secondHalf",
  {opacity:"0",
    z:-400,
    scale:0.5
  },
  {
    opacity:"1",
    z:0,
    scale:1,
    duration:"2",
    ease:"power3.out",
    scrollTrigger:{
      trigger:".secondHalf",
      start:"top 70%",
      end:"top 30%",
      toggleActions:"restart reset restart reset",
      scrub:1
    }

  }
)
gsap.fromTo(".thirdHalf",
  {opacity:"0",
    z:-400,
    scale:0.5
  },
  {
    opacity:"1",
    z:0,
    scale:1,
    duration:"2",
    ease:"power3.out",
    scrollTrigger:{
      trigger:".thirdHalf",
      start:"top 50%",
      end:"top 15%",
      // end:"top 50%",
      toggleActions:"restart reset restart reset",
      scrub:1
    }

  }
)


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
      scrub:1
    }

  }
)
  gsap.fromTo(".use",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"1",
    scrollTrigger:{
      trigger:".use",
      toggleActions:"restart none repeat none",
      scrub:1
    }

  }
)

gsap.fromTo(".skilldept1",
  {x:"50%",opacity:"0",scale:"0"},
  {
    x:"0",opacity:"1",
    scale:1,
    duration:"1",
    scrollTrigger:{
      trigger:".langs",
      scrub:1,
      start:"top 90%",
      end:"top 60%",
      toggleActions:"restart reset restart reset"
    }
  })
gsap.fromTo(".skilldept2",
  {x:"-50%",opacity:"0",scale:"0"},
  {
    x:"0",opacity:"1",
    scale:1,
    duration:"1",
    scrollTrigger:{
      trigger:".web",
      scrub:1,
      start:"top 90%",
      end:"top 60%",
      toggleActions:"restart reset restart reset"
    }
  })
gsap.fromTo(".skilldept3",
  {x:"50%",opacity:"0",scale:"0"},
  {
    x:"0",opacity:"1",
    scale:1,
    duration:"1",
    scrollTrigger:{
      trigger:".aitech",
      scrub:1,
      start:"top 90%",
      end:"top 60%",
      toggleActions:"restart reset restart reset"
    }
  })
gsap.fromTo(".skilldept4",
  {x:"-50%",opacity:"0",scale:"0"},
  {
    x:"0",opacity:"1",
    scale:1,
    duration:"1",
    scrollTrigger:{
      trigger:".others",
      scrub:1,
      start:"top 90%",
      end:"top 60%",
      toggleActions:"restart reset restart reset"
    }
  })

gsap.fromTo("#firstProject",
  {x:"90%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#firstProject",
      scrub:1,
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
      scrub:1,
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })

  gsap.fromTo("#forthProject",
  {x:"-90%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#forthProject",
      scrub:1,
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })
    gsap.fromTo("#sixthProject",
  {x:"-90%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#sixthProject",
      scrub:1,
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })
   gsap.fromTo("#fifthProject",
  {x:"90%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#fifthProject",
      scrub:1,
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
      scrub:1,
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
      scrub:1
    }

  }
)


gsap.fromTo(".socials",
  {x:"40%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".socials",
      scrub:1,
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })

  gsap.fromTo(".box",
  {x:"-40%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".box",
      scrub:1,
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })
  