var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      H.call(t, a) && c(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && H.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((o, a) => {
  var p = o, { children: e } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,80v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H224A8,8,0,0,1,232,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,112H32V80H224v96Zm-24-48a12,12,0,1,1-12-12A12,12,0,0,1,200,128Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
