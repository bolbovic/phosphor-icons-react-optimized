var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M165.87,72.58A64.06,64.06,0,0,0,200,16a8,8,0,0,0-8-8h-8a64,64,0,0,0-56,33.06A64,64,0,0,0,72,8H64a8,8,0,0,0,0,16h8a48.08,48.08,0,0,1,47.4,40.42,88,88,0,1,0,46.47,8.16ZM183.33,24a48.09,48.09,0,0,1-46.66,40A48.09,48.09,0,0,1,183.33,24ZM128,224a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,224Zm55.89-62.68a57.5,57.5,0,0,1-46.57,46.57A8.52,8.52,0,0,1,136,208a8,8,0,0,1-1.31-15.89,41.29,41.29,0,0,0,33.43-33.43,8,8,0,0,1,15.78,2.64Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
