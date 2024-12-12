var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var s = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && s(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && s(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var c = m, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,76c-12.82,0-23.41,5.81-30.62,16.81C91.33,102,88,114.52,88,128s3.33,26,9.38,35.2c7.21,11,17.8,16.8,30.62,16.8s23.41-5.81,30.62-16.8c6-9.22,9.38-21.72,9.38-35.2s-3.33-26-9.38-35.19C151.41,81.81,140.82,76,128,76Zm0,96c-22.11,0-32-22.1-32-44s9.89-44,32-44,32,22.1,32,44S150.11,172,128,172ZM208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
