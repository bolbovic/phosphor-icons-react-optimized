var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
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
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM116.38,184.17l61.21-49.93a34,34,0,1,0-47.83-47.83L85.33,140.85,43,98.49a89.63,89.63,0,1,1-3.53,13.43l38.44,38.44a26,26,0,0,0,38.5,33.81Zm6.19-70a34.1,34.1,0,0,0,27.25,27.25l-24,19.58A26,26,0,0,0,103,138.18ZM156,130a22,22,0,1,1,22-22A22,22,0,0,1,156,130Zm-56,20a14,14,0,1,1-14,14A14,14,0,0,1,100,150Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
