/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var t = {
      80: (t) => {
        !(function (e) {
          "use strict";
          var n = null,
            o = null;
          !(function () {
            var t,
              n,
              o,
              i,
              a,
              s,
              r = ["webkit", "moz", "o", "ms"],
              l = e.document.createElement("div"),
              c = -1;
            for (c = 0; c < r.length && !e.requestAnimationFrame; c++)
              e.requestAnimationFrame = e[r[c] + "RequestAnimationFrame"];
            void 0 === l.nextElementSibling &&
              Object.defineProperty(e.Element.prototype, "nextElementSibling", {
                get: function () {
                  for (var t = this.nextSibling; t; ) {
                    if (1 === t.nodeType) return t;
                    t = t.nextSibling;
                  }
                  return null;
                },
              }),
              ((t = e.Element.prototype).matches =
                t.matches ||
                t.machesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector ||
                function (t) {
                  return (
                    Array.prototype.indexOf.call(
                      this.parentElement.querySelectorAll(t),
                      this
                    ) > -1
                  );
                }),
              Object.keys ||
                (Object.keys =
                  ((a = Object.prototype.hasOwnProperty),
                  (n = !{ toString: null }.propertyIsEnumerable("toString")),
                  (i = (o = [
                    "toString",
                    "toLocaleString",
                    "valueOf",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "constructor",
                  ]).length),
                  function (t) {
                    var e = [],
                      s = "",
                      r = -1;
                    if (
                      "object" != typeof t &&
                      ("function" != typeof t || null === t)
                    )
                      throw new TypeError("Object.keys called on non-object");
                    for (s in t) a.call(t, s) && e.push(s);
                    if (n)
                      for (r = 0; r < i; r++) a.call(t, o[r]) && e.push(o[r]);
                    return e;
                  })),
              Array.isArray ||
                (Array.isArray = function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                }),
              "function" != typeof Object.create &&
                (Object.create =
                  ((s = function () {}),
                  function (t, e) {
                    if (t !== Object(t) && null !== t)
                      throw TypeError("Argument must be an object, or null");
                    s.prototype = t || {};
                    var n = new s();
                    return (
                      (s.prototype = null),
                      void 0 !== e && Object.defineProperties(n, e),
                      null === t && (n.__proto__ = null),
                      n
                    );
                  })),
              String.prototype.trim ||
                (String.prototype.trim = function () {
                  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }),
              Array.prototype.indexOf ||
                (Array.prototype.indexOf = function (t) {
                  var e, n, o, i;
                  if (null === this) throw new TypeError();
                  if (0 === (i = (o = Object(this)).length >>> 0)) return -1;
                  if (
                    ((e = 0),
                    arguments.length > 1 &&
                      ((e = Number(arguments[1])) != e
                        ? (e = 0)
                        : 0 !== e &&
                          e !== 1 / 0 &&
                          e !== -1 / 0 &&
                          (e = (e > 0 || -1) * Math.floor(Math.abs(e)))),
                    e >= i)
                  )
                    return -1;
                  for (
                    n = e >= 0 ? e : Math.max(i - Math.abs(e), 0);
                    n < i;
                    n++
                  )
                    if (n in o && o[n] === t) return n;
                  return -1;
                }),
              Function.prototype.bind ||
                (Function.prototype.bind = function (t) {
                  var e, n, o, i;
                  if ("function" != typeof this) throw new TypeError();
                  return (
                    (e = Array.prototype.slice.call(arguments, 1)),
                    (n = this),
                    (o = function () {}),
                    (i = function () {
                      return n.apply(
                        this instanceof o ? this : t,
                        e.concat(Array.prototype.slice.call(arguments))
                      );
                    }),
                    this.prototype && (o.prototype = this.prototype),
                    (i.prototype = new o()),
                    i
                  );
                }),
              e.Element.prototype.dispatchEvent ||
                (e.Element.prototype.dispatchEvent = function (t) {
                  try {
                    return this.fireEvent("on" + t.type, t);
                  } catch (t) {}
                });
          })(),
            (n = function (t, i, a) {
              var s = null,
                r = !1,
                l = null,
                c = null,
                u = null,
                f = [],
                d = "",
                h = [],
                m = -1;
              if (
                ((u = a || e.document),
                (r = arguments[3]) && (r = "boolean" == typeof r),
                "string" == typeof t)
              )
                h = u.querySelectorAll(t);
              else if (t && "object" == typeof t && o.isElement(t, u)) h = [t];
              else {
                if (!t || "object" != typeof t || !t.length)
                  throw new Error(n.messages.errorFactoryInvalidContainer());
                h = t;
              }
              if (h.length < 1)
                throw new Error(n.messages.errorFactoryContainerNotFound());
              for (m = 0; (s = h[m]) && (!(m > 0) || r); m++)
                s.id
                  ? (d = s.id)
                  : ((d = "MixItUp" + o.randomHex()), (s.id = d)),
                  n.instances[d] instanceof n.Mixer
                    ? ((l = n.instances[d]),
                      (!i || (i && i.debug && !1 !== i.debug.showWarnings)) &&
                        console.warn(
                          n.messages.warningFactoryPreexistingInstance()
                        ))
                    : ((l = new n.Mixer()).attach(s, u, d, i),
                      (n.instances[d] = l)),
                  (c = new n.Facade(l)),
                  i && i.debug && i.debug.enable ? f.push(l) : f.push(c);
              return r ? new n.Collection(f) : f[0];
            }),
            (n.use = function (t) {
              n.Base.prototype.callActions.call(n, "beforeUse", arguments),
                "function" == typeof t && "mixitup-extension" === t.TYPE
                  ? void 0 === n.extensions[t.NAME] &&
                    (t(n), (n.extensions[t.NAME] = t))
                  : t.fn && t.fn.jquery && (n.libraries.$ = t),
                n.Base.prototype.callActions.call(n, "afterUse", arguments);
            }),
            (n.instances = {}),
            (n.extensions = {}),
            (n.libraries = {}),
            (o = {
              hasClass: function (t, e) {
                return !!t.className.match(
                  new RegExp("(\\s|^)" + e + "(\\s|$)")
                );
              },
              addClass: function (t, e) {
                this.hasClass(t, e) ||
                  (t.className += t.className ? " " + e : e);
              },
              removeClass: function (t, e) {
                if (this.hasClass(t, e)) {
                  var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                  t.className = t.className.replace(n, " ").trim();
                }
              },
              extend: function (t, e, n, o) {
                var i = [],
                  a = "",
                  s = -1;
                (n = n || !1), (o = o || !1);
                try {
                  if (Array.isArray(e))
                    for (s = 0; s < e.length; s++) i.push(s);
                  else e && (i = Object.keys(e));
                  for (s = 0; s < i.length; s++)
                    (a = i[s]),
                      !n || "object" != typeof e[a] || this.isElement(e[a])
                        ? (t[a] = e[a])
                        : Array.isArray(e[a])
                        ? (t[a] || (t[a] = []), this.extend(t[a], e[a], n, o))
                        : (t[a] || (t[a] = {}), this.extend(t[a], e[a], n, o));
                } catch (e) {
                  if (!o) throw e;
                  this.handleExtendError(e, t);
                }
                return t;
              },
              handleExtendError: function (t, e) {
                var o = null,
                  i = "",
                  a = "",
                  s = "",
                  r = "",
                  l = "",
                  c = -1,
                  u = -1;
                if (
                  t instanceof TypeError &&
                  (o = /property "?(\w*)"?[,:] object/i.exec(t.message))
                ) {
                  for (l in ((i = o[1]), e)) {
                    for (u = 0; u < i.length && i.charAt(u) === l.charAt(u); )
                      u++;
                    u > c && ((c = u), (r = l));
                  }
                  throw (
                    (c > 1 &&
                      (s = n.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: r,
                      })),
                    (a = n.messages.errorConfigInvalidProperty({
                      erroneous: i,
                      suggestion: s,
                    })),
                    new TypeError(a))
                  );
                }
                throw t;
              },
              template: function (t) {
                for (
                  var e = /\${([\w]*)}/g, n = {}, o = null;
                  (o = e.exec(t));

                )
                  n[o[1]] = new RegExp("\\${" + o[1] + "}", "g");
                return function (e) {
                  var o = "",
                    i = t;
                  for (o in ((e = e || {}), n))
                    i = i.replace(n[o], void 0 !== e[o] ? e[o] : "");
                  return i;
                };
              },
              on: function (t, n, o, i) {
                t &&
                  (t.addEventListener
                    ? t.addEventListener(n, o, i)
                    : t.attachEvent &&
                      ((t["e" + n + o] = o),
                      (t[n + o] = function () {
                        t["e" + n + o](e.event);
                      }),
                      t.attachEvent("on" + n, t[n + o])));
              },
              off: function (t, e, n) {
                t &&
                  (t.removeEventListener
                    ? t.removeEventListener(e, n, !1)
                    : t.detachEvent &&
                      (t.detachEvent("on" + e, t[e + n]), (t[e + n] = null)));
              },
              getCustomEvent: function (t, n, o) {
                var i = null;
                return (
                  (o = o || e.document),
                  "function" == typeof e.CustomEvent
                    ? (i = new e.CustomEvent(t, {
                        detail: n,
                        bubbles: !0,
                        cancelable: !0,
                      }))
                    : "function" == typeof o.createEvent
                    ? (i = o.createEvent("CustomEvent")).initCustomEvent(
                        t,
                        !0,
                        !0,
                        n
                      )
                    : (((i = o.createEventObject()).type = t),
                      (i.returnValue = !1),
                      (i.cancelBubble = !1),
                      (i.detail = n)),
                  i
                );
              },
              getOriginalEvent: function (t) {
                return t.touches && t.touches.length
                  ? t.touches[0]
                  : t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : t;
              },
              index: function (t, e) {
                for (var n = 0; null !== (t = t.previousElementSibling); )
                  (e && !t.matches(e)) || ++n;
                return n;
              },
              camelCase: function (t) {
                return t.toLowerCase().replace(/([_-][a-z])/g, function (t) {
                  return t.toUpperCase().replace(/[_-]/, "");
                });
              },
              pascalCase: function (t) {
                return (
                  (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1)
                );
              },
              dashCase: function (t) {
                return t
                  .replace(/([A-Z])/g, "-$1")
                  .replace(/^-/, "")
                  .toLowerCase();
              },
              isElement: function (t, n) {
                return (
                  (n = n || e.document),
                  !!(e.HTMLElement && t instanceof e.HTMLElement) ||
                    !!(
                      n.defaultView &&
                      n.defaultView.HTMLElement &&
                      t instanceof n.defaultView.HTMLElement
                    ) ||
                    (null !== t &&
                      1 === t.nodeType &&
                      "string" == typeof t.nodeName)
                );
              },
              createElement: function (t, n) {
                var o = null,
                  i = null;
                for (
                  o = (n = n || e.document).createDocumentFragment(),
                    (i = n.createElement("div")).innerHTML = t.trim();
                  i.firstChild;

                )
                  o.appendChild(i.firstChild);
                return o;
              },
              removeWhitespace: function (t) {
                for (var e; t && "#text" === t.nodeName; )
                  (e = t),
                    (t = t.previousSibling),
                    e.parentElement && e.parentElement.removeChild(e);
              },
              isEqualArray: function (t, e) {
                var n = t.length;
                if (n !== e.length) return !1;
                for (; n--; ) if (t[n] !== e[n]) return !1;
                return !0;
              },
              deepEquals: function (t, e) {
                var n;
                if ("object" == typeof t && t && "object" == typeof e && e) {
                  if (Object.keys(t).length !== Object.keys(e).length)
                    return !1;
                  for (n in t)
                    if (!e.hasOwnProperty(n) || !this.deepEquals(t[n], e[n]))
                      return !1;
                } else if (t !== e) return !1;
                return !0;
              },
              arrayShuffle: function (t) {
                for (
                  var e = t.slice(), n = e.length, o = n, i = -1, a = [];
                  o--;

                )
                  (i = ~~(Math.random() * n)),
                    (a = e[o]),
                    (e[o] = e[i]),
                    (e[i] = a);
                return e;
              },
              arrayFromList: function (t) {
                var e, n;
                try {
                  return Array.prototype.slice.call(t);
                } catch (o) {
                  for (e = [], n = 0; n < t.length; n++) e.push(t[n]);
                  return e;
                }
              },
              debounce: function (t, e, n) {
                var o;
                return function () {
                  var i,
                    a = this,
                    s = arguments,
                    r = n && !o;
                  (i = function () {
                    (o = null), n || t.apply(a, s);
                  }),
                    clearTimeout(o),
                    (o = setTimeout(i, e)),
                    r && t.apply(a, s);
                };
              },
              position: function (t) {
                for (var e = 0, n = 0, o = t; t; )
                  (e -= t.scrollLeft),
                    (n -= t.scrollTop),
                    t === o &&
                      ((e += t.offsetLeft),
                      (n += t.offsetTop),
                      (o = t.offsetParent)),
                    (t = t.parentElement);
                return { x: e, y: n };
              },
              getHypotenuse: function (t, e) {
                var n = t.x - e.x,
                  o = t.y - e.y;
                return (
                  (n = n < 0 ? -1 * n : n),
                  (o = o < 0 ? -1 * o : o),
                  Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
                );
              },
              getIntersectionRatio: function (t, e) {
                var n,
                  o = t.width * t.height;
                return (
                  (n = Math.max(
                    0,
                    Math.min(t.left + t.width, e.left + e.width) -
                      Math.max(t.left, e.left)
                  )),
                  (Math.max(
                    0,
                    Math.min(t.top + t.height, e.top + e.height) -
                      Math.max(t.top, e.top)
                  ) *
                    n) /
                    o
                );
              },
              closestParent: function (t, n, o, i) {
                var a = t.parentNode;
                if (((i = i || e.document), o && t.matches(n))) return t;
                for (; a && a != i.body; ) {
                  if (a.matches && a.matches(n)) return a;
                  if (!a.parentNode) return null;
                  a = a.parentNode;
                }
                return null;
              },
              children: function (t, n, o) {
                var i = [],
                  a = "";
                return (
                  (o = o || e.doc),
                  t &&
                    (t.id || ((a = "Temp" + this.randomHexKey()), (t.id = a)),
                    (i = o.querySelectorAll("#" + t.id + " > " + n)),
                    a && t.removeAttribute("id")),
                  i
                );
              },
              clean: function (t) {
                var e = [],
                  n = -1;
                for (n = 0; n < t.length; n++) "" !== t[n] && e.push(t[n]);
                return e;
              },
              defer: function (t) {
                var o = null,
                  i = null,
                  a = null;
                return (
                  (i = new this.Deferred()),
                  n.features.has.promises
                    ? (i.promise = new Promise(function (t, e) {
                        (i.resolve = t), (i.reject = e);
                      }))
                    : (a = e.jQuery || t.$) && "function" == typeof a.Deferred
                    ? ((o = a.Deferred()),
                      (i.promise = o.promise()),
                      (i.resolve = o.resolve),
                      (i.reject = o.reject))
                    : e.console &&
                      console.warn(n.messages.warningNoPromiseImplementation()),
                  i
                );
              },
              all: function (t, o) {
                var i = null;
                return n.features.has.promises
                  ? Promise.all(t)
                  : (i = e.jQuery || o.$) && "function" == typeof i.when
                  ? i.when.apply(i, t).done(function () {
                      return arguments;
                    })
                  : (e.console &&
                      console.warn(n.messages.warningNoPromiseImplementation()),
                    []);
              },
              getPrefix: function (t, e, n) {
                var i = -1,
                  a = "";
                if (o.dashCase(e) in t.style) return "";
                for (i = 0; (a = n[i]); i++)
                  if (a + e in t.style) return a.toLowerCase();
                return "unsupported";
              },
              randomHex: function () {
                return (
                  "00000" + ((16777216 * Math.random()) << 0).toString(16)
                )
                  .substr(-6)
                  .toUpperCase();
              },
              getDocumentState: function (t) {
                return (
                  (t = "object" == typeof t.body ? t : e.document),
                  {
                    scrollTop: e.pageYOffset,
                    scrollLeft: e.pageXOffset,
                    docHeight: t.documentElement.scrollHeight,
                    docWidth: t.documentElement.scrollWidth,
                    viewportHeight: t.documentElement.clientHeight,
                    viewportWidth: t.documentElement.clientWidth,
                  }
                );
              },
              bind: function (t, e) {
                return function () {
                  return e.apply(t, arguments);
                };
              },
              isVisible: function (t) {
                var n;
                return (
                  !!t.offsetParent ||
                  ("fixed" === (n = e.getComputedStyle(t)).position &&
                    "hidden" !== n.visibility &&
                    "0" !== n.opacity)
                );
              },
              seal: function (t) {
                "function" == typeof Object.seal && Object.seal(t);
              },
              freeze: function (t) {
                "function" == typeof Object.freeze && Object.freeze(t);
              },
              compareVersions: function (t, e) {
                var n = t.split("."),
                  o = e.split("."),
                  i = -1,
                  a = -1,
                  s = -1;
                for (s = 0; s < n.length; s++) {
                  if (
                    ((i = parseInt(n[s].replace(/[^\d.]/g, ""))),
                    (a = parseInt(o[s].replace(/[^\d.]/g, "") || 0)) < i)
                  )
                    return !1;
                  if (a > i) return !0;
                }
                return !0;
              },
              Deferred: function () {
                (this.promise = null),
                  (this.resolve = null),
                  (this.reject = null),
                  (this.id = o.randomHex());
              },
              isEmptyObject: function (t) {
                var e = "";
                if ("function" == typeof Object.keys)
                  return 0 === Object.keys(t).length;
                for (e in t) if (t.hasOwnProperty(e)) return !1;
                return !0;
              },
              getClassname: function (t, e, n) {
                var o = "";
                return (
                  (o += t.block).length && (o += t.delineatorElement),
                  (o += t["element" + this.pascalCase(e)]),
                  n ? (o.length && (o += t.delineatorModifier), (o += n)) : o
                );
              },
              getProperty: function (t, e) {
                var n,
                  o = e.split("."),
                  i = "",
                  a = 0;
                if (!e) return t;
                for (
                  n = function (t) {
                    return t ? t[i] : null;
                  };
                  a < o.length;

                )
                  (i = o[a]), (t = n(t)), a++;
                return void 0 !== t ? t : null;
              },
            }),
            (n.h = o),
            (n.Base = function () {}),
            (n.Base.prototype = {
              constructor: n.Base,
              callActions: function (t, e) {
                var n = this.constructor.actions[t],
                  i = "";
                if (n && !o.isEmptyObject(n)) for (i in n) n[i].apply(this, e);
              },
              callFilters: function (t, e, n) {
                var i = this.constructor.filters[t],
                  a = e,
                  s = "";
                if (!i || o.isEmptyObject(i)) return a;
                for (s in ((n = n || []), i))
                  (n = o.arrayFromList(n)).unshift(a),
                    (a = i[s].apply(this, n));
                return a;
              },
            }),
            (n.BaseStatic = function () {
              (this.actions = {}),
                (this.filters = {}),
                (this.extend = function (t) {
                  o.extend(this.prototype, t);
                }),
                (this.registerAction = function (t, e, n) {
                  (this.actions[t] = this.actions[t] || {})[e] = n;
                }),
                (this.registerFilter = function (t, e, n) {
                  (this.filters[t] = this.filters[t] || {})[e] = n;
                });
            }),
            (n.Features = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.boxSizingPrefix = ""),
                (this.transformPrefix = ""),
                (this.transitionPrefix = ""),
                (this.boxSizingPrefix = ""),
                (this.transformProp = ""),
                (this.transformRule = ""),
                (this.transitionProp = ""),
                (this.perspectiveProp = ""),
                (this.perspectiveOriginProp = ""),
                (this.has = new n.Has()),
                (this.canary = null),
                (this.BOX_SIZING_PROP = "boxSizing"),
                (this.TRANSITION_PROP = "transition"),
                (this.TRANSFORM_PROP = "transform"),
                (this.PERSPECTIVE_PROP = "perspective"),
                (this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin"),
                (this.VENDORS = ["Webkit", "moz", "O", "ms"]),
                (this.TWEENABLE = [
                  "opacity",
                  "width",
                  "height",
                  "marginRight",
                  "marginBottom",
                  "x",
                  "y",
                  "scale",
                  "translateX",
                  "translateY",
                  "translateZ",
                  "rotateX",
                  "rotateY",
                  "rotateZ",
                ]),
                this.callActions("afterConstruct");
            }),
            n.BaseStatic.call(n.Features),
            (n.Features.prototype = Object.create(n.Base.prototype)),
            o.extend(n.Features.prototype, {
              constructor: n.Features,
              init: function () {
                var t = this;
                t.callActions("beforeInit", arguments),
                  (t.canary = document.createElement("div")),
                  t.setPrefixes(),
                  t.runTests(),
                  t.callActions("beforeInit", arguments);
              },
              runTests: function () {
                var t = this;
                t.callActions("beforeRunTests", arguments),
                  (t.has.promises = "function" == typeof e.Promise),
                  (t.has.transitions = "unsupported" !== t.transitionPrefix),
                  t.callActions("afterRunTests", arguments),
                  o.freeze(t.has);
              },
              setPrefixes: function () {
                var t = this;
                t.callActions("beforeSetPrefixes", arguments),
                  (t.transitionPrefix = o.getPrefix(
                    t.canary,
                    "Transition",
                    t.VENDORS
                  )),
                  (t.transformPrefix = o.getPrefix(
                    t.canary,
                    "Transform",
                    t.VENDORS
                  )),
                  (t.boxSizingPrefix = o.getPrefix(
                    t.canary,
                    "BoxSizing",
                    t.VENDORS
                  )),
                  (t.boxSizingProp = t.boxSizingPrefix
                    ? t.boxSizingPrefix + o.pascalCase(t.BOX_SIZING_PROP)
                    : t.BOX_SIZING_PROP),
                  (t.transitionProp = t.transitionPrefix
                    ? t.transitionPrefix + o.pascalCase(t.TRANSITION_PROP)
                    : t.TRANSITION_PROP),
                  (t.transformProp = t.transformPrefix
                    ? t.transformPrefix + o.pascalCase(t.TRANSFORM_PROP)
                    : t.TRANSFORM_PROP),
                  (t.transformRule = t.transformPrefix
                    ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP
                    : t.TRANSFORM_PROP),
                  (t.perspectiveProp = t.transformPrefix
                    ? t.transformPrefix + o.pascalCase(t.PERSPECTIVE_PROP)
                    : t.PERSPECTIVE_PROP),
                  (t.perspectiveOriginProp = t.transformPrefix
                    ? t.transformPrefix +
                      o.pascalCase(t.PERSPECTIVE_ORIGIN_PROP)
                    : t.PERSPECTIVE_ORIGIN_PROP),
                  t.callActions("afterSetPrefixes", arguments);
              },
            }),
            (n.Has = function () {
              (this.transitions = !1), (this.promises = !1), o.seal(this);
            }),
            (n.features = new n.Features()),
            n.features.init(),
            (n.ConfigAnimation = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.enable = !0),
                (this.effects = "fade scale"),
                (this.effectsIn = ""),
                (this.effectsOut = ""),
                (this.duration = 600),
                (this.easing = "ease"),
                (this.applyPerspective = !0),
                (this.perspectiveDistance = "3000px"),
                (this.perspectiveOrigin = "50% 50%"),
                (this.queue = !0),
                (this.queueLimit = 3),
                (this.animateResizeContainer = !0),
                (this.animateResizeTargets = !1),
                (this.staggerSequence = null),
                (this.reverseOut = !1),
                (this.nudge = !0),
                (this.clampHeight = !0),
                (this.clampWidth = !0),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigAnimation),
            (n.ConfigAnimation.prototype = Object.create(n.Base.prototype)),
            (n.ConfigAnimation.prototype.constructor = n.ConfigAnimation),
            (n.ConfigBehavior = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.liveSort = !1),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigBehavior),
            (n.ConfigBehavior.prototype = Object.create(n.Base.prototype)),
            (n.ConfigBehavior.prototype.constructor = n.ConfigBehavior),
            (n.ConfigCallbacks = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.onMixStart = null),
                (this.onMixBusy = null),
                (this.onMixEnd = null),
                (this.onMixFail = null),
                (this.onMixClick = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigCallbacks),
            (n.ConfigCallbacks.prototype = Object.create(n.Base.prototype)),
            (n.ConfigCallbacks.prototype.constructor = n.ConfigCallbacks),
            (n.ConfigControls = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.enable = !0),
                (this.live = !1),
                (this.scope = "global"),
                (this.toggleLogic = "or"),
                (this.toggleDefault = "all"),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigControls),
            (n.ConfigControls.prototype = Object.create(n.Base.prototype)),
            (n.ConfigControls.prototype.constructor = n.ConfigControls),
            (n.ConfigClassNames = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.block = "mixitup"),
                (this.elementContainer = "container"),
                (this.elementFilter = "control"),
                (this.elementSort = "control"),
                (this.elementMultimix = "control"),
                (this.elementToggle = "control"),
                (this.modifierActive = "active"),
                (this.modifierDisabled = "disabled"),
                (this.modifierFailed = "failed"),
                (this.delineatorElement = "-"),
                (this.delineatorModifier = "-"),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigClassNames),
            (n.ConfigClassNames.prototype = Object.create(n.Base.prototype)),
            (n.ConfigClassNames.prototype.constructor = n.ConfigClassNames),
            (n.ConfigData = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.uidKey = ""),
                (this.dirtyCheck = !1),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigData),
            (n.ConfigData.prototype = Object.create(n.Base.prototype)),
            (n.ConfigData.prototype.constructor = n.ConfigData),
            (n.ConfigDebug = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.enable = !1),
                (this.showWarnings = !0),
                (this.fauxAsync = !1),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigDebug),
            (n.ConfigDebug.prototype = Object.create(n.Base.prototype)),
            (n.ConfigDebug.prototype.constructor = n.ConfigDebug),
            (n.ConfigLayout = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.allowNestedTargets = !0),
                (this.containerClassName = ""),
                (this.siblingBefore = null),
                (this.siblingAfter = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigLayout),
            (n.ConfigLayout.prototype = Object.create(n.Base.prototype)),
            (n.ConfigLayout.prototype.constructor = n.ConfigLayout),
            (n.ConfigLoad = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.filter = "all"),
                (this.sort = "default:asc"),
                (this.dataset = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigLoad),
            (n.ConfigLoad.prototype = Object.create(n.Base.prototype)),
            (n.ConfigLoad.prototype.constructor = n.ConfigLoad),
            (n.ConfigSelectors = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.target = ".mix"),
                (this.control = ""),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigSelectors),
            (n.ConfigSelectors.prototype = Object.create(n.Base.prototype)),
            (n.ConfigSelectors.prototype.constructor = n.ConfigSelectors),
            (n.ConfigRender = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.target = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigRender),
            (n.ConfigRender.prototype = Object.create(n.Base.prototype)),
            (n.ConfigRender.prototype.constructor = n.ConfigRender),
            (n.ConfigTemplates = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ConfigTemplates),
            (n.ConfigTemplates.prototype = Object.create(n.Base.prototype)),
            (n.ConfigTemplates.prototype.constructor = n.ConfigTemplates),
            (n.Config = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.animation = new n.ConfigAnimation()),
                (this.behavior = new n.ConfigBehavior()),
                (this.callbacks = new n.ConfigCallbacks()),
                (this.controls = new n.ConfigControls()),
                (this.classNames = new n.ConfigClassNames()),
                (this.data = new n.ConfigData()),
                (this.debug = new n.ConfigDebug()),
                (this.layout = new n.ConfigLayout()),
                (this.load = new n.ConfigLoad()),
                (this.selectors = new n.ConfigSelectors()),
                (this.render = new n.ConfigRender()),
                (this.templates = new n.ConfigTemplates()),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Config),
            (n.Config.prototype = Object.create(n.Base.prototype)),
            (n.Config.prototype.constructor = n.Config),
            (n.MixerDom = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.document = null),
                (this.body = null),
                (this.container = null),
                (this.parent = null),
                (this.targets = []),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.MixerDom),
            (n.MixerDom.prototype = Object.create(n.Base.prototype)),
            (n.MixerDom.prototype.constructor = n.MixerDom),
            (n.UiClassNames = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.base = ""),
                (this.active = ""),
                (this.disabled = ""),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.UiClassNames),
            (n.UiClassNames.prototype = Object.create(n.Base.prototype)),
            (n.UiClassNames.prototype.constructor = n.UiClassNames),
            (n.CommandDataset = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.dataset = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.CommandDataset),
            (n.CommandDataset.prototype = Object.create(n.Base.prototype)),
            (n.CommandDataset.prototype.constructor = n.CommandDataset),
            (n.CommandMultimix = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.filter = null),
                (this.sort = null),
                (this.insert = null),
                (this.remove = null),
                (this.changeLayout = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.CommandMultimix),
            (n.CommandMultimix.prototype = Object.create(n.Base.prototype)),
            (n.CommandMultimix.prototype.constructor = n.CommandMultimix),
            (n.CommandFilter = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.selector = ""),
                (this.collection = null),
                (this.action = "show"),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.CommandFilter),
            (n.CommandFilter.prototype = Object.create(n.Base.prototype)),
            (n.CommandFilter.prototype.constructor = n.CommandFilter),
            (n.CommandSort = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.sortString = ""),
                (this.attribute = ""),
                (this.order = "asc"),
                (this.collection = null),
                (this.next = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.CommandSort),
            (n.CommandSort.prototype = Object.create(n.Base.prototype)),
            (n.CommandSort.prototype.constructor = n.CommandSort),
            (n.CommandInsert = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.index = 0),
                (this.collection = []),
                (this.position = "before"),
                (this.sibling = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.CommandInsert),
            (n.CommandInsert.prototype = Object.create(n.Base.prototype)),
            (n.CommandInsert.prototype.constructor = n.CommandInsert),
            (n.CommandRemove = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.targets = []),
                (this.collection = []),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.CommandRemove),
            (n.CommandRemove.prototype = Object.create(n.Base.prototype)),
            (n.CommandRemove.prototype.constructor = n.CommandRemove),
            (n.CommandChangeLayout = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.containerClassName = ""),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.CommandChangeLayout),
            (n.CommandChangeLayout.prototype = Object.create(n.Base.prototype)),
            (n.CommandChangeLayout.prototype.constructor =
              n.CommandChangeLayout),
            (n.ControlDefinition = function (t, e, i, a) {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.type = t),
                (this.selector = e),
                (this.live = i || !1),
                (this.parent = a || ""),
                this.callActions("afterConstruct"),
                o.freeze(this),
                o.seal(this);
            }),
            n.BaseStatic.call(n.ControlDefinition),
            (n.ControlDefinition.prototype = Object.create(n.Base.prototype)),
            (n.ControlDefinition.prototype.constructor = n.ControlDefinition),
            (n.controlDefinitions = []),
            n.controlDefinitions.push(
              new n.ControlDefinition("multimix", "[data-filter][data-sort]")
            ),
            n.controlDefinitions.push(
              new n.ControlDefinition("filter", "[data-filter]")
            ),
            n.controlDefinitions.push(
              new n.ControlDefinition("sort", "[data-sort]")
            ),
            n.controlDefinitions.push(
              new n.ControlDefinition("toggle", "[data-toggle]")
            ),
            (n.Control = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.el = null),
                (this.selector = ""),
                (this.bound = []),
                (this.pending = -1),
                (this.type = ""),
                (this.status = "inactive"),
                (this.filter = ""),
                (this.sort = ""),
                (this.canDisable = !1),
                (this.handler = null),
                (this.classNames = new n.UiClassNames()),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Control),
            (n.Control.prototype = Object.create(n.Base.prototype)),
            o.extend(n.Control.prototype, {
              constructor: n.Control,
              init: function (t, e, o) {
                var i = this;
                if (
                  (this.callActions("beforeInit", arguments),
                  (i.el = t),
                  (i.type = e),
                  (i.selector = o),
                  i.selector)
                )
                  i.status = "live";
                else
                  switch (
                    ((i.canDisable = "boolean" == typeof i.el.disable), i.type)
                  ) {
                    case "filter":
                      i.filter = i.el.getAttribute("data-filter");
                      break;
                    case "toggle":
                      i.filter = i.el.getAttribute("data-toggle");
                      break;
                    case "sort":
                      i.sort = i.el.getAttribute("data-sort");
                      break;
                    case "multimix":
                      (i.filter = i.el.getAttribute("data-filter")),
                        (i.sort = i.el.getAttribute("data-sort"));
                  }
                i.bindClick(),
                  n.controls.push(i),
                  this.callActions("afterInit", arguments);
              },
              isBound: function (t) {
                var e;
                return (
                  this.callActions("beforeIsBound", arguments),
                  (e = this.bound.indexOf(t) > -1),
                  this.callFilters("afterIsBound", e, arguments)
                );
              },
              addBinding: function (t) {
                this.callActions("beforeAddBinding", arguments),
                  this.isBound() || this.bound.push(t),
                  this.callActions("afterAddBinding", arguments);
              },
              removeBinding: function (t) {
                var e = this,
                  o = -1;
                this.callActions("beforeRemoveBinding", arguments),
                  (o = e.bound.indexOf(t)) > -1 && e.bound.splice(o, 1),
                  e.bound.length < 1 &&
                    (e.unbindClick(),
                    (o = n.controls.indexOf(e)),
                    n.controls.splice(o, 1),
                    "active" === e.status && e.renderStatus(e.el, "inactive")),
                  this.callActions("afterRemoveBinding", arguments);
              },
              bindClick: function () {
                var t = this;
                this.callActions("beforeBindClick", arguments),
                  (t.handler = function (e) {
                    t.handleClick(e);
                  }),
                  o.on(t.el, "click", t.handler),
                  this.callActions("afterBindClick", arguments);
              },
              unbindClick: function () {
                var t = this;
                this.callActions("beforeUnbindClick", arguments),
                  o.off(t.el, "click", t.handler),
                  (t.handler = null),
                  this.callActions("afterUnbindClick", arguments);
              },
              handleClick: function (t) {
                var e = this,
                  i = null,
                  a = null,
                  s = !1,
                  r = {},
                  l = null,
                  c = [],
                  u = -1;
                if (
                  (this.callActions("beforeHandleClick", arguments),
                  (this.pending = 0),
                  (a = e.bound[0]),
                  (i = e.selector
                    ? o.closestParent(
                        t.target,
                        a.config.selectors.control + e.selector,
                        !0,
                        a.dom.document
                      )
                    : e.el))
                ) {
                  switch (e.type) {
                    case "filter":
                      r.filter = e.filter || i.getAttribute("data-filter");
                      break;
                    case "sort":
                      r.sort = e.sort || i.getAttribute("data-sort");
                      break;
                    case "multimix":
                      (r.filter = e.filter || i.getAttribute("data-filter")),
                        (r.sort = e.sort || i.getAttribute("data-sort"));
                      break;
                    case "toggle":
                      (r.filter = e.filter || i.getAttribute("data-toggle")),
                        (s =
                          "live" === e.status
                            ? o.hasClass(i, e.classNames.active)
                            : "active" === e.status);
                  }
                  for (u = 0; u < e.bound.length; u++)
                    (l = new n.CommandMultimix()), o.extend(l, r), c.push(l);
                  for (
                    c = e.callFilters("commandsHandleClick", c, arguments),
                      e.pending = e.bound.length,
                      u = 0;
                    (a = e.bound[u]);
                    u++
                  )
                    (r = c[u]) &&
                      (a.lastClicked || (a.lastClicked = i),
                      n.events.fire(
                        "mixClick",
                        a.dom.container,
                        {
                          state: a.state,
                          instance: a,
                          originalEvent: t,
                          control: a.lastClicked,
                        },
                        a.dom.document
                      ),
                      ("function" == typeof a.config.callbacks.onMixClick &&
                        !1 ===
                          a.config.callbacks.onMixClick.call(
                            a.lastClicked,
                            a.state,
                            t,
                            a
                          )) ||
                        ("toggle" === e.type
                          ? s
                            ? a.toggleOff(r.filter)
                            : a.toggleOn(r.filter)
                          : a.multimix(r)));
                  this.callActions("afterHandleClick", arguments);
                } else e.callActions("afterHandleClick", arguments);
              },
              update: function (t, e) {
                var o = this,
                  i = new n.CommandMultimix();
                o.callActions("beforeUpdate", arguments),
                  o.pending--,
                  (o.pending = Math.max(0, o.pending)),
                  o.pending > 0 ||
                    ("live" === o.status
                      ? o.updateLive(t, e)
                      : ((i.sort = o.sort),
                        (i.filter = o.filter),
                        o.callFilters("actionsUpdate", i, arguments),
                        o.parseStatusChange(o.el, t, i, e)),
                    o.callActions("afterUpdate", arguments));
              },
              updateLive: function (t, e) {
                var o,
                  i = this,
                  a = null,
                  s = null,
                  r = -1;
                if ((i.callActions("beforeUpdateLive", arguments), i.el)) {
                  for (
                    o = i.el.querySelectorAll(i.selector), r = 0;
                    (s = o[r]);
                    r++
                  ) {
                    switch (((a = new n.CommandMultimix()), i.type)) {
                      case "filter":
                        a.filter = s.getAttribute("data-filter");
                        break;
                      case "sort":
                        a.sort = s.getAttribute("data-sort");
                        break;
                      case "multimix":
                        (a.filter = s.getAttribute("data-filter")),
                          (a.sort = s.getAttribute("data-sort"));
                        break;
                      case "toggle":
                        a.filter = s.getAttribute("data-toggle");
                    }
                    (a = i.callFilters("actionsUpdateLive", a, arguments)),
                      i.parseStatusChange(s, t, a, e);
                  }
                  i.callActions("afterUpdateLive", arguments);
                }
              },
              parseStatusChange: function (t, e, n, o) {
                var i = this,
                  a = "",
                  s = -1;
                switch (
                  (i.callActions("beforeParseStatusChange", arguments), i.type)
                ) {
                  case "filter":
                    e.filter === n.filter
                      ? i.renderStatus(t, "active")
                      : i.renderStatus(t, "inactive");
                    break;
                  case "multimix":
                    e.sort === n.sort && e.filter === n.filter
                      ? i.renderStatus(t, "active")
                      : i.renderStatus(t, "inactive");
                    break;
                  case "sort":
                    e.sort.match(/:asc/g) && (a = e.sort.replace(/:asc/g, "")),
                      e.sort === n.sort || a === n.sort
                        ? i.renderStatus(t, "active")
                        : i.renderStatus(t, "inactive");
                    break;
                  case "toggle":
                    for (
                      o.length < 1 && i.renderStatus(t, "inactive"),
                        e.filter === n.filter && i.renderStatus(t, "active"),
                        s = 0;
                      s < o.length;
                      s++
                    ) {
                      if (o[s] === n.filter) {
                        i.renderStatus(t, "active");
                        break;
                      }
                      i.renderStatus(t, "inactive");
                    }
                }
                i.callActions("afterParseStatusChange", arguments);
              },
              renderStatus: function (t, e) {
                var n = this;
                switch ((n.callActions("beforeRenderStatus", arguments), e)) {
                  case "active":
                    o.addClass(t, n.classNames.active),
                      o.removeClass(t, n.classNames.disabled),
                      n.canDisable && (n.el.disabled = !1);
                    break;
                  case "inactive":
                    o.removeClass(t, n.classNames.active),
                      o.removeClass(t, n.classNames.disabled),
                      n.canDisable && (n.el.disabled = !1);
                    break;
                  case "disabled":
                    n.canDisable && (n.el.disabled = !0),
                      o.addClass(t, n.classNames.disabled),
                      o.removeClass(t, n.classNames.active);
                }
                "live" !== n.status && (n.status = e),
                  n.callActions("afterRenderStatus", arguments);
              },
            }),
            (n.controls = []),
            (n.StyleData = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.x = 0),
                (this.y = 0),
                (this.top = 0),
                (this.right = 0),
                (this.bottom = 0),
                (this.left = 0),
                (this.width = 0),
                (this.height = 0),
                (this.marginRight = 0),
                (this.marginBottom = 0),
                (this.opacity = 0),
                (this.scale = new n.TransformData()),
                (this.translateX = new n.TransformData()),
                (this.translateY = new n.TransformData()),
                (this.translateZ = new n.TransformData()),
                (this.rotateX = new n.TransformData()),
                (this.rotateY = new n.TransformData()),
                (this.rotateZ = new n.TransformData()),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.StyleData),
            (n.StyleData.prototype = Object.create(n.Base.prototype)),
            (n.StyleData.prototype.constructor = n.StyleData),
            (n.TransformData = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.value = 0),
                (this.unit = ""),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.TransformData),
            (n.TransformData.prototype = Object.create(n.Base.prototype)),
            (n.TransformData.prototype.constructor = n.TransformData),
            (n.TransformDefaults = function () {
              n.StyleData.apply(this),
                this.callActions("beforeConstruct"),
                (this.scale.value = 0.01),
                (this.scale.unit = ""),
                (this.translateX.value = 20),
                (this.translateX.unit = "px"),
                (this.translateY.value = 20),
                (this.translateY.unit = "px"),
                (this.translateZ.value = 20),
                (this.translateZ.unit = "px"),
                (this.rotateX.value = 90),
                (this.rotateX.unit = "deg"),
                (this.rotateY.value = 90),
                (this.rotateY.unit = "deg"),
                (this.rotateX.value = 90),
                (this.rotateX.unit = "deg"),
                (this.rotateZ.value = 180),
                (this.rotateZ.unit = "deg"),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.TransformDefaults),
            (n.TransformDefaults.prototype = Object.create(
              n.StyleData.prototype
            )),
            (n.TransformDefaults.prototype.constructor = n.TransformDefaults),
            (n.transformDefaults = new n.TransformDefaults()),
            (n.EventDetail = function () {
              (this.state = null),
                (this.futureState = null),
                (this.instance = null),
                (this.originalEvent = null);
            }),
            (n.Events = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.mixStart = null),
                (this.mixBusy = null),
                (this.mixEnd = null),
                (this.mixFail = null),
                (this.mixClick = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Events),
            (n.Events.prototype = Object.create(n.Base.prototype)),
            (n.Events.prototype.constructor = n.Events),
            (n.Events.prototype.fire = function (t, e, i, a) {
              var s,
                r = this,
                l = new n.EventDetail();
              if ((r.callActions("beforeFire", arguments), void 0 === r[t]))
                throw new Error('Event type "' + t + '" not found.');
              (l.state = new n.State()),
                o.extend(l.state, i.state),
                i.futureState &&
                  ((l.futureState = new n.State()),
                  o.extend(l.futureState, i.futureState)),
                (l.instance = i.instance),
                i.originalEvent && (l.originalEvent = i.originalEvent),
                (s = o.getCustomEvent(t, l, a)),
                r.callFilters("eventFire", s, arguments),
                e.dispatchEvent(s);
            }),
            (n.events = new n.Events()),
            (n.QueueItem = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.args = []),
                (this.instruction = null),
                (this.triggerElement = null),
                (this.deferred = null),
                (this.isToggling = !1),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.QueueItem),
            (n.QueueItem.prototype = Object.create(n.Base.prototype)),
            (n.QueueItem.prototype.constructor = n.QueueItem),
            (n.Mixer = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.config = new n.Config()),
                (this.id = ""),
                (this.isBusy = !1),
                (this.isToggling = !1),
                (this.incPadding = !0),
                (this.controls = []),
                (this.targets = []),
                (this.origOrder = []),
                (this.cache = {}),
                (this.toggleArray = []),
                (this.targetsMoved = 0),
                (this.targetsImmovable = 0),
                (this.targetsBound = 0),
                (this.targetsDone = 0),
                (this.staggerDuration = 0),
                (this.effectsIn = null),
                (this.effectsOut = null),
                (this.transformIn = []),
                (this.transformOut = []),
                (this.queue = []),
                (this.state = null),
                (this.lastOperation = null),
                (this.lastClicked = null),
                (this.userCallback = null),
                (this.userDeferred = null),
                (this.dom = new n.MixerDom()),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Mixer),
            (n.Mixer.prototype = Object.create(n.Base.prototype)),
            o.extend(n.Mixer.prototype, {
              constructor: n.Mixer,
              attach: function (t, i, a, s) {
                var r = this,
                  l = null,
                  c = -1;
                for (
                  r.callActions("beforeAttach", arguments),
                    r.id = a,
                    s && o.extend(r.config, s, !0, !0),
                    r.sanitizeConfig(),
                    r.cacheDom(t, i),
                    r.config.layout.containerClassName &&
                      o.addClass(
                        r.dom.container,
                        r.config.layout.containerClassName
                      ),
                    n.features.has.transitions ||
                      (r.config.animation.enable = !1),
                    void 0 === e.console && (r.config.debug.showWarnings = !1),
                    r.config.data.uidKey && (r.config.controls.enable = !1),
                    r.indexTargets(),
                    r.state = r.getInitialState(),
                    c = 0;
                  (l = r.lastOperation.toHide[c]);
                  c++
                )
                  l.hide();
                r.config.controls.enable &&
                  (r.initControls(),
                  r.buildToggleArray(null, r.state),
                  r.updateControls({
                    filter: r.state.activeFilter,
                    sort: r.state.activeSort,
                  })),
                  r.parseEffects(),
                  r.callActions("afterAttach", arguments);
              },
              sanitizeConfig: function () {
                var t = this;
                t.callActions("beforeSanitizeConfig", arguments),
                  (t.config.controls.scope = t.config.controls.scope
                    .toLowerCase()
                    .trim()),
                  (t.config.controls.toggleLogic = t.config.controls.toggleLogic
                    .toLowerCase()
                    .trim()),
                  (t.config.controls.toggleDefault =
                    t.config.controls.toggleDefault.toLowerCase().trim()),
                  (t.config.animation.effects =
                    t.config.animation.effects.trim()),
                  t.callActions("afterSanitizeConfig", arguments);
              },
              getInitialState: function () {
                var t = this,
                  e = new n.State(),
                  o = new n.Operation();
                if (
                  (t.callActions("beforeGetInitialState", arguments),
                  (e.activeContainerClassName =
                    t.config.layout.containerClassName),
                  t.config.load.dataset)
                ) {
                  if (
                    !t.config.data.uidKey ||
                    "string" != typeof t.config.data.uidKey
                  )
                    throw new TypeError(
                      n.messages.errorConfigDataUidKeyNotSet()
                    );
                  (o.startDataset =
                    o.newDataset =
                    e.activeDataset =
                      t.config.load.dataset.slice()),
                    (o.startContainerClassName = o.newContainerClassName =
                      e.activeContainerClassName),
                    (o.show = t.targets.slice()),
                    (e = t.callFilters("stateGetInitialState", e, arguments));
                } else
                  (e.activeFilter = t.parseFilterArgs([
                    t.config.load.filter,
                  ]).command),
                    (e.activeSort = t.parseSortArgs([
                      t.config.load.sort,
                    ]).command),
                    (e.totalTargets = t.targets.length),
                    (e = t.callFilters("stateGetInitialState", e, arguments))
                      .activeSort.collection ||
                    e.activeSort.attribute ||
                    "random" === e.activeSort.order ||
                    "desc" === e.activeSort.order
                      ? ((o.newSort = e.activeSort),
                        t.sortOperation(o),
                        t.printSort(!1, o),
                        (t.targets = o.newOrder))
                      : (o.startOrder = o.newOrder = t.targets),
                    (o.startFilter = o.newFilter = e.activeFilter),
                    (o.startSort = o.newSort = e.activeSort),
                    (o.startContainerClassName = o.newContainerClassName =
                      e.activeContainerClassName),
                    "all" === o.newFilter.selector
                      ? (o.newFilter.selector = t.config.selectors.target)
                      : "none" === o.newFilter.selector &&
                        (o.newFilter.selector = "");
                return (
                  (o = t.callFilters("operationGetInitialState", o, [e])),
                  (t.lastOperation = o),
                  o.newFilter && t.filterOperation(o),
                  (e = t.buildState(o))
                );
              },
              cacheDom: function (t, e) {
                var n = this;
                n.callActions("beforeCacheDom", arguments),
                  (n.dom.document = e),
                  (n.dom.body = n.dom.document.querySelector("body")),
                  (n.dom.container = t),
                  (n.dom.parent = t),
                  n.callActions("afterCacheDom", arguments);
              },
              indexTargets: function () {
                var t,
                  e = this,
                  i = null,
                  a = null,
                  s = -1;
                if (
                  (e.callActions("beforeIndexTargets", arguments),
                  (e.dom.targets = e.config.layout.allowNestedTargets
                    ? e.dom.container.querySelectorAll(
                        e.config.selectors.target
                      )
                    : o.children(
                        e.dom.container,
                        e.config.selectors.target,
                        e.dom.document
                      )),
                  (e.dom.targets = o.arrayFromList(e.dom.targets)),
                  (e.targets = []),
                  (t = e.config.load.dataset) &&
                    t.length !== e.dom.targets.length)
                )
                  throw new Error(n.messages.errorDatasetPrerenderedMismatch());
                if (e.dom.targets.length) {
                  for (s = 0; (a = e.dom.targets[s]); s++)
                    (i = new n.Target()).init(a, e, t ? t[s] : void 0),
                      (i.isInDom = !0),
                      e.targets.push(i);
                  e.dom.parent =
                    e.dom.targets[0].parentElement === e.dom.container
                      ? e.dom.container
                      : e.dom.targets[0].parentElement;
                }
                (e.origOrder = e.targets),
                  e.callActions("afterIndexTargets", arguments);
              },
              initControls: function () {
                var t = this,
                  e = "",
                  o = null,
                  i = null,
                  a = null,
                  s = null,
                  r = null,
                  l = -1,
                  c = -1;
                switch (
                  (t.callActions("beforeInitControls", arguments),
                  t.config.controls.scope)
                ) {
                  case "local":
                    a = t.dom.container;
                    break;
                  case "global":
                    a = t.dom.document;
                    break;
                  default:
                    throw new Error(
                      n.messages.errorConfigInvalidControlsScope()
                    );
                }
                for (l = 0; (e = n.controlDefinitions[l]); l++)
                  if (t.config.controls.live || e.live) {
                    if (e.parent) {
                      if (!(s = t.dom[e.parent]) || s.length < 0) continue;
                      "number" != typeof s.length && (s = [s]);
                    } else s = [a];
                    for (c = 0; (i = s[c]); c++)
                      (r = t.getControl(i, e.type, e.selector)),
                        t.controls.push(r);
                  } else
                    for (
                      o = a.querySelectorAll(
                        t.config.selectors.control + e.selector
                      ),
                        c = 0;
                      (i = o[c]);
                      c++
                    )
                      (r = t.getControl(i, e.type, "")) && t.controls.push(r);
                t.callActions("afterInitControls", arguments);
              },
              getControl: function (t, e, i) {
                var a = this,
                  s = null,
                  r = -1;
                if ((a.callActions("beforeGetControl", arguments), !i))
                  for (r = 0; (s = n.controls[r]); r++) {
                    if (s.el === t && s.isBound(a))
                      return a.callFilters(
                        "controlGetControl",
                        null,
                        arguments
                      );
                    if (s.el === t && s.type === e && s.selector === i)
                      return (
                        s.addBinding(a),
                        a.callFilters("controlGetControl", s, arguments)
                      );
                  }
                return (
                  (s = new n.Control()).init(t, e, i),
                  (s.classNames.base = o.getClassname(a.config.classNames, e)),
                  (s.classNames.active = o.getClassname(
                    a.config.classNames,
                    e,
                    a.config.classNames.modifierActive
                  )),
                  (s.classNames.disabled = o.getClassname(
                    a.config.classNames,
                    e,
                    a.config.classNames.modifierDisabled
                  )),
                  s.addBinding(a),
                  a.callFilters("controlGetControl", s, arguments)
                );
              },
              getToggleSelector: function () {
                var t = this,
                  e = "or" === t.config.controls.toggleLogic ? ", " : "",
                  n = "";
                return (
                  t.callActions("beforeGetToggleSelector", arguments),
                  (t.toggleArray = o.clean(t.toggleArray)),
                  "" === (n = t.toggleArray.join(e)) &&
                    (n = t.config.controls.toggleDefault),
                  t.callFilters("selectorGetToggleSelector", n, arguments)
                );
              },
              buildToggleArray: function (t, e) {
                var n = this,
                  i = "";
                if (
                  (n.callActions("beforeBuildToggleArray", arguments),
                  t && t.filter)
                )
                  i = t.filter.selector.replace(/\s/g, "");
                else {
                  if (!e) return;
                  i = e.activeFilter.selector.replace(/\s/g, "");
                }
                (i !== n.config.selectors.target && "all" !== i) || (i = ""),
                  "or" === n.config.controls.toggleLogic
                    ? (n.toggleArray = i.split(","))
                    : (n.toggleArray = n.splitCompoundSelector(i)),
                  (n.toggleArray = o.clean(n.toggleArray)),
                  n.callActions("afterBuildToggleArray", arguments);
              },
              splitCompoundSelector: function (t) {
                var e = t.split(/([\.\[])/g),
                  n = [],
                  o = "",
                  i = -1;
                for ("" === e[0] && e.shift(), i = 0; i < e.length; i++)
                  i % 2 == 0 && (o = ""), (o += e[i]), i % 2 != 0 && n.push(o);
                return n;
              },
              updateControls: function (t) {
                var e = this,
                  i = null,
                  a = new n.CommandMultimix(),
                  s = -1;
                for (
                  e.callActions("beforeUpdateControls", arguments),
                    t.filter
                      ? (a.filter = t.filter.selector)
                      : (a.filter = e.state.activeFilter.selector),
                    t.sort
                      ? (a.sort = e.buildSortString(t.sort))
                      : (a.sort = e.buildSortString(e.state.activeSort)),
                    a.filter === e.config.selectors.target &&
                      (a.filter = "all"),
                    "" === a.filter && (a.filter = "none"),
                    o.freeze(a),
                    s = 0;
                  (i = e.controls[s]);
                  s++
                )
                  i.update(a, e.toggleArray);
                e.callActions("afterUpdateControls", arguments);
              },
              buildSortString: function (t) {
                var e = "";
                return (
                  (e += t.sortString),
                  t.next && (e += " " + this.buildSortString(t.next)),
                  e
                );
              },
              insertTargets: function (t, e) {
                var i,
                  a = this,
                  s = -1,
                  r = null,
                  l = null,
                  c = null,
                  u = -1;
                if (
                  (a.callActions("beforeInsertTargets", arguments),
                  void 0 === t.index && (t.index = 0),
                  (i = a.getNextSibling(t.index, t.sibling, t.position)),
                  (r = a.dom.document.createDocumentFragment()),
                  (s = i
                    ? o.index(i, a.config.selectors.target)
                    : a.targets.length),
                  t.collection)
                ) {
                  for (u = 0; (c = t.collection[u]); u++) {
                    if (a.dom.targets.indexOf(c) > -1)
                      throw new Error(
                        n.messages.errorInsertPreexistingElement()
                      );
                    (c.style.display = "none"),
                      r.appendChild(c),
                      r.appendChild(a.dom.document.createTextNode(" ")),
                      o.isElement(c, a.dom.document) &&
                        c.matches(a.config.selectors.target) &&
                        ((l = new n.Target()).init(c, a),
                        (l.isInDom = !0),
                        a.targets.splice(s, 0, l),
                        s++);
                  }
                  a.dom.parent.insertBefore(r, i);
                }
                (e.startOrder = a.origOrder = a.targets),
                  a.callActions("afterInsertTargets", arguments);
              },
              getNextSibling: function (t, e, n) {
                var o = this,
                  i = null;
                return (
                  (t = Math.max(t, 0)),
                  e && "before" === n
                    ? (i = e)
                    : e && "after" === n
                    ? (i = e.nextElementSibling || null)
                    : o.targets.length > 0 && void 0 !== t
                    ? (i =
                        t < o.targets.length || !o.targets.length
                          ? o.targets[t].dom.el
                          : o.targets[o.targets.length - 1].dom.el
                              .nextElementSibling)
                    : 0 === o.targets.length &&
                      o.dom.parent.children.length > 0 &&
                      (o.config.layout.siblingAfter
                        ? (i = o.config.layout.siblingAfter)
                        : o.config.layout.siblingBefore
                        ? (i = o.config.layout.siblingBefore.nextElementSibling)
                        : o.dom.parent.children[0]),
                  o.callFilters("elementGetNextSibling", i, arguments)
                );
              },
              filterOperation: function (t) {
                var e,
                  n = this,
                  o = !1,
                  i = -1,
                  a = null,
                  s = -1;
                for (
                  n.callActions("beforeFilterOperation", arguments),
                    e = t.newFilter.action,
                    s = 0;
                  (a = t.newOrder[s]);
                  s++
                )
                  (o = t.newFilter.collection
                    ? t.newFilter.collection.indexOf(a.dom.el) > -1
                    : "" !== t.newFilter.selector &&
                      a.dom.el.matches(t.newFilter.selector)),
                    n.evaluateHideShow(o, a, e, t);
                if (t.toRemove.length)
                  for (s = 0; (a = t.show[s]); s++)
                    t.toRemove.indexOf(a) > -1 &&
                      (t.show.splice(s, 1),
                      (i = t.toShow.indexOf(a)) > -1 && t.toShow.splice(i, 1),
                      t.toHide.push(a),
                      t.hide.push(a),
                      s--);
                (t.matching = t.show.slice()),
                  0 === t.show.length &&
                    "" !== t.newFilter.selector &&
                    0 !== n.targets.length &&
                    (t.hasFailed = !0),
                  n.callActions("afterFilterOperation", arguments);
              },
              evaluateHideShow: function (t, e, n, o) {
                var i,
                  a = this,
                  s = Array.prototype.slice.call(arguments, 1);
                (i = a.callFilters("testResultEvaluateHideShow", t, s)),
                  a.callActions("beforeEvaluateHideShow", arguments),
                  (!0 === i && "show" === n) || (!1 === i && "hide" === n)
                    ? (o.show.push(e), !e.isShown && o.toShow.push(e))
                    : (o.hide.push(e), e.isShown && o.toHide.push(e)),
                  a.callActions("afterEvaluateHideShow", arguments);
              },
              sortOperation: function (t) {
                var e = this,
                  i = [],
                  a = null,
                  s = null,
                  r = -1;
                if (
                  (e.callActions("beforeSortOperation", arguments),
                  (t.startOrder = e.targets),
                  t.newSort.collection)
                ) {
                  for (i = [], r = 0; (s = t.newSort.collection[r]); r++) {
                    if (e.dom.targets.indexOf(s) < 0)
                      throw new Error(n.messages.errorSortNonExistentElement());
                    (a = new n.Target()).init(s, e),
                      (a.isInDom = !0),
                      i.push(a);
                  }
                  t.newOrder = i;
                } else
                  "random" === t.newSort.order
                    ? (t.newOrder = o.arrayShuffle(t.startOrder))
                    : "" === t.newSort.attribute
                    ? ((t.newOrder = e.origOrder.slice()),
                      "desc" === t.newSort.order && t.newOrder.reverse())
                    : ((t.newOrder = t.startOrder.slice()),
                      t.newOrder.sort(function (n, o) {
                        return e.compare(n, o, t.newSort);
                      }));
                o.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1),
                  e.callActions("afterSortOperation", arguments);
              },
              compare: function (t, e, n) {
                var o = this,
                  i = n.order,
                  a = o.getAttributeValue(t, n.attribute),
                  s = o.getAttributeValue(e, n.attribute);
                return (
                  isNaN(1 * a) || isNaN(1 * s)
                    ? ((a = a.toLowerCase()), (s = s.toLowerCase()))
                    : ((a *= 1), (s *= 1)),
                  a < s
                    ? "asc" === i
                      ? -1
                      : 1
                    : a > s
                    ? "asc" === i
                      ? 1
                      : -1
                    : a === s && n.next
                    ? o.compare(t, e, n.next)
                    : 0
                );
              },
              getAttributeValue: function (t, e) {
                var o;
                return (
                  null === (o = t.dom.el.getAttribute("data-" + e)) &&
                    this.config.debug.showWarnings &&
                    console.warn(
                      n.messages.warningInconsistentSortingAttributes({
                        attribute: "data-" + e,
                      })
                    ),
                  this.callFilters("valueGetAttributeValue", o || 0, arguments)
                );
              },
              printSort: function (t, n) {
                var i,
                  a = this,
                  s = t ? n.newOrder : n.startOrder,
                  r = t ? n.startOrder : n.newOrder,
                  l = s.length
                    ? s[s.length - 1].dom.el.nextElementSibling
                    : null,
                  c = e.document.createDocumentFragment(),
                  u = null,
                  f = null,
                  d = -1;
                for (
                  a.callActions("beforePrintSort", arguments), d = 0;
                  (u = s[d]);
                  d++
                )
                  "absolute" !== (f = u.dom.el).style.position &&
                    (o.removeWhitespace(f.previousSibling),
                    f.parentElement.removeChild(f));
                for (
                  (i = l ? l.previousSibling : a.dom.parent.lastChild) &&
                    "#text" === i.nodeName &&
                    o.removeWhitespace(i),
                    d = 0;
                  (u = r[d]);
                  d++
                )
                  (f = u.dom.el),
                    o.isElement(c.lastChild) &&
                      c.appendChild(e.document.createTextNode(" ")),
                    c.appendChild(f);
                a.dom.parent.firstChild &&
                  a.dom.parent.firstChild !== l &&
                  c.insertBefore(
                    e.document.createTextNode(" "),
                    c.childNodes[0]
                  ),
                  l
                    ? (c.appendChild(e.document.createTextNode(" ")),
                      a.dom.parent.insertBefore(c, l))
                    : a.dom.parent.appendChild(c),
                  a.callActions("afterPrintSort", arguments);
              },
              parseSortString: function (t, e) {
                var i = t.split(" "),
                  a = e,
                  s = [],
                  r = -1;
                for (r = 0; r < i.length; r++) {
                  switch (
                    ((s = i[r].split(":")),
                    (a.sortString = i[r]),
                    (a.attribute = o.dashCase(s[0])),
                    (a.order = s[1] || "asc"),
                    a.attribute)
                  ) {
                    case "default":
                      a.attribute = "";
                      break;
                    case "random":
                      (a.attribute = ""), (a.order = "random");
                  }
                  if (!a.attribute || "random" === a.order) break;
                  r < i.length - 1 &&
                    ((a.next = new n.CommandSort()), o.freeze(a), (a = a.next));
                }
                return this.callFilters("commandsParseSort", e, arguments);
              },
              parseEffects: function () {
                var t = this,
                  e = "",
                  o =
                    t.config.animation.effectsIn || t.config.animation.effects,
                  i =
                    t.config.animation.effectsOut || t.config.animation.effects;
                for (e in (t.callActions("beforeParseEffects", arguments),
                (t.effectsIn = new n.StyleData()),
                (t.effectsOut = new n.StyleData()),
                (t.transformIn = []),
                (t.transformOut = []),
                (t.effectsIn.opacity = t.effectsOut.opacity = 1),
                t.parseEffect("fade", o, t.effectsIn, t.transformIn),
                t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0),
                n.transformDefaults))
                  n.transformDefaults[e] instanceof n.TransformData &&
                    (t.parseEffect(e, o, t.effectsIn, t.transformIn),
                    t.parseEffect(e, i, t.effectsOut, t.transformOut, !0));
                t.parseEffect("stagger", o, t.effectsIn, t.transformIn),
                  t.parseEffect("stagger", i, t.effectsOut, t.transformOut, !0),
                  t.callActions("afterParseEffects", arguments);
              },
              parseEffect: function (t, e, o, i, a) {
                var s,
                  r = this,
                  l = "",
                  c = "",
                  u = ["%", "px", "em", "rem", "vh", "vw", "deg"],
                  f = "",
                  d = -1;
                if (
                  (r.callActions("beforeParseEffect", arguments),
                  "string" != typeof e)
                )
                  throw new TypeError(
                    n.messages.errorConfigInvalidAnimationEffects()
                  );
                if (e.indexOf(t) < 0)
                  "stagger" === t && (r.staggerDuration = 0);
                else {
                  switch (
                    ((s = e.indexOf(t + "(")) > -1 &&
                      ((l = e.substring(s)), (c = /\(([^)]+)\)/.exec(l)[1])),
                    t)
                  ) {
                    case "fade":
                      o.opacity = c ? parseFloat(c) : 0;
                      break;
                    case "stagger":
                      r.staggerDuration = c ? parseFloat(c) : 100;
                      break;
                    default:
                      if (
                        (a && r.config.animation.reverseOut && "scale" !== t
                          ? (o[t].value =
                              -1 *
                              (c
                                ? parseFloat(c)
                                : n.transformDefaults[t].value))
                          : (o[t].value = c
                              ? parseFloat(c)
                              : n.transformDefaults[t].value),
                        c)
                      ) {
                        for (d = 0; (f = u[d]); d++)
                          if (c.indexOf(f) > -1) {
                            o[t].unit = f;
                            break;
                          }
                      } else o[t].unit = n.transformDefaults[t].unit;
                      i.push(t + "(" + o[t].value + o[t].unit + ")");
                  }
                  r.callActions("afterParseEffect", arguments);
                }
              },
              buildState: function (t) {
                var e = this,
                  o = new n.State(),
                  i = null,
                  a = -1;
                for (
                  e.callActions("beforeBuildState", arguments), a = 0;
                  (i = e.targets[a]);
                  a++
                )
                  (!t.toRemove.length || t.toRemove.indexOf(i) < 0) &&
                    o.targets.push(i.dom.el);
                for (a = 0; (i = t.matching[a]); a++) o.matching.push(i.dom.el);
                for (a = 0; (i = t.show[a]); a++) o.show.push(i.dom.el);
                for (a = 0; (i = t.hide[a]); a++)
                  (!t.toRemove.length || t.toRemove.indexOf(i) < 0) &&
                    o.hide.push(i.dom.el);
                return (
                  (o.id = e.id),
                  (o.container = e.dom.container),
                  (o.activeFilter = t.newFilter),
                  (o.activeSort = t.newSort),
                  (o.activeDataset = t.newDataset),
                  (o.activeContainerClassName = t.newContainerClassName),
                  (o.hasFailed = t.hasFailed),
                  (o.totalTargets = e.targets.length),
                  (o.totalShow = t.show.length),
                  (o.totalHide = t.hide.length),
                  (o.totalMatching = t.matching.length),
                  (o.triggerElement = t.triggerElement),
                  e.callFilters("stateBuildState", o, arguments)
                );
              },
              goMix: function (t, i) {
                var a = this,
                  s = null;
                return (
                  a.callActions("beforeGoMix", arguments),
                  (a.config.animation.duration &&
                    a.config.animation.effects &&
                    o.isVisible(a.dom.container)) ||
                    (t = !1),
                  i.toShow.length ||
                    i.toHide.length ||
                    i.willSort ||
                    i.willChangeLayout ||
                    (t = !1),
                  i.startState.show.length || i.show.length || (t = !1),
                  n.events.fire(
                    "mixStart",
                    a.dom.container,
                    {
                      state: i.startState,
                      futureState: i.newState,
                      instance: a,
                    },
                    a.dom.document
                  ),
                  "function" == typeof a.config.callbacks.onMixStart &&
                    a.config.callbacks.onMixStart.call(
                      a.dom.container,
                      i.startState,
                      i.newState,
                      a
                    ),
                  o.removeClass(
                    a.dom.container,
                    o.getClassname(
                      a.config.classNames,
                      "container",
                      a.config.classNames.modifierFailed
                    )
                  ),
                  (s = a.userDeferred
                    ? a.userDeferred
                    : (a.userDeferred = o.defer(n.libraries))),
                  (a.isBusy = !0),
                  t && n.features.has.transitions
                    ? (e.pageYOffset !== i.docState.scrollTop &&
                        e.scrollTo(i.docState.scrollLeft, i.docState.scrollTop),
                      a.config.animation.applyPerspective &&
                        ((a.dom.parent.style[n.features.perspectiveProp] =
                          a.config.animation.perspectiveDistance),
                        (a.dom.parent.style[n.features.perspectiveOriginProp] =
                          a.config.animation.perspectiveOrigin)),
                      a.config.animation.animateResizeContainer &&
                        i.startHeight !== i.newHeight &&
                        i.viewportDeltaY !== i.startHeight - i.newHeight &&
                        (a.dom.parent.style.height = i.startHeight + "px"),
                      a.config.animation.animateResizeContainer &&
                        i.startWidth !== i.newWidth &&
                        i.viewportDeltaX !== i.startWidth - i.newWidth &&
                        (a.dom.parent.style.width = i.startWidth + "px"),
                      i.startHeight === i.newHeight &&
                        (a.dom.parent.style.height = i.startHeight + "px"),
                      i.startWidth === i.newWidth &&
                        (a.dom.parent.style.width = i.startWidth + "px"),
                      i.startHeight === i.newHeight &&
                        i.startWidth === i.newWidth &&
                        (a.dom.parent.style.overflow = "hidden"),
                      requestAnimationFrame(function () {
                        a.moveTargets(i);
                      }),
                      a.callFilters("promiseGoMix", s.promise, arguments))
                    : (a.config.debug.fauxAsync
                        ? setTimeout(function () {
                            a.cleanUp(i);
                          }, a.config.animation.duration)
                        : a.cleanUp(i),
                      a.callFilters("promiseGoMix", s.promise, arguments))
                );
              },
              getStartMixData: function (t) {
                var o = this,
                  i = e.getComputedStyle(o.dom.parent),
                  a = o.dom.parent.getBoundingClientRect(),
                  s = null,
                  r = {},
                  l = -1,
                  c = i[n.features.boxSizingProp];
                for (
                  o.incPadding = "border-box" === c,
                    o.callActions("beforeGetStartMixData", arguments),
                    l = 0;
                  (s = t.show[l]);
                  l++
                )
                  (r = s.getPosData()),
                    (t.showPosData[l] = { startPosData: r });
                for (l = 0; (s = t.toHide[l]); l++)
                  (r = s.getPosData()),
                    (t.toHidePosData[l] = { startPosData: r });
                (t.startX = a.left),
                  (t.startY = a.top),
                  (t.startHeight = o.incPadding
                    ? a.height
                    : a.height -
                      parseFloat(i.paddingTop) -
                      parseFloat(i.paddingBottom) -
                      parseFloat(i.borderTop) -
                      parseFloat(i.borderBottom)),
                  (t.startWidth = o.incPadding
                    ? a.width
                    : a.width -
                      parseFloat(i.paddingLeft) -
                      parseFloat(i.paddingRight) -
                      parseFloat(i.borderLeft) -
                      parseFloat(i.borderRight)),
                  o.callActions("afterGetStartMixData", arguments);
              },
              setInter: function (t) {
                var e = this,
                  n = null,
                  i = -1;
                for (
                  e.callActions("beforeSetInter", arguments),
                    e.config.animation.clampHeight &&
                      ((e.dom.parent.style.height = t.startHeight + "px"),
                      (e.dom.parent.style.overflow = "hidden")),
                    e.config.animation.clampWidth &&
                      ((e.dom.parent.style.width = t.startWidth + "px"),
                      (e.dom.parent.style.overflow = "hidden")),
                    i = 0;
                  (n = t.toShow[i]);
                  i++
                )
                  n.show();
                t.willChangeLayout &&
                  (o.removeClass(e.dom.container, t.startContainerClassName),
                  o.addClass(e.dom.container, t.newContainerClassName)),
                  e.callActions("afterSetInter", arguments);
              },
              getInterMixData: function (t) {
                var e = null,
                  n = -1;
                for (
                  this.callActions("beforeGetInterMixData", arguments), n = 0;
                  (e = t.show[n]);
                  n++
                )
                  t.showPosData[n].interPosData = e.getPosData();
                for (n = 0; (e = t.toHide[n]); n++)
                  t.toHidePosData[n].interPosData = e.getPosData();
                this.callActions("afterGetInterMixData", arguments);
              },
              setFinal: function (t) {
                var e = this,
                  n = null,
                  o = -1;
                for (
                  e.callActions("beforeSetFinal", arguments),
                    t.willSort && e.printSort(!1, t),
                    o = 0;
                  (n = t.toHide[o]);
                  o++
                )
                  n.hide();
                e.callActions("afterSetFinal", arguments);
              },
              getFinalMixData: function (t) {
                var n,
                  i = this,
                  a = null,
                  s = null,
                  r = -1;
                for (
                  i.callActions("beforeGetFinalMixData", arguments), r = 0;
                  (s = t.show[r]);
                  r++
                )
                  t.showPosData[r].finalPosData = s.getPosData();
                for (r = 0; (s = t.toHide[r]); r++)
                  t.toHidePosData[r].finalPosData = s.getPosData();
                for (
                  (i.config.animation.clampHeight ||
                    i.config.animation.clampWidth) &&
                    (i.dom.parent.style.height =
                      i.dom.parent.style.width =
                      i.dom.parent.style.overflow =
                        ""),
                    i.incPadding || (a = e.getComputedStyle(i.dom.parent)),
                    n = i.dom.parent.getBoundingClientRect(),
                    t.newX = n.left,
                    t.newY = n.top,
                    t.newHeight = i.incPadding
                      ? n.height
                      : n.height -
                        parseFloat(a.paddingTop) -
                        parseFloat(a.paddingBottom) -
                        parseFloat(a.borderTop) -
                        parseFloat(a.borderBottom),
                    t.newWidth = i.incPadding
                      ? n.width
                      : n.width -
                        parseFloat(a.paddingLeft) -
                        parseFloat(a.paddingRight) -
                        parseFloat(a.borderLeft) -
                        parseFloat(a.borderRight),
                    t.viewportDeltaX =
                      t.docState.viewportWidth -
                      this.dom.document.documentElement.clientWidth,
                    t.viewportDeltaY =
                      t.docState.viewportHeight -
                      this.dom.document.documentElement.clientHeight,
                    t.willSort && i.printSort(!0, t),
                    r = 0;
                  (s = t.toShow[r]);
                  r++
                )
                  s.hide();
                for (r = 0; (s = t.toHide[r]); r++) s.show();
                t.willChangeLayout &&
                  (o.removeClass(i.dom.container, t.newContainerClassName),
                  o.addClass(
                    i.dom.container,
                    i.config.layout.containerClassName
                  )),
                  i.callActions("afterGetFinalMixData", arguments);
              },
              getTweenData: function (t) {
                var e = this,
                  o = null,
                  i = null,
                  a = Object.getOwnPropertyNames(e.effectsIn),
                  s = "",
                  r = null,
                  l = -1,
                  c = -1,
                  u = -1,
                  f = -1;
                for (
                  e.callActions("beforeGetTweenData", arguments), u = 0;
                  (o = t.show[u]);
                  u++
                )
                  for (
                    (i = t.showPosData[u]).posIn = new n.StyleData(),
                      i.posOut = new n.StyleData(),
                      i.tweenData = new n.StyleData(),
                      o.isShown
                        ? ((i.posIn.x = i.startPosData.x - i.interPosData.x),
                          (i.posIn.y = i.startPosData.y - i.interPosData.y))
                        : (i.posIn.x = i.posIn.y = 0),
                      i.posOut.x = i.finalPosData.x - i.interPosData.x,
                      i.posOut.y = i.finalPosData.y - i.interPosData.y,
                      i.posIn.opacity = o.isShown ? 1 : e.effectsIn.opacity,
                      i.posOut.opacity = 1,
                      i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
                      o.isShown ||
                        e.config.animation.nudge ||
                        ((i.posIn.x = i.posOut.x), (i.posIn.y = i.posOut.y)),
                      i.tweenData.x = i.posOut.x - i.posIn.x,
                      i.tweenData.y = i.posOut.y - i.posIn.y,
                      e.config.animation.animateResizeTargets &&
                        ((i.posIn.width = i.startPosData.width),
                        (i.posIn.height = i.startPosData.height),
                        (l =
                          (i.startPosData.width || i.finalPosData.width) -
                          i.interPosData.width),
                        (i.posIn.marginRight = i.startPosData.marginRight - l),
                        (c =
                          (i.startPosData.height || i.finalPosData.height) -
                          i.interPosData.height),
                        (i.posIn.marginBottom =
                          i.startPosData.marginBottom - c),
                        (i.posOut.width = i.finalPosData.width),
                        (i.posOut.height = i.finalPosData.height),
                        (l =
                          (i.finalPosData.width || i.startPosData.width) -
                          i.interPosData.width),
                        (i.posOut.marginRight = i.finalPosData.marginRight - l),
                        (c =
                          (i.finalPosData.height || i.startPosData.height) -
                          i.interPosData.height),
                        (i.posOut.marginBottom =
                          i.finalPosData.marginBottom - c),
                        (i.tweenData.width = i.posOut.width - i.posIn.width),
                        (i.tweenData.height = i.posOut.height - i.posIn.height),
                        (i.tweenData.marginRight =
                          i.posOut.marginRight - i.posIn.marginRight),
                        (i.tweenData.marginBottom =
                          i.posOut.marginBottom - i.posIn.marginBottom)),
                      f = 0;
                    (s = a[f]);
                    f++
                  )
                    (r = e.effectsIn[s]) instanceof n.TransformData &&
                      r.value &&
                      ((i.posIn[s].value = r.value),
                      (i.posOut[s].value = 0),
                      (i.tweenData[s].value =
                        i.posOut[s].value - i.posIn[s].value),
                      (i.posIn[s].unit =
                        i.posOut[s].unit =
                        i.tweenData[s].unit =
                          r.unit));
                for (u = 0; (o = t.toHide[u]); u++)
                  for (
                    (i = t.toHidePosData[u]).posIn = new n.StyleData(),
                      i.posOut = new n.StyleData(),
                      i.tweenData = new n.StyleData(),
                      i.posIn.x = o.isShown
                        ? i.startPosData.x - i.interPosData.x
                        : 0,
                      i.posIn.y = o.isShown
                        ? i.startPosData.y - i.interPosData.y
                        : 0,
                      i.posOut.x = e.config.animation.nudge ? 0 : i.posIn.x,
                      i.posOut.y = e.config.animation.nudge ? 0 : i.posIn.y,
                      i.tweenData.x = i.posOut.x - i.posIn.x,
                      i.tweenData.y = i.posOut.y - i.posIn.y,
                      e.config.animation.animateResizeTargets &&
                        ((i.posIn.width = i.startPosData.width),
                        (i.posIn.height = i.startPosData.height),
                        (l = i.startPosData.width - i.interPosData.width),
                        (i.posIn.marginRight = i.startPosData.marginRight - l),
                        (c = i.startPosData.height - i.interPosData.height),
                        (i.posIn.marginBottom =
                          i.startPosData.marginBottom - c)),
                      i.posIn.opacity = 1,
                      i.posOut.opacity = e.effectsOut.opacity,
                      i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
                      f = 0;
                    (s = a[f]);
                    f++
                  )
                    (r = e.effectsOut[s]) instanceof n.TransformData &&
                      r.value &&
                      ((i.posIn[s].value = 0),
                      (i.posOut[s].value = r.value),
                      (i.tweenData[s].value =
                        i.posOut[s].value - i.posIn[s].value),
                      (i.posIn[s].unit =
                        i.posOut[s].unit =
                        i.tweenData[s].unit =
                          r.unit));
                e.callActions("afterGetTweenData", arguments);
              },
              moveTargets: function (t) {
                var e = this,
                  i = null,
                  a = null,
                  s = null,
                  r = "",
                  l = !1,
                  c = -1,
                  u = -1,
                  f = e.checkProgress.bind(e);
                for (
                  e.callActions("beforeMoveTargets", arguments), u = 0;
                  (i = t.show[u]);
                  u++
                )
                  (a = new n.IMoveData()),
                    (s = t.showPosData[u]),
                    (r = i.isShown ? "none" : "show"),
                    (l = e.willTransition(r, t.hasEffect, s.posIn, s.posOut)) &&
                      c++,
                    i.show(),
                    (a.posIn = s.posIn),
                    (a.posOut = s.posOut),
                    (a.statusChange = r),
                    (a.staggerIndex = c),
                    (a.operation = t),
                    (a.callback = l ? f : null),
                    i.move(a);
                for (u = 0; (i = t.toHide[u]); u++)
                  (s = t.toHidePosData[u]),
                    (a = new n.IMoveData()),
                    (r = "hide"),
                    (l = e.willTransition(r, s.posIn, s.posOut)),
                    (a.posIn = s.posIn),
                    (a.posOut = s.posOut),
                    (a.statusChange = r),
                    (a.staggerIndex = u),
                    (a.operation = t),
                    (a.callback = l ? f : null),
                    i.move(a);
                e.config.animation.animateResizeContainer &&
                  ((e.dom.parent.style[n.features.transitionProp] =
                    "height " +
                    e.config.animation.duration +
                    "ms ease, width " +
                    e.config.animation.duration +
                    "ms ease "),
                  requestAnimationFrame(function () {
                    t.startHeight !== t.newHeight &&
                      t.viewportDeltaY !== t.startHeight - t.newHeight &&
                      (e.dom.parent.style.height = t.newHeight + "px"),
                      t.startWidth !== t.newWidth &&
                        t.viewportDeltaX !== t.startWidth - t.newWidth &&
                        (e.dom.parent.style.width = t.newWidth + "px");
                  })),
                  t.willChangeLayout &&
                    (o.removeClass(
                      e.dom.container,
                      e.config.layout.ContainerClassName
                    ),
                    o.addClass(e.dom.container, t.newContainerClassName)),
                  e.callActions("afterMoveTargets", arguments);
              },
              hasEffect: function () {
                var t = this,
                  e = [
                    "scale",
                    "translateX",
                    "translateY",
                    "translateZ",
                    "rotateX",
                    "rotateY",
                    "rotateZ",
                  ],
                  n = "",
                  o = null,
                  i = !1,
                  a = -1;
                if (1 !== t.effectsIn.opacity)
                  return t.callFilters("resultHasEffect", !0, arguments);
                for (a = 0; (n = e[a]); a++)
                  if (
                    0 !==
                    ("undefined" !== (o = t.effectsIn[n]).value ? o.value : o)
                  ) {
                    i = !0;
                    break;
                  }
                return t.callFilters("resultHasEffect", i, arguments);
              },
              willTransition: function (t, e, n, i) {
                var a = this,
                  s = !1;
                return (
                  (s =
                    !!o.isVisible(a.dom.container) &&
                    (!!(("none" !== t && e) || n.x !== i.x || n.y !== i.y) ||
                      (!!a.config.animation.animateResizeTargets &&
                        (n.width !== i.width ||
                          n.height !== i.height ||
                          n.marginRight !== i.marginRight ||
                          n.marginTop !== i.marginTop)))),
                  a.callFilters("resultWillTransition", s, arguments)
                );
              },
              checkProgress: function (t) {
                var e = this;
                e.targetsDone++,
                  e.targetsBound === e.targetsDone && e.cleanUp(t);
              },
              cleanUp: function (t) {
                var e = this,
                  i = null,
                  a = null,
                  s = null,
                  r = null,
                  l = -1;
                for (
                  e.callActions("beforeCleanUp", arguments),
                    e.targetsMoved =
                      e.targetsImmovable =
                      e.targetsBound =
                      e.targetsDone =
                        0,
                    l = 0;
                  (i = t.show[l]);
                  l++
                )
                  i.cleanUp(), i.show();
                for (l = 0; (i = t.toHide[l]); l++) i.cleanUp(), i.hide();
                if (
                  (t.willSort && e.printSort(!1, t),
                  (e.dom.parent.style[n.features.transitionProp] =
                    e.dom.parent.style.height =
                    e.dom.parent.style.width =
                    e.dom.parent.style.overflow =
                    e.dom.parent.style[n.features.perspectiveProp] =
                    e.dom.parent.style[n.features.perspectiveOriginProp] =
                      ""),
                  t.willChangeLayout &&
                    (o.removeClass(e.dom.container, t.startContainerClassName),
                    o.addClass(e.dom.container, t.newContainerClassName)),
                  t.toRemove.length)
                ) {
                  for (l = 0; (i = e.targets[l]); l++)
                    t.toRemove.indexOf(i) > -1 &&
                      ((a = i.dom.el.previousSibling) &&
                        "#text" === a.nodeName &&
                        (s = i.dom.el.nextSibling) &&
                        "#text" === s.nodeName &&
                        o.removeWhitespace(a),
                      t.willSort || e.dom.parent.removeChild(i.dom.el),
                      e.targets.splice(l, 1),
                      (i.isInDom = !1),
                      l--);
                  e.origOrder = e.targets;
                }
                t.willSort && (e.targets = t.newOrder),
                  (e.state = t.newState),
                  (e.lastOperation = t),
                  (e.dom.targets = e.state.targets),
                  n.events.fire(
                    "mixEnd",
                    e.dom.container,
                    { state: e.state, instance: e },
                    e.dom.document
                  ),
                  "function" == typeof e.config.callbacks.onMixEnd &&
                    e.config.callbacks.onMixEnd.call(
                      e.dom.container,
                      e.state,
                      e
                    ),
                  t.hasFailed &&
                    (n.events.fire(
                      "mixFail",
                      e.dom.container,
                      { state: e.state, instance: e },
                      e.dom.document
                    ),
                    "function" == typeof e.config.callbacks.onMixFail &&
                      e.config.callbacks.onMixFail.call(
                        e.dom.container,
                        e.state,
                        e
                      ),
                    o.addClass(
                      e.dom.container,
                      o.getClassname(
                        e.config.classNames,
                        "container",
                        e.config.classNames.modifierFailed
                      )
                    )),
                  "function" == typeof e.userCallback &&
                    e.userCallback.call(e.dom.container, e.state, e),
                  "function" == typeof e.userDeferred.resolve &&
                    e.userDeferred.resolve(e.state),
                  (e.userCallback = null),
                  (e.userDeferred = null),
                  (e.lastClicked = null),
                  (e.isToggling = !1),
                  (e.isBusy = !1),
                  e.queue.length &&
                    (e.callActions("beforeReadQueueCleanUp", arguments),
                    (r = e.queue.shift()),
                    (e.userDeferred = r.deferred),
                    (e.isToggling = r.isToggling),
                    (e.lastClicked = r.triggerElement),
                    r.instruction.command instanceof n.CommandMultimix
                      ? e.multimix.apply(e, r.args)
                      : e.dataset.apply(e, r.args)),
                  e.callActions("afterCleanUp", arguments);
              },
              parseMultimixArgs: function (t) {
                var e = this,
                  i = new n.UserInstruction(),
                  a = null,
                  s = -1;
                for (
                  i.animate = e.config.animation.enable,
                    i.command = new n.CommandMultimix(),
                    s = 0;
                  s < t.length;
                  s++
                )
                  null !== (a = t[s]) &&
                    ("object" == typeof a
                      ? o.extend(i.command, a)
                      : "boolean" == typeof a
                      ? (i.animate = a)
                      : "function" == typeof a && (i.callback = a));
                return (
                  !i.command.insert ||
                    i.command.insert instanceof n.CommandInsert ||
                    (i.command.insert = e.parseInsertArgs([
                      i.command.insert,
                    ]).command),
                  !i.command.remove ||
                    i.command.remove instanceof n.CommandRemove ||
                    (i.command.remove = e.parseRemoveArgs([
                      i.command.remove,
                    ]).command),
                  !i.command.filter ||
                    i.command.filter instanceof n.CommandFilter ||
                    (i.command.filter = e.parseFilterArgs([
                      i.command.filter,
                    ]).command),
                  !i.command.sort ||
                    i.command.sort instanceof n.CommandSort ||
                    (i.command.sort = e.parseSortArgs([
                      i.command.sort,
                    ]).command),
                  !i.command.changeLayout ||
                    i.command.changeLayout instanceof n.CommandChangeLayout ||
                    (i.command.changeLayout = e.parseChangeLayoutArgs([
                      i.command.changeLayout,
                    ]).command),
                  (i = e.callFilters(
                    "instructionParseMultimixArgs",
                    i,
                    arguments
                  )),
                  o.freeze(i),
                  i
                );
              },
              parseFilterArgs: function (t) {
                var e = this,
                  i = new n.UserInstruction(),
                  a = null,
                  s = -1;
                for (
                  i.animate = e.config.animation.enable,
                    i.command = new n.CommandFilter(),
                    s = 0;
                  s < t.length;
                  s++
                )
                  "string" == typeof (a = t[s])
                    ? (i.command.selector = a)
                    : null === a
                    ? (i.command.collection = [])
                    : "object" == typeof a && o.isElement(a, e.dom.document)
                    ? (i.command.collection = [a])
                    : "object" == typeof a && void 0 !== a.length
                    ? (i.command.collection = o.arrayFromList(a))
                    : "object" == typeof a
                    ? o.extend(i.command, a)
                    : "boolean" == typeof a
                    ? (i.animate = a)
                    : "function" == typeof a && (i.callback = a);
                if (i.command.selector && i.command.collection)
                  throw new Error(n.messages.errorFilterInvalidArguments());
                return (
                  (i = e.callFilters(
                    "instructionParseFilterArgs",
                    i,
                    arguments
                  )),
                  o.freeze(i),
                  i
                );
              },
              parseSortArgs: function (t) {
                var e = this,
                  i = new n.UserInstruction(),
                  a = null,
                  s = "",
                  r = -1;
                for (
                  i.animate = e.config.animation.enable,
                    i.command = new n.CommandSort(),
                    r = 0;
                  r < t.length;
                  r++
                )
                  if (null !== (a = t[r]))
                    switch (typeof a) {
                      case "string":
                        s = a;
                        break;
                      case "object":
                        a.length && (i.command.collection = o.arrayFromList(a));
                        break;
                      case "boolean":
                        i.animate = a;
                        break;
                      case "function":
                        i.callback = a;
                    }
                return (
                  s && (i.command = e.parseSortString(s, i.command)),
                  (i = e.callFilters("instructionParseSortArgs", i, arguments)),
                  o.freeze(i),
                  i
                );
              },
              parseInsertArgs: function (t) {
                var e = this,
                  i = new n.UserInstruction(),
                  a = null,
                  s = -1;
                for (
                  i.animate = e.config.animation.enable,
                    i.command = new n.CommandInsert(),
                    s = 0;
                  s < t.length;
                  s++
                )
                  null !== (a = t[s]) &&
                    ("number" == typeof a
                      ? (i.command.index = a)
                      : "string" == typeof a &&
                        ["before", "after"].indexOf(a) > -1
                      ? (i.command.position = a)
                      : "string" == typeof a
                      ? (i.command.collection = o.arrayFromList(
                          o.createElement(a).childNodes
                        ))
                      : "object" == typeof a && o.isElement(a, e.dom.document)
                      ? i.command.collection.length
                        ? (i.command.sibling = a)
                        : (i.command.collection = [a])
                      : "object" == typeof a && a.length
                      ? i.command.collection.length
                        ? (i.command.sibling = a[0])
                        : (i.command.collection = a)
                      : "object" == typeof a &&
                        a.childNodes &&
                        a.childNodes.length
                      ? i.command.collection.length
                        ? (i.command.sibling = a.childNodes[0])
                        : (i.command.collection = o.arrayFromList(a.childNodes))
                      : "object" == typeof a
                      ? o.extend(i.command, a)
                      : "boolean" == typeof a
                      ? (i.animate = a)
                      : "function" == typeof a && (i.callback = a));
                if (i.command.index && i.command.sibling)
                  throw new Error(n.messages.errorInsertInvalidArguments());
                return (
                  !i.command.collection.length &&
                    e.config.debug.showWarnings &&
                    console.warn(n.messages.warningInsertNoElements()),
                  (i = e.callFilters(
                    "instructionParseInsertArgs",
                    i,
                    arguments
                  )),
                  o.freeze(i),
                  i
                );
              },
              parseRemoveArgs: function (t) {
                var e = this,
                  i = new n.UserInstruction(),
                  a = null,
                  s = null,
                  r = -1;
                for (
                  i.animate = e.config.animation.enable,
                    i.command = new n.CommandRemove(),
                    r = 0;
                  r < t.length;
                  r++
                )
                  if (null !== (s = t[r]))
                    switch (typeof s) {
                      case "number":
                        e.targets[s] && (i.command.targets[0] = e.targets[s]);
                        break;
                      case "string":
                        i.command.collection = o.arrayFromList(
                          e.dom.parent.querySelectorAll(s)
                        );
                        break;
                      case "object":
                        s && s.length
                          ? (i.command.collection = s)
                          : o.isElement(s, e.dom.document)
                          ? (i.command.collection = [s])
                          : o.extend(i.command, s);
                        break;
                      case "boolean":
                        i.animate = s;
                        break;
                      case "function":
                        i.callback = s;
                    }
                if (i.command.collection.length)
                  for (r = 0; (a = e.targets[r]); r++)
                    i.command.collection.indexOf(a.dom.el) > -1 &&
                      i.command.targets.push(a);
                return (
                  !i.command.targets.length &&
                    e.config.debug.showWarnings &&
                    console.warn(n.messages.warningRemoveNoElements()),
                  o.freeze(i),
                  i
                );
              },
              parseDatasetArgs: function (t) {
                var e = new n.UserInstruction(),
                  i = null,
                  a = -1;
                for (
                  e.animate = this.config.animation.enable,
                    e.command = new n.CommandDataset(),
                    a = 0;
                  a < t.length;
                  a++
                )
                  if (null !== (i = t[a]))
                    switch (typeof i) {
                      case "object":
                        Array.isArray(i) || "number" == typeof i.length
                          ? (e.command.dataset = i)
                          : o.extend(e.command, i);
                        break;
                      case "boolean":
                        e.animate = i;
                        break;
                      case "function":
                        e.callback = i;
                    }
                return o.freeze(e), e;
              },
              parseChangeLayoutArgs: function (t) {
                var e = new n.UserInstruction(),
                  i = null,
                  a = -1;
                for (
                  e.animate = this.config.animation.enable,
                    e.command = new n.CommandChangeLayout(),
                    a = 0;
                  a < t.length;
                  a++
                )
                  if (null !== (i = t[a]))
                    switch (typeof i) {
                      case "string":
                        e.command.containerClassName = i;
                        break;
                      case "object":
                        o.extend(e.command, i);
                        break;
                      case "boolean":
                        e.animate = i;
                        break;
                      case "function":
                        e.callback = i;
                    }
                return o.freeze(e), e;
              },
              queueMix: function (t) {
                var e = this,
                  i = null,
                  a = "";
                return (
                  e.callActions("beforeQueueMix", arguments),
                  (i = o.defer(n.libraries)),
                  e.config.animation.queue &&
                  e.queue.length < e.config.animation.queueLimit
                    ? ((t.deferred = i),
                      e.queue.push(t),
                      e.config.controls.enable &&
                        (e.isToggling
                          ? (e.buildToggleArray(t.instruction.command),
                            (a = e.getToggleSelector()),
                            e.updateControls({ filter: { selector: a } }))
                          : e.updateControls(t.instruction.command)))
                    : (e.config.debug.showWarnings &&
                        console.warn(
                          n.messages.warningMultimixInstanceQueueFull()
                        ),
                      i.resolve(e.state),
                      n.events.fire(
                        "mixBusy",
                        e.dom.container,
                        { state: e.state, instance: e },
                        e.dom.document
                      ),
                      "function" == typeof e.config.callbacks.onMixBusy &&
                        e.config.callbacks.onMixBusy.call(
                          e.dom.container,
                          e.state,
                          e
                        )),
                  e.callFilters("promiseQueueMix", i.promise, arguments)
                );
              },
              getDataOperation: function (t) {
                var e = this,
                  i = new n.Operation(),
                  a = [];
                if (
                  ((i = e.callFilters(
                    "operationUnmappedGetDataOperation",
                    i,
                    arguments
                  )),
                  e.dom.targets.length &&
                    !(a = e.state.activeDataset || []).length)
                )
                  throw new Error(n.messages.errorDatasetNotSet());
                return (
                  (i.id = o.randomHex()),
                  (i.startState = e.state),
                  (i.startDataset = a),
                  (i.newDataset = t.slice()),
                  e.diffDatasets(i),
                  (i.startOrder = e.targets),
                  (i.newOrder = i.show),
                  e.config.animation.enable &&
                    (e.getStartMixData(i),
                    e.setInter(i),
                    (i.docState = o.getDocumentState(e.dom.document)),
                    e.getInterMixData(i),
                    e.setFinal(i),
                    e.getFinalMixData(i),
                    e.parseEffects(),
                    (i.hasEffect = e.hasEffect()),
                    e.getTweenData(i)),
                  (e.targets = i.show.slice()),
                  (i.newState = e.buildState(i)),
                  Array.prototype.push.apply(e.targets, i.toRemove),
                  (i = e.callFilters(
                    "operationMappedGetDataOperation",
                    i,
                    arguments
                  ))
                );
              },
              diffDatasets: function (t) {
                var e = this,
                  i = [],
                  a = [],
                  s = [],
                  r = null,
                  l = null,
                  c = null,
                  u = null,
                  f = null,
                  d = {},
                  h = "",
                  m = -1;
                for (
                  e.callActions("beforeDiffDatasets", arguments), m = 0;
                  (r = t.newDataset[m]);
                  m++
                ) {
                  if (
                    void 0 === (h = r[e.config.data.uidKey]) ||
                    h.toString().length < 1
                  )
                    throw new TypeError(
                      n.messages.errorDatasetInvalidUidKey({
                        uidKey: e.config.data.uidKey,
                      })
                    );
                  if (d[h])
                    throw new Error(
                      n.messages.errorDatasetDuplicateUid({ uid: h })
                    );
                  (d[h] = !0),
                    (l = e.cache[h]) instanceof n.Target
                      ? (e.config.data.dirtyCheck &&
                          !o.deepEquals(r, l.data) &&
                          ((c = l.render(r)),
                          (l.data = r),
                          c !== l.dom.el &&
                            (l.isInDom &&
                              (l.unbindEvents(),
                              e.dom.parent.replaceChild(c, l.dom.el)),
                            l.isShown || (c.style.display = "none"),
                            (l.dom.el = c),
                            l.isInDom && l.bindEvents())),
                        (c = l.dom.el))
                      : ((l = new n.Target()).init(null, e, r), l.hide()),
                    l.isInDom
                      ? ((f = l.dom.el.nextElementSibling),
                        a.push(h),
                        u &&
                          (u.lastElementChild &&
                            u.appendChild(e.dom.document.createTextNode(" ")),
                          e.insertDatasetFrag(u, l.dom.el, s),
                          (u = null)))
                      : (u || (u = e.dom.document.createDocumentFragment()),
                        u.lastElementChild &&
                          u.appendChild(e.dom.document.createTextNode(" ")),
                        u.appendChild(l.dom.el),
                        (l.isInDom = !0),
                        l.unbindEvents(),
                        l.bindEvents(),
                        l.hide(),
                        t.toShow.push(l),
                        s.push(l)),
                    t.show.push(l);
                }
                for (
                  u &&
                    ((f = f || e.config.layout.siblingAfter) &&
                      u.appendChild(e.dom.document.createTextNode(" ")),
                    e.insertDatasetFrag(u, f, s)),
                    m = 0;
                  (r = t.startDataset[m]);
                  m++
                )
                  (h = r[e.config.data.uidKey]),
                    (l = e.cache[h]),
                    t.show.indexOf(l) < 0
                      ? (t.hide.push(l), t.toHide.push(l), t.toRemove.push(l))
                      : i.push(h);
                o.isEqualArray(i, a) || (t.willSort = !0),
                  e.callActions("afterDiffDatasets", arguments);
              },
              insertDatasetFrag: function (t, e, n) {
                var i = this,
                  a = e
                    ? o.arrayFromList(i.dom.parent.children).indexOf(e)
                    : i.targets.length;
                for (i.dom.parent.insertBefore(t, e); n.length; )
                  i.targets.splice(a, 0, n.shift()), a++;
              },
              willSort: function (t, e) {
                var n = this,
                  o = !1;
                return (
                  (o =
                    !!(
                      n.config.behavior.liveSort ||
                      "random" === t.order ||
                      t.attribute !== e.attribute ||
                      t.order !== e.order ||
                      t.collection !== e.collection ||
                      (null === t.next && e.next) ||
                      (t.next && null === e.next)
                    ) ||
                    (!(!t.next || !e.next) && n.willSort(t.next, e.next))),
                  n.callFilters("resultWillSort", o, arguments)
                );
              },
              show: function () {
                return this.filter("all");
              },
              hide: function () {
                return this.filter("none");
              },
              isMixing: function () {
                return this.isBusy;
              },
              filter: function () {
                var t = this.parseFilterArgs(arguments);
                return this.multimix(
                  { filter: t.command },
                  t.animate,
                  t.callback
                );
              },
              toggleOn: function () {
                var t,
                  e = this,
                  n = e.parseFilterArgs(arguments),
                  o = n.command.selector;
                return (
                  (e.isToggling = !0),
                  e.toggleArray.indexOf(o) < 0 && e.toggleArray.push(o),
                  (t = e.getToggleSelector()),
                  e.multimix({ filter: t }, n.animate, n.callback)
                );
              },
              toggleOff: function () {
                var t,
                  e = this,
                  n = e.parseFilterArgs(arguments),
                  o = n.command.selector,
                  i = e.toggleArray.indexOf(o);
                return (
                  (e.isToggling = !0),
                  i > -1 && e.toggleArray.splice(i, 1),
                  (t = e.getToggleSelector()),
                  e.multimix({ filter: t }, n.animate, n.callback)
                );
              },
              sort: function () {
                var t = this.parseSortArgs(arguments);
                return this.multimix(
                  { sort: t.command },
                  t.animate,
                  t.callback
                );
              },
              changeLayout: function () {
                var t = this.parseChangeLayoutArgs(arguments);
                return this.multimix(
                  { changeLayout: t.command },
                  t.animate,
                  t.callback
                );
              },
              dataset: function () {
                var t = this,
                  e = t.parseDatasetArgs(arguments),
                  o = null,
                  i = null,
                  a = !1;
                return (
                  t.callActions("beforeDataset", arguments),
                  t.isBusy
                    ? (((i = new n.QueueItem()).args = arguments),
                      (i.instruction = e),
                      t.queueMix(i))
                    : (e.callback && (t.userCallback = e.callback),
                      (a =
                        e.animate ^ t.config.animation.enable
                          ? e.animate
                          : t.config.animation.enable),
                      (o = t.getDataOperation(e.command.dataset)),
                      t.goMix(a, o))
                );
              },
              multimix: function () {
                var t = this,
                  e = null,
                  o = !1,
                  i = null,
                  a = t.parseMultimixArgs(arguments);
                return (
                  t.callActions("beforeMultimix", arguments),
                  t.isBusy
                    ? (((i = new n.QueueItem()).args = arguments),
                      (i.instruction = a),
                      (i.triggerElement = t.lastClicked),
                      (i.isToggling = t.isToggling),
                      t.queueMix(i))
                    : ((e = t.getOperation(a.command)),
                      t.config.controls.enable &&
                        (a.command.filter &&
                          !t.isToggling &&
                          ((t.toggleArray.length = 0),
                          t.buildToggleArray(e.command)),
                        t.queue.length < 1 && t.updateControls(e.command)),
                      a.callback && (t.userCallback = a.callback),
                      (o =
                        a.animate ^ t.config.animation.enable
                          ? a.animate
                          : t.config.animation.enable),
                      t.callFilters("operationMultimix", e, arguments),
                      t.goMix(o, e))
                );
              },
              getOperation: function (t) {
                var e = this,
                  i = t.sort,
                  a = t.filter,
                  s = t.changeLayout,
                  r = t.remove,
                  l = t.insert,
                  c = new n.Operation();
                return (
                  ((c = e.callFilters(
                    "operationUnmappedGetOperation",
                    c,
                    arguments
                  )).id = o.randomHex()),
                  (c.command = t),
                  (c.startState = e.state),
                  (c.triggerElement = e.lastClicked),
                  e.isBusy
                    ? (e.config.debug.showWarnings &&
                        console.warn(
                          n.messages.warningGetOperationInstanceBusy()
                        ),
                      null)
                    : (l && e.insertTargets(l, c),
                      r && (c.toRemove = r.targets),
                      (c.startSort = c.newSort = c.startState.activeSort),
                      (c.startOrder = c.newOrder = e.targets),
                      i &&
                        ((c.startSort = c.startState.activeSort),
                        (c.newSort = i),
                        (c.willSort = e.willSort(i, c.startState.activeSort)),
                        c.willSort && e.sortOperation(c)),
                      (c.startFilter = c.startState.activeFilter),
                      (c.newFilter =
                        a || o.extend(new n.CommandFilter(), c.startFilter)),
                      "all" === c.newFilter.selector
                        ? (c.newFilter.selector = e.config.selectors.target)
                        : "none" === c.newFilter.selector &&
                          (c.newFilter.selector = ""),
                      e.filterOperation(c),
                      (c.startContainerClassName =
                        c.startState.activeContainerClassName),
                      s
                        ? ((c.newContainerClassName = s.containerClassName),
                          c.newContainerClassName !==
                            c.startContainerClassName &&
                            (c.willChangeLayout = !0))
                        : (c.newContainerClassName = c.startContainerClassName),
                      e.config.animation.enable &&
                        (e.getStartMixData(c),
                        e.setInter(c),
                        (c.docState = o.getDocumentState(e.dom.document)),
                        e.getInterMixData(c),
                        e.setFinal(c),
                        e.getFinalMixData(c),
                        e.parseEffects(),
                        (c.hasEffect = e.hasEffect()),
                        e.getTweenData(c)),
                      c.willSort && (e.targets = c.newOrder),
                      (c.newState = e.buildState(c)),
                      e.callFilters(
                        "operationMappedGetOperation",
                        c,
                        arguments
                      ))
                );
              },
              tween: function (t, e) {
                var n = null,
                  o = null,
                  i = -1,
                  a = -1;
                for (
                  e = Math.min(e, 1), e = Math.max(e, 0), a = 0;
                  (n = t.show[a]);
                  a++
                )
                  (o = t.showPosData[a]), n.applyTween(o, e);
                for (a = 0; (n = t.hide[a]); a++)
                  n.isShown && n.hide(),
                    (i = t.toHide.indexOf(n)) > -1 &&
                      ((o = t.toHidePosData[i]),
                      n.isShown || n.show(),
                      n.applyTween(o, e));
              },
              insert: function () {
                var t = this.parseInsertArgs(arguments);
                return this.multimix(
                  { insert: t.command },
                  t.animate,
                  t.callback
                );
              },
              insertBefore: function () {
                var t = this.parseInsertArgs(arguments);
                return this.insert(
                  t.command.collection,
                  "before",
                  t.command.sibling,
                  t.animate,
                  t.callback
                );
              },
              insertAfter: function () {
                var t = this.parseInsertArgs(arguments);
                return this.insert(
                  t.command.collection,
                  "after",
                  t.command.sibling,
                  t.animate,
                  t.callback
                );
              },
              prepend: function () {
                var t = this.parseInsertArgs(arguments);
                return this.insert(
                  0,
                  t.command.collection,
                  t.animate,
                  t.callback
                );
              },
              append: function () {
                var t = this,
                  e = t.parseInsertArgs(arguments);
                return t.insert(
                  t.state.totalTargets,
                  e.command.collection,
                  e.animate,
                  e.callback
                );
              },
              remove: function () {
                var t = this.parseRemoveArgs(arguments);
                return this.multimix(
                  { remove: t.command },
                  t.animate,
                  t.callback
                );
              },
              getConfig: function (t) {
                var e = this,
                  n = null;
                return (
                  (n = t ? o.getProperty(e.config, t) : e.config),
                  e.callFilters("valueGetConfig", n, arguments)
                );
              },
              configure: function (t) {
                var e = this;
                e.callActions("beforeConfigure", arguments),
                  o.extend(e.config, t, !0, !0),
                  e.callActions("afterConfigure", arguments);
              },
              getState: function () {
                var t;
                return (
                  (t = new n.State()),
                  o.extend(t, this.state),
                  o.freeze(t),
                  this.callFilters("stateGetState", t, arguments)
                );
              },
              forceRefresh: function () {
                this.indexTargets();
              },
              forceRender: function () {
                var t = this,
                  e = null,
                  n = null,
                  o = "";
                for (o in t.cache)
                  (n = (e = t.cache[o]).render(e.data)) !== e.dom.el &&
                    (e.isInDom &&
                      (e.unbindEvents(),
                      t.dom.parent.replaceChild(n, e.dom.el)),
                    e.isShown || (n.style.display = "none"),
                    (e.dom.el = n),
                    e.isInDom && e.bindEvents());
                t.state = t.buildState(t.lastOperation);
              },
              destroy: function (t) {
                var e = this,
                  o = null,
                  i = null,
                  a = 0;
                for (
                  e.callActions("beforeDestroy", arguments), a = 0;
                  (o = e.controls[a]);
                  a++
                )
                  o.removeBinding(e);
                for (a = 0; (i = e.targets[a]); a++)
                  t && i.show(), i.unbindEvents();
                e.dom.container.id.match(/^MixItUp/) &&
                  e.dom.container.removeAttribute("id"),
                  delete n.instances[e.id],
                  e.callActions("afterDestroy", arguments);
              },
            }),
            (n.IMoveData = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.posIn = null),
                (this.posOut = null),
                (this.operation = null),
                (this.callback = null),
                (this.statusChange = ""),
                (this.duration = -1),
                (this.staggerIndex = -1),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.IMoveData),
            (n.IMoveData.prototype = Object.create(n.Base.prototype)),
            (n.IMoveData.prototype.constructor = n.IMoveData),
            (n.TargetDom = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.el = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.TargetDom),
            (n.TargetDom.prototype = Object.create(n.Base.prototype)),
            (n.TargetDom.prototype.constructor = n.TargetDom),
            (n.Target = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.sortString = ""),
                (this.mixer = null),
                (this.callback = null),
                (this.isShown = !1),
                (this.isBound = !1),
                (this.isExcluded = !1),
                (this.isInDom = !1),
                (this.handler = null),
                (this.operation = null),
                (this.data = null),
                (this.dom = new n.TargetDom()),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Target),
            (n.Target.prototype = Object.create(n.Base.prototype)),
            o.extend(n.Target.prototype, {
              constructor: n.Target,
              init: function (t, e, o) {
                var i = this,
                  a = "";
                if (
                  (i.callActions("beforeInit", arguments),
                  (i.mixer = e),
                  t || (t = i.render(o)),
                  i.cacheDom(t),
                  i.bindEvents(),
                  "none" !== i.dom.el.style.display && (i.isShown = !0),
                  o && e.config.data.uidKey)
                ) {
                  if (
                    void 0 === (a = o[e.config.data.uidKey]) ||
                    a.toString().length < 1
                  )
                    throw new TypeError(
                      n.messages.errorDatasetInvalidUidKey({
                        uidKey: e.config.data.uidKey,
                      })
                    );
                  (i.id = a), (i.data = o), (e.cache[a] = i);
                }
                i.callActions("afterInit", arguments);
              },
              render: function (t) {
                var e,
                  i = this,
                  a = null,
                  s = null,
                  r = null;
                if (
                  (i.callActions("beforeRender", arguments),
                  "function" !=
                    typeof (a = i.callFilters(
                      "renderRender",
                      i.mixer.config.render.target,
                      arguments
                    )))
                )
                  throw new TypeError(n.messages.errorDatasetRendererNotSet());
                return (
                  (e = a(t)) && "object" == typeof e && o.isElement(e)
                    ? (s = e)
                    : "string" == typeof e &&
                      (((r = document.createElement("div")).innerHTML = e),
                      (s = r.firstElementChild)),
                  i.callFilters("elRender", s, arguments)
                );
              },
              cacheDom: function (t) {
                var e = this;
                e.callActions("beforeCacheDom", arguments),
                  (e.dom.el = t),
                  e.callActions("afterCacheDom", arguments);
              },
              getSortString: function (t) {
                var e = this,
                  n = e.dom.el.getAttribute("data-" + t) || "";
                e.callActions("beforeGetSortString", arguments),
                  (n = isNaN(1 * n) ? n.toLowerCase() : 1 * n),
                  (e.sortString = n),
                  e.callActions("afterGetSortString", arguments);
              },
              show: function () {
                var t = this;
                t.callActions("beforeShow", arguments),
                  t.isShown ||
                    ((t.dom.el.style.display = ""), (t.isShown = !0)),
                  t.callActions("afterShow", arguments);
              },
              hide: function () {
                var t = this;
                t.callActions("beforeHide", arguments),
                  t.isShown &&
                    ((t.dom.el.style.display = "none"), (t.isShown = !1)),
                  t.callActions("afterHide", arguments);
              },
              move: function (t) {
                var e = this;
                e.callActions("beforeMove", arguments),
                  e.isExcluded || e.mixer.targetsMoved++,
                  e.applyStylesIn(t),
                  requestAnimationFrame(function () {
                    e.applyStylesOut(t);
                  }),
                  e.callActions("afterMove", arguments);
              },
              applyTween: function (t, e) {
                var o = this,
                  i = "",
                  a = null,
                  s = t.posIn,
                  r = [],
                  l = new n.StyleData(),
                  c = -1;
                for (
                  o.callActions("beforeApplyTween", arguments),
                    l.x = s.x,
                    l.y = s.y,
                    0 === e ? o.hide() : o.isShown || o.show(),
                    c = 0;
                  (i = n.features.TWEENABLE[c]);
                  c++
                )
                  if (((a = t.tweenData[i]), "x" === i)) {
                    if (!a) continue;
                    l.x = s.x + a * e;
                  } else if ("y" === i) {
                    if (!a) continue;
                    l.y = s.y + a * e;
                  } else if (a instanceof n.TransformData) {
                    if (!a.value) continue;
                    (l[i].value = s[i].value + a.value * e),
                      (l[i].unit = a.unit),
                      r.push(i + "(" + l[i].value + a.unit + ")");
                  } else {
                    if (!a) continue;
                    (l[i] = s[i] + a * e), (o.dom.el.style[i] = l[i]);
                  }
                (l.x || l.y) &&
                  r.unshift("translate(" + l.x + "px, " + l.y + "px)"),
                  r.length &&
                    (o.dom.el.style[n.features.transformProp] = r.join(" ")),
                  o.callActions("afterApplyTween", arguments);
              },
              applyStylesIn: function (t) {
                var e = this,
                  o = t.posIn,
                  i = 1 !== e.mixer.effectsIn.opacity,
                  a = [];
                e.callActions("beforeApplyStylesIn", arguments),
                  a.push("translate(" + o.x + "px, " + o.y + "px)"),
                  e.mixer.config.animation.animateResizeTargets &&
                    ("show" !== t.statusChange &&
                      ((e.dom.el.style.width = o.width + "px"),
                      (e.dom.el.style.height = o.height + "px")),
                    (e.dom.el.style.marginRight = o.marginRight + "px"),
                    (e.dom.el.style.marginBottom = o.marginBottom + "px")),
                  i && (e.dom.el.style.opacity = o.opacity),
                  "show" === t.statusChange &&
                    (a = a.concat(e.mixer.transformIn)),
                  (e.dom.el.style[n.features.transformProp] = a.join(" ")),
                  e.callActions("afterApplyStylesIn", arguments);
              },
              applyStylesOut: function (t) {
                var e = this,
                  o = [],
                  i = [],
                  a = e.mixer.config.animation.animateResizeTargets,
                  s = void 0 !== e.mixer.effectsIn.opacity;
                if (
                  (e.callActions("beforeApplyStylesOut", arguments),
                  o.push(
                    e.writeTransitionRule(
                      n.features.transformRule,
                      t.staggerIndex
                    )
                  ),
                  "none" !== t.statusChange &&
                    o.push(
                      e.writeTransitionRule(
                        "opacity",
                        t.staggerIndex,
                        t.duration
                      )
                    ),
                  a &&
                    (o.push(
                      e.writeTransitionRule("width", t.staggerIndex, t.duration)
                    ),
                    o.push(
                      e.writeTransitionRule(
                        "height",
                        t.staggerIndex,
                        t.duration
                      )
                    ),
                    o.push(
                      e.writeTransitionRule(
                        "margin",
                        t.staggerIndex,
                        t.duration
                      )
                    )),
                  !t.callback)
                )
                  return (
                    e.mixer.targetsImmovable++,
                    void (
                      e.mixer.targetsMoved === e.mixer.targetsImmovable &&
                      e.mixer.cleanUp(t.operation)
                    )
                  );
                switch (
                  ((e.operation = t.operation),
                  (e.callback = t.callback),
                  !e.isExcluded && e.mixer.targetsBound++,
                  (e.isBound = !0),
                  e.applyTransition(o),
                  a &&
                    t.posOut.width > 0 &&
                    t.posOut.height > 0 &&
                    ((e.dom.el.style.width = t.posOut.width + "px"),
                    (e.dom.el.style.height = t.posOut.height + "px"),
                    (e.dom.el.style.marginRight = t.posOut.marginRight + "px"),
                    (e.dom.el.style.marginBottom =
                      t.posOut.marginBottom + "px")),
                  e.mixer.config.animation.nudge ||
                    "hide" !== t.statusChange ||
                    i.push(
                      "translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"
                    ),
                  t.statusChange)
                ) {
                  case "hide":
                    s && (e.dom.el.style.opacity = e.mixer.effectsOut.opacity),
                      (i = i.concat(e.mixer.transformOut));
                    break;
                  case "show":
                    s && (e.dom.el.style.opacity = 1);
                }
                (e.mixer.config.animation.nudge ||
                  (!e.mixer.config.animation.nudge &&
                    "hide" !== t.statusChange)) &&
                  i.push(
                    "translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"
                  ),
                  (e.dom.el.style[n.features.transformProp] = i.join(" ")),
                  e.callActions("afterApplyStylesOut", arguments);
              },
              writeTransitionRule: function (t, e, n) {
                var o,
                  i = this,
                  a = i.getDelay(e);
                return (
                  (o =
                    t +
                    " " +
                    (n > 0 ? n : i.mixer.config.animation.duration) +
                    "ms " +
                    a +
                    "ms " +
                    ("opacity" === t
                      ? "linear"
                      : i.mixer.config.animation.easing)),
                  i.callFilters("ruleWriteTransitionRule", o, arguments)
                );
              },
              getDelay: function (t) {
                var e,
                  n = this;
                return (
                  "function" ==
                    typeof n.mixer.config.animation.staggerSequence &&
                    (t = n.mixer.config.animation.staggerSequence.call(
                      n,
                      t,
                      n.state
                    )),
                  (e = n.mixer.staggerDuration
                    ? t * n.mixer.staggerDuration
                    : 0),
                  n.callFilters("delayGetDelay", e, arguments)
                );
              },
              applyTransition: function (t) {
                var e = this,
                  o = t.join(", ");
                e.callActions("beforeApplyTransition", arguments),
                  (e.dom.el.style[n.features.transitionProp] = o),
                  e.callActions("afterApplyTransition", arguments);
              },
              handleTransitionEnd: function (t) {
                var e = this,
                  n = t.propertyName,
                  o = e.mixer.config.animation.animateResizeTargets;
                e.callActions("beforeHandleTransitionEnd", arguments),
                  e.isBound &&
                    t.target.matches(e.mixer.config.selectors.target) &&
                    (n.indexOf("transform") > -1 ||
                      n.indexOf("opacity") > -1 ||
                      (o && n.indexOf("height") > -1) ||
                      (o && n.indexOf("width") > -1) ||
                      (o && n.indexOf("margin") > -1)) &&
                    (e.callback.call(e, e.operation),
                    (e.isBound = !1),
                    (e.callback = null),
                    (e.operation = null)),
                  e.callActions("afterHandleTransitionEnd", arguments);
              },
              eventBus: function (t) {
                var e = this;
                switch ((e.callActions("beforeEventBus", arguments), t.type)) {
                  case "webkitTransitionEnd":
                  case "transitionend":
                    e.handleTransitionEnd(t);
                }
                e.callActions("afterEventBus", arguments);
              },
              unbindEvents: function () {
                var t = this;
                t.callActions("beforeUnbindEvents", arguments),
                  o.off(t.dom.el, "webkitTransitionEnd", t.handler),
                  o.off(t.dom.el, "transitionend", t.handler),
                  t.callActions("afterUnbindEvents", arguments);
              },
              bindEvents: function () {
                var t,
                  e = this;
                e.callActions("beforeBindEvents", arguments),
                  (t =
                    "webkit" === n.features.transitionPrefix
                      ? "webkitTransitionEnd"
                      : "transitionend"),
                  (e.handler = function (t) {
                    return e.eventBus(t);
                  }),
                  o.on(e.dom.el, t, e.handler),
                  e.callActions("afterBindEvents", arguments);
              },
              getPosData: function (t) {
                var o = this,
                  i = {},
                  a = null,
                  s = new n.StyleData();
                return (
                  o.callActions("beforeGetPosData", arguments),
                  (s.x = o.dom.el.offsetLeft),
                  (s.y = o.dom.el.offsetTop),
                  (o.mixer.config.animation.animateResizeTargets || t) &&
                    ((a = o.dom.el.getBoundingClientRect()),
                    (s.top = a.top),
                    (s.right = a.right),
                    (s.bottom = a.bottom),
                    (s.left = a.left),
                    (s.width = a.width),
                    (s.height = a.height)),
                  o.mixer.config.animation.animateResizeTargets &&
                    ((i = e.getComputedStyle(o.dom.el)),
                    (s.marginBottom = parseFloat(i.marginBottom)),
                    (s.marginRight = parseFloat(i.marginRight))),
                  o.callFilters("posDataGetPosData", s, arguments)
                );
              },
              cleanUp: function () {
                var t = this;
                t.callActions("beforeCleanUp", arguments),
                  (t.dom.el.style[n.features.transformProp] = ""),
                  (t.dom.el.style[n.features.transitionProp] = ""),
                  (t.dom.el.style.opacity = ""),
                  t.mixer.config.animation.animateResizeTargets &&
                    ((t.dom.el.style.width = ""),
                    (t.dom.el.style.height = ""),
                    (t.dom.el.style.marginRight = ""),
                    (t.dom.el.style.marginBottom = "")),
                  t.callActions("afterCleanUp", arguments);
              },
            }),
            (n.Collection = function (t) {
              var e = null,
                n = -1;
              for (this.callActions("beforeConstruct"), n = 0; (e = t[n]); n++)
                this[n] = e;
              (this.length = t.length),
                this.callActions("afterConstruct"),
                o.freeze(this);
            }),
            n.BaseStatic.call(n.Collection),
            (n.Collection.prototype = Object.create(n.Base.prototype)),
            o.extend(n.Collection.prototype, {
              constructor: n.Collection,
              mixitup: function (t) {
                var e = null,
                  i = Array.prototype.slice.call(arguments),
                  a = [],
                  s = -1;
                for (
                  this.callActions("beforeMixitup"), i.shift(), s = 0;
                  (e = this[s]);
                  s++
                )
                  a.push(e[t].apply(e, i));
                return this.callFilters(
                  "promiseMixitup",
                  o.all(a, n.libraries),
                  arguments
                );
              },
            }),
            (n.Operation = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.args = []),
                (this.command = null),
                (this.showPosData = []),
                (this.toHidePosData = []),
                (this.startState = null),
                (this.newState = null),
                (this.docState = null),
                (this.willSort = !1),
                (this.willChangeLayout = !1),
                (this.hasEffect = !1),
                (this.hasFailed = !1),
                (this.triggerElement = null),
                (this.show = []),
                (this.hide = []),
                (this.matching = []),
                (this.toShow = []),
                (this.toHide = []),
                (this.toMove = []),
                (this.toRemove = []),
                (this.startOrder = []),
                (this.newOrder = []),
                (this.startSort = null),
                (this.newSort = null),
                (this.startFilter = null),
                (this.newFilter = null),
                (this.startDataset = null),
                (this.newDataset = null),
                (this.viewportDeltaX = 0),
                (this.viewportDeltaY = 0),
                (this.startX = 0),
                (this.startY = 0),
                (this.startHeight = 0),
                (this.startWidth = 0),
                (this.newX = 0),
                (this.newY = 0),
                (this.newHeight = 0),
                (this.newWidth = 0),
                (this.startContainerClassName = ""),
                (this.startDisplay = ""),
                (this.newContainerClassName = ""),
                (this.newDisplay = ""),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Operation),
            (n.Operation.prototype = Object.create(n.Base.prototype)),
            (n.Operation.prototype.constructor = n.Operation),
            (n.State = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.activeFilter = null),
                (this.activeSort = null),
                (this.activeContainerClassName = ""),
                (this.container = null),
                (this.targets = []),
                (this.hide = []),
                (this.show = []),
                (this.matching = []),
                (this.totalTargets = -1),
                (this.totalShow = -1),
                (this.totalHide = -1),
                (this.totalMatching = -1),
                (this.hasFailed = !1),
                (this.triggerElement = null),
                (this.activeDataset = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.State),
            (n.State.prototype = Object.create(n.Base.prototype)),
            (n.State.prototype.constructor = n.State),
            (n.UserInstruction = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.command = {}),
                (this.animate = !1),
                (this.callback = null),
                this.callActions("afterConstruct"),
                o.seal(this);
            }),
            n.BaseStatic.call(n.UserInstruction),
            (n.UserInstruction.prototype = Object.create(n.Base.prototype)),
            (n.UserInstruction.prototype.constructor = n.UserInstruction),
            (n.Messages = function () {
              n.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.ERROR_FACTORY_INVALID_CONTAINER =
                  "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function"),
                (this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
                  "[MixItUp] The provided selector yielded no container element"),
                (this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
                  "[MixItUp] Invalid value for `animation.effects`"),
                (this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
                  "[MixItUp] Invalid value for `controls.scope`"),
                (this.ERROR_CONFIG_INVALID_PROPERTY =
                  '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}'),
                (this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
                  '. Did you mean "${probableMatch}"?'),
                (this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
                  "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`"),
                (this.ERROR_DATASET_INVALID_UID_KEY =
                  '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items'),
                (this.ERROR_DATASET_DUPLICATE_UID =
                  '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.'),
                (this.ERROR_INSERT_INVALID_ARGUMENTS =
                  "[MixItUp] Please provider either an index or a sibling and position to insert, not both"),
                (this.ERROR_INSERT_PREEXISTING_ELEMENT =
                  "[MixItUp] An element to be inserted already exists in the container"),
                (this.ERROR_FILTER_INVALID_ARGUMENTS =
                  "[MixItUp] Please provide either a selector or collection `.filter()`, not both"),
                (this.ERROR_DATASET_NOT_SET =
                  "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`"),
                (this.ERROR_DATASET_PRERENDERED_MISMATCH =
                  "[MixItUp] `load.dataset` does not match pre-rendered targets"),
                (this.ERROR_DATASET_RENDERER_NOT_SET =
                  "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`"),
                (this.ERROR_SORT_NON_EXISTENT_ELEMENT =
                  "[MixItUp] An element to be sorted does not already exist in the container"),
                (this.WARNING_FACTORY_PREEXISTING_INSTANCE =
                  "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference."),
                (this.WARNING_INSERT_NO_ELEMENTS =
                  "[MixItUp] WARNING: No valid elements were passed to `.insert()`"),
                (this.WARNING_REMOVE_NO_ELEMENTS =
                  "[MixItUp] WARNING: No valid elements were passed to `.remove()`"),
                (this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
                  "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled."),
                (this.WARNING_GET_OPERATION_INSTANCE_BUSY =
                  "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy."),
                (this.WARNING_NO_PROMISE_IMPLEMENTATION =
                  "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill."),
                (this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
                  '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output'),
                this.callActions("afterConstruct"),
                this.compileTemplates(),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Messages),
            (n.Messages.prototype = Object.create(n.Base.prototype)),
            (n.Messages.prototype.constructor = n.Messages),
            (n.Messages.prototype.compileTemplates = function () {
              var t = "",
                e = "";
              for (t in this)
                "string" == typeof (e = this[t]) &&
                  (this[o.camelCase(t)] = o.template(e));
            }),
            (n.messages = new n.Messages()),
            (n.Facade = function (t) {
              n.Base.call(this),
                this.callActions("beforeConstruct", arguments),
                (this.configure = t.configure.bind(t)),
                (this.show = t.show.bind(t)),
                (this.hide = t.hide.bind(t)),
                (this.filter = t.filter.bind(t)),
                (this.toggleOn = t.toggleOn.bind(t)),
                (this.toggleOff = t.toggleOff.bind(t)),
                (this.sort = t.sort.bind(t)),
                (this.changeLayout = t.changeLayout.bind(t)),
                (this.multimix = t.multimix.bind(t)),
                (this.dataset = t.dataset.bind(t)),
                (this.tween = t.tween.bind(t)),
                (this.insert = t.insert.bind(t)),
                (this.insertBefore = t.insertBefore.bind(t)),
                (this.insertAfter = t.insertAfter.bind(t)),
                (this.prepend = t.prepend.bind(t)),
                (this.append = t.append.bind(t)),
                (this.remove = t.remove.bind(t)),
                (this.destroy = t.destroy.bind(t)),
                (this.forceRefresh = t.forceRefresh.bind(t)),
                (this.forceRender = t.forceRender.bind(t)),
                (this.isMixing = t.isMixing.bind(t)),
                (this.getOperation = t.getOperation.bind(t)),
                (this.getConfig = t.getConfig.bind(t)),
                (this.getState = t.getState.bind(t)),
                this.callActions("afterConstruct", arguments),
                o.freeze(this),
                o.seal(this);
            }),
            n.BaseStatic.call(n.Facade),
            (n.Facade.prototype = Object.create(n.Base.prototype)),
            (n.Facade.prototype.constructor = n.Facade),
            (t.exports = n),
            n.BaseStatic.call(n.constructor),
            (n.NAME = "mixitup"),
            (n.CORE_VERSION = "3.3.1");
        })(window);
      },
    },
    e = {};
  function n(o) {
    var i = e[o];
    if (void 0 !== i) return i.exports;
    var a = (e[o] = { exports: {} });
    return t[o](a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    n(80);
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
        null !== document.querySelector("#welcome_subtitle"))
      ) {
        new Typed("#welcome_subtitle", {
          strings: [
            "TO AWARD-WINNING STORAGE DRYING AND DISPLAY\n         SYSTEMS FOR YOUR\n         SPORTS\n         EQUIPMENT",
          ],
          typeSpeed: 50,
          startDelay: 2500,
        });
      }
      if (null !== document.querySelector(".filter-btn-counter ")) {
        const t = document.querySelectorAll(".filter-btn-counter ");
        function e(e) {
          t.forEach((t, n) => {
            t.classList.contains("active")
              ? t.classList.remove("active", n === e)
              : t.classList.toggle("active", n === e);
          });
        }
        e(0),
          t.forEach((t, n) => {
            t.addEventListener("click", () => e(n));
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
        const n = document.querySelectorAll(".contact-btn"),
          o = document.querySelectorAll(".contact2_content");
        function i(t) {
          n.forEach((e, n) => {
            e.classList.toggle("active", n === t);
          }),
            o.forEach((e, n) => {
              e.classList.toggle("active", n === t);
            });
        }
        i(0),
          n.forEach((t, e) => {
            t.addEventListener("click", () => i(e));
          });
      }
      if (null !== document.querySelector(".product-cart-info_swiper")) {
        const a = new Swiper(".product-cart-info_swiper", {
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
        new Swiper(".product-cart-info_swiper2", {
          spaceBetween: 10,
          autoHeight: !0,
          thumbs: { swiper: a },
        });
      }
      if (null !== document.querySelector(".product-cart-info_swiper")) {
        const s = new Swiper(".product-cart-info_swiper12", {
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
          thumbs: { swiper: s },
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
        const l = new Swiper(".product-cart-info_swiper14", {
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
          thumbs: { swiper: l },
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
            769: { slidesPerView: 2.5 },
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
        const c = document.querySelectorAll(".welcome-bg"),
          u = document.querySelectorAll(".btn-banner"),
          f = document.querySelectorAll(".welcome_content");
        setInterval(d, 7e3);
        function d() {
          u.forEach((t) => {
            t.classList.toggle("active");
          }),
            f.forEach((t) => {
              t.classList.toggle("active");
            }),
            c.forEach((t) => {
              t.classList.toggle("active");
            });
        }
        u.forEach((t) => {
          t.addEventListener("click", () => d());
        });
      }
      if (null !== document.querySelector(".advantages-item_btn")) {
        const h = document.querySelectorAll(".advantages-item_btn"),
          m = document.querySelectorAll(".advantages_content"),
          g = document.querySelectorAll(".advantages_img");
        function p(t) {
          m.forEach((e, n) => {
            (e.style.position = n === t ? "relative" : "absolute"),
              (e.style.visibility = n === t ? "visible" : "hidden"),
              (e.style.opacity = n === t ? "1" : "0"),
              (e.style.transition = n === t ? "ease 1s" : "ease 0s");
          }),
            g.forEach((e, n) => {
              (e.style.position = n === t ? "relative" : "absolute"),
                (e.style.visibility = n === t ? "visible" : "hidden"),
                (e.style.opacity = n === t ? "1" : "0"),
                (e.style.transition = n === t ? "ease 1s" : "ease 0s");
            }),
            h.forEach((e, n) => {
              e.classList.toggle("active", n === t);
            });
        }
        p(2),
          h.forEach((t, e) => {
            t.addEventListener("click", () => p(e));
          });
      }
      if (
        (document.addEventListener("click", function (t) {
          let e = t.target;
          const n = document.querySelector(".burger_menu"),
            o = document.querySelector(".header_nav"),
            i = document.querySelector(".header"),
            a = document.querySelectorAll(".sublist-box");
          document.querySelectorAll(".list_item-btn").forEach((t) => {
            n.contains(e) &&
              (n.classList.contains("active")
                ? (o.classList.toggle("active"),
                  n.classList.toggle("active"),
                  i.classList.remove("black-bg"))
                : (o.classList.toggle("active"),
                  n.classList.toggle("active"),
                  i.classList.add("black-bg"))),
              t.contains(e) &&
                (t.classList.contains("active")
                  ? i.classList.add("black-bg")
                  : i.classList.remove("black-bg")),
              i.contains(e) ||
                (i.classList.remove("black-bg"),
                o.classList.remove("active"),
                n.classList.remove("active"),
                t.classList.remove("active"),
                a.forEach((t) => {
                  t.classList.remove("active");
                }));
          });
        }),
        null !== document.querySelector(".btn-back-box"))
      ) {
        const y = document.querySelectorAll(".list_item-btn"),
          v = document.querySelectorAll(".sublist-box");
        document.querySelectorAll(".btn-back-box").forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              y.forEach((e, n) => {
                e.classList.remove("active", n === t);
              }),
              void v.forEach((e, n) => {
                e.classList.remove("active", n === t);
              })
            );
            var t;
          });
        });
      }
      if (null !== document.querySelector(".list_item-btn")) {
        const b = document.querySelectorAll(".list_item-btn"),
          w = document.querySelectorAll(".sublist-box");
        b.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              b.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              }),
              void w.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              })
            );
            var t;
          });
        });
      }
      if (null !== document.querySelector(".product-btn-header")) {
        const C = document.querySelectorAll(".product-btn-header"),
          S = document.querySelectorAll(".product-content-header");
        function A(t) {
          C.forEach((e, n) => {
            e.classList.toggle("active", n === t);
          }),
            S.forEach((e, n) => {
              e.classList.toggle("active", n === t);
            });
        }
        A(0),
          C.forEach((t, e) => {
            t.addEventListener("mouseenter", () => A(e));
          });
      }
      if (null !== document.querySelector(".gallery-item_btn")) {
        const x = document.querySelectorAll(".gallery-item_btn"),
          E = document.querySelectorAll(".gallery-item_content"),
          D = document.querySelectorAll(".gallerry-content-image");
        function O(t) {
          D.forEach((e, n) => {
            (e.style.position = n === t ? "relative" : "absolute"),
              (e.style.visibility = n === t ? "visible" : "hidden"),
              (e.style.opacity = n === t ? "1" : "0"),
              (e.style.transition = n === t ? "ease 1s" : "ease 0s");
          }),
            E.forEach((e, n) => {
              (e.style.position = n === t ? "relative" : "absolute"),
                (e.style.visibility = n === t ? "visible" : "hidden"),
                (e.style.opacity = n === t ? "1" : "0"),
                (e.style.transition = n === t ? "ease 1s" : "ease 0s");
            }),
            x.forEach((e, n) => {
              e.classList.toggle("active", n === t);
            });
        }
        O(2),
          x.forEach((t, e) => {
            t.addEventListener("click", () => O(e));
          });
      }
      if (null !== document.querySelector(".footer-item-btn-list")) {
        const I = document.querySelectorAll(".footer-item-btn-list"),
          T = document.querySelectorAll(".footer-content");
        I.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              I.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              }),
              void T.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              })
            );
            var t;
          });
        });
      }
      if (null !== document.querySelector(".language-list")) {
        const P = document.querySelector(".language-list");
        document
          .querySelector(".language")
          .addEventListener("click", function () {
            P.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".filters-list")) {
        const B = document.querySelector(".filters-list");
        document
          .querySelector(".filters")
          .addEventListener("click", function () {
            B.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".counter-items")) {
        const R = document.querySelector(".counter-item"),
          N = document.querySelectorAll(".item"),
          L = document.querySelectorAll(".filter-btn-counter");
        function F() {
          setTimeout(() => {
            const t = Array.from(N).reduce(
              (t, e) =>
                "none" === window.getComputedStyle(e).display ? t : t + 1,
              0
            );
            R.innerHTML = t;
          }, 1e3);
        }
        F(),
          L.forEach((t) => {
            t.addEventListener("click", F);
          });
      }
      if (null !== document.querySelector(".item-login")) {
        const M = document.querySelectorAll(".item-login"),
          k = document.querySelectorAll(".login-popup"),
          _ = document.querySelectorAll(".login-popup-close"),
          q = document.body;
        M.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              M.forEach((e, n) => {
                e.classList.toggle("active", n === t);
              }),
              k.forEach((e, n) => {
                e.classList.toggle("active", n === t);
              }),
              k.forEach((t) => {
                t.classList.contains("active") || (q.style.overflow = "auto");
              }),
              void k.forEach((t) => {
                t.classList.contains("active") && (q.style.overflow = "hidden");
              })
            );
            var t;
          });
        }),
          _.forEach((t, e) => {
            t.addEventListener("click", () => {
              return (
                (t = e),
                k.forEach((e, n) => {
                  e.classList.remove("active", n === t);
                }),
                void k.forEach((t) => {
                  t.classList.contains("active") || (q.style.overflow = "auto");
                })
              );
              var t;
            });
          });
      }
      if (null !== document.querySelector(".depot-technology_item")) {
        const j = document.querySelectorAll(".depot-technology_item"),
          U = document.querySelectorAll(".technology-popup"),
          H = document.querySelectorAll(".technology-popup-close"),
          G = document.body;
        j.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              j.forEach((e, n) => {
                e.classList.toggle("active", n === t);
              }),
              U.forEach((e, n) => {
                e.classList.toggle("active", n === t);
              }),
              U.forEach((t) => {
                t.classList.contains("active") || (G.style.overflow = "auto");
              }),
              void U.forEach((t) => {
                t.classList.contains("active") && (G.style.overflow = "hidden");
              })
            );
            var t;
          });
        }),
          H.forEach((t, e) => {
            t.addEventListener("click", () => {
              return (
                (t = e),
                U.forEach((e, n) => {
                  e.classList.remove("active", n === t);
                }),
                void U.forEach((t) => {
                  t.classList.contains("active") || (G.style.overflow = "auto");
                })
              );
              var t;
            });
          });
      }
      if (null !== document.querySelector(".btn-technology")) {
        const V = document.querySelectorAll(".btn-technology"),
          W = document.querySelectorAll(".technology_img-box"),
          z = document.querySelectorAll(".hotspot-technology"),
          Y = document.querySelectorAll(".technology-content"),
          X = document.querySelectorAll(".hotspot-technology2"),
          K = document.querySelectorAll(".technology-content2");
        function $(t) {
          V.forEach((e, n) => {
            e.classList.toggle("active", n === t);
          }),
            W.forEach((e, n) => {
              e.classList.toggle("active", n === t);
            }),
            Y.forEach((t, e) => {
              t.classList.remove("active");
            }),
            K.forEach((t, e) => {
              t.classList.remove("active");
            }),
            X.forEach((t, e) => {
              t.classList.remove("active");
            }),
            z.forEach((t, e) => {
              t.classList.remove("active");
            });
        }
        $(1),
          V.forEach((t, e) => {
            t.addEventListener("click", () => $(e));
          });
      }
      if (null !== document.querySelector(".hotspot-technology2")) {
        const Q = document.querySelectorAll(".hotspot-technology2"),
          Z = document.querySelectorAll(".technology-content2"),
          J = document.querySelectorAll(".technology-button-next2"),
          tt = document.querySelectorAll(".technology-button-prev2");
        Q.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              Z.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              }),
              void Q.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              })
            );
            var t;
          });
        }),
          J.forEach((t, e) => {
            t.addEventListener("click", () => {
              return (
                (t = e),
                void (Z.length - 1 <= t
                  ? (Z.forEach((t, e) => {
                      t.classList.toggle("active", 0 === e);
                    }),
                    Q.forEach((t, e) => {
                      t.classList.toggle("active", 0 === e);
                    }))
                  : (Z.forEach((e, n) => {
                      e.classList.toggle("active", n === t + 1);
                    }),
                    Q.forEach((e, n) => {
                      e.classList.toggle("active", n === t + 1);
                    })))
              );
              var t;
            });
          }),
          tt.forEach((t, e) => {
            t.addEventListener("click", () => {
              var t;
              0 == (t = e)
                ? (Z.forEach((t, e) => {
                    t.classList.toggle("active", e === Z.length - 1);
                  }),
                  Q.forEach((t, e) => {
                    t.classList.toggle("active", e === Z.length - 1);
                  }))
                : (Z.forEach((e, n) => {
                    e.classList.toggle("active", n === t - 1);
                  }),
                  Q.forEach((e, n) => {
                    e.classList.toggle("active", n === t - 1);
                  }));
            });
          });
      }
      if (null !== document.querySelector(".hotspot-technology")) {
        const et = document.querySelectorAll(".hotspot-technology"),
          nt = document.querySelectorAll(".technology-content"),
          ot = document.querySelectorAll(".technology-button-next"),
          it = document.querySelectorAll(".technology-button-prev");
        et.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              nt.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              }),
              void et.forEach((e, n) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", n === t)
                  : e.classList.toggle("active", n === t);
              })
            );
            var t;
          });
        }),
          ot.forEach((t, e) => {
            t.addEventListener("click", () => {
              return (
                (t = e),
                void (nt.length - 1 <= t
                  ? (nt.forEach((t, e) => {
                      t.classList.toggle("active", 0 === e);
                    }),
                    et.forEach((t, e) => {
                      t.classList.toggle("active", 0 === e);
                    }))
                  : (nt.forEach((e, n) => {
                      e.classList.toggle("active", n === t + 1);
                    }),
                    et.forEach((e, n) => {
                      e.classList.toggle("active", n === t + 1);
                    })))
              );
              var t;
            });
          }),
          it.forEach((t, e) => {
            t.addEventListener("click", () => {
              var t;
              0 == (t = e)
                ? (nt.forEach((t, e) => {
                    t.classList.toggle("active", e === nt.length - 1);
                  }),
                  et.forEach((t, e) => {
                    t.classList.toggle("active", e === nt.length - 1);
                  }))
                : (nt.forEach((e, n) => {
                    e.classList.toggle("active", n === t - 1);
                  }),
                  et.forEach((e, n) => {
                    e.classList.toggle("active", n === t - 1);
                  }));
            });
          });
      }
      if (null !== document.querySelector(".seeAlso_btn-box")) {
        const at = document.querySelectorAll(".seeAlso-btn"),
          st = document.querySelectorAll(".seeAlso_img");
        at.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              at.forEach((e, n) => {
                e.classList.toggle("active", n === t);
              }),
              void st.forEach((e, n) => {
                e.classList.toggle("active", n === t);
              })
            );
            var t;
          });
        });
      }
      null !== document.querySelector(".planning-content_img") &&
        Cocoen.parse(document.body),
        setTimeout(() => {
          let t = new IntersectionObserver(
              function (t) {
                t.forEach((t) => {
                  t.isIntersecting && t.target.classList.add("active");
                });
              },
              { threshold: [0.5] }
            ),
            e = document.querySelectorAll(".element-animation");
          for (let n of e) t.observe(n);
        }, 1e3);
    });
  })();
})();
