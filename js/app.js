(() => {
  "use strict";
  $(function () {
    if (
      (null !== document.querySelector(".sliq-image_main") &&
        ScrollTrigger.matchMedia({
          "(min-width: 100px)": function () {
            gsap.to(".sliq-image", {
              scrollTrigger: {
                trigger: ".sliq-image_main",
                start: "top bottom",
                scrub: 5,
              },
              ease: Power1.easeInOut,
              scale: 1.2,
            });
          },
        }),
      null !== document.querySelector(".filter-btn-counter "))
    ) {
      const e = document.querySelectorAll(".filter-btn-counter ");
      function t(t) {
        e.forEach((e, c) => {
          e.classList.contains("active")
            ? e.classList.remove("active", c === t)
            : e.classList.toggle("active", c === t);
        });
      }
      t(0),
        e.forEach((e, c) => {
          e.addEventListener("click", () => t(c));
        });
    }
    if (null !== document.querySelector(".mySwiper-milestones"))
      new Swiper(".mySwiper-milestones", {
        direction: "vertical",
        slidesPerView: 5,
        initialSlide: 2,
        centeredSlides: !0,
        spaceBetween: 10,
        mousewheel: !0,
        pagination: { el: ".swiper-pagination-milestones" },
      });
    if (null !== document.querySelector(".contact-btn")) {
      const c = document.querySelectorAll(".contact-btn"),
        o = document.querySelectorAll(".contact2_content");
      function s(e) {
        c.forEach((t, c) => {
          t.classList.toggle("active", c === e);
        }),
          o.forEach((t, c) => {
            t.classList.toggle("active", c === e);
          });
      }
      s(0),
        c.forEach((e, t) => {
          e.addEventListener("click", () => s(t));
        });
    }
    if (null !== document.querySelector(".product-cart-info_swiper")) {
      const i = new Swiper(".product-cart-info_swiper", {
        freeMode: !0,
        watchSlidesProgress: !0,
        breakpoints: {
          200: { spaceBetween: 20, slidesPerView: 1.5 },
          480: { spaceBetween: 20, slidesPerView: 2.5 },
          768: { spaceBetween: 20, slidesPerView: 3 },
          1024: { spaceBetween: 20, slidesPerView: 4 },
          1350: { spaceBetween: 30, slidesPerView: 4 },
        },
      });
      new Swiper(".product-cart-info_swiper2", {
        spaceBetween: 10,
        autoHeight: !0,
        thumbs: { swiper: i },
      });
    }
    if (null !== document.querySelector(".product-cart-info_swiper")) {
      const l = new Swiper(".product-cart-info_swiper12", {
        freeMode: !0,
        watchSlidesProgress: !0,
        breakpoints: {
          200: { spaceBetween: 20, slidesPerView: 1.5 },
          480: { spaceBetween: 20, slidesPerView: 2.5 },
          768: { spaceBetween: 20, slidesPerView: 3 },
          1024: { spaceBetween: 20, slidesPerView: 4 },
          1350: { spaceBetween: 50, slidesPerView: 3 },
        },
      });
      new Swiper(".product-cart-info_swiper22", {
        spaceBetween: 10,
        autoHeight: !0,
        thumbs: { swiper: l },
      });
    }
    if (null !== document.querySelector(".product-cart-info_swiper")) {
      const r = new Swiper(".product-cart-info_swiper13", {
        freeMode: !0,
        watchSlidesProgress: !0,
        breakpoints: {
          200: { spaceBetween: 20, slidesPerView: 1.5 },
          480: { spaceBetween: 20, slidesPerView: 2.5 },
          768: { spaceBetween: 20, slidesPerView: 3 },
          1024: { spaceBetween: 20, slidesPerView: 4 },
          1350: { spaceBetween: 50, slidesPerView: 3 },
        },
      });
      new Swiper(".product-cart-info_swiper23", {
        spaceBetween: 10,
        autoHeight: !0,
        thumbs: { swiper: r },
      });
    }
    if (null !== document.querySelector(".product-cart-info_swiper")) {
      const n = new Swiper(".product-cart-info_swiper14", {
        freeMode: !0,
        watchSlidesProgress: !0,
        breakpoints: {
          200: { spaceBetween: 20, slidesPerView: 1.5 },
          480: { spaceBetween: 20, slidesPerView: 2.5 },
          768: { spaceBetween: 20, slidesPerView: 3 },
          1024: { spaceBetween: 20, slidesPerView: 4 },
          1350: { spaceBetween: 50, slidesPerView: 3 },
        },
      });
      new Swiper(".product-cart-info_swiper24", {
        spaceBetween: 10,
        autoHeight: !0,
        thumbs: { swiper: n },
      });
    }
    if (null !== document.querySelector(".mySwiper-references-more")) {
      new Swiper(".mySwiper-references-more", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".references-more-button-next",
          prevEl: ".references-more-button-prev",
        },
        breakpoints: {
          1: { slidesPerView: 1.5 },
          481: { slidesPerView: 1.5 },
          641: { slidesPerView: 2 },
          769: { slidesPerView: 3 },
          1200: { slidesPerView: 3.6 },
        },
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
      const a = document.querySelectorAll(".welcome-bg"),
        u = document.querySelectorAll(".btn-banner"),
        d = document.querySelectorAll(".welcome_content");
      setInterval(v, 7e3);
      function v() {
        u.forEach((e) => {
          e.classList.toggle("active");
        }),
          d.forEach((e) => {
            e.classList.toggle("active");
          }),
          a.forEach((e) => {
            e.classList.toggle("active");
          });
      }
      u.forEach((e) => {
        e.addEventListener("click", () => v());
      });
    }
    if (null !== document.querySelector(".advantages-item_btn")) {
      const g = document.querySelectorAll(".advantages-item_btn"),
        m = document.querySelectorAll(".advantages_content"),
        f = document.querySelectorAll(".advantages_img");
      function h(e) {
        m.forEach((t, c) => {
          (t.style.position = c === e ? "relative" : "absolute"),
            (t.style.visibility = c === e ? "visible" : "hidden"),
            (t.style.opacity = c === e ? "1" : "0"),
            (t.style.transition = c === e ? "ease 1s" : "ease 0s");
        }),
          f.forEach((t, c) => {
            (t.style.position = c === e ? "relative" : "absolute"),
              (t.style.visibility = c === e ? "visible" : "hidden"),
              (t.style.opacity = c === e ? "1" : "0"),
              (t.style.transition = c === e ? "ease 1s" : "ease 0s");
          }),
          g.forEach((t, c) => {
            t.classList.toggle("active", c === e);
          });
      }
      h(2),
        g.forEach((e, t) => {
          e.addEventListener("click", () => h(t));
        });
    }
    if (
      (document.addEventListener("click", function (e) {
        let t = e.target;
        const c = document.querySelector(".burger_menu"),
          o = document.querySelector(".header_nav"),
          s = document.querySelector(".header"),
          i = document.querySelectorAll(".sublist-box");
        document.querySelectorAll(".list_item-btn").forEach((e) => {
          c.contains(t) &&
            (c.classList.contains("active")
              ? (o.classList.toggle("active"),
                c.classList.toggle("active"),
                s.classList.remove("black-bg"))
              : (o.classList.toggle("active"),
                c.classList.toggle("active"),
                s.classList.add("black-bg"))),
            e.contains(t) &&
              (e.classList.contains("active")
                ? s.classList.add("black-bg")
                : s.classList.remove("black-bg")),
            s.contains(t) ||
              (s.classList.remove("black-bg"),
              o.classList.remove("active"),
              c.classList.remove("active"),
              e.classList.remove("active"),
              i.forEach((e) => {
                e.classList.remove("active");
              }));
        });
      }),
      null !== document.querySelector(".btn-back-box"))
    ) {
      const y = document.querySelectorAll(".list_item-btn"),
        p = document.querySelectorAll(".sublist-box");
      document.querySelectorAll(".btn-back-box").forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            y.forEach((t, c) => {
              t.classList.remove("active", c === e);
            }),
            void p.forEach((t, c) => {
              t.classList.remove("active", c === e);
            })
          );
          var e;
        });
      });
    }
    if (null !== document.querySelector(".list_item-btn")) {
      const w = document.querySelectorAll(".list_item-btn"),
        E = document.querySelectorAll(".sublist-box");
      w.forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            w.forEach((t, c) => {
              t.classList.contains("active")
                ? t.classList.remove("active", c === e)
                : t.classList.toggle("active", c === e);
            }),
            void E.forEach((t, c) => {
              t.classList.contains("active")
                ? t.classList.remove("active", c === e)
                : t.classList.toggle("active", c === e);
            })
          );
          var e;
        });
      });
    }
    if (null !== document.querySelector(".product-btn-header")) {
      const L = document.querySelectorAll(".product-btn-header"),
        S = document.querySelectorAll(".product-content-header");
      function b(e) {
        L.forEach((t, c) => {
          t.classList.toggle("active", c === e);
        }),
          S.forEach((t, c) => {
            t.classList.toggle("active", c === e);
          });
      }
      b(0),
        L.forEach((e, t) => {
          e.addEventListener("mouseenter", () => b(t));
        });
    }
    if (null !== document.querySelector(".gallery-item_btn")) {
      const q = document.querySelectorAll(".gallery-item_btn"),
        A = document.querySelectorAll(".gallery-item_content"),
        P = document.querySelectorAll(".gallerry-content-image");
      function k(e) {
        P.forEach((t, c) => {
          (t.style.position = c === e ? "relative" : "absolute"),
            (t.style.visibility = c === e ? "visible" : "hidden"),
            (t.style.opacity = c === e ? "1" : "0"),
            (t.style.transition = c === e ? "ease 1s" : "ease 0s");
        }),
          A.forEach((t, c) => {
            (t.style.position = c === e ? "relative" : "absolute"),
              (t.style.visibility = c === e ? "visible" : "hidden"),
              (t.style.opacity = c === e ? "1" : "0"),
              (t.style.transition = c === e ? "ease 1s" : "ease 0s");
          }),
          q.forEach((t, c) => {
            t.classList.toggle("active", c === e);
          });
      }
      k(2),
        q.forEach((e, t) => {
          e.addEventListener("click", () => k(t));
        });
    }
    if (null !== document.querySelector(".footer-item-btn-list")) {
      const V = document.querySelectorAll(".footer-item-btn-list"),
        _ = document.querySelectorAll(".footer-content");
      V.forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            V.forEach((t, c) => {
              t.classList.contains("active")
                ? t.classList.remove("active", c === e)
                : t.classList.toggle("active", c === e);
            }),
            void _.forEach((t, c) => {
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
      const B = document.querySelector(".language-list");
      document
        .querySelector(".language")
        .addEventListener("click", function () {
          B.classList.toggle("active");
        });
    }
    if (null !== document.querySelector(".filters-list")) {
      const x = document.querySelector(".filters-list");
      document.querySelector(".filters").addEventListener("click", function () {
        x.classList.toggle("active");
      });
    }
    if (null !== document.querySelector(".counter-items")) {
      const M = document.querySelector(".counter-item"),
        H = document.querySelectorAll(".item"),
        T = document.querySelectorAll(".filter-btn-counter");
      function I() {
        setTimeout(() => {
          const e = Array.from(H).reduce(
            (e, t) =>
              "none" === window.getComputedStyle(t).display ? e : e + 1,
            0
          );
          M.innerHTML = e;
        }, 1e3);
      }
      I(),
        T.forEach((e) => {
          e.addEventListener("click", I);
        });
    }
    if (null !== document.querySelector(".item-login")) {
      const C = document.querySelectorAll(".item-login"),
        O = document.querySelectorAll(".login-popup"),
        $ = document.querySelectorAll(".login-popup-close"),
        j = document.body;
      C.forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            C.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            }),
            O.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            }),
            O.forEach((e) => {
              e.classList.contains("active") || (j.style.overflow = "auto");
            }),
            void O.forEach((e) => {
              e.classList.contains("active") && (j.style.overflow = "hidden");
            })
          );
          var e;
        });
      }),
        $.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              O.forEach((t, c) => {
                t.classList.remove("active", c === e);
              }),
              void O.forEach((e) => {
                e.classList.contains("active") || (j.style.overflow = "auto");
              })
            );
            var e;
          });
        });
    }
    if (null !== document.querySelector(".depot-technology_item")) {
      const z = document.querySelectorAll(".depot-technology_item"),
        D = document.querySelectorAll(".technology-popup"),
        F = document.querySelectorAll(".technology-popup-close"),
        G = document.body;
      z.forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            z.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            }),
            D.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            }),
            D.forEach((e) => {
              e.classList.contains("active") || (G.style.overflow = "auto");
            }),
            void D.forEach((e) => {
              e.classList.contains("active") && (G.style.overflow = "hidden");
            })
          );
          var e;
        });
      }),
        F.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              D.forEach((t, c) => {
                t.classList.remove("active", c === e);
              }),
              void D.forEach((e) => {
                e.classList.contains("active") || (G.style.overflow = "auto");
              })
            );
            var e;
          });
        });
    }
    if (null !== document.querySelector(".btn-technology")) {
      const J = document.querySelectorAll(".btn-technology"),
        K = document.querySelectorAll(".technology_img-box"),
        N = document.querySelectorAll(".hotspot-technology"),
        Q = document.querySelectorAll(".technology-content"),
        R = document.querySelectorAll(".hotspot-technology2"),
        U = document.querySelectorAll(".technology-content2");
      function W(e) {
        J.forEach((t, c) => {
          t.classList.toggle("active", c === e);
        }),
          K.forEach((t, c) => {
            t.classList.toggle("active", c === e);
          }),
          Q.forEach((e, t) => {
            e.classList.remove("active");
          }),
          U.forEach((e, t) => {
            e.classList.remove("active");
          }),
          R.forEach((e, t) => {
            e.classList.remove("active");
          }),
          N.forEach((e, t) => {
            e.classList.remove("active");
          });
      }
      W(1),
        J.forEach((e, t) => {
          e.addEventListener("click", () => W(t));
        });
    }
    if (null !== document.querySelector(".hotspot-technology2")) {
      const X = document.querySelectorAll(".hotspot-technology2"),
        Y = document.querySelectorAll(".technology-content2"),
        Z = document.querySelectorAll(".technology-button-next2"),
        ee = document.querySelectorAll(".technology-button-prev2");
      X.forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            Y.forEach((t, c) => {
              t.classList.contains("active")
                ? t.classList.remove("active", c === e)
                : t.classList.toggle("active", c === e);
            }),
            void X.forEach((t, c) => {
              t.classList.contains("active")
                ? t.classList.remove("active", c === e)
                : t.classList.toggle("active", c === e);
            })
          );
          var e;
        });
      }),
        Z.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              void (Y.length - 1 <= e
                ? (Y.forEach((e, t) => {
                    e.classList.toggle("active", 0 === t);
                  }),
                  X.forEach((e, t) => {
                    e.classList.toggle("active", 0 === t);
                  }))
                : (Y.forEach((t, c) => {
                    t.classList.toggle("active", c === e + 1);
                  }),
                  X.forEach((t, c) => {
                    t.classList.toggle("active", c === e + 1);
                  })))
            );
            var e;
          });
        }),
        ee.forEach((e, t) => {
          e.addEventListener("click", () => {
            var e;
            0 == (e = t)
              ? (Y.forEach((e, t) => {
                  e.classList.toggle("active", t === Y.length - 1);
                }),
                X.forEach((e, t) => {
                  e.classList.toggle("active", t === Y.length - 1);
                }))
              : (Y.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                }),
                X.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                }));
          });
        });
    }
    if (null !== document.querySelector(".hotspot-technology")) {
      const te = document.querySelectorAll(".hotspot-technology"),
        ce = document.querySelectorAll(".technology-content"),
        oe = document.querySelectorAll(".technology-button-next"),
        se = document.querySelectorAll(".technology-button-prev");
      te.forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            ce.forEach((t, c) => {
              t.classList.contains("active")
                ? t.classList.remove("active", c === e)
                : t.classList.toggle("active", c === e);
            }),
            void te.forEach((t, c) => {
              t.classList.contains("active")
                ? t.classList.remove("active", c === e)
                : t.classList.toggle("active", c === e);
            })
          );
          var e;
        });
      }),
        oe.forEach((e, t) => {
          e.addEventListener("click", () => {
            return (
              (e = t),
              void (ce.length - 1 <= e
                ? (ce.forEach((e, t) => {
                    e.classList.toggle("active", 0 === t);
                  }),
                  te.forEach((e, t) => {
                    e.classList.toggle("active", 0 === t);
                  }))
                : (ce.forEach((t, c) => {
                    t.classList.toggle("active", c === e + 1);
                  }),
                  te.forEach((t, c) => {
                    t.classList.toggle("active", c === e + 1);
                  })))
            );
            var e;
          });
        }),
        se.forEach((e, t) => {
          e.addEventListener("click", () => {
            var e;
            0 == (e = t)
              ? (ce.forEach((e, t) => {
                  e.classList.toggle("active", t === ce.length - 1);
                }),
                te.forEach((e, t) => {
                  e.classList.toggle("active", t === ce.length - 1);
                }))
              : (ce.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                }),
                te.forEach((t, c) => {
                  t.classList.toggle("active", c === e - 1);
                }));
          });
        });
    }
    if (null !== document.querySelector(".seeAlso_btn-box")) {
      const ie = document.querySelectorAll(".seeAlso-btn"),
        le = document.querySelectorAll(".seeAlso_img");
      ie.forEach((e, t) => {
        e.addEventListener("click", () => {
          return (
            (e = t),
            ie.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            }),
            void le.forEach((t, c) => {
              t.classList.toggle("active", c === e);
            })
          );
          var e;
        });
      });
    }
    null !== document.querySelector(".planning-content_img") &&
      Cocoen.parse(document.body),
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
  });
})();
