var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as n } from "react";
import Z from "../../lib/OptiBase.mjs";
const E = n((t, e) => {
  var r = t, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M201.57,54.43A104.15,104.15,0,1,0,232,128,104.17,104.17,0,0,0,201.57,54.43Zm-35.9,95.24-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,164.71l26.35-26.36a8,8,0,1,1,11.32,11.32Zm0-56-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,108.68l26.35-26.36a8,8,0,1,1,11.32,11.32Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
