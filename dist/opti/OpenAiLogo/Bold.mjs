var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && A(a, e, l[e]);
  if (o)
    for (var e of o(l))
      m.call(l, e) && A(a, e, l[e]);
  return a;
};
var M = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && m.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const f = v((t, e) => {
  var r = t, { children: a } = r, l = M(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, Z({ ref: e }, l), a, /* @__PURE__ */ p.createElement("path", { d: "M228.88,113.61A60,60,0,0,0,166,33.42,60,60,0,0,0,65.1,47.83a60,60,0,0,0-38,94.56A60.08,60.08,0,0,0,83.6,223a57.83,57.83,0,0,0,6.45-.36A60,60,0,0,0,190.9,208.17a60,60,0,0,0,38-94.56ZM181.81,58.3a36,36,0,0,1,26.58,37.6L170,73.73a12,12,0,0,0-12,0L120,95.67V81.81L154.5,61.9A35.74,35.74,0,0,1,181.81,58.3ZM136,123.38v9.24l-8,4.62-8-4.62v-9.24l8-4.62ZM84,72a36,36,0,0,1,56.39-29.67L102,64.49a12,12,0,0,0-6,10.39v43.88l-12-6.93ZM44.33,88.93A35.81,35.81,0,0,1,60,74.43v44.33a12,12,0,0,0,6,10.4l38,21.93L92,158,57.5,138.1A36,36,0,0,1,44.33,88.93ZM74.19,197.7a36,36,0,0,1-26.58-37.6L86,182.27a12,12,0,0,0,12,0l38-21.94v13.86L101.5,194.1A35.74,35.74,0,0,1,74.19,197.7ZM172,184a36,36,0,0,1-56.39,29.67L154,191.51a12,12,0,0,0,6-10.39V137.24l12,6.93Zm39.67-16.93A35.81,35.81,0,0,1,196,181.57V137.24a12,12,0,0,0-6-10.4l-38-21.93L164,98l34.5,19.92A36,36,0,0,1,211.67,167.07Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
