var d = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? d(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && r(a, e, m[e]);
  if (H)
    for (var e of H(m))
      Z.call(m, e) && r(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as l } from "react";
import A from "../../lib/OptiBase.mjs";
const c = l((t, e) => {
  var o = t, { children: a } = o, m = p(o, ["children"]);
  return /* @__PURE__ */ v.createElement(A, h({ ref: e }, m), a, /* @__PURE__ */ v.createElement("path", { d: "M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96Zm4,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-60,76V148a12,12,0,0,1,24,0v24a12,12,0,0,1-24,0Zm84-8a12,12,0,0,1-12,12H196v32a12,12,0,0,1-12,12H148a12,12,0,0,1,0-24h24V148a12,12,0,0,1,24,0v4h12A12,12,0,0,1,220,164Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
