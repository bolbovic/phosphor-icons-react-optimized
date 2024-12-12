var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && l(a, e, t[e]);
  if (H)
    for (var e of H(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const c = s((r, e) => {
  var m = r, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ p.createElement(v, V({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M240,88h-9.53l-9.29-43.35A16.08,16.08,0,0,0,205.53,32H50.47A16.08,16.08,0,0,0,34.82,44.65L25.53,88H16a8,8,0,0,0,0,16h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V176h96v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V104h8a8,8,0,0,0,0-16ZM50.47,48H205.53l8.57,40H41.9ZM64,200H40V176H64Zm128,0V176h24v24Zm24-40H152V128a8,8,0,0,0-16,0v32H120V128a8,8,0,0,0-16,0v32H40V104H216ZM56,132a12,12,0,1,1,12,12A12,12,0,0,1,56,132Zm120,0a12,12,0,1,1,12,12A12,12,0,0,1,176,132Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
