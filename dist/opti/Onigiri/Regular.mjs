var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      H.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M231.53,146.57,175.68,50.66l-.11-.19a56,56,0,0,0-95.14,0l-.11.19L24.47,146.57A56,56,0,0,0,72.09,232H183.91a56,56,0,0,0,47.62-85.43ZM160,216H96V168h64Zm58.86-20.55A39.49,39.49,0,0,1,183.91,216H176V168a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v48H72.09a40,40,0,0,1-34-61.09,2,2,0,0,0,.11-.2l55.85-95.9a40,40,0,0,1,67.84,0l55.85,95.9a2,2,0,0,0,.11.2A39.5,39.5,0,0,1,218.85,195.45Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
