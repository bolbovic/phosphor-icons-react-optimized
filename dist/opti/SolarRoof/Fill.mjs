var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (l, a, e) => a in l ? c(l, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[a] = e, p = (l, a) => {
  for (var e in a || (a = {}))
    o.call(a, e) && Z(l, e, a[e]);
  if (t)
    for (var e of t(a))
      i.call(a, e) && Z(l, e, a[e]);
  return l;
};
var H = (l, a) => {
  var e = {};
  for (var m in l)
    o.call(l, m) && a.indexOf(m) < 0 && (e[m] = l[m]);
  if (l != null && t)
    for (var m of t(l))
      a.indexOf(m) < 0 && i.call(l, m) && (e[m] = l[m]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var r = m, { children: l } = r, a = H(r, ["children"]);
  return /* @__PURE__ */ h.createElement(s, p({ ref: e }, a), l, /* @__PURE__ */ h.createElement("path", { d: "M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM104,184V136H232v48Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
