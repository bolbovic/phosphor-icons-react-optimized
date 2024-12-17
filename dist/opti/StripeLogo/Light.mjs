var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ H.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M166,152c0,16.54-17.05,30-38,30s-38-13.46-38-30a6,6,0,0,1,12,0c0,9.76,11.91,18,26,18s26-8.24,26-18c0-11.21-10.7-15.1-28.33-20.18-15.89-4.58-33.89-9.77-33.89-27.82,0-17.1,15.57-30,36.22-30,15,0,27.74,6.88,33.34,18a6,6,0,0,1-10.71,5.42C147.08,90.36,138.41,86,128,86c-13.81,0-24.22,7.74-24.22,18,0,8.41,9.52,11.76,25.21,16.29C145.48,125,166,131,166,152ZM222,48V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
