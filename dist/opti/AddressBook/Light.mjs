var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((H, e) => {
  var r = H, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M159.11,142.13a38,38,0,1,0-46.22,0A65.75,65.75,0,0,0,83.2,164.4a6,6,0,0,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.2A65.75,65.75,0,0,0,159.11,142.13ZM110,112a26,26,0,1,1,26,26A26,26,0,0,1,110,112Zm98-86H64A14,14,0,0,0,50,40V66H32a6,6,0,0,0,0,12H50v44H32a6,6,0,0,0,0,12H50v44H32a6,6,0,0,0,0,12H50v26a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V40A14,14,0,0,0,208,26Zm2,190a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
