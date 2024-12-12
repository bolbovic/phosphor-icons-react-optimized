var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const l = A((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M136,180a76,76,0,1,0-76-76A76.08,76.08,0,0,0,136,180Zm0-144a68,68,0,1,1-68,68A68.07,68.07,0,0,1,136,36Zm74.89,140.28a4,4,0,0,1-.12,5.65,107.31,107.31,0,0,1-70.77,30V236h28a4,4,0,0,1,0,8H104a4,4,0,0,1,0-8h28V211.92A108,108,0,0,1,58.06,29.23a4,4,0,1,1,5.77,5.54,100,100,0,0,0,141.4,141.39A4,4,0,0,1,210.89,176.28Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
