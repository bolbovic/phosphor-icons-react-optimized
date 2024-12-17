var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M172,56a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H176A4,4,0,0,1,172,56Zm50.31,38.67A100,100,0,1,1,128,28a100.69,100.69,0,0,1,16.66,1.38,4,4,0,0,1-1.32,7.89A93.4,93.4,0,0,0,128,36,92,92,0,0,0,62.83,192.87a75.61,75.61,0,0,1,44.51-34,44,44,0,1,1,41.32,0,75.61,75.61,0,0,1,44.51,34,92,92,0,0,0,21.6-95.54,4,4,0,1,1,7.54-2.66ZM128,156a36,36,0,1,0-36-36A36,36,0,0,0,128,156Zm0,64a91.61,91.61,0,0,0,59.14-21.58,68,68,0,0,0-118.27,0A91.56,91.56,0,0,0,128,220Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
