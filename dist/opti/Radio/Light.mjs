var l = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M102,104a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H96A6,6,0,0,1,102,104Zm-6,26H64a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12Zm0,32H64a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12ZM230,80V192a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72a6,6,0,0,1,4.28-5.75l160-48a6,6,0,0,1,3.44,11.5L72.88,66H216A14,14,0,0,1,230,80Zm-12,0a2,2,0,0,0-2-2H38V192a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Zm-20,56a38,38,0,1,1-38-38A38,38,0,0,1,198,136Zm-12,0a26,26,0,1,0-26,26A26,26,0,0,0,186,136Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
