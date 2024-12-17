var C = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && r(a, e, t[e]);
  if (c)
    for (var e of c(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var s in a)
    l.call(a, s) && t.indexOf(s) < 0 && (e[s] = a[s]);
  if (a != null && c)
    for (var s of c(a))
      t.indexOf(s) < 0 && o.call(a, s) && (e[s] = a[s]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((s, e) => {
  var m = s, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84,80c-10,0-15.05-6.74-18.4-11.2-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C143.05,169.26,138,176,128,176s-15-6.74-18.4-11.2c-3-4-3.92-4.8-5.6-4.8s-2.57.76-5.6,4.8C95.05,169.26,90,176,80,176a8,8,0,0,1,0-16c1.68,0,2.57-.76,5.6-4.8C89,150.74,94,144,104,144s15,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8s2.57-.76,5.6-4.8C137,150.74,142,144,152,144s15.05,6.74,18.4,11.2c3,4,3.92,4.8,5.6,4.8a8,8,0,0,1,0,16Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
