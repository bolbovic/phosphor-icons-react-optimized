var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const h = V((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,8.09a91.58,91.58,0,0,1,24,4.27V215.64a91.58,91.58,0,0,1-24,4.27Zm32,7.25a92.21,92.21,0,0,1,24,15V197.69a92.21,92.21,0,0,1-24,15ZM36,128a92.11,92.11,0,0,1,88-91.91V219.91A92.11,92.11,0,0,1,36,128Zm160,61.9V66.1a91.83,91.83,0,0,1,0,123.8Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
