var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((c, e) => {
  var r = c, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ f.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M176,34c-21.15,0-39.1,20.15-48,50.26C119.1,54.15,101.15,34,80,34c-30.28,0-54,41.29-54,94s23.72,94,54,94c21.15,0,39.1-20.15,48-50.26,8.9,30.11,26.85,50.26,48,50.26,30.28,0,54-41.29,54-94S206.28,34,176,34ZM80,210c-18.24,0-34.19-24.1-39.83-56.53a30,30,0,1,0,0-50.94C45.81,70.1,61.76,46,80,46c22.77,0,42,37.55,42,82S102.77,210,80,210ZM38,128a18,18,0,1,1,18,18A18,18,0,0,1,38,128Zm138,82c-18.24,0-34.19-24.1-39.83-56.53a30,30,0,1,0,0-50.94C141.81,70.1,157.76,46,176,46c22.77,0,42,37.55,42,82S198.77,210,176,210Zm-42-82a18,18,0,1,1,18,18A18,18,0,0,1,134,128Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
