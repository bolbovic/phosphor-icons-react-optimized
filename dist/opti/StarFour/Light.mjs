var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228.81,114.89,164.5,91.5,141.11,27.19a13.95,13.95,0,0,0-26.22,0L91.5,91.5,27.19,114.89a13.95,13.95,0,0,0,0,26.22L91.5,164.5l23.39,64.31a13.95,13.95,0,0,0,26.22,0L164.5,164.5l64.31-23.39a13.95,13.95,0,0,0,0-26.22Zm-4.1,15-66.94,24.34a6,6,0,0,0-3.59,3.59l-24.34,66.94a2,2,0,0,1-3.68,0l-24.34-66.94a6,6,0,0,0-3.59-3.59L31.29,129.84a2,2,0,0,1,0-3.68l66.94-24.34a6,6,0,0,0,3.59-3.59l24.34-66.94a2,2,0,0,1,3.68,0l24.34,66.94a6,6,0,0,0,3.59,3.59l66.94,24.34a2,2,0,0,1,0,3.68Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
