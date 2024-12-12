var H = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && Z(a, e, t[e]);
  if (V)
    for (var e of V(t))
      i.call(t, e) && Z(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as h } from "react";
import M from "../../lib/OptiBase.mjs";
const c = h((m, e) => {
  var r = m, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ A.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M230,48V88a6,6,0,0,1-12,0V54H184a6,6,0,0,1,0-12h40A6,6,0,0,1,230,48ZM72,202H38V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H72a6,6,0,0,0,0-12Zm152-40a6,6,0,0,0-6,6v34H184a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,224,162ZM32,94a6,6,0,0,0,6-6V54H72a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6V88A6,6,0,0,0,32,94ZM80,82a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,80,82Zm102,86V88a6,6,0,0,0-12,0v80a6,6,0,0,0,12,0ZM144,82a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,144,82Zm-32,0a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,112,82Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
