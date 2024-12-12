var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import d, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const A = l((c, e) => {
  var r = c, { children: a } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ d.createElement(n, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M152,86a30,30,0,1,0-30-30A30,30,0,0,0,152,86Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,38Zm66.49,100.86c-.59.27-7.17,3.13-18.88,3.13-13.86,0-34.9-4-61.73-21a165.89,165.89,0,0,1-17.43,36.51c9.43,2.78,22,7.72,33.19,16.26C172.46,188.05,182,207.65,182,232a6,6,0,0,1-12,0c0-44-37.23-59.18-56.91-64.11q-1.2,1.55-2.46,3.09c-19.25,23.31-43.34,35.45-70.11,35.45A90.72,90.72,0,0,1,31.4,206,6,6,0,0,1,32.6,194c26.63,2.66,49.77-7.66,68.77-30.69,13.16-15.94,21.94-35.51,26.08-49.15-40.51-24.52-66.59-4.78-67.72-3.89a6,6,0,0,1-7.48-9.38c.37-.3,9.39-7.43,24.76-10,13.86-2.31,35.92-1.3,62.36,16.67,47.14,32,73.88,20.47,74.14,20.35a6,6,0,1,1,5,10.92Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
