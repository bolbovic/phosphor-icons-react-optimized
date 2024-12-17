var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const A = h((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M171,50.38a250,250,0,0,0-40.73-37.66,4,4,0,0,0-4.58,0A250,250,0,0,0,85,50.38C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.38ZM128,220a76.08,76.08,0,0,1-76-76c0-35.9,21.15-67.8,38.9-88.24A255,255,0,0,1,128,21a255,255,0,0,1,37.1,34.8C182.85,76.2,204,108.1,204,144A76.08,76.08,0,0,1,128,220Zm51.94-67.33a53.51,53.51,0,0,1-43.28,43.27,3.68,3.68,0,0,1-.66.06,4,4,0,0,1-.66-7.94c18.18-3.06,33.63-18.51,36.72-36.73a4,4,0,0,1,7.88,1.34Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
