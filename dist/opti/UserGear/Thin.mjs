var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = A((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M133.17,158.84a64,64,0,1,0-50.34,0c-23.76,5.46-45.18,18.69-61.89,38.59a4,4,0,1,0,6.12,5.14C48,177.7,76.7,164,108,164s60,13.7,80.94,38.57a4,4,0,0,0,6.12-5.14C178.35,177.53,156.93,164.3,133.17,158.84ZM52,100a56,56,0,1,1,56,56A56.06,56.06,0,0,1,52,100Zm198.25,46.54L243,142.33a19.78,19.78,0,0,0,0-12.66l7.29-4.21a4,4,0,1,0-4-6.92l-7.31,4.21A20,20,0,0,0,228,116.4V108a4,4,0,0,0-8,0v8.4a20,20,0,0,0-10.94,6.35l-7.31-4.21a4,4,0,1,0-4,6.92l7.29,4.21a19.78,19.78,0,0,0,0,12.66l-7.29,4.21a4,4,0,0,0,2,7.46,3.92,3.92,0,0,0,2-.54l7.31-4.21A20,20,0,0,0,220,155.6V164a4,4,0,0,0,8,0v-8.4a20,20,0,0,0,10.94-6.35l7.31,4.21a3.92,3.92,0,0,0,2,.54,4,4,0,0,0,2-7.46ZM224,148a12,12,0,1,1,12-12A12,12,0,0,1,224,148Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
