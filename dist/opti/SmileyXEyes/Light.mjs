var f = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (L)
    for (var e of L(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && L)
    for (var m of L(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm60.24-117.76L176.49,112l11.75,11.76a6,6,0,1,1-8.48,8.48L168,120.49l-11.76,11.75a6,6,0,0,1-8.48-8.48L159.51,112l-11.75-11.76a6,6,0,0,1,8.48-8.48L168,103.51l11.76-11.75a6,6,0,0,1,8.48,8.48Zm-80,0L96.49,112l11.75,11.76a6,6,0,1,1-8.48,8.48L88,120.49,76.24,132.24a6,6,0,0,1-8.48-8.48L79.51,112,67.76,100.24a6,6,0,0,1,8.48-8.48L88,103.51,99.76,91.76a6,6,0,0,1,8.48,8.48ZM138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
