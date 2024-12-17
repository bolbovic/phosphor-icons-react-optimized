var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M128,36H104A12,12,0,0,0,92,48V208a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V48A12,12,0,0,0,128,36Zm4,172a4,4,0,0,1-4,4H104a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4ZM200,36H176a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4ZM68,128a4,4,0,0,1-4,4H44v20a4,4,0,0,1-8,0V132H16a4,4,0,0,1,0-8H36V104a4,4,0,0,1,8,0v20H64A4,4,0,0,1,68,128Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
