var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const A = l((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M214,128v80a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V56A14,14,0,0,1,48,42h80a6,6,0,0,1,0,12H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V128a6,6,0,0,1,12,0Zm16-68a34,34,0,1,1-34-34A34,34,0,0,1,230,60Zm-12,0a22,22,0,1,0-22,22A22,22,0,0,0,218,60Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
