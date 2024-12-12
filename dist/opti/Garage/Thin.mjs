var Z = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ V.createElement(c, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M240,196H228V98.67a12,12,0,0,0-5.34-10L134.66,30a12,12,0,0,0-13.32,0l-88,58.67a12,12,0,0,0-5.34,10V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,98.67a4,4,0,0,1,1.78-3.33l88-58.66a4,4,0,0,1,4.44,0l88,58.66A4,4,0,0,1,220,98.67V196H188V136a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v60H36ZM180,140v24H132V140Zm-56,24H76V140h48Zm-48,8h48v24H76Zm56,0h48v24H132Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
