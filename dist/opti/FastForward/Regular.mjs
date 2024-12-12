var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? L(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && l(e, a, r[a]);
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
  var o = t, { children: e } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M248.67,114.66,160.48,58.5A15.91,15.91,0,0,0,136,71.84v37.3L56.48,58.5A15.91,15.91,0,0,0,32,71.84V184.16A15.92,15.92,0,0,0,56.48,197.5L136,146.86v37.3a15.92,15.92,0,0,0,24.48,13.34l88.19-56.16a15.8,15.8,0,0,0,0-26.68ZM48,183.94V72.07L135.82,128Zm104,0V72.07L239.82,128Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
