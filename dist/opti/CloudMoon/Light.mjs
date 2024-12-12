var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(l, A({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M172,74a74.41,74.41,0,0,0-14.17,1.36,70,70,0,0,0-54.11-63.59A6,6,0,0,0,96.53,19,58.06,58.06,0,0,1,27,88.53a6,6,0,0,0-7.19,7.19,70.22,70.22,0,0,0,33.3,44.95A50,50,0,0,0,92,222h80a74,74,0,0,0,0-148ZM34.22,101.76Q37.1,102,40,102a70.08,70.08,0,0,0,70-70c0-1.94-.08-3.88-.24-5.8A57.64,57.64,0,0,1,146,78.71,74.32,74.32,0,0,0,102.2,123,50.36,50.36,0,0,0,92,122a49.74,49.74,0,0,0-29.86,9.92A58.24,58.24,0,0,1,34.22,101.76ZM172,210H92a38,38,0,1,1,7.08-75.34,75.84,75.84,0,0,0-1.07,9,6,6,0,0,0,12,.7,61.54,61.54,0,0,1,2-12.24c0-.15.08-.29.11-.43A62.06,62.06,0,1,1,172,210Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
