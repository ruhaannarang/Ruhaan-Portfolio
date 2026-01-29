
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

gsap.fromTo(".firstHalf",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".firstHalf",
      start:"top 70%",
      end:"top 30%",
      toggleActions:"restart reset restart reset",
      scrub:1
    }

  }
)
gsap.fromTo(".secondHalf",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".firstHalf",
      start:"top 50%",
      end:"top 30%",
      toggleActions:"restart reset restart reset",
      scrub:1
    }

  }
)
gsap.fromTo(".thirdHalf",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".firstHalf",
      start:"top 30%",
      end:"top 15%",
      // end:"top 50%",
      toggleActions:"restart reset restart reset",
      scrub:1
    }

  }
)
gsap.fromTo(".thirdpage",
  {opacity:"0"},
  {
    opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:".thirdpage",
      start:"top 50%",
      end:"top 10%",
      toggleActions:"restart reset restart reset",
      scrub:1
    }

  }
)


  gsap.fromTo(".side",
  {x:"-40%",opacity:"0"},
  {
    x:"0",opacity:"1",
    duration:"2",
    scrollTrigger:{
      trigger:"#thirdpagephoto",
      scrub:1,
      start:"top 90%",
      end:"top 30%",
      toggleActions:"restart reset restart reset"
    }
  })


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
  