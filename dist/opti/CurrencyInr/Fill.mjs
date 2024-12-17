var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ H.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm38.32,72H176a8,8,0,0,1,0,16h-8.19A44.06,44.06,0,0,1,124,152H111.32l53.59,41.69a8,8,0,1,1-9.82,12.62l-72-56A8,8,0,0,1,88,136h36a28,28,0,0,0,27.71-24H88a8,8,0,0,1,0-16h61.29A28,28,0,0,0,124,80H88a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16H157.92A43.87,43.87,0,0,1,166.32,96Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
