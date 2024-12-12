var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const M = A((t, e) => {
  var l = t, { children: a } = l, r = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(L, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M207,40H49A17,17,0,0,0,32,57v49.21a17,17,0,0,0,10,15.47l62.6,28.45a48,48,0,1,0,46.88,0L214,121.68a17,17,0,0,0,10-15.47V57A17,17,0,0,0,207,40ZM160,56v72.67l-32,14.54L96,128.67V56ZM48,106.21V57a1,1,0,0,1,1-1H80v65.39L48.59,107.12A1,1,0,0,1,48,106.21ZM128,224a32,32,0,1,1,32-32A32,32,0,0,1,128,224Zm80-117.79a1,1,0,0,1-.59.91L176,121.39V56h31a1,1,0,0,1,1,1Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
