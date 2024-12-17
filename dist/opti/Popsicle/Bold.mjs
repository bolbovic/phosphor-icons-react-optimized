var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,4A76.08,76.08,0,0,0,52,80v96a20,20,0,0,0,20,20H96v28a32,32,0,0,0,64,0V196h24a20,20,0,0,0,20-20V80A76.08,76.08,0,0,0,128,4Zm8,220a8,8,0,0,1-16,0V196h16Zm44-52H76V80a52,52,0,0,1,104,0ZM120,76v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm40,0v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
