var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, v = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && Z(a, e, m[e]);
  if (t)
    for (var e of t(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var V in a)
    r.call(a, V) && m.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && t)
    for (var V of t(a))
      m.indexOf(V) < 0 && o.call(a, V) && (e[V] = a[V]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((V, e) => {
  var H = V, { children: a } = H, m = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(f, v({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M240,212H228V88a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4v44H100V40a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM164,92h56V212H164Zm-8,48v72H100V140ZM36,44H92V212H36ZM68,72V88a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm0,48v16a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm0,48v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Zm56,16V168a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm64,0V168a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm0-48V120a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
