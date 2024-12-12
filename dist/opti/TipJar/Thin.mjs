var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, h, e) => h in a ? n(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, i = (a, h) => {
  for (var e in h || (h = {}))
    H.call(h, e) && r(a, e, h[e]);
  if (V)
    for (var e of V(h))
      o.call(h, e) && r(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      h.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var m = t, { children: a } = m, h = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, i({ ref: e }, h), a, /* @__PURE__ */ Z.createElement("path", { d: "M180,52.23V32a12,12,0,0,0-12-12H88A12,12,0,0,0,76,32V52.23A36,36,0,0,0,44,88V200a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V88A36,36,0,0,0,180,52.23ZM148,28h20a4,4,0,0,1,4,4V52H148Zm-32,0h24V52H116ZM84,32a4,4,0,0,1,4-4h20V52H84ZM204,200a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V88A28,28,0,0,1,80,60h96a28,28,0,0,1,28,28Zm-48-40a20,20,0,0,1-20,20h-4v12a4,4,0,0,1-8,0V180H112a4,4,0,0,1,0-8h24a12,12,0,0,0,0-24H120a20,20,0,0,1,0-40h4V96a4,4,0,0,1,8,0v12h12a4,4,0,0,1,0,8H120a12,12,0,0,0,0,24h16A20,20,0,0,1,156,160Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
