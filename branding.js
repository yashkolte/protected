// ======================================================================== HEADER START =============================================================================
function runAfterBranding() {
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

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-hero",
      start: "top top+=70px",
      scrub: 1,
      end: "+=1000px",
      pin: true,
    },
  });

  tl.to(
    ".about-hero-balls",
    {
      rotate: 180,
      duration: 5,
    },
    "aboutHero"
  );

  tl.to(
    "#about-hero .hero-right-bottom h3",
    {
      opacity: 0,
      duration: 5,
    },
    "aboutHero"
  );

  tl.to(
    "#about-hero .hero-right-bottom",
    {
      y: -300,
      duration: 5,
    },
    "aboutHero"
  );

  tl.to(
    "#about-hero .hero-right-bottom h4",
    {
      opacity: 1,
      duration: 5,
    },
    "aboutHero"
  );

  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-01",
      start: "top-=400px top+=400px",
      scrub: 1,
      end: "bottom bottom",
      // pin: true,
      // markers: true,
    },
  });

  tl1.to(
    "#about-hero .about-hero-balls .circle1",
    {
      x: -8,
      y: -550,
      duration: 5,
    },
    "aboutHero0"
  );

  tl1.to(
    "#about-hero .about-hero-balls .circle2",
    {
      x: -400,
      duration: 5,
      y: -550,
    },
    "aboutHero0"
  );

  tl1.to(
    "#about-hero .about-hero-balls .circle1",
    {
      opacity: 0.25,
      duration: 5,
    },
    "aboutHero1"
  );

  tl1.to(
    "#about-hero .about-hero-balls .circle2",
    {
      opacity: 0.25,
      duration: 5,
    },
    "aboutHero1"
  );

  tl1.to(
    "#about-hero .about-hero-balls .circle1",
    {
      opacity: 0.25,
      duration: 5,
      scale: 7,
    },
    "aboutHero1"
  );

  tl1.to(
    "#about-hero .about-hero-balls .circle2",
    {
      opacity: 0.25,
      duration: 5,
      scale: 7,
    },
    "aboutHero1"
  );

  $(".other-services .socialNav").on("mouseenter", function () {
    gsap.to(".other-services .socialNav img", {
      duration: 0.5,
      height: "250%",
    });
  });

  $(".other-services .socialNav").on("mouseleave", function () {
    gsap.to(".other-services .socialNav img", {
      duration: 0.5,
      height: "0%",
    });
  });
  $(".other-services .webNav").on("mouseenter", function () {
    gsap.to(".other-services .webNav img", {
      duration: 0.5,
      height: "250%",
    });
  });

  $(".other-services .webNav").on("mouseleave", function () {
    gsap.to(".other-services .webNav img", {
      duration: 0.5,
      height: "0%",
    });
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact-hero",
      start: "top top+=70px",
      scrub: 1,
      end: "+=1000px",
      // pin: true
    },
  });

  tl.to(
    ".contact-animate-circles",
    {
      rotate: 180,
      duration: 5,
    },
    "aboutHero"
  );

  var moreBtn = $(".more-btn");

  console.log(moreBtn);

  $(".more-btn").on("click", function () {
    gsap.to(".about-hero-center", {
      duration: 0.5,
      height: "100vh",
    });
    gsap.to(".about-hero-center .button", {
      display: "none",
    });
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-hero02",
      start: "top top+=70px",
      scrub: 1,
      end: "+=1200px",
      pin: true,
    },
  });

  tl2.to(".about-mission", {
    color: "#fca73f",
  });

  tl2.to(
    ".about-hero-center-right-animate",
    {
      y: "-90vh",
      duration: 5,
    },
    "about-animate"
  );

  tl2.to(
    ".about-mission",
    {
      color: "#000",
    },
    "about-animate"
  );

  tl2.to(
    ".about-vision",
    {
      color: "#fca73f",
    },
    "about-animate"
  );

  tl2.to(
    ".about-hero-center-right-animate",
    {
      y: "-180vh",
      duration: 5,
    },
    "about-animate0"
  );

  tl2.to(
    ".about-vision",
    {
      color: "#000",
    },
    "about-animate0"
  );

  tl2.to(
    ".about-values",
    {
      color: "#fca73f",
    },
    "about-animate0"
  );

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

  var t3 = new TimelineMax({ paused: true });

  t3.to(".one", 0.8, {
    y: 6,
    rotation: 45,
    backgroundColor: "white",
    ease: Expo.easeInOut,
  });
  t3.to(".two", 0.8, {
    y: -6,
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

runAfterBranding();

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
  runAfterBranding();
});

//windows loads, call content animation
window.onload = () => {
  contentAnimation();
};
