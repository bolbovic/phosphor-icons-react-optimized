var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const H = h((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H161.16c15.45,7.24,26.84,17.8,26.84,36,0,24.26-26.92,44-60,44s-60-19.74-60-44a4,4,0,0,1,8,0c0,19.85,23.33,36,52,36s52-16.15,52-36c0-19.54-16.13-28.3-42.18-36H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM76.33,100a3.85,3.85,0,0,0,1.25-.2,4,4,0,0,0,2.55-5,21.9,21.9,0,0,1-1-6.75c0-20.52,21-36,48.89-36,20.32,0,37,8.2,44.49,21.92a4,4,0,0,0,7-3.85C170.54,53.75,151.29,44,128,44,95.57,44,71.11,62.92,71.11,88a29.76,29.76,0,0,0,1.42,9.25A4,4,0,0,0,76.33,100Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};