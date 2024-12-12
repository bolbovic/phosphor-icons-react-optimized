var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, V, e) => V in a ? A(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, Z = (a, V) => {
  for (var e in V || (V = {}))
    H.call(V, e) && o(a, e, V[e]);
  if (r)
    for (var e of r(V))
      p.call(V, e) && o(a, e, V[e]);
  return a;
};
var l = (a, V) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && V.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      V.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var t = m, { children: a } = t, V = l(t, ["children"]);
  return /* @__PURE__ */ v.createElement(f, Z({ ref: e }, V), a, /* @__PURE__ */ v.createElement("path", { d: "M104,88v96a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80Zm32,0a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm48-16V208a16,16,0,0,1-16,16H176v16a8,8,0,0,1-16,0V224H96v16a8,8,0,0,1-16,0V224H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H88V24A24,24,0,0,1,112,0h32a24,24,0,0,1,24,24V48h24A16,16,0,0,1,208,64ZM104,48h48V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8Zm88,160V64H64V208H192Z" }));
});
h.displayName = "Regular";
export {
  h as Regular
};
