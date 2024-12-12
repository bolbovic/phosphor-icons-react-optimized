var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    V.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,198.65V240a8,8,0,0,1-16,0V198.65A74.84,74.84,0,0,0,192,144v58.35a8,8,0,0,1-14.69,4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12,12,0,0,0-20.89,11.83l22.13,33.79a8,8,0,0,1-13.39,8.76l-22.26-34-.24-.38A28,28,0,0,1,176,176.4V64H160a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16v59.62A90.89,90.89,0,0,1,232,198.65ZM88,56a8,8,0,0,0-8-8H64A16,16,0,0,0,48,64V200a8,8,0,0,0,16,0V64H80A8,8,0,0,0,88,56Zm69.66,42.34a8,8,0,0,0-11.32,0L128,116.69V16a8,8,0,0,0-16,0V116.69L93.66,98.34a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,157.66,98.34Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
