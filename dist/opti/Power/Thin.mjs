var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const C = h((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M124,128V48a4,4,0,0,1,8,0v80a4,4,0,0,1-8,0Zm54.18-75.35a4,4,0,1,0-4.36,6.7C198.08,75.17,212,100.2,212,128a84,84,0,0,1-168,0c0-27.8,13.92-52.83,38.18-68.65a4,4,0,0,0-4.36-6.7C51.24,70,36,97.44,36,128a92,92,0,0,0,184,0C220,97.44,204.76,70,178.18,52.65Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
