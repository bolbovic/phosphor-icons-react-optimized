var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && i(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var r in e)
    l.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const E = d((r, a) => {
  var o = r, { children: e } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }));
});
E.displayName = "Thin";
export {
  E as Thin
};