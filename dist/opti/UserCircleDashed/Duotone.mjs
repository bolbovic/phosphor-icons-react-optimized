var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, e) => {
  var A = o, { children: a } = A, t = i(A, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M96.26,37A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88,88,0,0,0-44,0A8,8,0,0,1,96.26,37ZM33.35,110a8,8,0,0,0,9.85-5.57,87.88,87.88,0,0,1,22-38.09A8,8,0,0,0,53.79,55.14a104,104,0,0,0-26,45A8,8,0,0,0,33.35,110ZM150,213.22a88,88,0,0,1-44,0,8,8,0,0,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49Zm62.8-108.77a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.21A88.14,88.14,0,0,1,212.79,104.45Zm15.44,51.39a103.68,103.68,0,0,1-30.68,49.47A8,8,0,0,1,185.07,203a64,64,0,0,0-114.14,0,8,8,0,0,1-5.67,4.23,8.11,8.11,0,0,1-1.46.14,8,8,0,0,1-5.35-2.05,103.74,103.74,0,0,1-30.68-49.49,8,8,0,0,1,15.42-4.27,87.58,87.58,0,0,0,19,34.88,79.57,79.57,0,0,1,36.1-28.77,48,48,0,1,1,59.38,0,79.57,79.57,0,0,1,36.1,28.77,87.58,87.58,0,0,0,19-34.88,8,8,0,1,1,15.42,4.28ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
