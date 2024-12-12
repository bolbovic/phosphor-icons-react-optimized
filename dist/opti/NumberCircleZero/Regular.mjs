var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, l = (e, r) => {
  for (var a in r || (r = {}))
    o.call(r, a) && s(e, a, r[a]);
  if (m)
    for (var a of m(r))
      p.call(r, a) && s(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((t, a) => {
  var c = t, { children: e } = c, r = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(d, l({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144c-14.23,0-26,6.44-34,18.61-6.47,9.86-10,23.14-10,37.39s3.56,27.53,10,37.39c8,12.18,19.74,18.61,34,18.61s26-6.43,34-18.61c6.47-9.86,10-23.14,10-37.39s-3.56-27.53-10-37.39C154,78.44,142.23,72,128,72Zm0,96c-22.1,0-28-25.14-28-40s5.9-40,28-40,28,25.14,28,40S150.1,168,128,168Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
