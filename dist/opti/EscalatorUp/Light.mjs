var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var H = m, { children: a } = H, t = l(H, ["children"]);
  return /* @__PURE__ */ c.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M224,42H168a6,6,0,0,0-4.41,1.93L69.37,146H32a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H88a6,6,0,0,0,4.41-1.93L186.63,110H224a14,14,0,0,0,14-14V56A14,14,0,0,0,224,42Zm2,54a2,2,0,0,1-2,2H184a6,6,0,0,0-4.41,1.93L85.37,202H32a2,2,0,0,1-2-2V160a2,2,0,0,1,2-2H72a6,6,0,0,0,4.41-1.93L170.63,54H224a2,2,0,0,1,2,2Zm2.24,75.76a6,6,0,1,1-8.48,8.48L206,166.49V208a6,6,0,0,1-12,0V166.49l-13.76,13.75a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
