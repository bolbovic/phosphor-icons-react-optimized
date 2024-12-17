var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ n.createElement(f, L({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M208,116a43.66,43.66,0,0,0-18.62,4.15L159,68h33a12,12,0,0,1,12,12,4,4,0,0,0,8,0,20,20,0,0,0-20-20H152a4,4,0,0,0-3.46,6L163.7,92H97L79.46,62A4,4,0,0,0,76,60H48a4,4,0,0,0,0,8H73.7L89.89,95.76,70.57,122.25A44.21,44.21,0,1,0,77,127L94.29,103.3,128.54,162a4,4,0,0,0,3.46,2,4.11,4.11,0,0,0,2-.54,4,4,0,0,0,1.44-5.48l-33.83-58h66.74l14.11,24.19A44,44,0,1,0,208,116ZM84,160a36,36,0,1,1-18.16-31.25L44.77,157.64a4,4,0,0,0,6.46,4.72l21.07-28.9A35.92,35.92,0,0,1,84,160Zm124,36a36,36,0,0,1-21.47-64.88l18,30.9a4,4,0,0,0,3.46,2,4.11,4.11,0,0,0,2-.54,4,4,0,0,0,1.44-5.48l-18-30.89A36,36,0,1,1,208,196Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
