var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var l = r, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M136,116a12,12,0,1,1,12,12A12,12,0,0,1,136,116Zm87.8-30.62A80.09,80.09,0,0,1,144,160H112a12,12,0,0,0,0,24h56a8,8,0,0,1,0,16H120v16h32a8,8,0,0,1,0,16H96A80,80,0,0,1,96,72H212a12,12,0,0,0,0-24H128a24,24,0,0,1-24-24,8,8,0,0,1,16,0,8,8,0,0,0,8,8h84a28,28,0,0,1,11.8,53.38Zm-173,111.91,33.22-23.73c0-.51,0-1,0-1.56a28,28,0,0,1,1-7.48L33,140.87a63.74,63.74,0,0,0,17.84,56.42Zm39-8.2L64.12,207.46A63.6,63.6,0,0,0,96,216h8V198.83A28.13,28.13,0,0,1,89.84,189.09ZM104,145.17V88H96a64.07,64.07,0,0,0-58.22,37.48l55.87,25.39A28,28,0,0,1,104,145.17ZM207.5,88H120v56h24A64.09,64.09,0,0,0,207.5,88Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
