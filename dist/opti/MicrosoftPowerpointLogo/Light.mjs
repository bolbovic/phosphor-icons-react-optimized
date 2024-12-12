var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && A(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import i, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((H, e) => {
  var r = H, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ i.createElement(c, o({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M96,98H80a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V142H96a22,22,0,0,0,0-44Zm0,32H86V110H96a10,10,0,0,1,0,20ZM136,26A102.35,102.35,0,0,0,55,66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H55A102,102,0,1,0,136,26Zm89.8,96H158V80a14,14,0,0,0-14-14h-2V38.2A90.15,90.15,0,0,1,225.8,122ZM130,38.21V66H70.78A90.39,90.39,0,0,1,130,38.21ZM38,176V80a2,2,0,0,1,2-2H144a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm32.78,14H130v27.79A90.39,90.39,0,0,1,70.78,190ZM142,217.8V190h2a14,14,0,0,0,14-14V134h67.8A90.14,90.14,0,0,1,142,217.8Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
