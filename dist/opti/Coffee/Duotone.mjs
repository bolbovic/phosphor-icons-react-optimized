var H = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((m, e) => {
  var V = m, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ r.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M208,88v48a88,88,0,0,1-51.3,80H83.3A88,88,0,0,1,32,136V88Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
