var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && p(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M56.88,31.93A12,12,0,0,0,48,28,20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a12,12,0,0,0,8.88-20.07ZM52,204V62.24L180.87,204ZM228,48V165.34a12,12,0,1,1-24,0V100H145.69a12,12,0,0,1,0-24H204V52H188a12,12,0,0,1-24,0H102.06a12,12,0,0,1,0-24H164V24a12,12,0,0,1,24,0v4h20A20,20,0,0,1,228,48Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
