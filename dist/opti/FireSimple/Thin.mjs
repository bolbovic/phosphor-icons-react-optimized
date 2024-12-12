var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const C = d((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M140.82,20.92a4,4,0,0,0-6.31,1.71l-24.15,66.2L81.81,61.13a4,4,0,0,0-6,.44C54.71,89.25,44,117,44,144a84,84,0,0,0,168,0C212,86.24,162.22,38.69,140.82,20.92ZM128,220a76.08,76.08,0,0,1-76-76c0-24.07,9.25-48.93,27.5-74l29.71,28.83a4,4,0,0,0,6.55-1.5l24.3-66.6C162.27,50.09,204,93.18,204,144A76.08,76.08,0,0,1,128,220Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
