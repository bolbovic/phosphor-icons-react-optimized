var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M68,236a16,16,0,1,1-16-16A16,16,0,0,1,68,236Zm16-48a16,16,0,1,0,16,16A16,16,0,0,0,84,188Zm-64,0a16,16,0,1,0,16,16A16,16,0,0,0,20,188Zm32,0a16,16,0,1,0-16-16A16,16,0,0,0,52,188ZM256,40a12,12,0,0,1-12,12H221L195.19,77.79,173.74,203.33a20,20,0,0,1-33.86,10.8l-98-98A20,20,0,0,1,52.72,82.25l125.5-21.44,29.29-29.3A12,12,0,0,1,216,28h28A12,12,0,0,1,256,40ZM169.32,86.68l-105,17.94,87.07,87.07Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
