var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((l, e) => {
  var r = l, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M168,88a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,88Zm55.72,34.1-22.39,82.11A16,16,0,0,1,185.89,216H176l14.4,19.2a8,8,0,1,1-12.8,9.6L156,216H100L78.4,244.8a8,8,0,1,1-12.8-9.6L80,216H70.11a16,16,0,0,1-15.44-11.79L32.28,122.1a8.08,8.08,0,0,1,0-4.2L54.67,35.79A16,16,0,0,1,70.11,24H185.89a16,16,0,0,1,15.44,11.79l22.39,82.11A8.08,8.08,0,0,1,223.72,122.1ZM136,152a8,8,0,0,0-16,0v40a8,8,0,0,0,16,0Zm70-38.31L185.89,40H70.11L50,113.69l78,14.18Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
