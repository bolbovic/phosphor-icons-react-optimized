var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ h.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M235.09,131.41A12,12,0,0,0,224,124H188v-4a12,12,0,0,0-12-12H80a12,12,0,0,0-12,12v4H32a12,12,0,0,0-8.49,20.49l96,96a12,12,0,0,0,17,0l96-96A12,12,0,0,0,235.09,131.41ZM128,215,61,148H80a12,12,0,0,0,12-12v-4h72v4a12,12,0,0,0,12,12h19ZM68,40A12,12,0,0,1,80,28h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,40Zm0,40A12,12,0,0,1,80,68h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,80Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
