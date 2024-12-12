var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && c(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && c(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as i } from "react";
import L from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var m = t, { children: a } = m, l = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(L, s({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M136,72a8,8,0,0,1,8-8h52.69L178.34,45.66a8,8,0,0,1,11.32-11.32l32,32a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L196.69,80H144A8,8,0,0,1,136,72Zm87.87,111.08A56.24,56.24,0,0,1,168,232C88.6,232,24,167.4,24,88A56.24,56.24,0,0,1,72.92,32.13a16,16,0,0,1,16.62,9.51l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.18-1.4l.11.06,47.11,21.11A16,16,0,0,1,223.87,183.08Zm-15.87-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8,8,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,7,7,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
