var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && i.call(a, h) && (e[h] = a[h]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((h, e) => {
  var m = h, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ A.createElement(c, l({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM153.94,148.5a4,4,0,0,0-4.06.11L124,164.78V160a12,12,0,0,0-12-12H48a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12v-4.78l25.88,16.17A4,4,0,0,0,152,220a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,156,216V152A4,4,0,0,0,153.94,148.5ZM116,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm32,.78-24-15V174.22l24-15Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
