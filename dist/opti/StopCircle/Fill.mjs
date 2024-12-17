var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
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
import s, { forwardRef as n } from "react";
import h from "../../lib/OptiBase.mjs";
const E = n((r, e) => {
  var l = r, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm32,132a4,4,0,0,1-4,4H100a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
