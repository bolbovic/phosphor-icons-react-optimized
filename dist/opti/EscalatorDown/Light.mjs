var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    L.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var H = r, { children: a } = H, t = l(H, ["children"]);
  return /* @__PURE__ */ c.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M171.76,84.24a6,6,0,0,1,8.48-8.48L194,89.51V48a6,6,0,0,1,12,0V89.51l13.76-13.75a6,6,0,0,1,8.48,8.48l-24,24a6,6,0,0,1-8.48,0ZM238,160v40a14,14,0,0,1-14,14H168a6,6,0,0,1-4.41-1.93L69.37,110H32A14,14,0,0,1,18,96V56A14,14,0,0,1,32,42H88a6,6,0,0,1,4.41,1.93L186.63,146H224A14,14,0,0,1,238,160Zm-12,0a2,2,0,0,0-2-2H184a6,6,0,0,1-4.41-1.93L85.37,54H32a2,2,0,0,0-2,2V96a2,2,0,0,0,2,2H72a6,6,0,0,1,4.41,1.93L170.63,202H224a2,2,0,0,0,2-2Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
