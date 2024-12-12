var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M165.92,224a6,6,0,0,1-6,6h-64a6,6,0,0,1,0-12h64A6,6,0,0,1,165.92,224ZM225.61,61.23a109.23,109.23,0,0,0-38.41-42.3,6,6,0,0,0-6.4,10.14A96,96,0,0,1,215,66.76a6,6,0,1,0,10.65-5.53ZM41,66.76A96,96,0,0,1,75.2,29.07a6,6,0,0,0-6.4-10.14,109.23,109.23,0,0,0-38.41,42.3A6,6,0,1,0,41,66.76Zm179,110.17A14,14,0,0,1,208,198H48a14,14,0,0,1-12.06-21C45.13,161.08,50,138.62,50,112a78,78,0,0,1,156,0C206,139,210.74,160.84,220.08,176.93Zm-10.37,6C199.29,165,194,141.14,194,112a66,66,0,0,0-132,0c0,29.16-5.29,53-15.71,71a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.71,183Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
