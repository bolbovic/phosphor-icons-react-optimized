var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var h = r, { children: a } = h, t = l(h, ["children"]);
  return /* @__PURE__ */ c.createElement(A, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M229.54,133.7A6,6,0,0,0,224,130H182V104a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6v26H32a6,6,0,0,0-4.24,10.24l96,96a6,6,0,0,0,8.48,0l96-96A6,6,0,0,0,229.54,133.7ZM128,223.51,46.49,142H80a6,6,0,0,0,6-6V110h84v26a6,6,0,0,0,6,6h33.51ZM74,40a6,6,0,0,1,6-6h96a6,6,0,0,1,0,12H80A6,6,0,0,1,74,40Zm0,32a6,6,0,0,1,6-6h96a6,6,0,0,1,0,12H80A6,6,0,0,1,74,72Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
