var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    h.call(l, e) && A(a, e, l[e]);
  if (m)
    for (var e of m(l))
      o.call(l, e) && A(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((t, e) => {
  var r = t, { children: a } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, l), a, /* @__PURE__ */ n.createElement("path", { d: "M234.83,181.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L222.34,188h-21.4a68.15,68.15,0,0,1-55.34-28.48l-41.71-58.39A60.11,60.11,0,0,0,55.06,76H32a4,4,0,0,1,0-8H55.06A68.15,68.15,0,0,1,110.4,96.48l41.71,58.39A60.11,60.11,0,0,0,200.94,180h21.4l-17.17-17.17a4,4,0,0,1,5.66-5.66Zm-89.49-77.44a4,4,0,0,0,5.58-.93l1.19-1.67A60.11,60.11,0,0,1,200.94,76h21.4L205.17,93.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L222.34,68h-21.4A68.15,68.15,0,0,0,145.6,96.48l-1.19,1.67A4,4,0,0,0,145.34,103.73Zm-34.68,48.54a4,4,0,0,0-5.58.93l-1.19,1.67A60.11,60.11,0,0,1,55.06,180H32a4,4,0,0,0,0,8H55.06a68.15,68.15,0,0,0,55.34-28.48l1.19-1.67A4,4,0,0,0,110.66,152.27Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
