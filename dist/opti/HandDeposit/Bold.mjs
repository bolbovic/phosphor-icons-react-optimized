var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    V.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const h = i((l, e) => {
  var r = l, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ A.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M120,140a12,12,0,0,1-12-12V45l-7.51,7.51a12,12,0,0,1-17-17l28-28a12,12,0,0,1,17,0l28,28a12,12,0,1,1-17,17L132,45v83A12,12,0,0,1,120,140Zm76-18.48V96a20,20,0,0,0-20-20H164a12,12,0,0,0,0,24h8v68.3A32,32,0,0,0,128.29,212c.11.2.23.39.35.58l22.26,34A12,12,0,1,0,171,233.43l-22-33.66a8,8,0,0,1,14-7.77c.11.2.23.39.36.58L174,208.88a12,12,0,0,0,22-6.57V154a70.66,70.66,0,0,1,16,44.61V240a12,12,0,0,0,24,0V198.65A94.91,94.91,0,0,0,196,121.52ZM76,76H64A20,20,0,0,0,44,96V200a12,12,0,0,0,24,0V100h8a12,12,0,0,0,0-24Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
