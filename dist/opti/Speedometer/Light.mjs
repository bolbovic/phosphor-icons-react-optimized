var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M115.76,155.76l96-96a6,6,0,0,1,8.48,8.48l-96,96a6,6,0,0,1-8.48-8.48ZM128,86a65.9,65.9,0,0,1,21.08,3.44,6,6,0,0,0,3.83-11.38,78,78,0,0,0-102.43,82.6,6,6,0,0,0,6,5.34,5.12,5.12,0,0,0,.67,0,6,6,0,0,0,5.3-6.62A69,69,0,0,1,62,152,66.08,66.08,0,0,1,128,86Zm98,15.9a6,6,0,1,0-10.68,5.48,98.35,98.35,0,0,1,5.16,77.25,2,2,0,0,1-1.91,1.37H37.46a2.07,2.07,0,0,1-1.91-1.41A98.23,98.23,0,0,1,128,54h.9a97,97,0,0,1,43.71,10.72A6,6,0,1,0,178.1,54,108.92,108.92,0,0,0,129,42h-1A110.06,110.06,0,0,0,24.23,188.58,14.08,14.08,0,0,0,37.46,198H218.53a14.06,14.06,0,0,0,13.22-9.37A110.34,110.34,0,0,0,226,101.9Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
