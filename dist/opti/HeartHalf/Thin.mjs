var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((c, e) => {
  var m = c, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M168.74,52.86A4,4,0,0,0,167.26,45C150.09,48.21,136.19,57.57,128,71.12,118,54.21,99.46,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,1.9.48,4,4,0,0,0,1.89-.49h0a328.8,328.8,0,0,0,40.54-26.87,4,4,0,1,0-4.88-6.33A343.7,343.7,0,0,1,132,217.09V80.85C138.24,66.26,151.58,56.07,168.74,52.86ZM124,217.08c-21.73-13-96-61.16-96-115.08A50.06,50.06,0,0,1,78,52c20.83,0,38.39,11,46,28.8ZM232.11,100l-.44,0a4,4,0,0,1-4-3.56,49.88,49.88,0,0,0-21.92-36,4,4,0,0,1,4.44-6.65,57.88,57.88,0,0,1,25.43,41.79A4,4,0,0,1,232.11,100Zm-5.23,37.81c-5.5,11-13.55,22.32-23.94,33.56a4,4,0,0,1-5.88-5.43c9.88-10.68,17.5-21.35,22.66-31.71a4,4,0,1,1,7.16,3.58Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
