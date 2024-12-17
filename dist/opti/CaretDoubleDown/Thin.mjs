var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const E = d((r, e) => {
  var l = r, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M210.83,133.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,210.34l77.17-77.17A4,4,0,0,1,210.83,133.17Zm-85.66,5.66a4,4,0,0,0,5.66,0l80-80a4,4,0,1,0-5.66-5.66L128,130.34,50.83,53.17a4,4,0,0,0-5.66,5.66Z" }));
});
E.displayName = "Thin";
export {
  E as Thin
};
