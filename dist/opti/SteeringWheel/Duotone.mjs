var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && l(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((o, e) => {
  var r = o, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M222.4,145.55A96.6,96.6,0,0,1,218.54,160h-53a8,8,0,0,0-7.5,5.19l-21.9,58.47c-2.69.22-5.41.34-8.15.34s-5.5-.12-8.2-.35L97.94,165.2a8,8,0,0,0-7.49-5.2h-53a96.6,96.6,0,0,1-3.86-14.45,128,128,0,0,1,188.8,0Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M128,152a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm104-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM40,128v.33a135.93,135.93,0,0,1,176,0V128a88,88,0,0,0-176,0Zm67.5,85.58L90.45,168H49.63A88.35,88.35,0,0,0,107.5,213.58ZM128,216c.83,0,1.66,0,2.49,0l20.07-53.57a16.07,16.07,0,0,1,15-10.39h47.12c.38-1.31.72-2.64,1-4a120,120,0,0,0-171.4,0c.31,1.34.65,2.67,1,4H90.45a16.08,16.08,0,0,1,15,10.4l20,53.56C126.31,216,127.15,216,128,216Zm78.37-48H165.55l-17.09,45.59A88.34,88.34,0,0,0,206.37,168Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};