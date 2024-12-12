var d = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var Z = (e, a, m) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[a] = m, h = (e, a) => {
  for (var m in a || (a = {}))
    o.call(a, m) && Z(e, m, a[m]);
  if (H)
    for (var m of H(a))
      r.call(a, m) && Z(e, m, a[m]);
  return e;
};
var p = (e, a) => {
  var m = {};
  for (var t in e)
    o.call(e, t) && a.indexOf(t) < 0 && (m[t] = e[t]);
  if (e != null && H)
    for (var t of H(e))
      a.indexOf(t) < 0 && r.call(e, t) && (m[t] = e[t]);
  return m;
};
import v, { forwardRef as l } from "react";
import M from "../../lib/OptiBase.mjs";
const c = l((t, m) => {
  var V = t, { children: e } = V, a = p(V, ["children"]);
  return /* @__PURE__ */ v.createElement(M, h({ ref: m }, a), e, /* @__PURE__ */ v.createElement("path", { d: "M216,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44ZM108,140V116h40v24Zm40,24v24H108V164ZM44,116H84v24H44Zm64-24V68h40V92Zm64,24h40v24H172Zm40-24H172V68h40ZM84,68V92H44V68ZM44,164H84v24H44Zm128,24V164h40v24Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
