var A = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (H)
    for (var e of H(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var h = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, e) => {
  var r = t, { children: a } = r, m = h(r, ["children"]);
  return /* @__PURE__ */ n.createElement(c, Z({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M128,60a28,28,0,1,0,28,28A28,28,0,0,0,128,60Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,108Zm0,32a28,28,0,1,0,28,28A28,28,0,0,0,128,140Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,188Zm88-40H196V76h20a4,4,0,0,0,0-8H196V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V68H40a4,4,0,0,0,0,8H60v72H40a4,4,0,0,0,0,8H60v60a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V156h20a4,4,0,0,0,0-8Zm-28,68a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
