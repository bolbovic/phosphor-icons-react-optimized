var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var H = m, { children: a } = H, t = f(H, ["children"]);
  return /* @__PURE__ */ s.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M224,152V96a8,8,0,0,0-8-8H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8v64h0v56a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V152Zm-68.69,56L48,100.69V59.31L196.69,208Zm-96-160h41.38L208,155.31v41.38ZM208,132.69,179.31,104H208Zm-56-56L123.31,48H152ZM48,123.31,76.69,152H48Zm56,56L132.69,208H104Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
