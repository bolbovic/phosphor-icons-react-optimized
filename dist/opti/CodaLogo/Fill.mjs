var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const h = n((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M136,128a40,40,0,0,0,40,40h.32c7.83.3,14-1.46,21.24-6.11A12,12,0,0,1,216,172v36a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H200a16,16,0,0,1,16,16V84a12,12,0,0,1-18.47,10.1A40.23,40.23,0,0,0,136,128Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
