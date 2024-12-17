var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const V = s((m, e) => {
  var l = m, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ c.createElement(v, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152ZM168,32h24a8,8,0,0,0,0-16H160a8,8,0,0,0-8,8V56h16Zm72,84v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76v88a8,8,0,0,0,16,0V56h12A60.07,60.07,0,0,1,240,116Zm-120,0a44,44,0,0,0-88,0v60h88Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
