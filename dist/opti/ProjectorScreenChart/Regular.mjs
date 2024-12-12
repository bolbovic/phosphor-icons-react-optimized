var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? l(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && o(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var V = t, { children: a } = V, r = v(V, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, r), a, /* @__PURE__ */ A.createElement("path", { d: "M88,144V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v24A8,8,0,0,0,128,152Zm32,0a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,160,152Zm56-72v96h8a8,8,0,0,1,0,16H136v17.38a24,24,0,1,1-16,0V192H32a8,8,0,0,1,0-16h8V80A16,16,0,0,1,24,64V48A16,16,0,0,1,40,32H216a16,16,0,0,1,16,16V64A16,16,0,0,1,216,80ZM136,232a8,8,0,1,0-8,8A8,8,0,0,0,136,232ZM40,64H216V48H40ZM200,80H56v96H200Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
