var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, l, a) => l in e ? f(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, h = (e, l) => {
  for (var a in l || (l = {}))
    p.call(l, a) && m(e, a, l[a]);
  if (o)
    for (var a of o(l))
      d.call(l, a) && m(e, a, l[a]);
  return e;
};
var A = (e, l) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      l.indexOf(t) < 0 && d.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, a) => {
  var r = t, { children: e } = r, l = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, h({ ref: a }, l), e, /* @__PURE__ */ c.createElement("path", { d: "M242.09,41.5A12,12,0,0,0,232,36H152a12,12,0,0,0-10.92,7l-7.72,17H28a12,12,0,0,0-8.88,20.07L51.78,116,19.12,151.93A12,12,0,0,0,28,172h73.09A12,12,0,0,0,112,165l7.71-17h53.63l-32.28,71A12,12,0,1,0,162.92,229l80-176A12,12,0,0,0,242.09,41.5ZM55.13,148l21.75-23.93a12,12,0,0,0,0-16.14L55.13,84h67.32L93.36,148Zm129.14-24H130.64l29.09-64h53.63Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
