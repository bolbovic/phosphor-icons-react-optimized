var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && c(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const f = L((o, a) => {
  var p = o, { children: e } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, A({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M215.52,88.48l-127,127a96.47,96.47,0,0,1-48-48l127-127A96.47,96.47,0,0,1,215.52,88.48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56.28,36.41L60.4,184.28A88.33,88.33,0,0,1,50.21,169.1L169.1,50.21A87.8,87.8,0,0,1,184.28,60.41Zm11.31,11.31a87.8,87.8,0,0,1,10.2,15.18L86.9,205.79a87.8,87.8,0,0,1-15.18-10.2ZM128,40a87.81,87.81,0,0,1,25.05,3.64L43.64,153.05A88,88,0,0,1,128,40Zm0,176a87.81,87.81,0,0,1-25-3.64L212.36,103A88,88,0,0,1,128,216Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
