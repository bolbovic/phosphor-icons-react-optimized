var v = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    m.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && H)
    for (var l of H(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import d, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((l, e) => {
  var o = l, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ d.createElement(c, V({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M200,20H72A20,20,0,0,0,52,40V56H36A20,20,0,0,0,16,76V180a20,20,0,0,0,20,20H52v16a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-32,88h28v40H168ZM76,44H196V84H168V76a20,20,0,0,0-20-20H76ZM40,80H144v96H40ZM76,212V200h72a20,20,0,0,0,20-20v-8h28v40ZM64.36,154.91l-12-48a12,12,0,1,1,23.28-5.82l4.13,16.53,1.5-3a12,12,0,0,1,21.46,0l1.5,3,4.13-16.53a12,12,0,0,1,23.28,5.82l-12,48a12,12,0,0,1-10.33,9A11.62,11.62,0,0,1,108,164a12,12,0,0,1-10.73-6.63L92,146.83l-5.27,10.54a12,12,0,0,1-22.37-2.46Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
