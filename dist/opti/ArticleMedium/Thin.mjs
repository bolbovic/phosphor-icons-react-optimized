var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && r(a, e, H[e]);
  if (t)
    for (var e of t(H))
      i.call(H, e) && r(a, e, H[e]);
  return a;
};
var n = (a, H) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      H.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var h = m, { children: a } = h, H = n(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, p({ ref: e }, H), a, /* @__PURE__ */ Z.createElement("path", { d: "M52,136a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H36V60H24a4,4,0,0,1,0-8H40a4,4,0,0,1,3.39,1.87L80,112.45l36.61-58.57A4,4,0,0,1,120,52h16a4,4,0,0,1,0,8H124v72h12a4,4,0,0,1,0,8H112a4,4,0,0,1,0-8h4V70L83.39,122.12a4,4,0,0,1-6.78,0L44,70V132h4A4,4,0,0,1,52,136Zm116-28h64a4,4,0,0,0,0-8H168a4,4,0,0,0,0,8Zm64,24H168a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
