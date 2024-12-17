var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as C } from "react";
import n from "../../lib/OptiBase.mjs";
const B = C((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M190,57.34C171.06,29,147.88,12,128,12S84.94,29,66,57.34C46.94,86,36,120.46,36,152a92,92,0,0,0,184,0C220,120.46,209.06,86,190,57.34ZM128,220a68.07,68.07,0,0,1-68-68c0-61.12,46.19-116,68-116,7.59,0,18.13,6.65,28.64,17.88L119.05,96a12,12,0,0,0,6,19.63l20.9,5.23-5.76,28.78a12,12,0,0,0,9.42,14.12A11.87,11.87,0,0,0,152,164a12,12,0,0,0,11.76-9.65l8-40a12,12,0,0,0-8.86-14l-12.74-3.19,21.4-24C185.2,94.34,196,122.44,196,152A68.07,68.07,0,0,1,128,220Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
