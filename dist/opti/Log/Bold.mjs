var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var c in a)
    H.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && l.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const Z = h((c, e) => {
  var o = c, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ s.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M216,136a16,16,0,1,1-16-16A16,16,0,0,1,216,136Zm36,0c0,42.62-22.84,76-52,76H56c-29.16,0-52-33.38-52-76S26.84,60,56,60H91l36.48-36.49A12,12,0,0,1,136,20h32a12,12,0,0,1,0,24H141L125,60h75C229.16,60,252,93.38,252,136ZM56,188H161.77a83.3,83.3,0,0,1-9.09-20H80a12,12,0,0,1,0-24h68.27c-.18-2.63-.27-5.29-.27-8,0-20.3,5.19-38.5,13.77-52H56c-7.85,0-16.23,7.51-21.76,20H104a12,12,0,0,1,0,24H28.35c-.23,2.59-.35,5.25-.35,8C28,166.64,42.76,188,56,188Zm172-52c0-30.64-14.76-52-28-52s-28,21.36-28,52,14.76,52,28,52S228,166.64,228,136Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};