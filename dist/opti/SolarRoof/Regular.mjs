var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (e, a, l) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l, p = (e, a) => {
  for (var l in a || (a = {}))
    o.call(a, l) && Z(e, l, a[l]);
  if (r)
    for (var l of r(a))
      H.call(a, l) && Z(e, l, a[l]);
  return e;
};
var h = (e, a) => {
  var l = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (l[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && H.call(e, m) && (l[m] = e[m]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((m, l) => {
  var t = m, { children: e } = t, a = h(t, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: l }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM24,129.89l32-64,32,64V184H24ZM104,184V136H232v48Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
