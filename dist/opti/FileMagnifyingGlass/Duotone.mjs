var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, V = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && c(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as H } from "react";
import M from "../../lib/OptiBase.mjs";
const d = H((o, a) => {
  var p = o, { children: e } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ m.createElement(M, V({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-45.54-48.85a36.05,36.05,0,1,0-11.31,11.31l11.19,11.2a8,8,0,0,0,11.32-11.32ZM104,148a20,20,0,1,1,20,20A20,20,0,0,1,104,148Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
