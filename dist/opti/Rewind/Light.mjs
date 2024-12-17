var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && L(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M222.81,59.72a14,14,0,0,0-14.22.46L126,112.79V71.84a13.83,13.83,0,0,0-7.19-12.12,14,14,0,0,0-14.22.46L16.41,116.35a13.79,13.79,0,0,0,0,23.3l88.18,56.17a14,14,0,0,0,14.22.46A13.83,13.83,0,0,0,126,184.16V143.21l82.59,52.61a14,14,0,0,0,14.22.46A13.83,13.83,0,0,0,230,184.16V71.84A13.83,13.83,0,0,0,222.81,59.72ZM114,184.16a1.73,1.73,0,0,1-1,1.59,1.9,1.9,0,0,1-2-.06L22.85,129.53a1.8,1.8,0,0,1,0-3.06L111,70.31a1.87,1.87,0,0,1,1-.32,2,2,0,0,1,1,.26,1.73,1.73,0,0,1,1,1.59Zm104,0a1.73,1.73,0,0,1-1,1.59,1.9,1.9,0,0,1-2-.06l-88.19-56.16a1.8,1.8,0,0,1,0-3.06L215,70.31a1.87,1.87,0,0,1,1-.32,2,2,0,0,1,1,.26,1.73,1.73,0,0,1,1,1.59Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
