var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    Z.call(t, a) && p(e, a, t[a]);
  if (H)
    for (var a of H(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var o in e)
    Z.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && H)
    for (var o of H(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((o, a) => {
  var r = o, { children: e } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(f, l({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M232,96H24L128,32Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
