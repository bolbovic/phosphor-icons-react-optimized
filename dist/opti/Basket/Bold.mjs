var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    c.call(m, e) && r(a, e, m[e]);
  if (l)
    for (var e of l(m))
      p.call(m, e) && r(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var o = t, { children: a } = o, m = d(o, ["children"]);
  return /* @__PURE__ */ f.createElement(H, Z({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M140,128v40a12,12,0,0,1-24,0V128a12,12,0,0,1,24,0Zm28.06-1.19-4,40a12,12,0,0,0,10.75,13.13c.4,0,.81.06,1.2.06a12,12,0,0,0,11.93-10.81l4-40a12,12,0,0,0-23.88-2.38Zm-80.12,0a12,12,0,0,0-23.88,2.38l4,40A12,12,0,0,0,80,180c.39,0,.8,0,1.2-.06a12,12,0,0,0,10.75-13.13Zm156-37.22-15.07,113A20.06,20.06,0,0,1,209,220H47a20.06,20.06,0,0,1-19.82-17.36l-15.07-113A12,12,0,0,1,24,76H66.55L119,16.1a12,12,0,0,1,18.06,0L189.45,76H232a12,12,0,0,1,11.89,13.59ZM98.45,76h59.1L128,42.22Zm119.84,24H37.71l12.8,96h155Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
