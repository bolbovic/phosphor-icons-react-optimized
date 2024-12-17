var M = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      Z.call(t, a) && m(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var c in e)
    p.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      t.indexOf(c) < 0 && Z.call(e, c) && (a[c] = e[c]);
  return a;
};
import l, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const d = i((c, a) => {
  var r = c, { children: e } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ l.createElement(A, n({ ref: a }, t), e, /* @__PURE__ */ l.createElement("path", { d: "M240,80v64L80,224V160Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M243.58,72.84,197.29,49.7C191.54,39.24,177.21,32,160,32c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53l-19.52,9.76A53.69,53.69,0,0,0,80,72c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53L12.42,120.84A8,8,0,0,0,8,128v64a8,8,0,0,0,4.42,7.16l64,32a8,8,0,0,0,7.16,0l160-80A8,8,0,0,0,248,144V80A8,8,0,0,0,243.58,72.84ZM80,151.06,33.89,128,51,119.45c7.24,5.29,17.48,8.55,29,8.55,22.43,0,40-12.3,40-28a21.77,21.77,0,0,0-4.35-12.88L131,79.45c7.24,5.29,17.48,8.55,29,8.55,18.38,0,33.49-8.26,38.35-19.88L222.11,80ZM160,48c13.74,0,24,6.34,24,12s-10.26,12-24,12-24-6.34-24-12S146.26,48,160,48ZM80,88c13.74,0,24,6.34,24,12s-10.26,12-24,12c-9.67,0-17.61-3.14-21.47-7a8.29,8.29,0,0,0-.84-.93A6.62,6.62,0,0,1,56,100C56,94.34,66.26,88,80,88ZM24,140.94l48,24v46.12l-48-24Zm64,70.12V164.94l144-72v46.12Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
