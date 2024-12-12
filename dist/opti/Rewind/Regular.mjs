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
import d, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const n = A((r, a) => {
  var m = r, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, s({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M223.77,58a16,16,0,0,0-16.25.53L128,109.14V71.84A15.91,15.91,0,0,0,103.52,58.5L15.33,114.66a15.8,15.8,0,0,0,0,26.68l88.19,56.16A15.91,15.91,0,0,0,128,184.16v-37.3l79.52,50.64A15.91,15.91,0,0,0,232,184.16V71.84A15.83,15.83,0,0,0,223.77,58ZM112,183.93,24.18,128,112,72.06Zm104,0L128.18,128,216,72.06Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
