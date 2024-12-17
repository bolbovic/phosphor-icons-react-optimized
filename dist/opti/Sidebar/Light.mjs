var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((H, e) => {
  var m = H, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM38,200V150H56a6,6,0,0,0,0-12H38V118H56a6,6,0,0,0,0-12H38V86H56a6,6,0,0,0,0-12H38V56a2,2,0,0,1,2-2H82V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H94V54H216a2,2,0,0,1,2,2Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
