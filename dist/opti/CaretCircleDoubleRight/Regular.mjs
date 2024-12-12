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
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((t, e) => {
  var l = t, { children: a } = l, r = i(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-64.57-67.89a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L108.69,128,82.34,101.66A8,8,0,0,1,93.66,90.34Zm56,0a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L164.69,128l-26.35-26.34a8,8,0,0,1,11.32-11.32Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
