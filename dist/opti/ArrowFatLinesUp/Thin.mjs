var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((m, e) => {
  var h = m, { children: a } = h, t = n(h, ["children"]);
  return /* @__PURE__ */ H.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M226.83,117.17l-96-96a4,4,0,0,0-5.66,0l-96,96A4,4,0,0,0,32,124H76v28a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V124h44a4,4,0,0,0,2.83-6.83ZM176,116a4,4,0,0,0-4,4v28H84V120a4,4,0,0,0-4-4H41.66L128,29.66,214.34,116Zm4,100a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,216Zm0-32a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,184Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
