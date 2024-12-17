var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      A.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM115.58,84.84a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,112,172a8,8,0,0,0,8-8V92A8,8,0,0,0,115.58,84.84ZM104,148,77.33,128,104,108Zm75.58-63.16a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,176,172a8,8,0,0,0,8-8V92A8,8,0,0,0,179.58,84.84ZM168,148l-26.67-20L168,108Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
