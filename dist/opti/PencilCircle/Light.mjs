var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM106,134h44l14.1,30.56A30,30,0,0,0,128,174a30,30,0,0,0-36.11-9.46Zm5.54-12L128,86.32,144.47,122ZM134,192a18,18,0,0,1,36,0v15.64a89.26,89.26,0,0,1-36,10.14Zm-48,0a18,18,0,0,1,36,0v25.78a89.26,89.26,0,0,1-36-10.14Zm105.64-.36A92.76,92.76,0,0,1,182,200V176a6,6,0,0,0-.55-2.51l-48-104a6,6,0,0,0-10.9,0l-48,104A6,6,0,0,0,74,176v24a92.76,92.76,0,0,1-9.64-8.37,90,90,0,1,1,127.28,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
