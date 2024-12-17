var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && V(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M200,36H160a20,20,0,0,0-20,20v88a12,12,0,0,1-24,0V56A20,20,0,0,0,96,36H56A20,20,0,0,0,36,56v88a92,92,0,0,0,92,92h.71c50.34-.38,91.3-42.1,91.3-93V56A20,20,0,0,0,200,36Zm-4,24V84H164V60ZM92,60V84H60V60Zm36.52,152H128a68,68,0,0,1-68-68V108H92v36a36,36,0,0,0,72,0V108h32v35C196,180.77,165.73,211.72,128.52,212Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
