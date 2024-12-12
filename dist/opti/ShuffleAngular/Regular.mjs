var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, H = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(i, H({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H168a8,8,0,0,1-6.51-3.35L83.88,80H32a8,8,0,0,1,0-16H88a8,8,0,0,1,6.51,3.35L172.12,176h40.57l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l18-25.12h40.57L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H168a8,8,0,0,0-6.51,3.35L141.15,95.82A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86L83.88,176H32a8,8,0,0,0,0,16H88a8,8,0,0,0,6.51-3.35l20.34-28.47A8,8,0,0,0,113,149Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
