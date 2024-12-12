var s = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const M = d((r, e) => {
  var m = r, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ f.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M184,128a246.64,246.64,0,0,1-18.54,94.24,8,8,0,0,1-7.4,5,8.19,8.19,0,0,1-3-.6,8,8,0,0,1-4.36-10.45A230.67,230.67,0,0,0,168,128a8,8,0,0,1,16,0ZM128,88a40.06,40.06,0,0,1,29.81,13.33,8,8,0,1,0,11.92-10.67A56,56,0,0,0,72,128a136.06,136.06,0,0,1-17,65.85,8,8,0,1,0,14,7.76A152.14,152.14,0,0,0,88,128,40,40,0,0,1,128,88Zm0-64a103.75,103.75,0,0,0-34.67,5.92A8,8,0,0,0,98.67,45,88.05,88.05,0,0,1,216,128a281.31,281.31,0,0,1-6.94,62.23,8,8,0,0,0,6,9.57,7.77,7.77,0,0,0,1.78.2,8,8,0,0,0,7.8-6.23A298.11,298.11,0,0,0,232,128,104.11,104.11,0,0,0,128,24ZM69.34,62.42A8,8,0,1,0,58.67,50.49,104.16,104.16,0,0,0,24,128a87.29,87.29,0,0,1-8,36.66,8,8,0,0,0,14.54,6.68A103.17,103.17,0,0,0,40,128,88.13,88.13,0,0,1,69.34,62.42Zm44.58,138.32a8,8,0,0,0-10.61,3.93c-1.92,4.2-4,8.39-6.29,12.44A8,8,0,0,0,100.14,228a7.88,7.88,0,0,0,3.87,1,8,8,0,0,0,7-4.12c2.44-4.41,4.74-9,6.84-13.52A8,8,0,0,0,113.92,200.74ZM128,120a8,8,0,0,0-8,8,185.07,185.07,0,0,1-5.79,46,8,8,0,0,0,5.75,9.74,8.12,8.12,0,0,0,2,.25,8,8,0,0,0,7.74-6,200.68,200.68,0,0,0,6.3-50A8,8,0,0,0,128,120Z" }));
});
M.displayName = "Regular";
export {
  M as Regular,
  M as default
};
