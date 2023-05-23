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
      if (null !== document.querySelector("#welcome_subtitle")) {
        new Typed("#welcome_subtitle", {
          strings: [
            "TO AWARD-WINNING STORAGE DRYING AND DISPLAY\n         SYSTEMS FOR YOUR\n         SPORTS\n         EQUIPMENT",
          ],
          typeSpeed: 50,
          startDelay: 2500,
        });
      }
      if (null !== document.querySelector(".myProduct-swiper")) {
        new Swiper(".myProduct-swiper", {
          navigation: {
            nextEl: ".product-swiper-button-next",
            prevEl: ".product-swiper-button-prev",
          },
          breakpoints: {
            1: { slidesPerView: 1.5 },
            481: { slidesPerView: 2.5 },
            641: { slidesPerView: 3 },
            769: { slidesPerView: 4 },
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
          l = document.querySelectorAll(".welcome_content");
        t.forEach((i) => {
          i.addEventListener("click", function () {
            t.forEach((e) => {
              e.classList.toggle("active");
            }),
              l.forEach((e) => {
                e.classList.toggle("active");
              }),
              e.forEach((e) => {
                e.classList.toggle("active");
              });
          });
        });
      }
      if (null !== document.querySelector(".advantages-item_btn")) {
        const i = document.querySelectorAll(".advantages-item_btn"),
          c = document.querySelectorAll(".advantages_content"),
          s = document.querySelectorAll(".advantages_img");
        function n(e) {
          c.forEach((t, l) => {
            (t.style.position = l === e ? "relative" : "absolute"),
              (t.style.visibility = l === e ? "visible" : "hidden"),
              (t.style.opacity = l === e ? "1" : "0"),
              (t.style.transition = l === e ? "ease 1s" : "ease 0s");
          }),
            s.forEach((t, l) => {
              (t.style.position = l === e ? "relative" : "absolute"),
                (t.style.visibility = l === e ? "visible" : "hidden"),
                (t.style.opacity = l === e ? "1" : "0"),
                (t.style.transition = l === e ? "ease 1s" : "ease 0s");
            }),
            i.forEach((t, l) => {
              t.classList.toggle("active", l === e);
            });
        }
        n(2),
          i.forEach((e, t) => {
            e.addEventListener("click", () => n(t));
          });
      }
      if (
        (document.addEventListener("click", function (e) {
          let t = e.target;
          const l = document.querySelector(".burger_menu"),
            i = document.querySelector(".header_nav"),
            c = document.querySelector(".header");
          l.contains(t) &&
            (l.classList.contains("active")
              ? (i.classList.toggle("active"),
                l.classList.toggle("active"),
                c.classList.remove("black-bg"))
              : (i.classList.toggle("active"),
                l.classList.toggle("active"),
                c.classList.add("black-bg"))),
            c.contains(t) ||
              (c.classList.remove("black-bg"),
              i.classList.remove("active"),
              l.classList.remove("active"));
        }),
        null !== document.querySelector(".btn-back-box"))
      ) {
        const o = document.querySelectorAll(".list_item-btn"),
          a = document.querySelectorAll(".sublist-box");
        document.querySelectorAll(".btn-back-box").forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              o.forEach((t, l) => {
                t.classList.remove("active", l === e);
              }),
              void a.forEach((t, l) => {
                t.classList.remove("active", l === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".list_item-btn")) {
        const r = document.querySelectorAll(".list_item-btn"),
          u = document.querySelectorAll(".sublist-box");
        r.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              r.forEach((t, l) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", l === e)
                  : t.classList.toggle("active", l === e);
              }),
              void u.forEach((t, l) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", l === e)
                  : t.classList.toggle("active", l === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".gallery-item_btn")) {
        const d = document.querySelectorAll(".gallery-item_btn"),
          v = document.querySelectorAll(".gallery-item_content");
        function m(e) {
          v.forEach((t, l) => {
            (t.style.position = l === e ? "relative" : "absolute"),
              (t.style.visibility = l === e ? "visible" : "hidden"),
              (t.style.opacity = l === e ? "1" : "0"),
              (t.style.transition = l === e ? "ease 1s" : "ease 0s");
          }),
            d.forEach((t, l) => {
              t.classList.toggle("active", l === e);
            });
        }
        m(2),
          d.forEach((e, t) => {
            e.addEventListener("click", () => m(t));
          });
      }
      if (null !== document.querySelector(".footer-item-btn-list")) {
        const g = document.querySelectorAll(".footer-item-btn-list"),
          y = document.querySelectorAll(".footer-content");
        g.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              g.forEach((t, l) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", l === e)
                  : t.classList.toggle("active", l === e);
              }),
              void y.forEach((t, l) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", l === e)
                  : t.classList.toggle("active", l === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".language-list")) {
        const b = document.querySelector(".language-list");
        document
          .querySelector(".language")
          .addEventListener("click", function () {
            b.classList.toggle("active");
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
        for (let l of t) e.observe(l);
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
