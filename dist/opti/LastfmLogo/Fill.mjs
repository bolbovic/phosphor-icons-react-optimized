var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var H = l, { children: a } = H, t = A(H, ["children"]);
  return /* @__PURE__ */ h.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,184H172.61a40.09,40.09,0,0,1-36.42-23.45l-23-50.48A24,24,0,0,0,91.39,96H80a24,24,0,0,0-24,24v24a24,24,0,0,0,24,24h8a23.92,23.92,0,0,0,18.74-9,8,8,0,1,1,12.48,10A39.83,39.83,0,0,1,88,184H80a40,40,0,0,1-40-40V120A40,40,0,0,1,80,80H91.39a40.09,40.09,0,0,1,36.42,23.45l22.95,50.48A24,24,0,0,0,172.61,168H184a16,16,0,0,0,0-32h-8a28,28,0,0,1,0-56h12a20,20,0,0,1,20,20,8,8,0,0,1-16,0,4,4,0,0,0-4-4H176a12,12,0,0,0,0,24h8a32,32,0,0,1,0,64Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
