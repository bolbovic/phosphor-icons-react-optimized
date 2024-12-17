var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && L(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ A.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M248,114H219.06L171,47.77a14,14,0,0,0-22.16-.61L135.93,62.08a1.15,1.15,0,0,0-.14.17,10,10,0,0,1-15.58,0,1.15,1.15,0,0,0-.14-.17L107.2,47.16A14,14,0,0,0,85,47.77L36.94,114H8a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12ZM94.75,54.82a2,2,0,0,1,3.15-.07l.15.17,12.86,14.92A21.88,21.88,0,0,0,128,78h0a21.88,21.88,0,0,0,17.09-8.16L158,54.92l.15-.17a2,2,0,0,1,3.15.07l43,59.18H51.77ZM180,146a34,34,0,0,0-33.94,32H109.94a34,34,0,1,0-1.44,12h39A34,34,0,1,0,180,146ZM76,202a22,22,0,1,1,22-22A22,22,0,0,1,76,202Zm104,0a22,22,0,1,1,22-22A22,22,0,0,1,180,202Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
