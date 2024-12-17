var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (e, a, t) => a in e ? M(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && A(e, t, a[t]);
  if (r)
    for (var t of r(a))
      c.call(a, t) && A(e, t, a[t]);
  return e;
};
var n = (e, a) => {
  var t = {};
  for (var o in e)
    Z.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, t) => {
  var p = o, { children: e } = p, a = n(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, l({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M216,88A88,88,0,0,1,40,88Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M248,80H8a8,8,0,0,0-8,8,128,128,0,0,0,256,0A8,8,0,0,0,248,80ZM77.4,149.91l42.6-42.6V167.6A79.59,79.59,0,0,1,77.4,149.91ZM66.09,138.6A79.59,79.59,0,0,1,48.4,96h60.29ZM136,107.31l42.6,42.6A79.59,79.59,0,0,1,136,167.6Zm53.91,31.29L147.31,96H207.6A79.59,79.59,0,0,1,189.91,138.6ZM128,200A112.15,112.15,0,0,1,16.28,96H32.34a96,96,0,0,0,191.32,0h16.06A112.15,112.15,0,0,1,128,200Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
