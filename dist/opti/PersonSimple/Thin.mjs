var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var c = r, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ s.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M227.43,130.06a4,4,0,0,1-5.49,1.37c-.38-.23-37.87-22.29-89.94-23.38v42.43l63,70.86a4,4,0,0,1-6,5.32L128,158,67,226.66a4,4,0,0,1-6-5.32l63-70.86V108.05c-52.07,1.09-89.56,23.15-89.94,23.38a4,4,0,0,1-4.12-6.86c1.67-1,41.6-24.57,98.06-24.57s96.39,23.57,98.06,24.57A4,4,0,0,1,227.43,130.06ZM100,48a28,28,0,1,1,28,28A28,28,0,0,1,100,48Zm8,0a20,20,0,1,0,20-20A20,20,0,0,0,108,48Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
