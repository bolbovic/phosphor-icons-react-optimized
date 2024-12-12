var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M164,136a4,4,0,0,1-4,4H132v28a4,4,0,0,1-8,0V140H96a4,4,0,0,1,0-8h28V104a4,4,0,0,1,8,0v28h28A4,4,0,0,1,164,136Zm64-56V192a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V80A20,20,0,0,1,48,60H77.86L90.3,41.34a12,12,0,0,1,10-5.34h55.44a12,12,0,0,1,10,5.34L178.14,60H208A20,20,0,0,1,228,80Zm-8,0a12,12,0,0,0-12-12H176a4,4,0,0,1-3.33-1.78L159.05,45.78A4,4,0,0,0,155.72,44H100.28A4,4,0,0,0,97,45.78L83.33,66.22A4,4,0,0,1,80,68H48A12,12,0,0,0,36,80V192a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
