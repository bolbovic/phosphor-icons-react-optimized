var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const n = L((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M180.49,188l23.75-23.76a6,6,0,0,0-8.48-8.48L172,179.51l-45.58-45.57A50,50,0,0,0,124,34H72a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V134h31.51l54,54-23.75,23.76a6,6,0,1,0,8.48,8.48L172,196.49l23.76,23.75a6,6,0,0,0,8.48-8.48ZM78,46h46a38,38,0,0,1,0,76H78Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
