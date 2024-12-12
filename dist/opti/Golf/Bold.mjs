var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M180,100a16,16,0,1,1-16-16A16,16,0,0,1,180,100Zm-48,16a16,16,0,1,0,16,16A16,16,0,0,0,132,116Zm88-20A92,92,0,1,1,128,4,92.1,92.1,0,0,1,220,96Zm-24,0a68,68,0,1,0-68,68A68.07,68.07,0,0,0,196,96ZM164,197.86a108.61,108.61,0,0,1-72,0,12,12,0,0,0-8,22.63,131.83,131.83,0,0,0,32,7V244a12,12,0,0,0,24,0V227.46a131.83,131.83,0,0,0,32-7,12,12,0,0,0-8-22.63Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
