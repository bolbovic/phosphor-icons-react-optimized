var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(A, h({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M201.5,104.8,179.72,30.87A4,4,0,0,0,175.89,28H80.11a4,4,0,0,0-3.83,2.87L54.5,104.8a59.51,59.51,0,0,0,16.32,60.62A83.39,83.39,0,0,0,124,187.91V236H88a4,4,0,1,0,0,8h80a4,4,0,1,0,0-8H132V187.91a83.39,83.39,0,0,0,53.18-22.49A59.51,59.51,0,0,0,201.5,104.8ZM83.1,36h89.8l20.93,71.06c.43,1.49.8,3,1.1,4.47-23.64,10.47-50.76.18-65.12-7.1-28.22-14.29-49.48-14.1-63.88-10.14Zm96.62,123.57a75.68,75.68,0,0,1-103.44,0,51.53,51.53,0,0,1-14.11-52.51l1-3.46c12.66-4.87,33.45-7,63,8C137,117,154.33,124,172.8,124A62.78,62.78,0,0,0,196,119.78,51.26,51.26,0,0,1,179.72,159.57Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
