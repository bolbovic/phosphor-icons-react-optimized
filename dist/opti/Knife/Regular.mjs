var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const n = L((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M231.87,32.13a27.84,27.84,0,0,0-39.32,0L18.34,206.4a8,8,0,0,0,3.86,13.45A160.67,160.67,0,0,0,58.4,224c32.95,0,65.92-10.2,96.95-30.23,31.76-20.5,50.19-43.82,51-44.81a8,8,0,0,0-.64-10.59L185.32,118l46.55-46.56A27.85,27.85,0,0,0,231.87,32.13ZM189.1,144.44a220.41,220.41,0,0,1-42.86,36.16c-34.43,22.1-69.94,30.92-105.77,26.3L146,101.33Zm31.46-84.3L174,106.7,157.32,90l46.55-46.56a11.8,11.8,0,0,1,16.69,16.69Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
