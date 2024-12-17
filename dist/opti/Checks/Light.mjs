var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const L = h((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M148.2,84.28l-89.6,88a6,6,0,0,1-8.4,0L11.8,134.57A6,6,0,1,1,20.2,126l34.2,33.58,85.4-83.87a6,6,0,1,1,8.4,8.56Zm96.08-8.48a6,6,0,0,0-8.48-.08l-85.4,83.87-20.23-19.87a6,6,0,1,0-8.41,8.56l24.44,24a6,6,0,0,0,8.4,0l89.6-88A6,6,0,0,0,244.28,75.8Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
