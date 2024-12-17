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
const C = h((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M55,62.67C46.34,74.93,36,96.22,36,128s10.34,53.07,19,65.33c9.41,13.3,19,19.19,19.06,19.24A4,4,0,0,1,72,220a4,4,0,0,1-2-.57C68.23,218.4,28,193.51,28,128S68.23,37.6,69.94,36.57a4,4,0,0,1,4.13,6.86C74,43.48,64.42,49.37,55,62.67Zm131.05-26.1a4,4,0,0,0-4.13,6.86c.1,0,9.65,5.94,19.06,19.24,8.67,12.26,19,33.55,19,65.33s-10.34,53.07-19,65.33c-9.41,13.3-19,19.19-19.05,19.24a4,4,0,0,0,4.12,6.86c1.71-1,41.94-25.92,41.94-91.43S187.77,37.6,186.06,36.57Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
