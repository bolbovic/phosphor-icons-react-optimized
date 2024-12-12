var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224,204H212A92.1,92.1,0,0,0,148,60.78V32a20,20,0,0,0-20-20H80A20,20,0,0,0,60,32v96a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V85.08A68.1,68.1,0,0,1,204,152a67.39,67.39,0,0,1-24.18,52H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM124,124H84V36h40ZM72,188a12,12,0,0,1,0-24h64a12,12,0,0,1,0,24Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
