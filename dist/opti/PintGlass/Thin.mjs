var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(H, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M203,29.35A4,4,0,0,0,200,28H56a4,4,0,0,0-4,4.48l23.15,193A12,12,0,0,0,87.1,236h81.8a12,12,0,0,0,11.92-10.57L204,32.48A4,4,0,0,0,203,29.35ZM195.49,36l-3.84,32H64.35L60.51,36ZM172.87,224.48a4,4,0,0,1-4,3.52H87.1a4,4,0,0,1-4-3.52L65.31,76H190.69Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};