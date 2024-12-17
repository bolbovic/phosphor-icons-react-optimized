var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var H = m, { children: a } = H, t = h(H, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M224,156h-4V136a92.35,92.35,0,0,0-64-87.65V40a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v8.35A92.35,92.35,0,0,0,36,136v20H32a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V168A12,12,0,0,0,224,156Zm-12-20v20H156V56.8A84.33,84.33,0,0,1,212,136ZM112,36h32a4,4,0,0,1,4,4V156H108V40A4,4,0,0,1,112,36ZM44,136a84.33,84.33,0,0,1,56-79.2V156H44Zm184,56a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
