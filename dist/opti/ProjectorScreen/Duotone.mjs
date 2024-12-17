var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var V = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && V(e, a, t[a]);
  if (r)
    for (var a of r(t))
      c.call(t, a) && V(e, a, t[a]);
  return e;
};
var h = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as M } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = M((o, a) => {
  var p = o, { children: e } = p, t = h(p, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, n({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M208,72V184H48V72Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8,8,0,0,1,128,240ZM40,48H216V64H40ZM200,176H56V80H200Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
