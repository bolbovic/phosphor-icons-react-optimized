var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && r(a, e, l[e]);
  if (c)
    for (var e of c(l))
      i.call(l, e) && r(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var m = t, { children: a } = m, l = A(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(L, p({ ref: e }, l), a, /* @__PURE__ */ Z.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a60.63,60.63,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.21,15,2.71,19.55-.35.88-.6,1.83-1.52,2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58,20.58,0,0,1,9-14.94c11.85-8,30.72-3.31,32.84-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57,4.57,0,0,0-2,3.67c-.11.9-.13,1.08,1.12,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150,179,147.81,196.31ZM80,152v37.4c0,14.23-11.18,26.27-25.41,26.59A26,26,0,0,1,28,190.37,8.17,8.17,0,0,1,35.31,182,8,8,0,0,1,44,190.22a8.89,8.89,0,0,0,4,8c7.85,4.82,16-.76,16-8.2V152.27A8.17,8.17,0,0,1,71.47,144,8,8,0,0,1,80,152Zm134.51,4.65L197.83,180l16.68,23.35a8,8,0,0,1-13,9.3L188,193.76l-13.49,18.89a8,8,0,1,1-13-9.3L178.17,180l-16.68-23.35a8,8,0,0,1,13-9.3L188,166.24l13.49-18.89a8,8,0,0,1,13,9.3Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};