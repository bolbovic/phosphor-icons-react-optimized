var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const A = n((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M234.74,58.31a39.89,39.89,0,0,0-23.35-13.7,40,40,0,1,0-74.86,25.87l-66,66.05a40,40,0,1,0-25.87,74.86,40,40,0,1,0,74.86-25.86l66.05-66.06a40,40,0,0,0,49.22-61.16ZM216.1,94.51a16,16,0,0,1-20.54,3,20,20,0,0,0-24.84,2.76l-70.4,70.4a20,20,0,0,0-2.75,24.84,16,16,0,1,1-29.41,6A12,12,0,0,0,56.3,187.7a11.61,11.61,0,0,0-1.85.14,16,16,0,1,1,6-29.4,20,20,0,0,0,24.83-2.76l70.4-70.4a20,20,0,0,0,2.76-24.84,16,16,0,1,1,29.4-6,12,12,0,0,0,13.71,13.71A16,16,0,0,1,216.1,94.51Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
