var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && l(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var H = r, { children: a } = H, t = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M224,60H172V16a4,4,0,0,0-8,0V60H92V16a4,4,0,0,0-8,0V60H32.55C28.13,60,28,63.59,28,64a4,4,0,0,0,4,4H52v92a36,36,0,0,0,36,36h36v44a4,4,0,0,0,8,0V196h36a36,36,0,0,0,36-36V68h20a4,4,0,0,0,0-8ZM196,160a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28V68H196Zm-87.29-29.72a4,4,0,0,1-.46-3.68l12-32a4,4,0,0,1,7.5,2.8l-10,26.6H144a4,4,0,0,1,3.75,5.4l-12,32a4,4,0,1,1-7.5-2.8l10-26.6H112A4,4,0,0,1,108.71,130.28Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
