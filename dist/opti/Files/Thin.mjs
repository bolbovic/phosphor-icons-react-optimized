var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as n } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = n((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(Z, V({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M210.83,69.17l-40-40A4,4,0,0,0,168,28H88A12,12,0,0,0,76,40V60H56A12,12,0,0,0,44,72V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V196h20a12,12,0,0,0,12-12V72A4,4,0,0,0,210.83,69.17ZM172,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h78.34L172,105.66Zm32-32a4,4,0,0,1-4,4H180V104a4,4,0,0,0-1.17-2.83l-40-40A4,4,0,0,0,136,60H84V40a4,4,0,0,1,4-4h78.34L204,73.66Zm-64-32a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,152Zm0,32a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,184Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
