var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? L(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && l(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, a) => {
  var o = t, { children: e } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
