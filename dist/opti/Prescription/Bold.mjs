var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
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
import i, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const B = h((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M189,188l19.52-19.51a12,12,0,0,0-17-17L172,171,138.93,138A56,56,0,0,0,124,28H72A12,12,0,0,0,60,40V192a12,12,0,0,0,24,0V140h23l48,48-19.52,19.51a12,12,0,0,0,17,17L172,205l19.51,19.52a12,12,0,0,0,17-17ZM84,52h40a32,32,0,0,1,0,64H84Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
