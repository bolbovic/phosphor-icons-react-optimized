var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M207,42H49A15,15,0,0,0,34,57v49.21a15,15,0,0,0,8.79,13.65L109.19,150a46,46,0,1,0,37.62,0l66.4-30.18A15,15,0,0,0,222,106.21V57A15,15,0,0,0,207,42ZM162,54v76l-34,15.45L94,130V54ZM46,106.21V57a3,3,0,0,1,3-3H82v70.5L47.76,108.94A3,3,0,0,1,46,106.21ZM162,192a34,34,0,1,1-34-34A34,34,0,0,1,162,192Zm48-85.79a3,3,0,0,1-1.76,2.73L174,124.5V54h33a3,3,0,0,1,3,3Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
