var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && A(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && A(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var o = t, { children: a } = o, m = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M164,76a24,24,0,1,0-24-24A24,24,0,0,0,164,76Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,164,36Zm36,104a36,36,0,1,0,36,36A36,36,0,0,0,200,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,200,204ZM56,140a36,36,0,1,0,36,36A36,36,0,0,0,56,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,56,204Zm136-88H152a4,4,0,0,1-2.83-1.17L120,85.66,93.66,112l37.17,37.17A4,4,0,0,1,132,152v48a4,4,0,0,1-8,0V153.66L85.17,114.83a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,0L153.66,108H192a4,4,0,0,1,0,8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
