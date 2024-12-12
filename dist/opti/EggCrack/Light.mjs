var C = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M185,60.67C167.18,34,145.87,18,128,18S88.82,34,71,60.67C52.57,88.32,42,121.61,42,152a86,86,0,0,0,172,0C214,121.61,203.43,88.32,185,60.67ZM128,226a74.09,74.09,0,0,1-74-74c0-28.08,9.84-58.94,27-84.67C96.11,44.65,114.56,30,128,30c10.52,0,24.12,9,36.78,23.77L123.52,100a6,6,0,0,0,3,9.82L153,116.43l-6.87,34.39a6,6,0,0,0,4.7,7.06A6.08,6.08,0,0,0,152,158a6,6,0,0,0,5.87-4.82l8-40a6,6,0,0,0-4.42-7l-22.37-5.59,33.2-37.2q1.36,1.92,2.72,3.94c17.15,25.73,27,56.59,27,84.67A74.09,74.09,0,0,1,128,226Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
