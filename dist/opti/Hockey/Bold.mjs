var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M224,148H132.75L41.14,40.23A12,12,0,0,0,22.86,55.77l95.16,112,.06.07L156.46,213A20,20,0,0,0,171.7,220H224a20,20,0,0,0,20-20V168A20,20,0,0,0,224,148Zm-70.85,24H180v24h-6.45ZM220,196H204V172h16Zm-66.34-83.77,61.2-72a12,12,0,0,1,18.28,15.54l-61.2,72a12,12,0,1,1-18.28-15.54Zm-44.14,70.45a12,12,0,0,0-16.91,1.37L82.45,196H76V171.93A12,12,0,0,0,74.7,148H32a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H84.3A20,20,0,0,0,99.54,213l11.35-13.36A12,12,0,0,0,109.52,182.68ZM36,172H52v24H36Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
