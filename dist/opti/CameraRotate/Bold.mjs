var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4Zm-32-92v20a12,12,0,0,1-12,12H148a12,12,0,0,1-7.76-21.14,28.07,28.07,0,0,0-29,2.73A12,12,0,0,1,96.79,94.4a52.28,52.28,0,0,1,61.14-.91A12,12,0,0,1,180,100Zm-18.41,52.8a12,12,0,0,1-2.38,16.8,51.71,51.71,0,0,1-31.13,10.34,52.3,52.3,0,0,1-30-9.44A12,12,0,0,1,76,164V144a12,12,0,0,1,12-12h20a12,12,0,0,1,7.76,21.14,28.07,28.07,0,0,0,29-2.73A12,12,0,0,1,161.59,152.8Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
