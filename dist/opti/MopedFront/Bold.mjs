var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,36H170.32a44,44,0,0,0-84.64,0H48a12,12,0,0,0,0,24H85.68a43.89,43.89,0,0,0,9,16.73A68,68,0,0,0,60,136v64a20,20,0,0,0,20,20H96a32,32,0,0,0,64,0h16a20,20,0,0,0,20-20V136a68,68,0,0,0-34.72-59.27,43.89,43.89,0,0,0,9-16.73H208a12,12,0,0,0,0-24ZM136,220a8,8,0,0,1-16,0V164a8,8,0,0,1,16,0Zm36-24H160V164a32,32,0,0,0-64,0v32H84V136a44,44,0,0,1,88,0ZM108,48a20,20,0,1,1,20,20A20,20,0,0,1,108,48Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
