var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M232.49,112.49l-48,48a12,12,0,0,1-17-17L207,104,167.51,64.48a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,112.49Zm-56-17-48-48a12,12,0,1,0-17,17L139,92H128A108.12,108.12,0,0,0,20,200a12,12,0,0,0,24,0,84.09,84.09,0,0,1,84-84h11l-27.52,27.51a12,12,0,0,0,17,17l48-48A12,12,0,0,0,176.49,95.51Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
