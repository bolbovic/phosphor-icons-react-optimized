var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((l, e) => {
  var r = l, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L53.93,64.36A84,84,0,0,0,116,187.13V196H32a12,12,0,0,0,0,24H195.42l3.7,4.07a12,12,0,0,0,17.76-16.14ZM68,104a59.84,59.84,0,0,1,3.52-20.29l12.91,14.2A44,44,0,0,0,128,148c.64,0,1.28,0,1.92-.05l12.9,14.19A60,60,0,0,1,68,104Zm72,92v-8.87a84.41,84.41,0,0,0,20.42-5.63L173.6,196ZM88.89,42.35a12,12,0,0,1,6.37-15.73A84,84,0,0,1,201.91,143.94a12,12,0,0,1-10.56,6.29,11.84,11.84,0,0,1-5.7-1.45,12,12,0,0,1-4.84-16.26,60,60,0,0,0-76.19-83.8A12,12,0,0,1,88.89,42.35ZM172,103.64a12,12,0,0,1-11.9,12.1H160a12,12,0,0,1-12-11.91A20,20,0,0,0,130.06,84.1a12,12,0,1,1,2.42-23.87A43.92,43.92,0,0,1,172,103.64Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
