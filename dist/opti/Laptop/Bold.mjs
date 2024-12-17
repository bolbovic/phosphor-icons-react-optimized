var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var H = o, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ f.createElement(M, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,156h-4V72a28,28,0,0,0-28-28H56A28,28,0,0,0,28,72v84H24a12,12,0,0,0-12,12v24a28,28,0,0,0,28,28H216a28,28,0,0,0,28-28V168A12,12,0,0,0,232,156ZM52,72a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4v84H52ZM220,192a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V180H220ZM156,96a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,96Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
