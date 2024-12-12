var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, L = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      d.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as s } from "react";
import h from "../../lib/OptiBase.mjs";
const n = s((t, l) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(h, L({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M44,68V196h64a12,12,0,0,1,0,24H40a20,20,0,0,1-20-20V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L132,68h84a20,20,0,0,1,20,20v20a12,12,0,0,1-24,0V92H128a12,12,0,0,1-7.2-2.4L92,68ZM239.64,170.87l-20.58,17,6.25,25.26a12,12,0,0,1-17.73,13.22L184,212.46l-23.58,13.88a12,12,0,0,1-17.73-13.22l6.25-25.26-20.58-17a12,12,0,0,1,6.72-21.22l27.42-2.12L173,123.24a12,12,0,0,1,22,0l10.48,24.29,27.42,2.12a12,12,0,0,1,6.72,21.22Zm-38.2.42-5-.39a12,12,0,0,1-10.09-7.21l-2.33-5.4-2.33,5.4a12,12,0,0,1-10.1,7.21l-5,.39,3.48,2.87a12,12,0,0,1,4,12.13l-1.21,4.89,5.07-3a12,12,0,0,1,12.18,0l5.07,3L194,186.29a12,12,0,0,1,4-12.13Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
