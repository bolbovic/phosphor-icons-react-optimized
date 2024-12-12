var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && A(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && A(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((o, a) => {
  var p = o, { children: e } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M176,96a48,48,0,1,1-48-48A48,48,0,0,1,176,96Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
