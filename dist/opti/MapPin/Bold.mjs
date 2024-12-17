var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = A((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
