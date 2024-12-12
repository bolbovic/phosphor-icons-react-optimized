var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      l.call(t, a) && c(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && l.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = R((r, a) => {
  var s = r, { children: e } = s, t = f(s, ["children"]);
  return /* @__PURE__ */ d.createElement(Z, p({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144c-14.23,0-26,6.44-34,18.61-6.47,9.86-10,23.14-10,37.39s3.56,27.53,10,37.39c8,12.18,19.74,18.61,34,18.61s26-6.43,34-18.61c6.47-9.86,10-23.14,10-37.39s-3.56-27.53-10-37.39C154,78.44,142.23,72,128,72Zm0,96c-22.1,0-28-25.14-28-40s5.9-40,28-40,28,25.14,28,40S150.1,168,128,168Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
