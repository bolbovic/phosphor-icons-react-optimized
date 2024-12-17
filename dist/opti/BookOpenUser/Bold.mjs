var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const V = i((o, e) => {
  var m = o, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,72H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,72H24A12,12,0,0,0,12,84V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V84A12,12,0,0,0,232,72ZM96,188H36V96H96a20,20,0,0,1,20,20v76.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V116a20,20,0,0,1,20-20h60ZM86.4,40.79a52,52,0,0,1,83.2,0,12,12,0,0,1-19.19,14.42,28,28,0,0,0-44.82,0A12,12,0,0,1,86.4,40.79Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
