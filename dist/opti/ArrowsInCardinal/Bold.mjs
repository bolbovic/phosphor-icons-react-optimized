var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      d.call(l, e) && r(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((t, e) => {
  var o = t, { children: a } = o, l = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, L({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M87.51,72.49a12,12,0,0,1,17-17L116,67V24a12,12,0,0,1,24,0V67l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0Zm49,79a12,12,0,0,0-17,0l-32,32a12,12,0,0,0,17,17L116,189v43a12,12,0,0,0,24,0V189l11.51,11.52a12,12,0,0,0,17-17ZM232,116H189l11.52-11.51a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,0,0,17-17L189,140h43a12,12,0,0,0,0-24Zm-127.51,3.51-32-32a12,12,0,0,0-17,17L67,116H24a12,12,0,0,0,0,24H67L55.51,151.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,104.49,119.51Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
