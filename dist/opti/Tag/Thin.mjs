var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M240.49,138.83,141.17,39.51A11.93,11.93,0,0,0,132.69,36H40a4,4,0,0,0-4,4v92.69a11.93,11.93,0,0,0,3.51,8.48l99.32,99.32a12,12,0,0,0,17,0l84.69-84.69a12,12,0,0,0,0-17Zm-5.66,11.31-84.69,84.69a4,4,0,0,1-5.65,0L45.17,135.51A4,4,0,0,1,44,132.69V44h88.69a4,4,0,0,1,2.82,1.17l99.32,99.32A4,4,0,0,1,234.83,150.14ZM92,84a8,8,0,1,1-8-8A8,8,0,0,1,92,84Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
