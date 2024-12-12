var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, e) => {
  var c = r, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M200,228H139.72A263.66,263.66,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62a84,84,0,0,0-168,0c0,30.42,14.17,62.79,41,93.62A263.66,263.66,0,0,0,116.28,228H56a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8ZM90.9,192.23C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0c0,35.9-21.15,67.8-38.9,88.23A254.62,254.62,0,0,1,128,227,254.62,254.62,0,0,1,90.9,192.23ZM164,104a36,36,0,1,0-36,36A36,36,0,0,0,164,104Zm-64,0a28,28,0,1,1,28,28A28,28,0,0,1,100,104Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
