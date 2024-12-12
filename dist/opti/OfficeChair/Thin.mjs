var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && A.call(a, h) && (e[h] = a[h]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((h, e) => {
  var H = h, { children: a } = H, t = l(H, ["children"]);
  return /* @__PURE__ */ p.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M244,128a4,4,0,0,1-4,4H219.82A44.06,44.06,0,0,1,176,172H132v32h28a28,28,0,0,1,28,28,4,4,0,0,1-8,0,20,20,0,0,0-20-20H132v20a4,4,0,0,1-8,0V212H96a20,20,0,0,0-20,20,4,4,0,0,1-8,0,28,28,0,0,1,28-28h28V172H80a44.06,44.06,0,0,1-43.82-40H16a4,4,0,0,1,0-8H40a4,4,0,0,1,4,4,36,36,0,0,0,36,36h96a36,36,0,0,0,36-36,4,4,0,0,1,4-4h24A4,4,0,0,1,244,128ZM70.94,135.86a12,12,0,0,1-2.82-9.56l13.72-96A12.06,12.06,0,0,1,93.72,20h68.56a12.06,12.06,0,0,1,11.88,10.3l13.72,96A12,12,0,0,1,176,140H80A12,12,0,0,1,70.94,135.86Zm6-5.24A3.93,3.93,0,0,0,80,132h96a3.93,3.93,0,0,0,3-1.38,4,4,0,0,0,.94-3.19l-13.72-96a4,4,0,0,0-4-3.43H93.72a4,4,0,0,0-4,3.43L76,127.43A4,4,0,0,0,77,130.62Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
