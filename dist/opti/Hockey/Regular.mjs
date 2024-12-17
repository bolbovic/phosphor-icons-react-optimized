var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && l(a, e, r[e]);
  if (H)
    for (var e of H(r))
      p.call(r, e) && l(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M224,152H130.9L38.1,42.82A8,8,0,0,0,25.9,53.18L159.51,210.36A16,16,0,0,0,171.7,216H224a16,16,0,0,0,16-16V168A16,16,0,0,0,224,152Zm-79.5,16H192v32H171.7ZM224,200H208V168h16ZM112.18,179.55a8,8,0,0,0-11.27.91L84.3,200H64V168H85.2a8,8,0,0,0,0-16H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H84.3a16,16,0,0,0,12.19-5.64l16.61-19.53A8,8,0,0,0,112.18,179.55ZM32,168H48v32H32Zm117.9-45.18,68-80a8,8,0,0,1,12.2,10.36l-68,80a8,8,0,1,1-12.2-10.36Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
