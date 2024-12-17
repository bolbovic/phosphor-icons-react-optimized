var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(V, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,76H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,76H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V80A4,4,0,0,0,232,76ZM96,196H28V84H96a28,28,0,0,1,28,28v97.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V112a28,28,0,0,1,28-28h68ZM92.8,45.6a44,44,0,0,1,70.4,0,4,4,0,0,1-6.4,4.8,36,36,0,0,0-57.6,0,4,4,0,1,1-6.4-4.8Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
