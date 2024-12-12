var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && Z(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as p } from "react";
import c from "../../lib/OptiBase.mjs";
const n = p((r, e) => {
  var H = r, { children: a } = H, t = M(H, ["children"]);
  return /* @__PURE__ */ V.createElement(c, o({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M219.92,95.22a1.8,1.8,0,0,0-.1-.33,3.38,3.38,0,0,0-.13-.42,2.58,2.58,0,0,0-.19-.37c-.06-.11-.11-.22-.17-.32a3.62,3.62,0,0,0-.5-.6h0l-56-56h0a2.32,2.32,0,0,0-.33-.27A4,4,0,0,0,160,36H40a4,4,0,0,0-4,4V160a4,4,0,0,0,.9,2.5,2.32,2.32,0,0,0,.27.33l56,56A4,4,0,0,0,96,220H216a4,4,0,0,0,4-4V96A4.13,4.13,0,0,0,219.92,95.22ZM164,49.66,206.34,92H164ZM92,206.34,49.66,164H92ZM92,156H44V49.66l48,48ZM49.66,44H156V92H97.66ZM156,100v56H100V100ZM100,212V164h58.34l48,48Zm112-5.66-48-48V100h48Z" }));
});
n.displayName = "Thin";
export {
  n as Thin
};
