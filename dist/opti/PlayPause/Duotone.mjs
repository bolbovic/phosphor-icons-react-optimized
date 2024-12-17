var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && V(e, a, t[a]);
  if (m)
    for (var a of m(t))
      l.call(t, a) && V(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, a) => {
  var p = o, { children: e } = p, t = A(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M132.37,134.59,44.18,190.74A7.91,7.91,0,0,1,32,184.15V71.85a7.91,7.91,0,0,1,12.18-6.59l88.19,56.15A7.8,7.8,0,0,1,132.37,134.59Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-80,72a15.76,15.76,0,0,1-7.33,13.34L48.48,197.49A15.91,15.91,0,0,1,24,184.15V71.85A15.91,15.91,0,0,1,48.48,58.51l88.19,56.15A15.76,15.76,0,0,1,144,128Zm-16.18,0L40,72.08V183.93Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
