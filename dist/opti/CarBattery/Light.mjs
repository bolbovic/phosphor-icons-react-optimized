var M = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && V(a, e, t[e]);
  if (h)
    for (var e of h(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && h)
    for (var H of h(a))
      t.indexOf(H) < 0 && o.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M190,136a6,6,0,0,1-6,6H174v10a6,6,0,0,1-12,0V142H152a6,6,0,0,1,0-12h10V120a6,6,0,0,1,12,0v10h10A6,6,0,0,1,190,136Zm-86-6H72a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM238,88v96a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V88A14,14,0,0,1,32,74H50V56A14,14,0,0,1,64,42H96a14,14,0,0,1,14,14V74h36V56a14,14,0,0,1,14-14h32a14,14,0,0,1,14,14V74h18A14,14,0,0,1,238,88ZM158,74h36V56a2,2,0,0,0-2-2H160a2,2,0,0,0-2,2ZM62,74H98V56a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2ZM226,88a2,2,0,0,0-2-2H32a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
