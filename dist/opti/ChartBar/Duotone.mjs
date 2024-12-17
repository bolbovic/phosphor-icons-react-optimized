var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, V = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var h = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import H, { forwardRef as M } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = M((o, a) => {
  var m = o, { children: e } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ H.createElement(Z, V({ ref: a }, t), e, /* @__PURE__ */ H.createElement("path", { d: "M208,40V208H152V40Z", opacity: "0.2" }), /* @__PURE__ */ H.createElement("path", { d: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
