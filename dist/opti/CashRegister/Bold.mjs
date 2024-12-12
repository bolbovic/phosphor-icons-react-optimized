var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(c, l({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M243.61,157,221.17,71a20,20,0,0,0-19.35-15H140V40a20,20,0,0,0-20-20H80A20,20,0,0,0,60,40V56H54.18A20,20,0,0,0,34.83,71L12.39,157a11.94,11.94,0,0,0-.39,3v32a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V160A11.94,11.94,0,0,0,243.61,157ZM84,44h32V56H84ZM57.27,80H198.73l17.74,68H39.53ZM36,188V172H220v16Zm28-72a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H76A12,12,0,0,1,64,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,112,116Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,160,116Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
