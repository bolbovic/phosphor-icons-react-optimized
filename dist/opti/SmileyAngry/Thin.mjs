var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      s.call(m, e) && i(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && s.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as f } from "react";
import A from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var o = t, { children: a } = o, m = c(o, ["children"]);
  return /* @__PURE__ */ l.createElement(A, Z({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M100,140a8,8,0,1,1-8-8A8,8,0,0,1,100,140Zm64-8a8,8,0,1,0,8,8A8,8,0,0,0,164,132Zm64-4A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128ZM173.78,84.67,128,115.19,82.22,84.67a4,4,0,1,0-4.44,6.66l48,32a4,4,0,0,0,4.44,0l48-32a4,4,0,1,0-4.44-6.66Zm-19.57,96c-7.82-5.2-15.27-8.67-26.21-8.67s-18.39,3.47-26.21,8.67a4,4,0,1,0,4.42,6.66C113.2,182.69,119,180,128,180s14.8,2.69,21.79,7.33a4,4,0,1,0,4.42-6.66Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
