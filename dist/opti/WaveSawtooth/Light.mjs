var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && i(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    l.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const L = h((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M235.14,133.11l-104,64A6,6,0,0,1,122,192V74.74L27.15,133.11a6,6,0,1,1-6.29-10.22l104-64A6,6,0,0,1,134,64V181.26l94.85-58.37a6,6,0,1,1,6.29,10.22Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
