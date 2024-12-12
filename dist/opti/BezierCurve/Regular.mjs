var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ c.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M221.07,144.41A96.68,96.68,0,0,0,181,88h59a8,8,0,0,0,0-16H159a32,32,0,0,0-62,0H16a8,8,0,0,0,0,16H75a96.68,96.68,0,0,0-40.07,56.41A32,32,0,1,0,51.08,146,80.6,80.6,0,0,1,99,93.44a32,32,0,0,0,58.06,0A80.6,80.6,0,0,1,204.92,146a32,32,0,1,0,16.15-1.57ZM56,176a16,16,0,1,1-16-16A16,16,0,0,1,56,176Zm72-80a16,16,0,1,1,16-16A16,16,0,0,1,128,96Zm88,96a16,16,0,1,1,16-16A16,16,0,0,1,216,192Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
