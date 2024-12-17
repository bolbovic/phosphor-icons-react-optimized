var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,34H168a6,6,0,0,0,0,12h33.52L168,79.52,148.24,59.76a6,6,0,1,0-8.48,8.49L159.52,88l-18.46,18.46a69.94,69.94,0,1,0,8.49,8.48L168,96.5l19.76,19.76a6,6,0,0,0,8.48-8.49L176.48,88,210,54.49V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM137,201a58,58,0,1,1,17-41A58,58,0,0,1,137,201Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
