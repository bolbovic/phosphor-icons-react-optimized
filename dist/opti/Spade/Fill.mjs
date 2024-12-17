var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    i.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && p.call(e, l) && (a[l] = e[l]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const E = n((l, a) => {
  var m = l, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M232,136a56,56,0,0,1-83.4,48.82l11.06,36.88A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l11.06-36.88A56,56,0,0,1,24,136c0-32,17.65-62.84,51-89.27a234.14,234.14,0,0,1,49.89-30.11,7.93,7.93,0,0,1,6.16,0A234.14,234.14,0,0,1,181,46.73C214.35,73.16,232,104,232,136Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
