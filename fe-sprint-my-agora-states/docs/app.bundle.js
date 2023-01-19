(() => {
  var e = {
      426: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => s });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i)()(o());
        a.push([
          e.id,
          "@import url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css);",
        ]),
          a.push([
            e.id,
            '/* TODO: 보기 좋은 나만의 아고라 스테이츠를 위해서 CSS를 수정하세요. */\n\n* {\n  font-family: "pretendard";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nbody {\n  margin: 0 auto;\n  border: solid 1px black;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n}\n\nsection.form__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fad4e7;\n  padding-bottom: 4em;\n}\n\nh1 {\n  font-size: 3em;\n  margin: 1em;\n}\n\nform.form {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 50em;\n  height: 28em;\n  background-repeat: no-repeat;\n  background-size: 1em;\n  background-position: center top;\n  background-color: #eaeaea;\n  border-radius: 1em;\n  padding: auto;\n}\n\ndiv.form__input--wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 2em;\n  width: 28em;\n}\n\ndiv.form__input--wrapper > div {\n  margin: 0.3em 0.3em;\n}\n\ndiv.form__input--name {\n  flex: 1 0 10em;\n}\ndiv.form__input--title {\n  flex: 1 0 10em;\n}\ndiv.form__textbox {\n  flex: 1 0 20em;\n}\n\ndiv.form__input--wrapper > div > input {\n  /* border: solid 1px black; */\n  padding: 1em;\n  width: 100%;\n  border-radius: 0.3em;\n  border: none;\n}\ninput:focus {\n  outline: solid 1px #1d1d1d;\n}\n\nsection.discussion__wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f8f0ee;\n}\n\nul.discussions__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 50em;\n  height: 100%;\n}\n\nli.discussion__container {\n  flex: 0 0 24.4em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 25em;\n  height: 10em;\n  margin: 0.6em 0em;\n  padding: 1.4em 1em;\n  background-color: white;\n  border-radius: 0.6em;\n}\n\ndiv.discussion__avatar--wrapper {\n  width: 5em;\n}\n\nimg.discussion__avatar--image {\n  width: 100%;\n  border-radius: 10%;\n}\n\ndiv.discussion__content {\n  width: 16em;\n}\n\np.tag {\n  font-size: 0.6em;\n  width: 4.6em;\n  border: solid 1px black;\n  border-radius: 2em;\n  text-align: center;\n  padding: 0.2em 0.1em;\n  margin-bottom: 0.8em;\n}\n\nh2.discussion__title {\n  display: -webkit-box;\n  width: 14em;\n  font-size: 1em;\n  font-weight: 600;\n  color: #1d1d1d;\n  letter-spacing: -0.01em;\n  line-height: 1.2em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 0.3em;\n}\n\nh2.discussion__title > a {\n  color: inherit;\n  text-decoration: none;\n}\n\ndiv.discussion__information {\n  font-size: 0.8em;\n  color: #888;\n}\n',
            "",
          ]);
        const s = a;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      654: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => g });
        var r = t(379),
          o = t.n(r),
          i = t(795),
          a = t.n(i),
          s = t(569),
          c = t.n(s),
          d = t(565),
          l = t.n(d),
          u = t(216),
          p = t.n(u),
          m = t(589),
          f = t.n(m),
          v = t(426),
          h = {};
        (h.styleTagTransform = f()),
          (h.setAttributes = l()),
          (h.insert = c().bind(null, "head")),
          (h.domAPI = a()),
          (h.insertStyleElement = p()),
          o()(v.Z, h);
        const g = v.Z && v.Z.locals ? v.Z.locals : void 0;
      },
      379: (e) => {
        "use strict";
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var c = e[s],
              d = r.base ? c[0] + r.base : c[0],
              l = i[d] || 0,
              u = "".concat(d, " ").concat(l);
            i[d] = l + 1;
            var p = t(u),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: u, updater: f, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              n[s].references--;
            }
            for (var c = r(e, o), d = 0; d < i.length; d++) {
              var l = t(i[d]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            i = c;
          };
        };
      },
      569: (e) => {
        "use strict";
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        "use strict";
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.nc = void 0),
    (() => {
      t(654);
      let e = [];
      fetch("http://localhost:4000/discussions")
        .then((e) => e.json())
        .then((n) => {
          e = n;
          const t = document.querySelector("ul.discussions__container");
          s(t);
        });
      const n = (e) => {
          const n = document.createElement("li");
          n.className = "discussion__container";
          const t = document.createElement("div");
          t.className = "discussion__avatar--wrapper";
          const r = document.createElement("img");
          (r.className = "discussion__avatar--image"),
            (r.src = e.avatarUrl),
            (r.alt = `avatar of ${e.author}`),
            t.append(r);
          const o = document.createElement("div");
          o.className = "discussion__content";
          const i = document.createElement("h2");
          i.className = "discussion__title";
          const a = document.createElement("a");
          (a.href = e.url), (a.textContent = e.title), i.append(a), o.append(i);
          const s = document.createElement("div");
          (s.className = "discussion__information"),
            (s.textContent = `${e.author} · ${new Date(
              e.createdAt
            ).toLocaleDateString()}`),
            o.append(s);
          const c = document.createElement("div");
          c.className = "discussion__answered";
          const d = document.createElement("p");
          return (
            (d.className = "tag"),
            (d.textContent = e.answer ? "답변완료" : "답변중"),
            c.append(d),
            o.prepend(c),
            n.append(t, o),
            n
          );
        },
        r = document.querySelector("form.form"),
        o = r.querySelector("div.form__input--name > input"),
        i = r.querySelector("div.form__input--title > input"),
        a = r.querySelector("div.form__textbox > input");
      r.addEventListener("submit", (t) => {
        t.preventDefault();
        const r = {
          id: "gest",
          createdAt: new Date().toDateString(),
          title: i.value,
          url: "https://github.com/codestates-seb/agora-states-fe/discussions/6",
          author: o.value,
          bodyHTML: a.value,
          avatarUrl: "https://source.unsplash.com/random",
        };
        e.unshift(r);
        const s = n(r);
        c.prepend(s),
          alert("게시물이 등록되었습니다."),
          (o.value = ""),
          (i.value = ""),
          (a.value = "");
      });
      const s = (t) => {
          for (let r = 0; r < e.length; r += 1) t.append(n(e[r]));
          console.log(e);
        },
        c = document.querySelector("ul.discussions__container");
      s(c);
    })();
})();
