var L = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const h = f((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M225.9,58.31l-96-32a6,6,0,0,0-3.8,0l-96,32A6,6,0,0,0,26,64v80a6,6,0,0,0,12,0V72.32l38.68,12.9A62,62,0,0,0,99,174.75c-19.25,6.53-36,19.59-48,38A6,6,0,0,0,61,219.28C76.47,195.59,100.88,182,128,182s51.53,13.59,67,37.28A6,6,0,0,0,205,212.72c-12-18.38-28.73-31.44-48-38a62,62,0,0,0,22.27-89.53L225.9,69.69a6,6,0,0,0,0-11.38ZM178,120A50,50,0,1,1,88.63,89.2l37.47,12.49a6,6,0,0,0,3.8,0L167.37,89.2A49.78,49.78,0,0,1,178,120ZM128,89.68,51,64l77-25.68L205,64Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
