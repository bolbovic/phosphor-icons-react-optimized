var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, r, e) => r in a ? p(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, v = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && Z(a, e, r[e]);
  if (m)
    for (var e of m(r))
      o.call(r, e) && Z(a, e, r[e]);
  return a;
};
var V = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as c } from "react";
import s from "../../lib/OptiBase.mjs";
const M = c((t, e) => {
  var H = t, { children: a } = H, r = V(H, ["children"]);
  return /* @__PURE__ */ h.createElement(s, v({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v48H160Zm40-16H160V80a16,16,0,0,0-16-16V40h56ZM72,40h56V64H72ZM40,80H144v79.83c0,.06,0,.11,0,.17s0,.11,0,.17V176H40ZM72,192h56v24H72Zm72,24V192a16,16,0,0,0,16-16v-8h40v48ZM65.85,146.88,81.59,128,65.85,109.12a8,8,0,0,1,12.3-10.24L92,115.5l13.85-16.62a8,8,0,1,1,12.3,10.24L102.41,128l15.74,18.88a8,8,0,0,1-12.3,10.24L92,140.5,78.15,157.12a8,8,0,0,1-12.3-10.24Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
