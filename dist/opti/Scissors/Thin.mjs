var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import n, { forwardRef as f } from "react";
import A from "../../lib/OptiBase.mjs";
const M = f((l, e) => {
  var m = l, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ n.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M161,110.87a4,4,0,0,1,1.05-5.56L229.74,59a4,4,0,0,1,4.52,6.61l-67.67,46.3a4,4,0,0,1-5.56-1ZM235.3,196a4,4,0,0,1-5.56,1L136,132.85,88.47,165.38a32,32,0,1,1-5.84-8c.45.45.89.92,1.31,1.4l45-30.78-45-30.78c-.42.48-.86,1-1.31,1.4a31.86,31.86,0,1,1,5.84-8l49.69,34h0l96.09,65.76A4,4,0,0,1,235.3,196ZM77,93a24.42,24.42,0,0,0,2.82-3.38s0,0,0,0l0,0A24,24,0,1,0,77,93ZM84,180a23.75,23.75,0,0,0-4.15-13.49l0-.06,0,0A24.5,24.5,0,0,0,77,163,24,24,0,1,0,77,197h0A23.85,23.85,0,0,0,84,180Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
