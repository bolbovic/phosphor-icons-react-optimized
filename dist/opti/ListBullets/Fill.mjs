var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var l = t, { children: a } = l, m = A(l, ["children"]);
  return /* @__PURE__ */ H.createElement(h, p({ ref: e }, m), a, /* @__PURE__ */ H.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM68,188a12,12,0,1,1,12-12A12,12,0,0,1,68,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,68,140Zm0-48A12,12,0,1,1,80,80,12,12,0,0,1,68,92Zm124,92H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
