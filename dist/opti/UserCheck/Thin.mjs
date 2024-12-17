var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const Z = d((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M133.17,158.84a64,64,0,1,0-50.34,0c-23.76,5.46-45.18,18.69-61.89,38.59a4,4,0,1,0,6.12,5.14C48,177.7,76.71,164,108,164s60,13.7,80.94,38.57a4,4,0,0,0,6.12-5.14C178.35,177.53,156.93,164.3,133.17,158.84ZM52,100a56,56,0,1,1,56,56A56.06,56.06,0,0,1,52,100Zm198.83,30.83-32,32a4,4,0,0,1-5.66,0l-16-16a4,4,0,0,1,5.66-5.66L216,154.34l29.17-29.17a4,4,0,1,1,5.66,5.66Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
