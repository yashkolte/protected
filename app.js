// ============================================================== HEADER BUTTON ANIMATION START ========================================================================

function runAfterApp() {
  $(".navBtn").mouseover(() => {
    gsap.to(".navBtn i:nth-child(1)", {
      duration: 0.1,
      rotate: 45,
      x: 10,
      opacity: 0,
      ease: "none",
    });

    gsap.to(".navBtn span", {
      x: 5,
    });

    gsap.to(".navBtn i:nth-child(2)", {
      duration: 0.1,
      rotate: 45,
      x: 13,
      y: -13,
      opacity: 1,
      ease: "none",
    });
  });

  $(".navBtn").mouseout(() => {
    gsap.to(".arrow-in", {
      duration: 0.1,
      rotate: 0,
      x: 0,
      opacity: 1,
      ease: "none",
    });

    gsap.to(".navBtn span", {
      x: 0,
    });

    gsap.to(".arrow-out", {
      duration: 0.1,
      rotate: 0,
      x: 0,
      y: 0,
      opacity: 0,
      ease: "none",
    });
  });

  // ============================================================== HEADER BUTTON ANIMATION END ========================================================================

  // ======================================================================== HEADER START =============================================================================

  $(document).ready(function () {
    const nav = $("header");
    const threshold = 100; // Change this to your desired scroll threshold in pixels
    const logo = $(".logo");

    $(window).scroll(function () {
      if ($(window).scrollTop() > threshold) {
        nav.addClass("scrolled");
        gsap.to(".logo", {
          duration: 0.5,
          height: "40px",
          width: "50px",
          ease: "ease-in-out",
        });
      } else {
        nav.removeClass("scrolled");
        gsap.to(".logo", {
          duration: 0.5,
          height: "80px",
          width: "90px",
          ease: "none",
        });
      }
    });
  });

  // ======================================================================== HEADER END =============================================================================

  // ======================================================================== HERO START =============================================================================

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mainVideo",
      pin: true,
      start: "-=200",
      end: "bottom +=0",
      scrub: 1,
    },
  });

  const mediaQuery = window.matchMedia("(max-width: 800px)");

  // Add the animation to the timeline conditionally based on the media query
  if (mediaQuery.matches) {
    t1.to(".mainVideo video", {
      width: "115vw",
      height: "100vh",
      position: "absolute",
      top: "30vh",
      left: "0vw",
      duration: 1,
    });
  } else {
    t1.to(".mainVideo video", {
      width: "105vw",
      height: "120vh",
      position: "absolute",
      top: "20vh",
      left: "0vw",
      duration: 1,
    });
  }

  let tween = gsap
    .to(".marquee__part", {
      xPercent: -50,
      repeat: -1,
      duration: 10,
      ease: "linear",
    })
    .totalProgress(0.5);

  gsap.set(".marquee__inner", { xPercent: -50 });

  // ============================================================== SERVICES ANIMATION START ========================================================================

  $(document).ready(function () {
    function ajaxLoad() {
      splitText();
      perspective();
    }

    ajaxLoad();

    /*----------------------------------------------------*/
    /*	SPLITTEXT
  /*----------------------------------------------------*/
    function splitText() {
      splitLines = new SplitText(
        ".perspective-slider .slide .slider-content h1",
        {
          type: "chars",
          charsClass: "char",
        }
      );

      splitLines = new SplitText(".text-anime", {
        type: "lines",
        linesClass: "text-lines",
      });

      $(".text-anime .text-lines").wrap('<div class="line-wrapper">');
    }

    /*----------------------------------------------------*/
    /*	PERSPECTIVE SLIDER
  /*----------------------------------------------------*/

    function perspective() {
      if ($(".perspective-slider").length) {
        gsap.set(".perspective-slider .slide", { perspective: 60 });

        $(".perspective-slider .slide .image").each(function () {
          var slide = $(this);
          var video = slide.find("video").get(0);

          gsap.fromTo(
            this,
            {
              rotationX: 1.8,
              scaleX: 0.95,
              z: "0vh",
            },
            {
              rotationX: -0.5,
              scaleX: 0.9,
              z: "-2vh",
              scrollTrigger: {
                trigger: slide,
                start: "top+=150px bottom",
                end: "bottom top",
                immediateRender: false,
                scrub: 0.1,
                onEnter: () => {
                  if (video) {
                    video.play();
                  }
                },
                onLeave: () => {
                  if (video) {
                    video.pause();
                  }
                },
                onEnterBack: () => {
                  if (video) {
                    video.play();
                  }
                },
                onLeaveBack: () => {
                  if (video) {
                    video.pause();
                  }
                },
              },
            }
          );
        });

        $(".perspective-slider .slide .slider-content h1").each(function () {
          gsap.from($(this).find(".char"), {
            autoAlpha: 0,
            stagger: 0.03,
            rotateY: 100,
            y: -100,
            scrollTrigger: {
              trigger: $(this),
              start: "top bottom-=10%",
              end: "top top-=20%",
              toggleActions: "play reverse play reverse",
            },
          });
        });

        $(".perspective-slider .slide .slider-content .category").each(
          function () {
            gsap.from($(this), {
              autoAlpha: 0,
              x: 50,
              y: 30,
              scrollTrigger: {
                trigger: $(this),
                start: "top bottom-=10%",
                end: "top top-=20%",
                toggleActions: "play reverse play reverse",
              },
            });
          }
        );

        $(".perspective-slider .slide .slider-content .load-button").each(
          function () {
            gsap.from($(this), {
              autoAlpha: 0,
              x: 50,
              y: 30,
              scrollTrigger: {
                trigger: $(this),
                start: "top bottom-=10%",
                end: "top top-=20%",
                toggleActions: "play reverse play reverse",
              },
            });
          }
        );

        $(".perspective-slider .slide .slider-content").each(function () {
          gsap.from($(this), {
            yPercent: -100,
            scrollTrigger: {
              trigger: $(this).closest(".image"),
              start: "top bottom-=10%",
              end: "top 100px",
              scrub: true,
            },
          });
        });
      }
    }
  });

  // ============================================================== SERVICES ANIMATION END ========================================================================

  // ============================================================== PORTFOLIO ANIMATION START ========================================================================

  // ============================================================== PORTFOLIO ANIMATION END ========================================================================

  // ============================================================== TEAMS ANIMATION START ========================================================================

  const settings = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // Ensure autoplay continues even when user interacts
    },
    speed: 700,
    on: {
      slideChangeTransitionStart: function () {
        // Scale down the middle card
        const activeSlide = document.querySelector(
          "#team2 .swiper-slide-active"
        );
        activeSlide.style.transform = "scale(0.8)";

        // Delay resetting scaling on all slides
        setTimeout(function () {
          document
            .querySelectorAll("#team2 .swiper-slide")
            .forEach(function (slide) {
              slide.style.transform = "scale(1)";
            });
        }, 300); // Adjust the delay duration (in milliseconds) as needed
      },
      touchEnd: function () {
        // Restart autoplay when user finishes swiping
        teamSwiper.autoplay.start();
      },
    },
  };

  const teamSwiper = new Swiper("#team2", settings);

  // ? ============================================================== NEW TEAMS ANIMATION START ========================================================================

  // ? ============================================================== NEW TEAMS ANIMATION END ========================================================================

  // ============================================================== TEAMS ANIMATION END ========================================================================

  // ============================================================== TESTIMONIALS ANIMATION START ========================================================================

  var swiper = new Swiper(".c-testimonials", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".c-testimonials__pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Change the delay to 3000 milliseconds (3 seconds)
      disableOnInteraction: false, // Ensure autoplay continues even when user interacts
    },
    on: {
      touchEnd: function () {
        // Restart autoplay when user finishes swiping
        swiper.autoplay.start();
      },
    },
  });

  // ============================================================== TESTIMONIALS ANIMATION END ========================================================================

  // ============================================================== PRICING ANIMATION START ========================================================================

  const handleCheckboxChange = (checkbox, value, mrp, discount) => {
    if (checkbox.checked) {
      document.getElementById(
        "starterTotal"
      ).innerHTML = `${value} <br><div class="priceMargin"+> <strike style="color:dadada; font-size: 1.5rem; ">${mrp}</strike><span style="color:#fb4918; font-size: 1rem">${discount}</span></div>`;
    } else {
      document.getElementById("starterTotal").innerHTML = `₹0`;
    }
  };

  var x = document.getElementById("starterFirst");
  var y = document.getElementById("starterSecond");
  var z = document.getElementById("starterThird");

  x.addEventListener("change", () => {
    handleCheckboxChange(x, "₹1,59,999/-", "₹1,99,000", "-16% OFF");
  });

  y.addEventListener("change", () => {
    handleCheckboxChange(y, "₹1,99,999/-", "₹2,40,000", "-16% OFF");
  });

  z.addEventListener("change", () => {
    handleCheckboxChange(z, "₹19,999/- ", "", "Per Design Mockup");
  });

  const handleCheckboxChangeEnterprise = (checkbox, value, mrp, discount) => {
    if (checkbox.checked) {
      document.getElementById(
        "enterpriseTotal"
      ).innerHTML = `${value} <br><div class="priceMargin"> <strike style="color:dadada; font-size: 1.5rem; ">${mrp}</strike><span style="color:#fb4918; font-size: 1rem">${discount}</span></div>`;
    } else {
      document.getElementById("starterTotal").innerHTML = `₹0`;
    }
  };

  var a = document.getElementById("enterpriseFirst");
  var b = document.getElementById("enterpriseSecond");
  var c = document.getElementById("enterpriseThird");

  a.addEventListener("change", () => {
    handleCheckboxChangeEnterprise(a, "₹1,49,999/-", "₹1,70,000", "-12% OFF");
  });

  b.addEventListener("change", () => {
    handleCheckboxChangeEnterprise(b, "₹1,69,999/-", "₹1,99,999", "-15% OFF");
  });

  c.addEventListener("change", () => {
    handleCheckboxChangeEnterprise(c, "₹1,89,999/-", "₹2,49,999", "-24% OFF");
  });

  // ============================================================== PRICING ANIMATION END ========================================================================

  // ============================================================== CONTACT FORM ANIMATION START ========================================================================

  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.innerHTML = json.message;
          result.classList.remove("text-gray-500");
          result.classList.add("text-green-500");
        } else {
          console.log(response);
          result.innerHTML = json.message;
          result.classList.remove("text-gray-500");
          result.classList.add("text-red-500");
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });

  // ============================================================== CONTACT FORM ANIMATION END ========================================================================

  // window.addEventListener('load', () => {
  // 	var
  // 		carousels = document.querySelectorAll('.team3')
  // 	;

  // 	for (var i = 0; i < carousels.length; i++) {
  // 		carousel(carousels[i]);
  // 	}
  // });

  // function carousel(root) {
  // 	var
  // 		figure = root.querySelector('figure'),
  // 		nav = root.querySelector('nav'),
  // 		images = figure.children,
  // 		n = images.length,
  // 		gap = root.dataset.gap || 0,
  // 		bfc = 'bfc' in root.dataset,

  // 		theta =  2 * Math.PI / n,
  // 		currImage = 0
  // 	;

  // 	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  // 	window.addEventListener('resize', () => {
  // 		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
  // 	});

  // 	setupNavigation();

  // 	function setupCarousel(n, s) {
  // 		var
  // 			apothem = s / (2 * Math.tan(Math.PI / n))
  // 		;

  // 		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

  // 		for (var i = 0; i < n; i++)
  // 			images[i].style.padding = `${gap}px`;
  // 		for (i = 1; i < n; i++) {
  // 			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
  // 			images[i].style.transform = `rotateY(${i * theta}rad)`;
  // 		}
  // 		if (bfc)
  // 			for (i = 0; i < n; i++)
  // 				 images[i].style.backfaceVisibility = 'hidden';

  // 		rotateCarousel(currImage);
  // 	}

  // 	function setupNavigation() {
  // 		nav.addEventListener('click', onClick, true);

  // 		function onClick(e) {
  // 			e.stopPropagation();

  // 			var t = e.target;
  // 			if (t.tagName.toUpperCase() != 'BUTTON')
  // 				return;

  // 			if (t.classList.contains('next')) {
  // 				currImage++;
  // 			}
  // 			else {
  // 				currImage--;
  // 			}

  // 			rotateCarousel(currImage);
  // 		}

  // 	}

  // 	function rotateCarousel(imageIndex) {
  // 		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  // 	}

  // }

  // ! ============================================================== TEAM 3 UNKNOWN 2nd ANIMATION START ========================================================================

  window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel");

    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });

  function carousel(root) {
    var figure = root.querySelector("figure"),
      nav = root.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = "bfc" in root.dataset,
      theta = (2 * Math.PI) / n,
      currImage = 0,
      dragging = false,
      startTheta = 0,
      startMouseX = 0;

    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });

    setupNavigation();
    autoRotate(); // Start autorotation
    makeDraggable();

    function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));

      figure.style.transformOrigin = `50% 50% ${-apothem}px`;

      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";

      rotateCarousel(currImage);
    }

    function setupNavigation() {
      // No need to modify this function
    }

    function rotateCarousel(imageIndex) {
      figure.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }

    function autoRotate() {
      setInterval(() => {
        if (!dragging) {
          currImage = (currImage + 1) % n; // Move to the next image, looping back to the beginning when reaching the end
          rotateCarousel(currImage);
        }
      }, 3000); // Interval for autorotation, change to 3000 milliseconds (3 seconds)
    }

    function makeDraggable() {
      figure.addEventListener("mousedown", onMouseDown);

      function onMouseDown(e) {
        dragging = true;
        startMouseX = e.clientX;
        startTheta = currImage * -theta;
        figure.style.transition = "none"; // Disable transition during drag

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      }

      function onMouseMove(e) {
        var mouseX = e.clientX;
        var deltaTheta = (mouseX - startMouseX) * 0.01;
        var newTheta = startTheta + deltaTheta;

        currImage = Math.round(newTheta / -theta);
        rotateCarousel(currImage);
      }

      function onMouseUp() {
        dragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        figure.style.transition = "transform 0.5s ease-in-out"; // Restore transition after drag
      }
    }
  }

  // ! ============================================================== TEAM 3 ANIMATION END ========================================================================

  $("#hoverService").on("mouseenter", function () {
    gsap.to(".serviceMegaHover", {
      duration: 0.1,
      opacity: 1,
      display: "flex",
    });
  });

  $("#hoverService").on("mouseleave", function () {
    gsap.to(".serviceMegaHover", {
      duration: 0.1,
      opacity: 0,
      display: "none",
    });
  });

  $(".serviceMegaHover .brandingNav").on("mouseenter", function () {
    gsap.to(".serviceMegaHover .brandingNav img", {
      duration: 0.5,
      height: "250%",
    });
  });

  $(".serviceMegaHover .brandingNav").on("mouseleave", function () {
    gsap.to(".serviceMegaHover .brandingNav img", {
      duration: 0.5,
      height: "0%",
    });
  });
  $(".serviceMegaHover .socialNav").on("mouseenter", function () {
    gsap.to(".serviceMegaHover .socialNav img", {
      duration: 0.5,
      height: "250%",
    });
  });

  $(".serviceMegaHover .socialNav").on("mouseleave", function () {
    gsap.to(".serviceMegaHover .socialNav img", {
      duration: 0.5,
      height: "0%",
    });
  });
  $(".serviceMegaHover .webNav").on("mouseenter", function () {
    gsap.to(".serviceMegaHover .webNav img", {
      duration: 0.5,
      height: "250%",
    });
  });

  $(".serviceMegaHover .webNav").on("mouseleave", function () {
    gsap.to(".serviceMegaHover .webNav img", {
      duration: 0.5,
      height: "0%",
    });
  });

  const teamswiper = new Swiper(".another-slider", {
    loop: true, //loop
    effect: "cube", //make slider cube
    cubeEffect: {
      slideShadows: true, // Presence of shadows on the slide surface
      shadow: false, // Presence of shadows below the slide
      shadowOffset: 100, // Position of shadows below the slide (in pixels)
      shadowScale: 1, // Size Ratio of shadows below the slide (0~1)
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: 100,
    },
    grabCursor: true, //grab cursor
    speed: 1500, //slide speed
    autoplay: {
      //auto play
      delay: 2000,
    },
    pagination: {
      //pagination(dots)
      el: ".swiper-pagination",
    },
    navigation: {
      //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // TODO ============================================================== ABOUT ========================================================================

  var t3 = new TimelineMax({ paused: true });

  t3.to(".one", 0.8, {
    y: 3,
    rotation: 45,
    backgroundColor: "white",
    ease: Expo.easeInOut,
  });
  t3.to(".two", 0.8, {
    y: -3,
    rotation: -45,
    backgroundColor: "white",
    ease: Expo.easeInOut,
    delay: -0.8,
  });

  t3.to(".ham-menu", 0.5, { top: "0%", ease: Expo.easeInOut, delay: -1 });

  t3.staggerFrom(
    ".ham-menu ul li",
    0.4,
    { x: -50, opacity: 0, ease: Expo.easeInOut },
    0.2
  );

  t3.reverse();
  $(document).on("click", ".toggle-btn", function () {
    t3.reversed(!t3.reversed()); //toggles the orientation
  });
  $(document).on("click", "a", function () {
    t3.reversed(!t3.reversed()); //sets the orientation to reversed
  });
}

runAfterApp();


//Page transition
function pagetransition() {
  var tl = gsap.timeline();
  tl.to("#trans", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: Power3.easeInOut,
  });
  tl.to(".left", {
    x: -200,
    y: 0,
    duration: 1,
    ease: Power3.easeInOut,
    opacity: 0,
  });
  tl.to("#trans", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "top",
    ease: Power3.easeInOut,
    delay: 0,
  });
}

//Function to Delay
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

//Initial Content ANimation
function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".left", {
    x: -200,
    y: 0,
    duration: 1,
    ease: Power3.easeInOut,
    opacity: 0,
  });
}

//Here where magic Happens
barba.init({
  //we need sync
  sync: true,
  //the transitions array
  transitions: [
    {
      //When the user leaves the page
      async leave(data) {
        const done = this.async();
        //call page transition function

        pagetransition();

        //give a small delay
        await delay(500);
        done();
      },
    },
  ],
});

barba.hooks.after(() => {
  // Reinitialize GSAP animations after page transition
  runAfterApp();
});

//windows loads, call content animation
window.onload = () => {
  contentAnimation();
};


var tl3 = gsap.timeline();
tl3.to("#trans", {
  duration: 0.5,
  scaleY: 1,
  transformOrigin: "bottom",
  ease: Power3.easeInOut,
});
tl3.to(".left", {
  x: -200,
  y: 0,
  duration: 1,
  ease: Power3.easeInOut,
  opacity: 0,
});
tl3.to("#trans", {
  duration: 0.5,
  scaleY: 0,
  transformOrigin: "top",
  ease: Power3.easeInOut,
  delay: 0,
});

// ========================================================= Aimated Tags ======================================================

