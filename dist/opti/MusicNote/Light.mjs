var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (l)
    for (var t of l(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const h = V((r, t) => {
  var m = r, { children: e } = m, a = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, A({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M209.72,58.25l-80-24A6,6,0,0,0,122,40V153.05A46,46,0,1,0,134,184V96.06l72.28,21.69A6,6,0,0,0,214,112V64A6,6,0,0,0,209.72,58.25ZM88,218a34,34,0,1,1,34-34A34,34,0,0,1,88,218ZM202,103.94l-68-20.4V48.06l68,20.4Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
