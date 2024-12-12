var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const l = Z((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M198.74,57.29A99.39,99.39,0,0,0,128,28h-.19a100,100,0,1,0,70.93,29.29ZM62.92,63a91.38,91.38,0,0,1,60.8-26.85A91.31,91.31,0,0,1,96.87,96.89,91.44,91.44,0,0,1,36.1,123.73,91.61,91.61,0,0,1,62.92,63ZM36.09,131.74a99.36,99.36,0,0,0,66.44-29.2,99.25,99.25,0,0,0,29.21-66.45,91.9,91.9,0,0,1,88.17,88.17,100,100,0,0,0-95.65,95.65,91.9,91.9,0,0,1-88.17-88.17Zm157,61.31a91.38,91.38,0,0,1-60.8,26.85,92,92,0,0,1,87.62-87.63A91.61,91.61,0,0,1,193.08,193.05Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
