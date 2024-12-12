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
var A = (a, t) => {
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
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M144,184a16,16,0,1,1-16-16A16,16,0,0,1,144,184Zm76-72v40a92,92,0,0,1-184,0V76A32,32,0,0,1,76,45V44a32,32,0,0,1,60.79-14A32,32,0,0,1,180,60V81a32,32,0,0,1,40,31Zm-24,0a8,8,0,0,0-16,0,12,12,0,0,1-24,0V60a8,8,0,0,0-16,0v44a12,12,0,0,1-24,0V44a8,8,0,0,0-16,0v68a12,12,0,0,1-24,0V76a8,8,0,0,0-16,0v76a68,68,0,0,0,136,0Zm-68,16a55.8,55.8,0,0,0-49.89,30.54,12,12,0,0,0,21.37,10.92,32,32,0,0,1,57,0A12,12,0,0,0,167.21,176a11.83,11.83,0,0,0,5.45-1.32,12,12,0,0,0,5.23-16.14A55.8,55.8,0,0,0,128,128Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
