var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import c from "../../lib/OptiBase.mjs";
const f = h((m, e) => {
  var o = m, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, H({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V216a12,12,0,0,0,17.37,10.73L64,213.42l26.63,13.31a12,12,0,0,0,10.74,0L128,213.42l26.63,13.31a12,12,0,0,0,10.74,0L192,213.42l26.63,13.31A12,12,0,0,0,236,216V56A20,20,0,0,0,216,36Zm-4,160.58-14.63-7.31a12,12,0,0,0-10.74,0L160,202.58l-26.63-13.31a12,12,0,0,0-10.74,0L96,202.58,69.37,189.27a12,12,0,0,0-10.74,0L44,196.58V60H212ZM136,108a12,12,0,0,1,12-12h36a12,12,0,0,1,0,24H148A12,12,0,0,1,136,108Zm0,40a12,12,0,0,1,12-12h36a12,12,0,0,1,0,24H148A12,12,0,0,1,136,148ZM72,172h40a12,12,0,0,0,12-12V96a12,12,0,0,0-12-12H72A12,12,0,0,0,60,96v64A12,12,0,0,0,72,172Zm12-64h16v40H84Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
