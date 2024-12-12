var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? R(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && o(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((t, e) => {
  var l = t, { children: a } = l, r = i(l, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM96,210V152h64v58a88.33,88.33,0,0,1-64,0Zm48-74H112V100.94l32-16Zm46.22,54.22A88.09,88.09,0,0,1,176,201.77V152a16,16,0,0,0-16-16V72a8,8,0,0,0-11.58-7.16l-48,24A8,8,0,0,0,96,96v40a16,16,0,0,0-16,16v49.77a88,88,0,1,1,110.22-11.55Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
