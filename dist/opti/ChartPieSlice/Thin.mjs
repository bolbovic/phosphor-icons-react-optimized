var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
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
import f, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M100,109.5v-72a4,4,0,0,0-5.33-3.77,100,100,0,0,0-65,112.5A4,4,0,0,0,35.6,149L98,113A4,4,0,0,0,100,109.5Zm-8-2.31L36.67,139.11A92,92,0,0,1,92,43.34ZM128,28a4,4,0,0,0-4,4v94.12L43.2,173.18a4,4,0,0,0-1.43,5.49A100,100,0,1,0,128,28Zm0,192a92.47,92.47,0,0,1-77.22-42L130,131.88a4,4,0,0,0,2-3.46V36.09A92,92,0,0,1,128,220Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
