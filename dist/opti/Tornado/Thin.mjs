var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && h(a, e, m[e]);
  if (H)
    for (var e of H(m))
      Z.call(m, e) && h(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M228,40a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H224A4,4,0,0,1,228,40ZM180,72a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H176A4,4,0,0,0,180,72Zm-16,32a4,4,0,0,0-4-4H56a4,4,0,0,0,0,8H160A4,4,0,0,0,164,104Zm16,32a4,4,0,0,0-4-4H88a4,4,0,0,0,0,8h88A4,4,0,0,0,180,136Zm4,28H120a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm-24,32H128a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-32,32H112a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
