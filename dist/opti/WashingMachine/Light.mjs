var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && Z(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && Z(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM128,66a62,62,0,1,0,62,62A62.07,62.07,0,0,0,128,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178ZM198,68a10,10,0,1,1-10-10A10,10,0,0,1,198,68Zm-73.76,48.24-16,16a6,6,0,0,1-8.48-8.48l16-16a6,6,0,0,1,8.48,8.48Zm32-.48a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48l32-32A6,6,0,0,1,156.24,115.76Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
