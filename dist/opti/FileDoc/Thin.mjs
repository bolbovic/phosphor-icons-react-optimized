var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var s = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && s(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && s(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const f = h((m, e) => {
  var c = m, { children: a } = c, t = p(c, ["children"]);
  return /* @__PURE__ */ A.createElement(n, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M52,148H36a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4H52a32,32,0,0,0,0-64Zm0,56H40V156H52a24,24,0,0,1,0,48Zm166.77-6a4,4,0,0,1,.12,5.66A26.11,26.11,0,0,1,200,212c-15.44,0-28-14.36-28-32s12.56-32,28-32a26.11,26.11,0,0,1,18.89,8.36,4,4,0,1,1-5.78,5.54A18.15,18.15,0,0,0,200,156c-11,0-20,10.77-20,24s9,24,20,24a18.15,18.15,0,0,0,13.11-5.9A4,4,0,0,1,218.77,198ZM128,148c-15.44,0-28,14.36-28,32s12.56,32,28,32,28-14.36,28-32S143.44,148,128,148Zm0,56c-11,0-20-10.77-20-24s9-24,20-24,20,10.77,20,24S139,204,128,204ZM48,116a4,4,0,0,0,4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88a4,4,0,0,0-1.17-2.83l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72A4,4,0,0,0,48,116ZM156,41.65,198.34,84H156Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
