var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && s(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && s(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import C, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ C.createElement(l, c({ ref: t }, a), e, /* @__PURE__ */ C.createElement("path", { d: "M181.56,64.28C169,44.47,150.43,34,128,34S87.05,44.47,74.44,64.28C63.84,80.94,58,103.57,58,128s5.84,47.06,16.44,63.72C87.05,211.53,105.57,222,128,222s40.95-10.47,53.56-30.28C192.16,175.06,198,152.43,198,128S192.16,80.94,181.56,64.28ZM128,210c-40.07,0-58-41.18-58-82s17.93-82,58-82,58,41.18,58,82S168.07,210,128,210Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
