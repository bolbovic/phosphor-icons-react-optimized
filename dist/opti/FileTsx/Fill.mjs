var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    A.call(l, e) && c(a, e, l[e]);
  if (m)
    for (var e of m(l))
      o.call(l, e) && c(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((t, e) => {
  var r = t, { children: a } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ H.createElement(s, i({ ref: e }, l), a, /* @__PURE__ */ H.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm62.51,68.65L197.83,180l16.68,23.35a8,8,0,0,1-13,9.3L188,193.76l-13.49,18.89a8,8,0,1,1-13-9.3L178.17,180l-16.68-23.35a8,8,0,0,1,2.3-11.46,8.19,8.19,0,0,1,10.88,2.38L188,166.24l13.49-18.89a8,8,0,0,1,13,9.3Zm-66.7,39.66a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A60.43,60.43,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.21,15,2.71,19.55-.35.88-.6,1.83-1.52,2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58,20.58,0,0,1,9-14.94c11.85-8,30.72-3.31,32.84-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150,179,147.81,196.31ZM88,152.53A8.18,8.18,0,0,1,79.73,160H68v47.72A8.18,8.18,0,0,1,60.53,216,8,8,0,0,1,52,208V160H40.27A8.18,8.18,0,0,1,32,152.53,8,8,0,0,1,40,144H80A8,8,0,0,1,88,152.53Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
