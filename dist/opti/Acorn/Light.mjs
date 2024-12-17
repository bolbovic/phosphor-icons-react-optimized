var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const l = V((r, e) => {
  var c = r, { children: a } = c, t = h(c, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M230,104a54.06,54.06,0,0,0-54-54H134V48a26,26,0,0,1,26-26,6,6,0,0,0,0-12,38,38,0,0,0-38,38v2H80a54.06,54.06,0,0,0-54,54,14,14,0,0,0,8,12.63V128c0,34.57,32.71,60.83,59,81.93,14.26,11.45,29,23.29,29,30.07a6,6,0,0,0,12,0c0-6.78,14.75-18.62,29-30.07,26.28-21.1,59-47.36,59-81.93V116.63A14,14,0,0,0,230,104ZM80,62h96a42,42,0,0,1,42,42,2,2,0,0,1-2,2H40a2,2,0,0,1-2-2A42,42,0,0,1,80,62Zm75.5,138.58c-11.48,9.21-21.48,17.24-27.5,25-6-7.72-16-15.75-27.5-25C76.22,181.08,46,156.82,46,128V118H210v10C210,156.82,179.78,181.08,155.5,200.58Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
