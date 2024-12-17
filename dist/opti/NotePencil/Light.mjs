var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import M from "../../lib/OptiBase.mjs";
const V = H((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228.24,59.76l-32-32a6,6,0,0,0-8.48,0l-96,96A6,6,0,0,0,90,128v32a6,6,0,0,0,6,6h32a6,6,0,0,0,4.24-1.76l96-96A6,6,0,0,0,228.24,59.76ZM125.51,154H102V130.49l66-66L191.51,88ZM200,79.51,176.49,56,192,40.49,215.51,64ZM222,128v80a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34h80a6,6,0,0,1,0,12H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2V128a6,6,0,0,1,12,0Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
