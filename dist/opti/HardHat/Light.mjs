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
var A = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var H = m, { children: a } = H, t = A(H, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M224,154h-2V136a94.37,94.37,0,0,0-64-89.1V40a14,14,0,0,0-14-14H112A14,14,0,0,0,98,40v6.9A94.37,94.37,0,0,0,34,136v18H32a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V168A14,14,0,0,0,224,154Zm-14-18v18H158V59.68A82.33,82.33,0,0,1,210,136ZM112,38h32a2,2,0,0,1,2,2V154H110V40A2,2,0,0,1,112,38ZM46,136A82.33,82.33,0,0,1,98,59.68V154H46Zm180,56a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V168a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
