var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, h, e) => h in a ? Z(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, H = (a, h) => {
  for (var e in h || (h = {}))
    o.call(h, e) && m(a, e, h[e]);
  if (V)
    for (var e of V(h))
      A.call(h, e) && m(a, e, h[e]);
  return a;
};
var i = (a, h) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      h.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var r = t, { children: a } = r, h = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, H({ ref: e }, h), a, /* @__PURE__ */ p.createElement("path", { d: "M182,50.48V32a14,14,0,0,0-14-14H88A14,14,0,0,0,74,32V50.48A38.05,38.05,0,0,0,42,88V200a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V88A38.05,38.05,0,0,0,182,50.48ZM170,32V50H150V30h18A2,2,0,0,1,170,32ZM118,50V30h20V50ZM88,30h18V50H86V32A2,2,0,0,1,88,30ZM202,200a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V88A26,26,0,0,1,80,62h96a26,26,0,0,1,26,26Zm-44-40a22,22,0,0,1-22,22h-2v10a6,6,0,0,1-12,0V182H112a6,6,0,0,1,0-12h24a10,10,0,0,0,0-20H120a22,22,0,0,1,0-44h2V96a6,6,0,0,1,12,0v10h10a6,6,0,0,1,0,12H120a10,10,0,0,0,0,20h16A22,22,0,0,1,158,160Z" }));
});
f.displayName = "Light";
export {
  f as Light
};