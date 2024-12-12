var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var V in a)
    H.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      t.indexOf(V) < 0 && o.call(a, V) && (e[V] = a[V]);
  return e;
};
import i, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((V, e) => {
  var h = V, { children: a } = h, t = Z(h, ["children"]);
  return /* @__PURE__ */ i.createElement(c, A({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M182,50.48V32a14,14,0,0,0-14-14H88A14,14,0,0,0,74,32V50.48A38.05,38.05,0,0,0,42,88V200a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V88A38.05,38.05,0,0,0,182,50.48ZM54,110H202v68H54ZM170,32V50H150V30h18A2,2,0,0,1,170,32ZM118,50V30h20V50ZM88,30h18V50H86V32A2,2,0,0,1,88,30ZM80,62h96a26,26,0,0,1,26,26V98H54V88A26,26,0,0,1,80,62Zm96,164H80a26,26,0,0,1-26-26V190H202v10A26,26,0,0,1,176,226Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
