var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      f.call(t, a) && l(e, a, t[a]);
  return e;
};
var V = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && f.call(e, r) && (a[r] = e[r]);
  return a;
};
import c, { forwardRef as i } from "react";
import H from "../../lib/OptiBase.mjs";
const R = i((r, a) => {
  var o = r, { children: e } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, s({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
