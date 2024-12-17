var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && c(e, a, t[a]);
  if (l)
    for (var a of l(t))
      A.call(t, a) && c(e, a, t[a]);
  return e;
};
var p = (e, t) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && A.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const L = d((r, a) => {
  var m = r, { children: e } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, i({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M168,24H88A56,56,0,0,0,32,79.75c0,42.72,8,75.4,14.7,95.28,8.72,25.8,20.62,45.49,32.64,54A15.67,15.67,0,0,0,88.47,232a16.09,16.09,0,0,0,16-14.9c.85-11.52,5-49.11,23.53-49.11s22.68,37.59,23.53,49.11a16.09,16.09,0,0,0,9.18,13.36,15.69,15.69,0,0,0,15.95-1.41c12-8.53,23.92-28.22,32.64-54C216,155.15,224,122.47,224,79.75A56,56,0,0,0,168,24Zm3,56.57A8,8,0,1,1,165,95.42L128,80.61,91,95.42A8,8,0,1,1,85,80.57L106.46,72,85,63.42A8,8,0,1,1,91,48.57l37,14.81,37-14.81A8,8,0,1,1,171,63.42L149.54,72Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
