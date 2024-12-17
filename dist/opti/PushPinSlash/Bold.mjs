var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      A.call(l, e) && r(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var o = t, { children: a } = o, l = d(o, ["children"]);
  return /* @__PURE__ */ f.createElement(n, c({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07L60,71A76,76,0,0,0,35.46,84.51a20,20,0,0,0-1.6,29.73l45.46,45.47-39.8,39.8a12,12,0,0,0,17,17l39.8-39.81,45.47,45.46A20,20,0,0,0,155.9,228c.47,0,.94,0,1.41-.05A20,20,0,0,0,171.87,220a97.47,97.47,0,0,0,9.54-15.46l17.72,19.49a12,12,0,1,0,17.76-16.14Zm98.49,169.88L54.08,100.52C62,95,70.31,92.12,78.91,91.83l84.51,93A62,62,0,0,1,155.37,201.81Zm82.78-95-39,39.11a12,12,0,1,1-17-16.95l36.19-36.3-55-55L130.59,70.5a12,12,0,0,1-17-16.94l35.57-35.69a20,20,0,0,1,28.3,0l60.69,60.68A20,20,0,0,1,238.15,106.83Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
