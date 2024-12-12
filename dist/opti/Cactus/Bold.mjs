var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && H(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var m = o, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,204H172V188a72.08,72.08,0,0,0,72-72,32,32,0,0,0-64,0,8,8,0,0,1-8,8V56a44,44,0,0,0-88,0V84a8,8,0,0,1-8-8,32,32,0,0,0-64,0,72.08,72.08,0,0,0,72,72v56H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM96,124H84A48.05,48.05,0,0,1,36,76a8,8,0,0,1,16,0,32,32,0,0,0,32,32H96a12,12,0,0,0,12-12V56a20,20,0,0,1,40,0v80a12,12,0,0,0,12,12h12a32,32,0,0,0,32-32,8,8,0,0,1,16,0,48.05,48.05,0,0,1-48,48H160a12,12,0,0,0-12,12v28H108V136A12,12,0,0,0,96,124Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
