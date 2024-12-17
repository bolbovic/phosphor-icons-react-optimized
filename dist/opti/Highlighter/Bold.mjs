var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      L.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M252.49,107.51a12,12,0,0,0-17,0L192,151,113,72l43.52-43.51a12,12,0,0,0-17-17L93.17,57.86a20,20,0,0,0-4.72,20.72L69.17,97.86a20,20,0,0,0,0,28.28L71,128,15.51,183.51a12,12,0,0,0,4.7,19.87l72,24A11.8,11.8,0,0,0,96,228a12,12,0,0,0,8.49-3.52L136,193l1.86,1.86a20,20,0,0,0,28.28,0l19.27-19.27a20.27,20.27,0,0,0,6.59,1.13,19.86,19.86,0,0,0,14.14-5.86l46.35-46.34A12,12,0,0,0,252.49,107.51ZM92.76,202.27,46.21,186.76,88,145l31,31ZM152,175,96.49,119.52h0L89,112l15-15,63,63Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
