var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const h = n((r, a) => {
  var m = r, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M206,26.69A8,8,0,0,0,200,24H56a8,8,0,0,0-7.94,9l23.15,193A16,16,0,0,0,87.1,240h81.8a16,16,0,0,0,15.89-14.09L207.94,33A8,8,0,0,0,206,26.69ZM191,40,188.1,64H67.9L65,40Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
