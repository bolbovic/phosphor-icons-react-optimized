var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M92,12A12,12,0,0,1,104,0h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,12ZM204,60V228a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V60A28,28,0,0,1,80,32h96A28,28,0,0,1,204,60Zm-24,0a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4V228a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
