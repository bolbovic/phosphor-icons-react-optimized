var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && A(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as l } from "react";
import M from "../../lib/OptiBase.mjs";
const V = l((m, e) => {
  var r = m, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ p.createElement(M, c({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M116,104a12,12,0,0,1-12,12h-4v36a12,12,0,0,1-24,0V116H72a12,12,0,0,1,0-24h32A12,12,0,0,1,116,104ZM240,92.74V152A44,44,0,0,1,198,196,68,68,0,0,1,76,200H36a20,20,0,0,1-20-20V76A20,20,0,0,1,36,56H92a44,44,0,0,1,80.51-24.53A36,36,0,0,1,221.94,76h1.32A16.76,16.76,0,0,1,240,92.74ZM180,55.09c0,.3,0,.6,0,.91a44.14,44.14,0,0,1-4.77,20H188a12,12,0,1,0-8-20.91ZM116,56h24a19.93,19.93,0,0,1,14.86,6.66A20.25,20.25,0,0,0,156,56a20,20,0,0,0-40,0ZM40,176h96V80H40Zm140-8V100H160v80a20,20,0,0,1-20,20H105.86A44,44,0,0,0,180,168Zm36-68H204v68c0,.79,0,1.57-.06,2.35A20,20,0,0,0,216,152Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
