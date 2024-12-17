var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M195.6,171.2,138,128l57.6-43.2a6,6,0,0,0,0-9.6l-64-48A6,6,0,0,0,122,32v84L67.6,75.2a6,6,0,0,0-7.2,9.6L118,128,60.4,171.2a6,6,0,1,0,7.2,9.6L122,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM134,44l48,36-48,36Zm0,168V140l48,36Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
