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
      if (null !== document.querySelector(".myhighlights-swiper")) {
        new Swiper(".myhighlights-swiper", {
          navigation: {
            nextEl: ".highlights-swiper-button-next",
            prevEl: ".highlights-swiper-button-prev",
          },
          breakpoints: {
            1: { slidesPerView: 1.5 },
            481: { slidesPerView: 1.5 },
            641: { slidesPerView: 2 },
            769: { slidesPerView: 2.5 },
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
          c = document.querySelectorAll(".welcome_content");
        t.forEach((o) => {
          o.addEventListener("click", function () {
            t.forEach((e) => {
              e.classList.toggle("active");
            }),
              c.forEach((e) => {
                e.classList.toggle("active");
              }),
              e.forEach((e) => {
                e.classList.toggle("active");
              });
          });
        });
      }
      if (null !== document.querySelector(".advantages-item_btn")) {
        const o = document.querySelectorAll(".advantages-item_btn"),
          l = document.querySelectorAll(".advantages_content"),
          s = document.querySelectorAll(".advantages_img");
        function i(e) {
          l.forEach((t, c) => {
            (t.style.position = c === e ? "relative" : "absolute"),
              (t.style.visibility = c === e ? "visible" : "hidden"),
              (t.style.opacity = c === e ? "1" : "0"),
              (t.style.transition = c === e ? "ease 1s" : "ease 0s");
          }),
            s.forEach((t, c) => {
              (t.style.position = c === e ? "relative" : "absolute"),
                (t.style.visibility = c === e ? "visible" : "hidden"),
                (t.style.opacity = c === e ? "1" : "0"),
                (t.style.transition = c === e ? "ease 1s" : "ease 0s");
            }),
            o.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            });
        }
        i(2),
          o.forEach((e, t) => {
            e.addEventListener("click", () => i(t));
          });
      }
      if (
        (document.addEventListener("click", function (e) {
          let t = e.target;
          const c = document.querySelector(".burger_menu"),
            o = document.querySelector(".header_nav"),
            l = document.querySelector(".header"),
            s = document.querySelectorAll(".sublist-box");
          document.querySelectorAll(".list_item-btn").forEach((e) => {
            c.contains(t) &&
              (c.classList.contains("active")
                ? (o.classList.toggle("active"),
                  c.classList.toggle("active"),
                  l.classList.remove("black-bg"))
                : (o.classList.toggle("active"),
                  c.classList.toggle("active"),
                  l.classList.add("black-bg"))),
              e.contains(t) &&
                (e.classList.contains("active")
                  ? l.classList.add("black-bg")
                  : l.classList.remove("black-bg")),
              l.contains(t) ||
                (l.classList.remove("black-bg"),
                o.classList.remove("active"),
                c.classList.remove("active"),
                e.classList.remove("active"),
                s.forEach((e) => {
                  e.classList.remove("active");
                }));
          });
        }),
        null !== document.querySelector(".btn-back-box"))
      ) {
        const n = document.querySelectorAll(".list_item-btn"),
          r = document.querySelectorAll(".sublist-box");
        document.querySelectorAll(".btn-back-box").forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              n.forEach((t, c) => {
                t.classList.remove("active", c === e);
              }),
              void r.forEach((t, c) => {
                t.classList.remove("active", c === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".list_item-btn")) {
        const a = document.querySelectorAll(".list_item-btn"),
          u = document.querySelectorAll(".sublist-box");
        a.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              a.forEach((t, c) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", c === e)
                  : t.classList.toggle("active", c === e);
              }),
              void u.forEach((t, c) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", c === e)
                  : t.classList.toggle("active", c === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".gallery-item_btn")) {
        const d = document.querySelectorAll(".gallery-item_btn"),
          v = document.querySelectorAll(".gallery-item_content");
        function g(e) {
          v.forEach((t, c) => {
            (t.style.position = c === e ? "relative" : "absolute"),
              (t.style.visibility = c === e ? "visible" : "hidden"),
              (t.style.opacity = c === e ? "1" : "0"),
              (t.style.transition = c === e ? "ease 1s" : "ease 0s");
          }),
            d.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            });
        }
        g(2),
          d.forEach((e, t) => {
            e.addEventListener("click", () => g(t));
          });
      }
      if (null !== document.querySelector(".footer-item-btn-list")) {
        const m = document.querySelectorAll(".footer-item-btn-list"),
          y = document.querySelectorAll(".footer-content");
        m.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              m.forEach((t, c) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", c === e)
                  : t.classList.toggle("active", c === e);
              }),
              void y.forEach((t, c) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", c === e)
                  : t.classList.toggle("active", c === e);
              })
            );
            var e;
          });
        });
      }
      if (null !== document.querySelector(".language-list")) {
        const h = document.querySelector(".language-list");
        document
          .querySelector(".language")
          .addEventListener("click", function () {
            h.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".filters-list")) {
        const f = document.querySelector(".filters-list");
        document
          .querySelector(".filters")
          .addEventListener("click", function () {
            f.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".counter-items")) {
        const L = document.querySelector(".counter-item"),
          E = document.querySelectorAll(".item");
        L.innerHTML = E.length;
      }
      if (null !== document.querySelector(".depot-technology_item")) {
        const S = document.querySelectorAll(".depot-technology_item"),
          b = document.querySelectorAll(".technology-popup"),
          A = document.querySelectorAll(".technology-popup-close"),
          q = document.body;
        S.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              S.forEach((t, c) => {
                t.classList.toggle("active", c === e);
              }),
              b.forEach((t, c) => {
                t.classList.toggle("active", c === e);
              }),
              b.forEach((e) => {
                e.classList.contains("active") || (q.style.overflow = "auto");
              }),
              void b.forEach((e) => {
                e.classList.contains("active") && (q.style.overflow = "hidden");
              })
            );
            var e;
          });
        }),
          A.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                b.forEach((t, c) => {
                  t.classList.remove("active", c === e);
                }),
                void b.forEach((e) => {
                  e.classList.contains("active") || (q.style.overflow = "auto");
                })
              );
              var e;
            });
          });
      }
      if (null !== document.querySelector(".btn-technology")) {
        const p = document.querySelectorAll(".btn-technology"),
          w = document.querySelectorAll(".technology_img-box"),
          k = document.querySelectorAll(".hotspot-technology"),
          _ = document.querySelectorAll(".technology-content"),
          P = document.querySelectorAll(".hotspot-technology2"),
          x = document.querySelectorAll(".technology-content2");
        function I(e) {
          p.forEach((t, c) => {
            t.classList.toggle("active", c === e);
          }),
            w.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            }),
            _.forEach((e, t) => {
              e.classList.remove("active");
            }),
            x.forEach((e, t) => {
              e.classList.remove("active");
            }),
            P.forEach((e, t) => {
              e.classList.remove("active");
            }),
            k.forEach((e, t) => {
              e.classList.remove("active");
            });
        }
        I(1),
          p.forEach((e, t) => {
            e.addEventListener("click", () => I(t));
          });
      }
      if (null !== document.querySelector(".hotspot-technology2")) {
        const V = document.querySelectorAll(".hotspot-technology2"),
          T = document.querySelectorAll(".technology-content2"),
          R = document.querySelectorAll(".technology-button-next2"),
          O = document.querySelectorAll(".technology-button-prev2");
        console.log(1),
          V.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                T.forEach((t, c) => {
                  t.classList.contains("active")
                    ? t.classList.remove("active", c === e)
                    : t.classList.toggle("active", c === e);
                }),
                void V.forEach((t, c) => {
                  t.classList.contains("active")
                    ? t.classList.remove("active", c === e)
                    : t.classList.toggle("active", c === e);
                })
              );
              var e;
            });
          }),
          R.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                T.forEach((t, c) => {
                  t.classList.toggle("active", c === e + 1);
                }),
                void V.forEach((t, c) => {
                  t.classList.toggle("active", c === e + 1);
                })
              );
              var e;
            });
          }),
          O.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                T.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                }),
                void V.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                })
              );
              var e;
            });
          });
      }
      if (null !== document.querySelector(".hotspot-technology")) {
        const D = document.querySelectorAll(".hotspot-technology"),
          N = document.querySelectorAll(".technology-content"),
          C = document.querySelectorAll(".technology-button-next"),
          Y = document.querySelectorAll(".technology-button-prev");
        D.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              N.forEach((t, c) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", c === e)
                  : t.classList.toggle("active", c === e);
              }),
              void D.forEach((t, c) => {
                t.classList.contains("active")
                  ? t.classList.remove("active", c === e)
                  : t.classList.toggle("active", c === e);
              })
            );
            var e;
          });
        }),
          C.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                N.forEach((t, c) => {
                  t.classList.toggle("active", c === e + 1);
                }),
                void D.forEach((t, c) => {
                  t.classList.toggle("active", c === e + 1);
                })
              );
              var e;
            });
          }),
          Y.forEach((e, t) => {
            e.addEventListener("click", () => {
              return (
                (e = t),
                N.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                }),
                void D.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                })
              );
              var e;
            });
          });
      }
      if (null !== document.querySelector(".seeAlso_btn-box")) {
        const G = document.querySelectorAll(".seeAlso-btn"),
          M = document.querySelectorAll(".seeAlso_img");
        G.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              G.forEach((t, c) => {
                t.classList.toggle("active", c === e);
              }),
              void M.forEach((t, c) => {
                t.classList.toggle("active", c === e);
              })
            );
            var e;
          });
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
        for (let c of t) e.observe(c);
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
