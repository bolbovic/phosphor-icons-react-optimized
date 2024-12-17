var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var l = o, { children: a } = l, t = i(l, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm45.81,97.61-61.09,49.82a20,20,0,0,1-28.15-28.15l49.82-61.09a28,28,0,1,1,39.42,39.42Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM117.39,185.92l62-50.55a36,36,0,1,0-51.14-50.23l-43,52.73L45.28,98A88,88,0,1,1,40,128a89.56,89.56,0,0,1,.8-11.88l34.57,34.57a28,28,0,0,0,42,35.23Zm4.19-67.37a36.18,36.18,0,0,0,23.87,23.87l-18.26,14.89a28.11,28.11,0,0,0-20.5-20.5ZM156,128a20,20,0,1,1,20-20A20,20,0,0,1,156,128Zm-56,24a12,12,0,1,1-12,12A12,12,0,0,1,100,152Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
