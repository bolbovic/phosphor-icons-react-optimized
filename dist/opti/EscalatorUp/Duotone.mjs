var V = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && p(a, e, t[e]);
  if (H)
    for (var e of H(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    L.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M232,56V96a8,8,0,0,1-8,8H184L88,208H32a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H72L168,48h56A8,8,0,0,1,232,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M224,40H168a8,8,0,0,0-5.88,2.57L68.5,144H32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H88a8,8,0,0,0,5.88-2.57L187.5,112H224a16,16,0,0,0,16-16V56A16,16,0,0,0,224,40Zm0,56H184a8,8,0,0,0-5.88,2.57L84.5,200H32V160H72a8,8,0,0,0,5.88-2.57L171.5,56H224Zm5.66,74.34a8,8,0,0,1-11.32,11.32L208,171.31V208a8,8,0,0,1-16,0V171.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
