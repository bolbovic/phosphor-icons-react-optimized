var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((o, a) => {
  var l = o, { children: e } = l, t = d(l, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M171.68,167.88l-37.53,45.24a8,8,0,0,1-12.3,0L84.32,167.88a68,68,0,0,1,87.36,0Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M247.89,80.91a15.93,15.93,0,0,0-6.17-10.81A186.67,186.67,0,0,0,128,32,186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77h0l104-125.43A15.65,15.65,0,0,0,247.89,80.91ZM128,208l-32.1-38.7a60,60,0,0,1,64.2,0Zm42.37-51.08a75.89,75.89,0,0,0-84.74,0L24.09,82.74A170.76,170.76,0,0,1,128,48,170.76,170.76,0,0,1,231.91,82.74Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
