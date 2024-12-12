var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, H = (e, r) => {
  for (var a in r || (r = {}))
    V.call(r, a) && p(e, a, r[a]);
  if (m)
    for (var a of m(r))
      l.call(r, a) && p(e, a, r[a]);
  return e;
};
var c = (e, r) => {
  var a = {};
  for (var t in e)
    V.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = s((t, a) => {
  var o = t, { children: e } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(R, H({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
