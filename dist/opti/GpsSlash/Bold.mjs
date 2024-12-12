var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const V = s((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M252,128a12,12,0,0,1-12,12H219.21a91.65,91.65,0,0,1-3.56,16,12,12,0,0,1-11.43,8.35,12.19,12.19,0,0,1-3.65-.57,12,12,0,0,1-7.78-15.09A68.06,68.06,0,0,0,128,60a68.73,68.73,0,0,0-14.48,1.54,12,12,0,1,1-5.08-23.45c2.49-.54,5-1,7.56-1.31V16a12,12,0,0,1,24,0V36.78A92.21,92.21,0,0,1,219.22,116H240A12,12,0,0,1,252,128Zm-35.12,79.93a12,12,0,1,1-17.76,16.14l-18.65-20.51A91.6,91.6,0,0,1,140,219.2V240a12,12,0,0,1-24,0V219.22A92.21,92.21,0,0,1,36.78,140H16a12,12,0,0,1,0-24H36.79a92.36,92.36,0,0,1,21-47.42L39.12,48.07A12,12,0,1,1,56.88,31.93L190.69,179.11h0ZM164.14,185.6l-90-99a68,68,0,0,0,90,99Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
