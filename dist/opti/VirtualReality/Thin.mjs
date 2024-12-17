var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((m, e) => {
  var h = m, { children: a } = h, t = n(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M119.75,97.4l-24,64a4,4,0,0,1-7.5,0l-24-64a4,4,0,1,1,7.5-2.8l20.25,54,20.25-54a4,4,0,0,1,7.5,2.8ZM252,128a76.08,76.08,0,0,1-76,76H80A76,76,0,0,1,80,52h96A76.08,76.08,0,0,1,252,128Zm-8,0a68.07,68.07,0,0,0-68-68H80a68,68,0,0,0,0,136h96A68.07,68.07,0,0,0,244,128Zm-68.5,9.06,12,21a4,4,0,0,1-1.49,5.45,3.92,3.92,0,0,1-2,.53,4,4,0,0,1-3.47-2L167.79,139.7a24.85,24.85,0,0,1-3.79.3H148v20a4,4,0,0,1-8,0V96a4,4,0,0,1,4-4h20a24,24,0,0,1,11.5,45.06ZM180,116a16,16,0,0,0-16-16H148v32h16A16,16,0,0,0,180,116Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
