var C = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (e, a, t) => a in e ? C(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && s(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && s(e, t, a[t]);
  return e;
};
var n = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, t) => {
  var o = r, { children: e } = o, a = n(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, c({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M179.87,65.35C167.65,46.15,149.71,36,128,36S88.35,46.15,76.13,65.35C65.73,81.69,60,103.94,60,128s5.73,46.31,16.13,62.65C88.35,209.85,106.29,220,128,220s39.65-10.15,51.87-29.35C190.27,174.31,196,152.06,196,128S190.27,81.69,179.87,65.35ZM128,212c-41.45,0-60-42.19-60-84s18.55-84,60-84,60,42.19,60,84S169.45,212,128,212Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
