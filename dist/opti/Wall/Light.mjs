var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (e, a, t) => a in e ? v(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, H = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && V(e, t, a[t]);
  if (r)
    for (var t of r(a))
      o.call(a, t) && V(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var m in e)
    Z.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && o.call(e, m) && (t[m] = e[m]);
  return t;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, t) => {
  var h = m, { children: e } = h, a = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(f, H({ ref: t }, a), e, /* @__PURE__ */ p.createElement("path", { d: "M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
