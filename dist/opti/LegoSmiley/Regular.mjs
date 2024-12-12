var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && Z(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ f.createElement(c, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M100,124a12,12,0,1,1,12-12A12,12,0,0,1,100,124Zm56-24a12,12,0,1,0,12,12A12,12,0,0,0,156,100Zm-4.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM216,80v96a32.06,32.06,0,0,1-24,31v17a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V207a32.06,32.06,0,0,1-24-31V80A32,32,0,0,1,72,48H88V32a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V48h16A32,32,0,0,1,216,80ZM104,48h48V32H104Zm72,176V208H80v16ZM200,80a16,16,0,0,0-16-16H72A16,16,0,0,0,56,80v96a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
