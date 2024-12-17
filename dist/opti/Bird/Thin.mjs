var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M172,68a8,8,0,1,1-8-8A8,8,0,0,1,172,68Zm64,12a4,4,0,0,1-1.78,3.33L212,98.14V120A100.11,100.11,0,0,1,112,220H24a12,12,0,0,1-9.37-19.5L100,98.08V76.89c0-31.22,25-56.74,55.72-56.89H156a55.94,55.94,0,0,1,53.79,40.39l24.43,16.28A4,4,0,0,1,236,80Zm-11.21,0L204.11,66.22a4.08,4.08,0,0,1-1.65-2.33A48,48,0,0,0,156,28h-.24C129.43,28.13,108,50.06,108,76.89V99.52a4,4,0,0,1-.93,2.56L20.84,205.56A4,4,0,0,0,24,212H52.79l72.14-86.56a4,4,0,0,1,6.14,5.12L63.21,212H112a92.1,92.1,0,0,0,92-92V96a4,4,0,0,1,1.78-3.33Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
