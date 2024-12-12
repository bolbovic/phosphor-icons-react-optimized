var p = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && h(a, e, t[e]);
  if (H)
    for (var e of H(t))
      V.call(t, e) && h(a, e, t[e]);
  return a;
};
var o = (a, t) => {
  var e = {};
  for (var m in a)
    r.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as v } from "react";
import M from "../../lib/OptiBase.mjs";
const c = v((m, e) => {
  var Z = m, { children: a } = Z, t = o(Z, ["children"]);
  return /* @__PURE__ */ i.createElement(M, A({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M106,40a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,40Zm38,170H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM208,34H184a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V48A14,14,0,0,0,208,34Zm8,72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,216,106Zm0,72a6,6,0,0,0-6,6v24a2,2,0,0,1-2,2H184a6,6,0,0,0,0,12h24a14,14,0,0,0,14-14V184A6,6,0,0,0,216,178ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM40,78a6,6,0,0,0,6-6V48a2,2,0,0,1,2-2H72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,48V72A6,6,0,0,0,40,78ZM176,182H80a6,6,0,0,1-6-6V80a6,6,0,0,1,6-6h96a6,6,0,0,1,6,6v96A6,6,0,0,1,176,182Zm-6-96H86v84h84Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
