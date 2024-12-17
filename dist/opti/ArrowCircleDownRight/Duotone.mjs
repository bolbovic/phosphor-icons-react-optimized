var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      i.call(t, a) && c(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && i.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const h = s((o, a) => {
  var p = o, { children: e } = p, t = f(p, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, d({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-104v48a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h28.69L90.34,101.66a8,8,0,0,1,11.32-11.32L152,140.69V112a8,8,0,0,1,16,0Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
