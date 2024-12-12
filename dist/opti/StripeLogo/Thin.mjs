var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((c, e) => {
  var m = c, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M164,152c0,15.44-16.15,28-36,28s-36-12.56-36-28a4,4,0,0,1,8,0c0,11,12.56,20,28,20s28-9,28-20c0-12.58-11.79-16.92-29.78-22.11C111,125.51,93.78,120.54,93.78,104c0-16,14.71-28,34.22-28,14.2,0,26.3,6.46,31.55,16.85a4,4,0,1,1-7.13,3.61C148.53,88.78,139.17,84,128,84c-15,0-26.22,8.6-26.22,20,0,9.81,10.07,13.43,26.66,18.21S164,132.46,164,152ZM220,48V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
