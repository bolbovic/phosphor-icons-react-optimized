var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const C = h((c, e) => {
  var m = c, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M219.08,155.84a4,4,0,0,1-.53,5.63C203.56,173.9,188.9,180,173.93,180a54.84,54.84,0,0,1-6.12-.34c-15-1.65-28.6-9-41.72-16.14-25.52-13.86-49.62-27-83.54,1.18a4,4,0,0,1-5.1-6.16c17-14.12,33.62-20.07,50.74-18.2,15,1.65,28.6,9,41.72,16.15,25.52,13.86,49.62,26.94,83.54-1.18A4,4,0,0,1,219.08,155.84ZM42.55,100.69c33.92-28.12,58-15,83.54-1.18,13.12,7.13,26.69,14.5,41.72,16.15a57.32,57.32,0,0,0,6.12.33c15,0,29.63-6.1,44.62-18.53a4,4,0,1,0-5.1-6.16c-33.92,28.13-58,15-83.54,1.18C116.79,85.35,103.22,78,88.19,76.34c-17.12-1.88-33.72,4.07-50.74,18.19a4,4,0,1,0,5.1,6.16Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
