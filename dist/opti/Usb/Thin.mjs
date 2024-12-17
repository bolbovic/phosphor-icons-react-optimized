var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && v.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var H = r, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ l.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M250.22,124.67l-48-32A4,4,0,0,0,196,96v28H68V72a4,4,0,0,1,4-4h36.29a28,28,0,1,0,0-8H72A12,12,0,0,0,60,72v52H8a4,4,0,0,0,0,8H60v52a12,12,0,0,0,12,12h36v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H120a12,12,0,0,0-12,12v12H72a4,4,0,0,1-4-4V132H196v28a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM136,44a20,20,0,1,1-20,20A20,20,0,0,1,136,44ZM116,176a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4H120a4,4,0,0,1-4-4Zm88-23.47V103.47L240.79,128Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
