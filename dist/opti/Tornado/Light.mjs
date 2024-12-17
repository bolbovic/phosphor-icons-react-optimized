var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (H)
    for (var e of H(t))
      Z.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M230,40a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H224A6,6,0,0,1,230,40ZM182,72a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H176A6,6,0,0,0,182,72Zm-16,32a6,6,0,0,0-6-6H56a6,6,0,0,0,0,12H160A6,6,0,0,0,166,104Zm16,32a6,6,0,0,0-6-6H88a6,6,0,0,0,0,12h88A6,6,0,0,0,182,136Zm2,26H120a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-24,32H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-32,32H112a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
