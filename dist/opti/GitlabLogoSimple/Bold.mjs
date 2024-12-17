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
import i, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const B = A((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M234,116.09,214.13,40a15.94,15.94,0,0,0-30.42-1.48L167,84H89L72.29,38.49A15.94,15.94,0,0,0,41.87,40L22,116.09a61.19,61.19,0,0,0,23.57,65.23l73.27,51.77a15.93,15.93,0,0,0,18.36,0l73.27-51.77A61.19,61.19,0,0,0,234,116.09ZM196.6,161.72,128,210.19,59.4,161.72a37.08,37.08,0,0,1-14.19-39.56l13.4-51.3,10.76,29.28A12,12,0,0,0,80.64,108h94.72a12,12,0,0,0,11.27-7.86l10.76-29.28,13.4,51.3A37.08,37.08,0,0,1,196.6,161.72Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
