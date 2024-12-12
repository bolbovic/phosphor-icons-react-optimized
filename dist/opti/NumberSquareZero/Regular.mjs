var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (e, r, a) => r in e ? H(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, l = (e, r) => {
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
import i, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = R((t, a) => {
  var c = t, { children: e } = c, r = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(V, l({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M128,72c-14.23,0-26,6.44-34,18.61-6.47,9.86-10,23.14-10,37.39s3.56,27.53,10,37.39c8,12.17,19.74,18.61,34,18.61s26-6.44,34-18.61c6.47-9.86,10-23.14,10-37.39s-3.56-27.53-10-37.39C154,78.44,142.23,72,128,72Zm0,96c-22.1,0-28-25.14-28-40s5.9-40,28-40,28,25.14,28,40S150.1,168,128,168ZM208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
