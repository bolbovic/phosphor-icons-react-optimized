var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? h(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      c.call(a, t) && i(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && c.call(e, r) && (t[r] = e[r]);
  return t;
};
import d, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const g = l((r, t) => {
  var o = r, { children: e } = o, a = s(o, ["children"]);
  return /* @__PURE__ */ d.createElement(n, f({ ref: t }, a), e, /* @__PURE__ */ d.createElement("path", { d: "M142,200a14,14,0,1,1-14-14A14,14,0,0,1,142,200Zm-14-42a6,6,0,0,0,6-6V48a6,6,0,0,0-12,0V152A6,6,0,0,0,128,158Z" }));
});
g.displayName = "Light";
export {
  g as Light
};
