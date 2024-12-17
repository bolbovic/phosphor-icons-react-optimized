var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    h.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var H = t, { children: a } = H, m = A(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,140a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM52,136a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H56A4,4,0,0,1,52,136Zm152,0a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8h96A4,4,0,0,1,204,136Zm-48,32a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8h96A4,4,0,0,1,156,168Zm48,0a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h16A4,4,0,0,1,204,168Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
