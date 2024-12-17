var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var h = H, { children: a } = h, t = L(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M54,136a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H34V62H24a6,6,0,0,1,0-12H40v0a6,6,0,0,1,5.09,2.8L80,108.68l34.91-55.86A6,6,0,0,1,120,50v0h16a6,6,0,0,1,0,12H126v68h10a6,6,0,0,1,0,12H112a6,6,0,0,1,0-12h2V76.92L85.09,123.18a6,6,0,0,1-10.18,0L46,76.92V130h2A6,6,0,0,1,54,136Zm114-26h64a6,6,0,0,0,0-12H168a6,6,0,0,0,0,12Zm64,20H168a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
