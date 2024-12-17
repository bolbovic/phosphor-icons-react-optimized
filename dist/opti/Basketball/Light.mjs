var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (e, a, t) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && Z(e, t, a[t]);
  if (A)
    for (var t of A(a))
      H.call(a, t) && Z(e, t, a[t]);
  return e;
};
var p = (e, a) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && A)
    for (var m of A(e))
      a.indexOf(m) < 0 && H.call(e, m) && (t[m] = e[m]);
  return t;
};
import M, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, t) => {
  var r = m, { children: e } = r, a = p(r, ["children"]);
  return /* @__PURE__ */ M.createElement(h, i({ ref: t }, a), e, /* @__PURE__ */ M.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM60,69.09A89.23,89.23,0,0,1,81.78,122H38.2A89.65,89.65,0,0,1,60,69.09ZM38.2,134H81.78A89.23,89.23,0,0,1,60,186.91,89.65,89.65,0,0,1,38.2,134ZM122,217.8a89.66,89.66,0,0,1-53.5-22.34A101.18,101.18,0,0,0,93.82,134H122Zm0-95.8H93.82A101.18,101.18,0,0,0,68.5,60.54,89.66,89.66,0,0,1,122,38.2Zm95.8,0H174.22A89.23,89.23,0,0,1,196,69.09,89.65,89.65,0,0,1,217.8,122ZM134,38.2a89.66,89.66,0,0,1,53.5,22.34A101.18,101.18,0,0,0,162.18,122H134Zm0,179.6V134h28.18a101.18,101.18,0,0,0,25.32,61.46A89.66,89.66,0,0,1,134,217.8Zm62-30.89A89.23,89.23,0,0,1,174.22,134H217.8A89.65,89.65,0,0,1,196,186.91Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
