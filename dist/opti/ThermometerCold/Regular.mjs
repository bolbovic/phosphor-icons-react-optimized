var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, V = (a, r) => {
  for (var e in r || (r = {}))
    A.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var l = t, { children: a } = l, r = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM152,184a32,32,0,1,1-40-31V120a8,8,0,0,1,16,0v33A32.06,32.06,0,0,1,152,184Zm-16,0a16,16,0,1,0-16,16A16,16,0,0,0,136,184Zm48,0A64,64,0,1,1,80,134V48a40,40,0,0,1,80,0v86A64.08,64.08,0,0,1,184,184Zm-16,0a48.08,48.08,0,0,0-20.58-39.4A8,8,0,0,1,144,138V48a24,24,0,0,0-48,0v90a8,8,0,0,1-3.42,6.56A48,48,0,1,0,168,184Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
