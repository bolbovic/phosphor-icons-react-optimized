var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var r = m, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M226.27,118.11,206.38,42a7.94,7.94,0,0,0-15.16-.75L172.57,92H83.43L64.78,41.24A7.94,7.94,0,0,0,49.62,42L29.73,118.11a53.16,53.16,0,0,0,20.44,56.68l73.27,51.76a7.9,7.9,0,0,0,9.12,0l73.27-51.76A53.16,53.16,0,0,0,226.27,118.11Zm-169-74L76.89,97.38A4,4,0,0,0,80.64,100h94.72a4,4,0,0,0,3.75-2.62l19.57-53.22,17,65L128,171.11,40.33,109.17Zm-19.84,76,.7-2.7L121.07,176,93.41,195.54,54.78,168.25A45.11,45.11,0,0,1,37.47,120.14ZM128,220l-27.66-19.54L128,180.9l27.66,19.54Zm73.22-51.73-38.63,27.29L134.93,176l82.9-58.56.7,2.7A45.11,45.11,0,0,1,201.22,168.25Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};