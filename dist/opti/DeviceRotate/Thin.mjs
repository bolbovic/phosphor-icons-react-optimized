var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
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
import d from "../../lib/OptiBase.mjs";
const h = H((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M202.83,218.83l-24,24a4,4,0,0,1-5.66-5.66L190.34,220H80a20,20,0,0,1-20-20V104a4,4,0,0,1,8,0v96a12,12,0,0,0,12,12H190.34l-17.17-17.17a4,4,0,0,1,5.66-5.66l24,24A4,4,0,0,1,202.83,218.83ZM80,68a4,4,0,0,0,2.83-6.83L65.66,44H176a12,12,0,0,1,12,12v96a4,4,0,0,0,8,0V56a20,20,0,0,0-20-20H65.66L82.83,18.83a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24A4,4,0,0,0,80,68Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
