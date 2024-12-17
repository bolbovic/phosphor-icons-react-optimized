var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M102,64A30,30,0,1,0,66,93.4v69.2a30,30,0,1,0,12,0V93.4A30.05,30.05,0,0,0,102,64ZM54,64A18,18,0,1,1,72,82,18,18,0,0,1,54,64ZM90,192a18,18,0,1,1-18-18A18,18,0,0,1,90,192Zm116-29.4v-52a21.88,21.88,0,0,0-6.44-15.56L158.48,54H192a6,6,0,0,0,0-12H144a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l41.07,41.08a9.91,9.91,0,0,1,2.93,7.07v52a30,30,0,1,0,12,0ZM200,210a18,18,0,1,1,18-18A18,18,0,0,1,200,210Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
