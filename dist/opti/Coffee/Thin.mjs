var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((t, e) => {
  var V = t, { children: a } = V, m = Z(V, ["children"]);
  return /* @__PURE__ */ h.createElement(c, A({ ref: e }, m), a, /* @__PURE__ */ h.createElement("path", { d: "M84,56V24a4,4,0,0,1,8,0V56a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,120,60Zm32,0a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,152,60Zm92,60v8a36,36,0,0,1-36,36h-.41a92.53,92.53,0,0,1-35.76,48H208a4,4,0,0,1,0,8H32a4,4,0,0,1,0-8H68.17A92.34,92.34,0,0,1,28,136V88a4,4,0,0,1,4-4H208A36,36,0,0,1,244,120Zm-40,16V92H36v44a84.28,84.28,0,0,0,48.21,76h71.58A84.28,84.28,0,0,0,204,136Zm32-16a28,28,0,0,0-24-27.71V136a91.75,91.75,0,0,1-2.2,19.94A28,28,0,0,0,236,128Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
