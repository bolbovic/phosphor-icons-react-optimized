var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var m = r, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(M, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,48a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h48A8,8,0,0,1,232,48ZM216,88v76a36,36,0,1,1-16-29.92V88a8,8,0,0,1,16,0Zm-16,76a20,20,0,1,0-20,20A20,20,0,0,0,200,164ZM88,110.25V196a36,36,0,1,1-16-29.92V56a8,8,0,0,1,6.06-7.76l56-14a8,8,0,0,1,3.88,15.52L88,62.25v31.5l70.06-17.51a8,8,0,0,1,3.88,15.52ZM72,196a20,20,0,1,0-20,20A20,20,0,0,0,72,196Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
