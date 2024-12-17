var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && m(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import V, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const f = A((o, a) => {
  var c = o, { children: e } = c, t = i(c, ["children"]);
  return /* @__PURE__ */ V.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ V.createElement(
    "path",
    {
      d: "M224,125.77V152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18A8,8,0,0,1,224,125.77Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ V.createElement("path", { d: "M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM64,56H192v44.9L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9Zm152,96c0,24.91-23.68,43-43.55,53.83A228.13,228.13,0,0,1,128,223.72,226.85,226.85,0,0,1,83.81,206C47.6,186.35,40,165.79,40,152V125.77L120,99.1V168a8,8,0,0,0,16,0V99.1l80,26.67Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
