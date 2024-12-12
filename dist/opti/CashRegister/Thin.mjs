var M = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var Z = (a, e, H) => e in a ? M(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, o = (a, e) => {
  for (var H in e || (e = {}))
    h.call(e, H) && Z(a, H, e[H]);
  if (t)
    for (var H of t(e))
      r.call(e, H) && Z(a, H, e[H]);
  return a;
};
var i = (a, e) => {
  var H = {};
  for (var m in a)
    h.call(a, m) && e.indexOf(m) < 0 && (H[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && r.call(a, m) && (H[m] = a[m]);
  return H;
};
import p, { forwardRef as n } from "react";
import V from "../../lib/OptiBase.mjs";
const c = n((m, H) => {
  var A = m, { children: a } = A, e = i(A, ["children"]);
  return /* @__PURE__ */ p.createElement(V, o({ ref: H }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M235.88,159,213.4,69.09A12,12,0,0,0,201.75,60H132V40a12,12,0,0,0-12-12H80A12,12,0,0,0,68,40V60H54.25A12,12,0,0,0,42.6,69.09L20.12,159a4,4,0,0,0-.12,1v32a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V160A4,4,0,0,0,235.88,159ZM76,40a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4V60H76ZM50.37,71a4,4,0,0,1,3.88-3h147.5a4,4,0,0,1,3.88,3l21.25,85H29.12ZM224,196H32a4,4,0,0,1-4-4V164H228v28A4,4,0,0,1,224,196ZM68,96a4,4,0,0,1,4-4H88a4,4,0,0,1,0,8H72A4,4,0,0,1,68,96Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H120A4,4,0,0,1,116,96Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H168A4,4,0,0,1,164,96ZM68,128a4,4,0,0,1,4-4H88a4,4,0,0,1,0,8H72A4,4,0,0,1,68,128Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H120A4,4,0,0,1,116,128Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H168A4,4,0,0,1,164,128Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
