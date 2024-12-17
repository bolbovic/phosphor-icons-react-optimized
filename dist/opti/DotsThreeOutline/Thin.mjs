var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      A.call(m, e) && i(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, Z({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148ZM48,100a28,28,0,1,0,28,28A28,28,0,0,0,48,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,48,148Zm160-48a28,28,0,1,0,28,28A28,28,0,0,0,208,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,208,148Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
