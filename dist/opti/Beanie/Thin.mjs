var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? V(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && H(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && H(a, e, m[e]);
  return a;
};
var v = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const c = h((t, e) => {
  var o = t, { children: a } = o, m = v(o, ["children"]);
  return /* @__PURE__ */ A.createElement(n, p({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M220,164.7V144a92.15,92.15,0,0,0-75.57-90.53,24,24,0,1,0-32.86,0A92.15,92.15,0,0,0,36,144v20.7A12,12,0,0,0,28,176v32a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V176A12,12,0,0,0,220,164.7ZM112,36a16,16,0,1,1,16,16A16,16,0,0,1,112,36Zm16,24a84.09,84.09,0,0,1,84,84v20H44V144A84.09,84.09,0,0,1,128,60Zm-4,112v40H76V172Zm8,0h48v40H132ZM36,208V176a4,4,0,0,1,4-4H68v40H40A4,4,0,0,1,36,208Zm184,0a4,4,0,0,1-4,4H188V172h28a4,4,0,0,1,4,4Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
