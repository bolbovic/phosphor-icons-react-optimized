var s = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, e, m) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, p = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && A(a, m, e[m]);
  if (Z)
    for (var m of Z(e))
      i.call(e, m) && A(a, m, e[m]);
  return a;
};
var c = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && Z)
    for (var t of Z(a))
      e.indexOf(t) < 0 && i.call(a, t) && (m[t] = a[t]);
  return m;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((t, m) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: m }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M232,218H176a102,102,0,1,0-48,12H232a6,6,0,0,0,0-12ZM38,128a90,90,0,1,1,90,90A90.1,90.1,0,0,1,38,128Zm90-26a22,22,0,1,0-22-22A22,22,0,0,0,128,102Zm0-32a10,10,0,1,1-10,10A10,10,0,0,1,128,70Zm22,106a22,22,0,1,0-22,22A22,22,0,0,0,150,176Zm-32,0a10,10,0,1,1,10,10A10,10,0,0,1,118,176Zm58-26a22,22,0,1,0-22-22A22,22,0,0,0,176,150Zm0-32a10,10,0,1,1-10,10A10,10,0,0,1,176,118ZM80,106a22,22,0,1,0,22,22A22,22,0,0,0,80,106Zm0,32a10,10,0,1,1,10-10A10,10,0,0,1,80,138Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
