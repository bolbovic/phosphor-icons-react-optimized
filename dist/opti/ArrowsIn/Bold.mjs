var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && l(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ L.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M140,104V64a12,12,0,0,1,24,0V75l35.51-35.52a12,12,0,0,1,17,17L181,92h11a12,12,0,0,1,0,24H152A12,12,0,0,1,140,104Zm-36,36H64a12,12,0,0,0,0,24H75L39.51,199.51a12,12,0,0,0,17,17L92,181v11a12,12,0,0,0,24,0V152A12,12,0,0,0,104,140Zm77,24h11a12,12,0,0,0,0-24H152a12,12,0,0,0-12,12v40a12,12,0,0,0,24,0V181l35.51,35.52a12,12,0,0,0,17-17ZM104,52A12,12,0,0,0,92,64V75L56.49,39.51a12,12,0,0,0-17,17L75,92H64a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V64A12,12,0,0,0,104,52Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
