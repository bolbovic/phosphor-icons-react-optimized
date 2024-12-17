var f = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var l = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, i = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && l(a, m, e[m]);
  if (Z)
    for (var m of Z(e))
      h.call(e, m) && l(a, m, e[m]);
  return a;
};
var p = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && Z)
    for (var t of Z(a))
      e.indexOf(t) < 0 && h.call(a, t) && (m[t] = a[t]);
  return m;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, m) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: m }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M122,40V32a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48Zm0,119.52-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,1,0-8.48-8.48Zm136-136-8,8a6,6,0,1,0,8.48,8.48l8-8a6,6,0,0,0-8.48-8.48Zm.48,136a6,6,0,0,0-8.48,8.48l8,8a6,6,0,0,0,8.48-8.48ZM40,122H32a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Zm88,88a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,128,210Zm96-88h-8a6,6,0,0,0,0,12h8a6,6,0,0,0,0-12Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
