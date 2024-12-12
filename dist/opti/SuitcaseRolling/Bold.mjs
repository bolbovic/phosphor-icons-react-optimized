var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M116,96v80a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm24,0v80a12,12,0,0,0,24,0V96a12,12,0,0,0-24,0Zm72-32V208a20,20,0,0,1-20,20H180v12a12,12,0,0,1-24,0V228H100v12a12,12,0,0,1-24,0V228H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H84V28A28,28,0,0,1,112,0h32a28,28,0,0,1,28,28V44h20A20,20,0,0,1,212,64ZM108,44h40V28a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4Zm80,24H68V204H188Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
