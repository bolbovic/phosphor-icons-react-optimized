var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import V, { forwardRef as i } from "react";
import H from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var r = o, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ V.createElement(H, Z({ ref: e }, t), a, /* @__PURE__ */ V.createElement(
    "path",
    {
      d: "M16,72H120V184H104a24,24,0,0,0-48,0,24,24,0,0,0-48,0V80A8,8,0,0,1,16,72Zm200,32V96a48,48,0,0,0-48-48h-8a8,8,0,0,0-8,8V184h48a24,24,0,0,1,48,0V136A32,32,0,0,0,216,104Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ V.createElement("path", { d: "M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM160,56h8a40,40,0,0,1,40,40v8a8,8,0,0,0,8,8,24,24,0,0,1,24,24v20.31A31.71,31.71,0,0,0,224,152a32.06,32.06,0,0,0-31,24H160ZM112,80v96h-1a32,32,0,0,0-55-13.13,31.9,31.9,0,0,0-40-6.56V80ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
