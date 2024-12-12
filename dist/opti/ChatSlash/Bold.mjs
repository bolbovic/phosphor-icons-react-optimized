var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const n = H((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(V, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M56.88,31.93A12,12,0,0,0,36.8,44.28,20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.12-.11L84.47,212H188.15l11,12.07a12,12,0,0,0,17.76-16.15ZM80,188a11.93,11.93,0,0,0-7.84,2.92L44,215.23V68H57.24L166.33,188ZM236,64V174.12a12,12,0,0,1-24,0V68H116.6a12,12,0,0,1,0-24H216A20,20,0,0,1,236,64Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
