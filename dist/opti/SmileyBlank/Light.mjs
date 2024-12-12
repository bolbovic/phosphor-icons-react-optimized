var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (r)
    for (var t of r(a))
      c.call(a, t) && i(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var m in e)
    p.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && c.call(e, m) && (t[m] = e[m]);
  return t;
};
import A, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, t) => {
  var o = m, { children: e } = o, a = s(o, ["children"]);
  return /* @__PURE__ */ A.createElement(h, f({ ref: t }, a), e, /* @__PURE__ */ A.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM102,108A10,10,0,1,1,92,98,10,10,0,0,1,102,108Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,108Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
