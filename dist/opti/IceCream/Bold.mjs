var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const A = Z((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M228,116a32.14,32.14,0,0,0-16.37-27.92,84,84,0,0,0-167.26,0,32,32,0,0,0,12.51,59.77l53.75,94.07a20,20,0,0,0,34.74,0l53.75-94.07A32,32,0,0,0,228,116ZM58.39,108.16A12,12,0,0,0,68,96.4V96a60,60,0,0,1,120,0v.4a12,12,0,0,0,9.61,11.76A8,8,0,0,1,196,124H60a8,8,0,0,1-1.61-15.84Zm113,39.84-16.5,28.88L138.39,148Zm-86.78,0h26.14l30.32,53.06L128,223.94Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
