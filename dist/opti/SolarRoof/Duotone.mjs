var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (e, a, t) => a in e ? n(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    H.call(a, t) && Z(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && Z(e, t, a[t]);
  return e;
};
var h = (e, a) => {
  var t = {};
  for (var l in e)
    H.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      a.indexOf(l) < 0 && p.call(e, l) && (t[l] = e[l]);
  return t;
};
import o, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const d = i((l, t) => {
  var r = l, { children: e } = r, a = h(r, ["children"]);
  return /* @__PURE__ */ o.createElement(M, c({ ref: t }, a), e, /* @__PURE__ */ o.createElement("path", { d: "M240,128H96L56,48H200Z", opacity: "0.2" }), /* @__PURE__ */ o.createElement("path", { d: "M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM24,129.89l32-64,32,64V184H24ZM104,184V136H232v48Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
