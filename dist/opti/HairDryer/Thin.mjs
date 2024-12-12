var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ n.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M196,88a28,28,0,1,0-28,28A28,28,0,0,0,196,88Zm-28,20a20,20,0,1,1,20-20A20,20,0,0,1,168,108Zm-5.15,104a12,12,0,0,0,10.92-7l32-70.39A60,60,0,0,0,168,28a4.89,4.89,0,0,0-.66.05L30,50.94A12,12,0,0,0,20,62.78v50.44a12,12,0,0,0,10,11.84l102,17V200a12,12,0,0,0,12,12h4v4a36,36,0,0,0,36,36h16a4,4,0,0,0,0-8H184a28,28,0,0,1-28-28v-4ZM28,113.22V62.78a4,4,0,0,1,3.34-4L168.33,36a52,52,0,0,1,0,104l-137-22.83A4,4,0,0,1,28,113.22ZM140,200V143.39L167.34,148a4.89,4.89,0,0,0,.66.05,59.62,59.62,0,0,0,25.46-5.69l-27,59.34a4,4,0,0,1-3.64,2.35H144A4,4,0,0,1,140,200Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
