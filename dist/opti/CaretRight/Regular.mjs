var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      f.call(t, a) && o(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && f.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as R } from "react";
import n from "../../lib/OptiBase.mjs";
const u = R((r, a) => {
  var m = r, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(n, s({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
