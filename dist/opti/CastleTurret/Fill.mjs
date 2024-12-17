var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && l(a, e, t[e]);
  if (H)
    for (var e of H(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var V = r, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H180a8,8,0,0,0-8,8V64H148V40a8,8,0,0,0-8-8H116a8,8,0,0,0-8,8V64H84V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM112,168a16,16,0,0,1,32,0v48H112Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
