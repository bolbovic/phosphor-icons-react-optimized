var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((m, e) => {
  var H = m, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,140H48a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,52H48A12,12,0,0,0,36,64v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V64A12,12,0,0,0,208,52Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
