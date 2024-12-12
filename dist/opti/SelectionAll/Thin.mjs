var p = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, o = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && h(a, e, m[e]);
  if (H)
    for (var e of H(m))
      V.call(m, e) && h(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as n } from "react";
import v from "../../lib/OptiBase.mjs";
const M = n((t, e) => {
  var Z = t, { children: a } = Z, m = A(Z, ["children"]);
  return /* @__PURE__ */ i.createElement(v, o({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M108,40a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,40Zm36,172H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM208,36H184a4,4,0,0,0,0,8h24a4,4,0,0,1,4,4V72a4,4,0,0,0,8,0V48A12,12,0,0,0,208,36Zm8,72a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,216,108Zm0,72a4,4,0,0,0-4,4v24a4,4,0,0,1-4,4H184a4,4,0,0,0,0,8h24a12,12,0,0,0,12-12V184A4,4,0,0,0,216,180ZM40,148a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,40,148Zm32,64H48a4,4,0,0,1-4-4V184a4,4,0,0,0-8,0v24a12,12,0,0,0,12,12H72a4,4,0,0,0,0-8ZM40,76a4,4,0,0,0,4-4V48a4,4,0,0,1,4-4H72a4,4,0,0,0,0-8H48A12,12,0,0,0,36,48V72A4,4,0,0,0,40,76ZM180,176a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Zm-8-92H84v88h88Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
