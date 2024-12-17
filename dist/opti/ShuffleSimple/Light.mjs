var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M214,48V88a6,6,0,0,1-12,0V62.48l-47.13,47.14a6,6,0,0,1-8.49-8.49L193.52,54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48Zm-6,114a6,6,0,0,0-6,6v25.52L52.24,43.76a6,6,0,0,0-8.48,8.48L193.52,202H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM101.13,146.38,43.76,203.76a6,6,0,1,0,8.48,8.48l57.38-57.37a6,6,0,0,0-8.49-8.49Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
