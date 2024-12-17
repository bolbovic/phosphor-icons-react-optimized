var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L52,62.24V216a28,28,0,0,0,28,28h96a28,28,0,0,0,26-17.61,12,12,0,0,0,14.88-18.46ZM176,220H80a4,4,0,0,1-4-4V88.64L180,203v13A4,4,0,0,1,176,220ZM75.51,24a12,12,0,0,1,12-12H176a28,28,0,0,1,28,28v98.94a12,12,0,0,1-24,0V40a4,4,0,0,0-4-4H87.51A12,12,0,0,1,75.51,24Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
