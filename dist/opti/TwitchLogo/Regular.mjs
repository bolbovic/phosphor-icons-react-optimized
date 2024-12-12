var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      V.call(r, e) && l(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(R, H({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H64v32a8,8,0,0,0,13.12,6.15L122.9,208h42.2a16,16,0,0,0,10.25-3.71l42.89-35.75A15.93,15.93,0,0,0,224,156.25V48A16,16,0,0,0,208,32Zm0,124.25L165.1,192H120a8,8,0,0,0-5.12,1.85L80,222.92V200a8,8,0,0,0-8-8H48V48H208ZM160,136V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm-48,0V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
