var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M173.88,111.94a6,6,0,0,0-3.42-4.27L119,84.56,133,25.39a6,6,0,0,0-10.24-5.47L27.6,122.78a6,6,0,0,0,1.94,9.55L81,155.44,67,214.61a6,6,0,0,0,3,6.68,6,6,0,0,0,7.22-1.22l95.2-102.85A6,6,0,0,0,173.88,111.94Zm-90,83.21,9.92-41.76a6,6,0,0,0-3.38-6.86L42.08,124.8l74-80-9.92,41.77a6,6,0,0,0,3.38,6.86l48.38,21.73Zm153.44,18.16-36-72a6,6,0,0,0-10.74,0l-36,72a6,6,0,0,0,10.74,5.37L175.71,198h40.58l10.34,20.68A6,6,0,0,0,232,222a5.87,5.87,0,0,0,2.68-.64A6,6,0,0,0,237.36,213.31ZM181.71,186,196,157.42,210.29,186Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
