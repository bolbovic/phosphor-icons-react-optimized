var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? A(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const d = H((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(V, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M237.66,141.66l-32,32A8,8,0,0,1,192,168V144H123.31l-40,40,18.35,18.34A8,8,0,0,1,96,216H48a8,8,0,0,1-8-8V160a8,8,0,0,1,13.66-5.66L72,172.69l40-40V64H88a8,8,0,0,1-5.66-13.66l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,152,64H128v64h64V104a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,237.66,141.66Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
