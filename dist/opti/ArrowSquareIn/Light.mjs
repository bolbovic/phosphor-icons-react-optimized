var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import L from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M126,136v64a6,6,0,0,1-12,0V150.49L44.24,220.24a6,6,0,0,1-8.48-8.48L105.51,142H56a6,6,0,0,1,0-12h64A6,6,0,0,1,126,136ZM208,34H80A14,14,0,0,0,66,48V96a6,6,0,0,0,12,0V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V176a2,2,0,0,1-2,2H160a6,6,0,0,0,0,12h48a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
