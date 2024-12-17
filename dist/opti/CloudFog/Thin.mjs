var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, n = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((t, e) => {
  var h = t, { children: a } = h, m = Z(h, ["children"]);
  return /* @__PURE__ */ c.createElement(A, n({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M120,204H72a4,4,0,0,1,0-8h48a4,4,0,0,1,0,8Zm64-8H160a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm-24,32H104a4,4,0,0,0,0,8h56a4,4,0,0,0,0-8Zm68-128a72.08,72.08,0,0,1-72,72H76A48,48,0,1,1,87.51,77.39,72.08,72.08,0,0,1,228,100Zm-8,0A64.06,64.06,0,0,0,92,96.23a4,4,0,0,1-8-.46,71.63,71.63,0,0,1,1.42-10.65A40,40,0,1,0,76,164h80A64.07,64.07,0,0,0,220,100Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
