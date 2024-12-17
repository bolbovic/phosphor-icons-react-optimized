var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var V in a)
    c.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      t.indexOf(V) < 0 && i.call(a, V) && (e[V] = a[V]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((V, e) => {
  var r = V, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ h.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4ZM152,92a28,28,0,0,0-24,13.59A28,28,0,0,0,76,120c0,14.51,8.56,29,25.44,43.07a143.52,143.52,0,0,0,24.77,16.51,4,4,0,0,0,3.58,0,143.52,143.52,0,0,0,24.77-16.51C171.44,149,180,134.51,180,120A28,28,0,0,0,152,92Zm-24,79.47c-8.46-4.64-44-25.67-44-51.47a20,20,0,0,1,40,0,4,4,0,0,0,8,0,20,20,0,0,1,40,0C172,145.8,136.46,166.83,128,171.47Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
