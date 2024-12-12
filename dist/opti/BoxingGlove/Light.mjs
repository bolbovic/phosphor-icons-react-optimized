var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ H.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M168,18H120A54.06,54.06,0,0,0,66,72v2H56a30,30,0,0,0-30,30v29.19a14,14,0,0,0,3.07,8.75,5.66,5.66,0,0,0,.47.52l36.46,36V216a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V176.84l15.46-54.11a13.93,13.93,0,0,0,.54-3.85V72A54.06,54.06,0,0,0,168,18Zm42,100.88a2,2,0,0,1-.08.55l-15.69,54.92A6.14,6.14,0,0,0,194,176v40a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V176a6,6,0,0,0-1.78-4.27L38.3,134.25a2,2,0,0,1-.3-1.06V104A18,18,0,0,1,56,86H66v18a6,6,0,0,0,12,0V72a42,42,0,0,1,42-42h48a42,42,0,0,1,42,42Zm-39.32,46.49L149.42,176l21.26,10.63a6,6,0,0,1-5.36,10.74L136,182.71l-29.32,14.66a6,6,0,0,1-5.36-10.74L122.58,176l-21.26-10.63a6,6,0,0,1,5.36-10.74L136,169.29l29.32-14.66a6,6,0,1,1,5.36,10.74Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
