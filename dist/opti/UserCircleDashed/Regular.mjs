var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && A(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && A(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(M, l({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M96.26,37A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88,88,0,0,0-44,0A8,8,0,0,1,96.26,37ZM33.35,110a8,8,0,0,0,9.85-5.57,87.88,87.88,0,0,1,22-38.09A8,8,0,0,0,53.8,55.14a103.92,103.92,0,0,0-26,45A8,8,0,0,0,33.35,110ZM150,213.22a88,88,0,0,1-44,0,8,8,0,0,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49Zm62.8-108.77a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.21A88.14,88.14,0,0,1,212.79,104.45Zm15.44,51.39a103.68,103.68,0,0,1-30.68,49.47A8,8,0,0,1,185.07,203a64,64,0,0,0-114.14,0,8,8,0,0,1-12.48,2.32,103.74,103.74,0,0,1-30.68-49.49,8,8,0,0,1,15.42-4.27,87.58,87.58,0,0,0,19,34.88,79.57,79.57,0,0,1,36.1-28.77,48,48,0,1,1,59.38,0,79.57,79.57,0,0,1,36.1,28.77,87.58,87.58,0,0,0,19-34.88,8,8,0,1,1,15.42,4.28ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
