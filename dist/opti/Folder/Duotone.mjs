var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var H = (e, a, t) => a in e ? A(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && H(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && H(e, t, a[t]);
  return e;
};
var l = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const f = V((o, t) => {
  var p = o, { children: e } = p, a = l(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
