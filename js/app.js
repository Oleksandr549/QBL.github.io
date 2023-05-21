(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    window.addEventListener("DOMContentLoaded", () => {
      if (null !== document.querySelector(".myProduct-swiper")) {
        new Swiper(".myProduct-swiper", {
          slidesPerView: 4,
          navigation: {
            nextEl: ".product-swiper-button-next",
            prevEl: ".product-swiper-button-prev",
          },
        });
      }
      if (null !== document.querySelector(".mySwiperplanning")) {
        new Swiper(".mySwiperplanning", {
          slidesPerView: 1,
          navigation: {
            nextEl: ".planning-swiper-button-next",
            prevEl: ".planning-swiper-button-prev",
          },
        });
      }
      if (null !== document.querySelector(".btn-banner")) {
        const e = document.querySelectorAll(".welcome-bg"),
          t = document.querySelectorAll(".btn-banner"),
          n = document.querySelectorAll(".welcome_content");
        t.forEach((l) => {
          l.addEventListener("click", function () {
            t.forEach((e) => {
              e.classList.toggle("active");
            }),
              n.forEach((e) => {
                e.classList.toggle("active");
              }),
              e.forEach((e) => {
                e.classList.toggle("active");
              });
          });
        });
      }
      if (null !== document.querySelector(".advantages-item_btn")) {
        const l = document.querySelectorAll(".advantages-item_btn"),
          o = document.querySelectorAll(".advantages_content"),
          i = document.querySelectorAll(".advantages_img");
        function c(e) {
          o.forEach((t, n) => {
            (t.style.position = n === e ? "relative" : "absolute"),
              (t.style.visibility = n === e ? "visible" : "hidden"),
              (t.style.opacity = n === e ? "1" : "0"),
              (t.style.transition = n === e ? "ease 1s" : "ease 0s");
          }),
            i.forEach((t, n) => {
              (t.style.position = n === e ? "relative" : "absolute"),
                (t.style.visibility = n === e ? "visible" : "hidden"),
                (t.style.opacity = n === e ? "1" : "0"),
                (t.style.transition = n === e ? "ease 1s" : "ease 0s");
            }),
            l.forEach((t, n) => {
              t.classList.toggle("active", n === e);
            });
        }
        c(2),
          l.forEach((e, t) => {
            e.addEventListener("click", () => c(t));
          });
      }
      if (null !== document.querySelector(".gallery-item_btn")) {
        const s = document.querySelectorAll(".gallery-item_btn"),
          r = document.querySelectorAll(".gallery-item_content");
        function a(e) {
          r.forEach((t, n) => {
            (t.style.position = n === e ? "relative" : "absolute"),
              (t.style.visibility = n === e ? "visible" : "hidden"),
              (t.style.opacity = n === e ? "1" : "0"),
              (t.style.transition = n === e ? "ease 1s" : "ease 0s");
          }),
            s.forEach((t, n) => {
              t.classList.toggle("active", n === e);
            });
        }
        a(2),
          s.forEach((e, t) => {
            e.addEventListener("click", () => a(t));
          });
      }
      if (null !== document.querySelector(".footer-item")) {
        const u = document.querySelectorAll(".footer-item"),
          d = document.querySelectorAll(".footer-content");
        u.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              u.forEach((t, n) => {
                t.classList.toggle("active", n === e);
              }),
              void d.forEach((t, n) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", n === e)
                  : t.classList.toggle("active", n === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".language-list")) {
        const m = document.querySelector(".language-list");
        document
          .querySelector(".language")
          .addEventListener("click", function () {
            m.classList.toggle("active");
          });
      }
      setTimeout(() => {
        let e = new IntersectionObserver(
            function (e) {
              e.forEach((e) => {
                e.isIntersecting && e.target.classList.add("active");
              });
            },
            { threshold: [0.5] }
          ),
          t = document.querySelectorAll(".element-animation");
        for (let n of t) e.observe(n);
      }, 1e3);
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();