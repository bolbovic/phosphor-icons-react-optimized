var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && L(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M194,152V104a6,6,0,0,1,12,0v48a6,6,0,0,1-12,0Zm38-70a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,232,82ZM220.44,212a6,6,0,0,1-8.88,8.08L166,169.92V224a6,6,0,0,1-9.68,4.74L85.94,174H40a14,14,0,0,1-14-14V96A14,14,0,0,1,40,82H86.07L51.56,44A6,6,0,0,1,60.44,36ZM154,156.72,97,94H40a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H88a6,6,0,0,1,3.68,1.26L154,211.73Zm-30.17-89L154,44.27v62.56a6,6,0,0,0,12,0V32a6,6,0,0,0-9.68-4.74l-39.85,31a6,6,0,1,0,7.36,9.47Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
