var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var p = m, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M224,64V208H32V48H208A16,16,0,0,1,224,64Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V200H224A8,8,0,0,1,232,208ZM132,160a12,12,0,1,0-12-12A12,12,0,0,0,132,160Zm-24-56A12,12,0,1,0,96,92,12,12,0,0,0,108,104ZM76,176a12,12,0,1,0-12-12A12,12,0,0,0,76,176Zm96-48a12,12,0,1,0-12-12A12,12,0,0,0,172,128Zm24-40a12,12,0,1,0-12-12A12,12,0,0,0,196,88Zm-20,76a12,12,0,1,0,12-12A12,12,0,0,0,176,164Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
