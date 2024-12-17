var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var L = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((o, t) => {
  var m = o, { children: e } = m, a = L(m, ["children"]);
  return /* @__PURE__ */ l.createElement(s, i({ ref: t }, a), e, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM48,163.31l88-88L180.69,120l-88,88H48Zm144-54.62L147.32,64l24-24L216,84.69Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
