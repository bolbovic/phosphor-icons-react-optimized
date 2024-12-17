var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const V = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M180,72.28V72a20,20,0,0,0-20-20H140V16a12,12,0,0,0-24,0V52H96A20,20,0,0,0,76,72v.28A115.7,115.7,0,0,0,12,176a12,12,0,0,0,12,12H84.19a44,44,0,0,0,87.62,0H232a12,12,0,0,0,12-12A115.7,115.7,0,0,0,180,72.28ZM128,204a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,204ZM36.78,164A91.75,91.75,0,0,1,92.62,91.05,12,12,0,0,0,100,80V76h56v4a12,12,0,0,0,7.38,11.08,91.75,91.75,0,0,1,55.84,73Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
