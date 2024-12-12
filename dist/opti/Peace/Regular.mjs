var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, Z = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      A.call(r, a) && l(e, a, r[a]);
  return e;
};
var c = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && A.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((t, a) => {
  var o = t, { children: e } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.48,87.48,0,0,1-11.64,43.7L136,123.84V40.37A88.11,88.11,0,0,1,216,128ZM120,40.37v83.47L51.64,171.7A88,88,0,0,1,120,40.37ZM60.84,184.79,120,143.37v72.26A87.85,87.85,0,0,1,60.84,184.79ZM136,215.63V143.37l59.16,41.42A87.85,87.85,0,0,1,136,215.63Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
