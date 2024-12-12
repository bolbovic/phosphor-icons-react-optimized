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
import f, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const h = H((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M204.24,220.24l-24,24a6,6,0,0,1-8.48-8.48L185.51,222H80a22,22,0,0,1-22-22V104a6,6,0,0,1,12,0v96a10,10,0,0,0,10,10H185.51l-13.75-13.76a6,6,0,0,1,8.48-8.48l24,24A6,6,0,0,1,204.24,220.24ZM80,70a6,6,0,0,0,4.24-10.24L70.49,46H176a10,10,0,0,1,10,10v96a6,6,0,0,0,12,0V56a22,22,0,0,0-22-22H70.49L84.24,20.24a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24A6,6,0,0,0,80,70Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
