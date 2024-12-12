var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
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
import i, { forwardRef as A } from "react";
import h from "../../lib/OptiBase.mjs";
const n = A((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M136,176a72,72,0,1,0-72-72A72.08,72.08,0,0,0,136,176Zm0-120a48,48,0,1,1-48,48A48.05,48.05,0,0,1,136,56Zm12,159.35V228h20a12,12,0,0,1,0,24H104a12,12,0,0,1,0-24h20V215.36A112,112,0,0,1,53.88,27.84,12,12,0,1,1,71.47,44.16,88,88,0,0,0,195.84,168.53a12,12,0,1,1,16.32,17.59A111.51,111.51,0,0,1,148,215.35Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
