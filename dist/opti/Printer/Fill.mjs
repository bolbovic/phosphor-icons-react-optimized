var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var H = m, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ V.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M240,96v80a8,8,0,0,1-8,8H200v32a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V184H24a8,8,0,0,1-8-8V96c0-13.23,11.36-24,25.33-24H56V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V72h14.67C228.64,72,240,82.77,240,96ZM72,72H184V48H72Zm112,88H72v48H184Zm16-44a12,12,0,1,0-12,12A12,12,0,0,0,200,116Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
