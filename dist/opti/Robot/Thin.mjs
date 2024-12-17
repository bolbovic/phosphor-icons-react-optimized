var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      V.call(m, e) && Z(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((t, e) => {
  var H = t, { children: a } = H, m = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(c, h({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M200,52H132V16a4,4,0,0,0-8,0V52H56A28,28,0,0,0,28,80V192a28,28,0,0,0,28,28H200a28,28,0,0,0,28-28V80A28,28,0,0,0,200,52Zm20,140a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V80A20,20,0,0,1,56,60H200a20,20,0,0,1,20,20ZM76,108a8,8,0,1,1,8,8A8,8,0,0,1,76,108Zm88,0a8,8,0,1,1,8,8A8,8,0,0,1,164,108Zm0,32H92a24,24,0,0,0,0,48h72a24,24,0,0,0,0-48Zm-20,8v32H112V148ZM76,164a16,16,0,0,1,16-16h12v32H92A16,16,0,0,1,76,164Zm88,16H152V148h12a16,16,0,0,1,0,32Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
