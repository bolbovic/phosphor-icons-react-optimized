var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const L = d((l, e) => {
  var m = l, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M213.92,210.62a8,8,0,1,1-11.84,10.76l-33.67-37-28.1,33.88A15.93,15.93,0,0,1,128,224h0a15.93,15.93,0,0,1-12.31-5.77L11.65,92.8A15.65,15.65,0,0,1,8.11,80.91,15.93,15.93,0,0,1,14.28,70.1,188.26,188.26,0,0,1,46.6,50.35l-4.29-4.72a8.22,8.22,0,0,1,.13-11.38,8,8,0,0,1,11.48.37Zm34-129.71a15.93,15.93,0,0,0-6.17-10.81A186.67,186.67,0,0,0,128,32a191,191,0,0,0-42.49,4.75,4,4,0,0,0-2,6.59L186,156.07a4,4,0,0,0,6-.14L244.35,92.8A15.65,15.65,0,0,0,247.89,80.91Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
