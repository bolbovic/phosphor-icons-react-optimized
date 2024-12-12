var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && Z(a, e, l[e]);
  if (t)
    for (var e of t(l))
      H.call(l, e) && Z(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && l.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      l.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var r = m, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ h.createElement(d, p({ ref: e }, l), a, /* @__PURE__ */ h.createElement("path", { d: "M247.16,124.42l-40-80A8,8,0,0,0,200,40H56a8,8,0,0,0-7.16,4.42l-40,80A8.08,8.08,0,0,0,8,128v56a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V128A8.08,8.08,0,0,0,247.16,124.42ZM99.06,56l12,24H80.94l-12-24Zm48,0,12,24H128.94l-12-24Zm-46.12,64-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm48,0-12-24h30.12l12,24Zm10.12-40H176.94l-12-24h30.12ZM24,129.89l32-64,32,64V184H24ZM104,184V136H232v48Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
