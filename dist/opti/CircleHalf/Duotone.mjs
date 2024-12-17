var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const A = s((o, t) => {
  var p = o, { children: e } = p, a = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, d({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,128a96,96,0,0,1-96,96V32A96,96,0,0,1,224,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm96,87.63V40.37a88,88,0,0,1,0,175.26Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
