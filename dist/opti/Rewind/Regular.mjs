var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? A(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && o(e, a, r[a]);
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
  var l = t, { children: e } = l, r = i(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M223.77,58a16,16,0,0,0-16.25.53L128,109.14V71.84A15.91,15.91,0,0,0,103.52,58.5L15.33,114.66a15.8,15.8,0,0,0,0,26.68l88.19,56.16A15.91,15.91,0,0,0,128,184.16v-37.3l79.52,50.64A15.91,15.91,0,0,0,232,184.16V71.84A15.83,15.83,0,0,0,223.77,58ZM112,183.93,24.18,128,112,72.06Zm104,0L128.18,128,216,72.06Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
