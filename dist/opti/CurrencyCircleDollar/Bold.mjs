var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const v = s((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ h.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm44-64a32,32,0,0,1-32,32v4a12,12,0,0,1-24,0v-4H104a12,12,0,0,1,0-24h36a8,8,0,0,0,0-16H116a32,32,0,0,1,0-64V72a12,12,0,0,1,24,0v4h12a12,12,0,0,1,0,24H116a8,8,0,0,0,0,16h24A32,32,0,0,1,172,148Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
