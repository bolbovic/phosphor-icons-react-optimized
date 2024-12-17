var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && H(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && H(e, a, t[a]);
  return e;
};
var V = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = i((o, a) => {
  var p = o, { children: e } = p, t = V(p, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, n({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M184,128v64H72V128Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M240,184h-8V57.9l9.67-2.08a8,8,0,1,0-3.35-15.64l-224,48A8,8,0,0,0,16,104a8.16,8.16,0,0,0,1.69-.18L24,102.47V184H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,99,216,61.33V184H192V128a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40Zm136,53H80V136h96ZM80,168h96v16H80Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
