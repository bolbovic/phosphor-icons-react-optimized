var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    n.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var r = m, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ c.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
