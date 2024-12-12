var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && Z(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && Z(a, e, r[e]);
  return a;
};
var M = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var o = t, { children: a } = o, r = M(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm81.7,71.3a199.77,199.77,0,0,0-40.94-8.06A199.77,199.77,0,0,0,160.7,46.3,88.57,88.57,0,0,1,209.7,95.3ZM216,128a87.83,87.83,0,0,1-4.28,27.12,200.28,200.28,0,0,0-29.16-49.93,183.12,183.12,0,0,1,32.31,8.75A88.14,88.14,0,0,1,216,128ZM142.06,41.13a183.12,183.12,0,0,1,8.75,32.31,200.28,200.28,0,0,0-49.93-29.16,88.05,88.05,0,0,1,41.18-3.15ZM80.44,54a183.88,183.88,0,0,1,61.25,32.64A200.21,200.21,0,0,0,40.41,119.5,88.11,88.11,0,0,1,80.44,54ZM40.67,138.86a184.08,184.08,0,0,1,112.88-36.41,184.08,184.08,0,0,1-36.41,112.88A88.18,88.18,0,0,1,40.67,138.86Zm95.83,76.73a200.21,200.21,0,0,0,32.87-101.28A183.88,183.88,0,0,1,202,175.56,88.11,88.11,0,0,1,136.5,215.59Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
