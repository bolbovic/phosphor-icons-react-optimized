var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M142.1,19.38a6,6,0,0,0-9.47,2.56L109.54,85.25,83.2,59.69a6,6,0,0,0-9,.67C52.85,88.39,42,116.53,42,144a86,86,0,0,0,172,0C214,85.4,163.72,37.33,142.1,19.38ZM128,218a74.09,74.09,0,0,1-74-74c0-23,8.67-46.87,25.77-70.91l28.05,27.22a6,6,0,0,0,9.82-2.25L140.93,34.2C163.35,54.16,202,95.6,202,144A74.09,74.09,0,0,1,128,218Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
