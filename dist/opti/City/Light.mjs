var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, v = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && Z(a, e, m[e]);
  if (V)
    for (var e of V(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var H = t, { children: a } = H, m = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(h, v({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M240,210H230V88a6,6,0,0,0-6-6H160a6,6,0,0,0-6,6v42H102V40a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM166,94h52V210H166Zm-12,48v68H102V142ZM38,46H90V210H38ZM70,72V88a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm52,16V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm64,0V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm0-48V120a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
