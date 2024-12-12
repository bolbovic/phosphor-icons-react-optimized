var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    m.call(H, e) && r(a, e, H[e]);
  if (l)
    for (var e of l(H))
      h.call(H, e) && r(a, e, H[e]);
  return a;
};
var c = (a, H) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      H.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const L = i((t, e) => {
  var o = t, { children: a } = o, H = c(o, ["children"]);
  return /* @__PURE__ */ d.createElement(s, p({ ref: e }, H), a, /* @__PURE__ */ d.createElement("path", { d: "M192,104H164V56a20,20,0,0,0-20-20H32A12,12,0,0,0,20.8,52.3c10.88,28.39,8.3,78.36-.33,108.38A12,12,0,0,0,20,164v36a20,20,0,0,0,20,20H66.11a20.16,20.16,0,0,0,9-2.11L86.83,212h14.34l11.77,5.89a20.16,20.16,0,0,0,9,2.11h28.22a20.16,20.16,0,0,0,8.95-2.11L170.83,212h14.34l11.77,5.89a20.16,20.16,0,0,0,8.95,2.11H232a20,20,0,0,0,20-20V164A60.07,60.07,0,0,0,192,104ZM48,60h92v44H116a12,12,0,0,0,0,24h76a36.07,36.07,0,0,1,33.94,24H47.21C52.75,124.08,54.23,88.41,48,60ZM228,196H206.83l-11.77-5.89a20.16,20.16,0,0,0-8.95-2.11H169.89a20.16,20.16,0,0,0-8.95,2.11L149.17,196H122.83l-11.77-5.89a20.16,20.16,0,0,0-9-2.11H85.89a20.16,20.16,0,0,0-9,2.11L65.17,196H44V176H228Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
