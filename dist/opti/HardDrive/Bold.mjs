var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var m in e)
    d.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && l.call(e, m) && (a[m] = e[m]);
  return a;
};
import i, { forwardRef as H } from "react";
import n from "../../lib/OptiBase.mjs";
const A = H((m, a) => {
  var r = m, { children: e } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M224,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V80A20,20,0,0,0,224,60Zm-4,112H36V84H220Zm-56-44a16,16,0,1,1,16,16A16,16,0,0,1,164,128Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
