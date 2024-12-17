var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? h(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    L.call(a, t) && o(e, t, a[t]);
  if (l)
    for (var t of l(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var r in e)
    L.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      a.indexOf(r) < 0 && i.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, t) => {
  var m = r, { children: e } = m, a = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
