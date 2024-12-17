var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (A)
    for (var e of A(t))
      h.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var c = r, { children: a } = c, t = p(c, ["children"]);
  return /* @__PURE__ */ n.createElement(V, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M248,36h0a4,4,0,0,0-4,4c0,1.47-.42,36-28,36-13.94,0-23.08-12.79-32.75-26.33C172.83,35.09,162.06,20,144,20c-14.86,0-25.82,7.79-31.71,22.51A63.73,63.73,0,0,0,108.22,60H88A12,12,0,0,0,76,72V84.08A84,84,0,0,0,112,244h1.51A84,84,0,0,0,148,84.08V72a12,12,0,0,0-12-12H116.24c.92-9.42,5.45-32,27.76-32,13.94,0,23.08,12.79,32.75,26.33C187.17,68.91,197.94,84,216,84c14.86,0,25.82-7.79,31.71-22.51A64.27,64.27,0,0,0,252,40,4,4,0,0,0,248,36ZM140,72V86.66a4,4,0,0,0,2.4,3.66,76,76,0,1,1-60.8,0A4,4,0,0,0,84,86.66V72a4,4,0,0,1,4-4h48A4,4,0,0,1,140,72ZM104.66,204.05A4,4,0,0,1,104,212a5,5,0,0,1-.66-.05,53.46,53.46,0,0,1-43.29-43.29,4,4,0,0,1,7.9-1.32A45.31,45.31,0,0,0,104.66,204.05Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
