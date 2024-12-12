var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && H(a, e, r[e]);
  if (l)
    for (var e of l(r))
      v.call(r, e) && H(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && v.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var m = t, { children: a } = m, r = h(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M252.44,121.34l-48-32A8,8,0,0,0,192,96v24H72V72h33a32,32,0,1,0,0-16H72A16,16,0,0,0,56,72v48H8a8,8,0,0,0,0,16H56v48a16,16,0,0,0,16,16h32v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H120a16,16,0,0,0-16,16v8H72V136H192v24a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM136,48a16,16,0,1,1-16,16A16,16,0,0,1,136,48ZM120,176h32v32H120Zm88-30.95V111l25.58,17Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
