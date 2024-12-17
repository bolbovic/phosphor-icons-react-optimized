var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ L.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M216,108H71.26L209,71.64a4,4,0,0,0,2.84-4.92l-8.16-30a11.92,11.92,0,0,0-14.54-8.31L36.83,68.61a11.78,11.78,0,0,0-7.26,5.53A11.59,11.59,0,0,0,28.41,83l7.67,28.19A3.87,3.87,0,0,0,36,112v88a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V112A4,4,0,0,0,216,108ZM126,53.33l38,21.92L116.08,87.9,78.12,66Zm65.16-17.2a4,4,0,0,1,1-.13A3.88,3.88,0,0,1,196,38.81l7.1,26.12L175,72.35,137,50.43Zm-154.7,42a3.86,3.86,0,0,1,2.37-1.8l28.27-7.46,38,21.91L43.25,107.12,36.13,80.94A3.66,3.66,0,0,1,36.5,78.14ZM212,200a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V116H212Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
