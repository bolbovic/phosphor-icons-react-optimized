var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M206,80a6,6,0,0,1-6,6H165.69a59.36,59.36,0,0,1,.31,6,58.07,58.07,0,0,1-58,58H87.52L164,219.56a6,6,0,0,1-8.08,8.88l-88-80A6,6,0,0,1,72,138h36a46.06,46.06,0,0,0,46-46,47.61,47.61,0,0,0-.4-6H72a6,6,0,0,1,0-12h78.33A46.08,46.08,0,0,0,108,46H72a6,6,0,0,1,0-12H200a6,6,0,0,1,0,12H143.27a58.25,58.25,0,0,1,19.86,28H200A6,6,0,0,1,206,80Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
