var M = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && m(a, e, t[e]);
  if (c)
    for (var e of c(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var s in a)
    l.call(a, s) && t.indexOf(s) < 0 && (e[s] = a[s]);
  if (a != null && c)
    for (var s of c(a))
      t.indexOf(s) < 0 && o.call(a, s) && (e[s] = a[s]);
  return e;
};
import Z, { forwardRef as S } from "react";
import f from "../../lib/OptiBase.mjs";
const C = S((s, e) => {
  var r = s, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M121.75,41.21C115.22,31.26,105.62,26,94,26S72.78,31.26,66.25,41.21C60.93,49.31,58,60.25,58,72s2.93,22.69,8.25,30.79C72.78,112.74,82.38,118,94,118s21.22-5.26,27.75-15.21c5.32-8.1,8.25-19,8.25-30.79S127.07,49.31,121.75,41.21ZM94,106c-19,0-24-21.37-24-34s5-34,24-34,24,21.37,24,34S113,106,94,106Zm99.75,47.21C187.22,143.26,177.62,138,166,138s-21.22,5.26-27.75,15.21c-5.32,8.1-8.25,19-8.25,30.79s2.93,22.69,8.25,30.79c6.53,10,16.13,15.21,27.75,15.21s21.22-5.26,27.75-15.21c5.32-8.1,8.25-19,8.25-30.79S199.07,161.31,193.75,153.21ZM166,218c-18.95,0-24-21.37-24-34s5.05-34,24-34,24,21.37,24,34S185,218,166,218ZM146.75,48.25a6,6,0,0,1,2.34-8.16l24-13.34A6,6,0,0,1,182,32v80a6,6,0,0,1-12,0V42.2l-15.09,8.38A6,6,0,0,1,146.75,48.25ZM102,144v80a6,6,0,0,1-12,0V154.2l-15.09,8.38a6,6,0,1,1-5.82-10.49l24-13.34A6,6,0,0,1,102,144Z" }));
});
C.displayName = "Light";
export {
  C as Light
};
