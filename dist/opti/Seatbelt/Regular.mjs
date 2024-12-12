var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((r, e) => {
  var l = r, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ c.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M172,68a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,68ZM128,96a28,28,0,1,1,28-28A28,28,0,0,1,128,96Zm80,128a8,8,0,0,1-8,8H56a8,8,0,0,1-5.29-14l98.07-86.54a64,64,0,0,0-84,50.33A8,8,0,0,1,49,179.25a80,80,0,0,1,113.16-59.59L186.71,98a8,8,0,0,1,10.58,12L77.16,216H200A8,8,0,0,1,208,224Zm-14.27-77.62A79.6,79.6,0,0,1,208,192a8,8,0,0,1-16,0,63.67,63.67,0,0,0-11.41-36.49,8,8,0,0,1,13.14-9.13Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
