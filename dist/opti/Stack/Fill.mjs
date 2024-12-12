var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? f(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, d = (e, l) => {
  for (var a in l || (l = {}))
    c.call(l, a) && o(e, a, l[a]);
  if (r)
    for (var a of r(l))
      i.call(l, a) && o(e, a, l[a]);
  return e;
};
var n = (e, l) => {
  var a = {};
  for (var t in e)
    c.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      l.indexOf(t) < 0 && i.call(e, t) && (a[t] = e[t]);
  return a;
};
import m, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const E = s((t, a) => {
  var p = t, { children: e } = p, l = n(p, ["children"]);
  return /* @__PURE__ */ m.createElement(A, d({ ref: a }, l), e, /* @__PURE__ */ m.createElement("path", { d: "M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z" }), /* @__PURE__ */ m.createElement("path", { d: "M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z" }), /* @__PURE__ */ m.createElement("path", { d: "M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
