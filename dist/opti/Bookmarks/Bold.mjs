var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    V.call(t, a) && m(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && m(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    V.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && p.call(e, o) && (a[o] = e[o]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const h = i((o, a) => {
  var l = o, { children: e } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M192,20H96A20,20,0,0,0,76,40V60H64A20,20,0,0,0,44,80V224a12,12,0,0,0,19.32,9.51L108,199.14l44.69,34.37A12,12,0,0,0,172,224V177.6l20.68,15.91A12,12,0,0,0,212,184V40A20,20,0,0,0,192,20ZM148,199.63l-32.69-25.14a12,12,0,0,0-14.63,0L68,199.63V84h80Zm40-40-16-12.3V80a20,20,0,0,0-20-20H100V44h88Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
