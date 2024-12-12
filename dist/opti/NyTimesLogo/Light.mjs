var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var A = m, { children: a } = A, t = l(A, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M172,138a10,10,0,1,1-10,10A10,10,0,0,1,172,138Zm13.46-36.56L119.24,70.53A74,74,0,0,0,54,144c0,.22,0,.44,0,.66l71.16-37.95A6,6,0,0,1,134,112V217.76a73.63,73.63,0,0,0,64.61-51.56,6,6,0,0,1,11.45,3.6A86,86,0,1,1,54.57,99.23,34,34,0,0,1,68,34a6,6,0,0,1,2.54.56L189.26,90A22,22,0,0,0,188,46a6,6,0,0,1,0-12,34,34,0,0,1,0,68A6,6,0,0,1,185.46,101.44ZM102,213.27a73.47,73.47,0,0,0,20,4.47V122l-20,10.67ZM55.27,157.59A74.22,74.22,0,0,0,90,207.47v-68.4Zm46.14-95.38L66.74,46a22,22,0,0,0-4.93,43.05c.86-1,1.75-2.06,2.67-3.07A86,86,0,0,1,101.41,62.21Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
