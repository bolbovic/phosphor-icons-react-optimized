var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && h.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as Z } from "react";
import M from "../../lib/OptiBase.mjs";
const f = Z((c, e) => {
  var l = c, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ s.createElement(M, i({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M48,118a6,6,0,0,0,6-6V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,1,0,12,0V88a6,6,0,0,0-1.76-4.25l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72A6,6,0,0,0,48,118ZM158,46.48,193.52,82H158ZM226,208a6,6,0,0,1-6,6H192a6,6,0,0,1-6-6V152a6,6,0,0,1,12,0v50h22A6,6,0,0,1,226,208ZM89.83,196a18.85,18.85,0,0,1-8.3,13.82C76.71,213.05,70.66,214,65.16,214a58.87,58.87,0,0,1-14.67-2,6,6,0,0,1,3.23-11.56c3.71,1,15.58,3.11,21.19-.62a6.85,6.85,0,0,0,3-5.34c.57-4.43-2.08-6.26-14.2-9.76-9.31-2.69-23.37-6.75-21.57-20.94a18.61,18.61,0,0,1,8.08-13.54c11.11-7.49,29.18-3,31.2-2.48a6,6,0,1,1-3.06,11.6c-3.79-1-15.85-2.95-21.44.84a6.59,6.59,0,0,0-2.88,5.08c-.41,3.22,2.14,4.78,13,7.91C76.93,176.08,91.85,180.39,89.83,196ZM136,146c-16.54,0-30,15.25-30,34s13.45,34,30,34a27.32,27.32,0,0,0,16.15-5.37l3.61,3.61a6,6,0,1,0,8.49-8.48l-3.91-3.91A36.94,36.94,0,0,0,166,180C166,161.24,152.55,146,136,146Zm0,56c-9.92,0-18-9.87-18-22s8.07-22,18-22,18,9.87,18,22a25.58,25.58,0,0,1-2.45,11.06l-3.3-3.3a6,6,0,0,0-8.49,8.48l3.75,3.75A15.32,15.32,0,0,1,136,202Z" }));
});
f.displayName = "Light";
export {
  f as Light
};