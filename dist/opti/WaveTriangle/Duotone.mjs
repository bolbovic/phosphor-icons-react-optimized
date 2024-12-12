var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (l)
    for (var t of l(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as s } from "react";
import E from "../../lib/OptiBase.mjs";
const Z = s((o, t) => {
  var m = o, { children: e } = m, a = d(m, ["children"]);
  return /* @__PURE__ */ r.createElement(E, i({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M76,56l52,72H24Zm156,72H128l52,72Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M238.48,132.68l-52,72a8,8,0,0,1-13,0L76,69.66l-45.51,63a8,8,0,1,1-13-9.36l52-72a8,8,0,0,1,13,0l97.51,135,45.51-63a8,8,0,1,1,13,9.36Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
