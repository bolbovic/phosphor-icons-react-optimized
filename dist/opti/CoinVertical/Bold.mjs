var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      C.call(t, e) && h(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    s.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && C.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import f from "../../lib/OptiBase.mjs";
const i = l((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M152,20H104C65.87,20,36,67.44,36,128s29.87,108,68,108h48c38.13,0,68-47.44,68-108S190.13,20,152,20Zm37.21,152h-22.9a162.62,162.62,0,0,0,5.29-32h23.93A133.22,133.22,0,0,1,189.21,172ZM171.6,116a162.62,162.62,0,0,0-5.29-32h22.9a133.22,133.22,0,0,1,6.32,32Zm5.63-56h-20a98.26,98.26,0,0,0-10-16H152C157.37,44,167.25,46.25,177.23,60ZM74.77,189.84C65.24,173.51,60,151.55,60,128s5.24-45.51,14.77-61.84C86,46.88,97.91,44,104,44s18,2.88,29.23,22.16C142.76,82.49,148,104.45,148,128s-5.24,45.51-14.77,61.84C122,209.12,110.09,212,104,212S86,209.12,74.77,189.84ZM152,212h-4.79a98.26,98.26,0,0,0,10-16h20C167.25,209.75,157.37,212,152,212Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
