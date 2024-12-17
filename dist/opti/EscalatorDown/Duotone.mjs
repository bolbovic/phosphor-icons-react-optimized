var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (H)
    for (var e of H(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const f = V((o, e) => {
  var m = o, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,160v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88l96,104h40A8,8,0,0,1,232,160Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM240,160v40a16,16,0,0,1-16,16H168a8,8,0,0,1-5.88-2.57L68.5,112H32A16,16,0,0,1,16,96V56A16,16,0,0,1,32,40H88a8,8,0,0,1,5.88,2.57L187.5,144H224A16,16,0,0,1,240,160Zm-16,0H184a8,8,0,0,1-5.88-2.57L84.5,56H32V96H72a8,8,0,0,1,5.88,2.57L171.5,200H224Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
