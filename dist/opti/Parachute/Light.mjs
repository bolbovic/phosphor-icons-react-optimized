var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (e, a, t) => a in e ? h(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && Z(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && Z(e, t, a[t]);
  return e;
};
var p = (e, a) => {
  var t = {};
  for (var m in e)
    c.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import H, { forwardRef as A } from "react";
import f from "../../lib/OptiBase.mjs";
const s = A((m, t) => {
  var o = m, { children: e } = o, a = p(o, ["children"]);
  return /* @__PURE__ */ H.createElement(f, l({ ref: t }, a), e, /* @__PURE__ */ H.createElement("path", { d: "M230,120a102,102,0,0,0-204,0,6,6,0,0,0,2.27,4.69l.13.11L122,195v23H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12H134V195l93.6-70.2h0A6,6,0,0,0,230,120Zm-12.2-6H173.9c-1.3-42.92-16.5-68.62-28.43-82.3A90.2,90.2,0,0,1,217.8,114ZM128,31.43A77.14,77.14,0,0,1,143.42,49C157.26,70.08,161.24,95,161.89,114H94.11c1.06-31.88,10.49-52.86,18.47-65A76.69,76.69,0,0,1,128,31.43ZM157.8,126,128,179.65,98.2,126Zm-73.33,0,24.62,44.32L50,126Zm87.06,0H206l-59.09,44.32Zm-61-94.3C98.6,45.38,83.4,71.08,82.1,114H38.2A90.2,90.2,0,0,1,110.53,31.7Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
