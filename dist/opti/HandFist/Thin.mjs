var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ V.createElement(f, v({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M200,84H180V64a28,28,0,0,0-52-14.41A28,28,0,0,0,76,64v4.43A28,28,0,0,0,28,88v40a100,100,0,0,0,200,0V112A28,28,0,0,0,200,84ZM152,44a20,20,0,0,1,20,20V84H136a11.8,11.8,0,0,0-4,.7V64A20,20,0,0,1,152,44ZM84,64a20,20,0,0,1,40,0v40a20,20,0,0,1-40,0ZM36,88a20,20,0,0,1,40,0v16a20,20,0,0,1-40,0Zm184,40a92,92,0,0,1-184,0v-4.42a28,28,0,0,0,44-5.17,28,28,0,0,0,45.73,3.23,28.11,28.11,0,0,0,18.59,17.29A44,44,0,0,0,124,176a4,4,0,0,0,8,0,36,36,0,0,1,36-36,4,4,0,0,0,0-8H152a20,20,0,0,1-20-20V96a4,4,0,0,1,4-4h64a20,20,0,0,1,20,20Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
