var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var s = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && s(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && s(e, t, a[t]);
  return e;
};
var n = (e, a) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, t) => {
  var c = m, { children: e } = c, a = n(c, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm0-144c-12.82,0-23.41,5.81-30.62,16.8C91.33,102,88,114.52,88,128s3.33,26,9.38,35.2c7.21,11,17.8,16.8,30.62,16.8s23.41-5.81,30.62-16.8c6-9.22,9.38-21.72,9.38-35.2s-3.33-26-9.38-35.19C151.41,81.81,140.82,76,128,76Zm0,96c-22.11,0-32-22.1-32-44s9.89-44,32-44,32,22.1,32,44S150.11,172,128,172Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
