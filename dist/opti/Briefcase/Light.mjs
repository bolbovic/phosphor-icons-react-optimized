var M = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && h(a, e, t[e]);
  if (A)
    for (var e of A(t))
      o.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((r, e) => {
  var V = r, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ H.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M106,112a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,112ZM230,72V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72A14,14,0,0,1,40,58H82V48a22,22,0,0,1,22-22h48a22,22,0,0,1,22,22V58h42A14,14,0,0,1,230,72ZM94,58h68V48a10,10,0,0,0-10-10H104A10,10,0,0,0,94,48ZM38,72v42.79A186,186,0,0,0,128,138a185.91,185.91,0,0,0,90-23.22V72a2,2,0,0,0-2-2H40A2,2,0,0,0,38,72ZM218,200V128.37A198.12,198.12,0,0,1,128,150a198.05,198.05,0,0,1-90-21.62V200a2,2,0,0,0,2,2H216A2,2,0,0,0,218,200Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
