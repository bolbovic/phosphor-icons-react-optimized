var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as M } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = M((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M221.68,106.08a6,6,0,0,0-4.92,6.91A91.66,91.66,0,0,1,218,128a89.65,89.65,0,0,1-24.49,61.64,77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38A89.95,89.95,0,0,1,128,38a91.57,91.57,0,0,1,15,1.24,6,6,0,1,0,2-11.83,101.9,101.9,0,1,0,83.6,83.6A6,6,0,0,0,221.68,106.08ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM236.24,44.24l-32,32a6,6,0,0,1-8.48,0l-16-16a6,6,0,0,1,8.48-8.48L200,63.51l27.76-27.75a6,6,0,0,1,8.48,8.48Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
