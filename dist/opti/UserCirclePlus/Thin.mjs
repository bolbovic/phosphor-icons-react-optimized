var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(V, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M172,56a4,4,0,0,1,4-4h20V32a4,4,0,0,1,8,0V52h20a4,4,0,0,1,0,8H204V80a4,4,0,0,1-8,0V60H176A4,4,0,0,1,172,56Zm54.62,55.34a99.89,99.89,0,1,1-82-82,4,4,0,0,1-1.32,7.89A93.4,93.4,0,0,0,128,36,92,92,0,0,0,62.83,192.87a75.61,75.61,0,0,1,44.51-34,44,44,0,1,1,41.32,0,75.61,75.61,0,0,1,44.51,34A91.69,91.69,0,0,0,220,128a93.58,93.58,0,0,0-1.27-15.34,4,4,0,0,1,7.89-1.32ZM128,156a36,36,0,1,0-36-36A36,36,0,0,0,128,156Zm0,64a91.61,91.61,0,0,0,59.14-21.58,68,68,0,0,0-118.27,0A91.56,91.56,0,0,0,128,220Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
