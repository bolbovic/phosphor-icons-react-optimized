var C = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    s.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && o(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    s.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && i.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const Z = d((m, a) => {
  var l = m, { children: e } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(n, p({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M136,128A64,64,0,1,1,72,64,64.07,64.07,0,0,1,136,128Zm48-64c-5.68,0-16.4,2.76-24.32,21.25C154.73,96.8,152,112,152,128s2.73,31.2,7.68,42.75C167.6,189.24,178.32,192,184,192s16.4-2.76,24.32-21.25C213.27,159.2,216,144,216,128s-2.73-31.2-7.68-42.75C200.4,66.76,189.68,64,184,64Zm56,0a8,8,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8,8,0,0,0,240,64Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
