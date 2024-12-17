var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V184a6,6,0,0,0-12,0v33.8A90.15,90.15,0,0,1,38.2,134H72a6,6,0,0,0,0-12H38.2A90.15,90.15,0,0,1,122,38.2V72a6,6,0,0,0,12,0V38.2A90.15,90.15,0,0,1,217.8,122H184a6,6,0,0,0,0,12h33.8A90.15,90.15,0,0,1,134,217.8Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
