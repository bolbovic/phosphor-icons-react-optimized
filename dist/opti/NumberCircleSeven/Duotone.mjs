var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && c(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && i.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((o, a) => {
  var p = o, { children: e } = p, t = A(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, l({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM158.55,83.41a8,8,0,0,1,1,7.32l-32,88A8,8,0,0,1,120,184a7.9,7.9,0,0,1-2.73-.48,8,8,0,0,1-4.79-10.25L140.58,96H104a8,8,0,0,1,0-16h48A8,8,0,0,1,158.55,83.41Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
