var L = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? L(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      c.call(l, e) && m(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, l = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(i, d({ ref: e }, l), a, /* @__PURE__ */ H.createElement("path", { d: "M204,108a51.82,51.82,0,0,0-15.13,2.25L168.89,76H192a4,4,0,0,1,4,4,12,12,0,0,0,24,0,28,28,0,0,0-28-28H148a12,12,0,0,0-10.37,18l8.14,14H109.56L94.37,58A12,12,0,0,0,84,52H52a12,12,0,0,0,0,24H77.11L88.18,95,74,112.89a52.17,52.17,0,1,0,18.8,14.92l8.37-10.57L118,146.05A12,12,0,1,0,138.7,134L123.56,108h36.21l8.39,14.38A52,52,0,1,0,204,108ZM80,160a28,28,0,1,1-21.71-27.28l-15.7,19.83a12,12,0,0,0,18.82,14.9l15.7-19.83A27.84,27.84,0,0,1,80,160Zm124,28a28,28,0,0,1-23.11-43.79l12.74,21.84A12,12,0,0,0,214.37,154l-12.75-21.84c.79-.07,1.58-.11,2.38-.11a28,28,0,0,1,0,56Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};