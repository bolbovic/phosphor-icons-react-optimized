var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((o, e) => {
  var l = o, { children: a } = l, t = d(l, ["children"]);
  return /* @__PURE__ */ c.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M137.94,121.27a12,12,0,0,1,1.2,11.19l-16,40A12,12,0,0,1,112,180a11.86,11.86,0,0,1-4.46-.86,12,12,0,0,1-6.68-15.6L110.28,140H96a12,12,0,0,1-11.14-16.46l16-40a12,12,0,0,1,22.28,8.92L113.72,116H128A12,12,0,0,1,137.94,121.27ZM256,86.63V166a30,30,0,0,1-60,0V128a4,4,0,0,0-4-4H180v80h12a12,12,0,0,1,0,24H32a12,12,0,0,1,0-24H44V56A28,28,0,0,1,72,28h80a28,28,0,0,1,28,28v44h12a28,28,0,0,1,28,28v38a6,6,0,0,0,12,0V86.63a4,4,0,0,0-1.17-2.83L211.51,64.49a12,12,0,0,1,17-17L247.8,66.83A27.81,27.81,0,0,1,256,86.63ZM156,204V56a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4V204Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
