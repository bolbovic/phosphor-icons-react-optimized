var v = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as d } from "react";
import M from "../../lib/OptiBase.mjs";
const c = d((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ p.createElement(M, V({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M200,20H72A20,20,0,0,0,52,40V56H36A20,20,0,0,0,16,76V180a20,20,0,0,0,20,20H52v16a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-32,88h28v40H168Zm28-24H168V76a20,20,0,0,0-20-20V44h48ZM76,44h48V56H76ZM40,80H144v96H40ZM76,200h48v12H76Zm72,12V200a20,20,0,0,0,20-20v-8h28v40ZM64.32,161.22a12,12,0,0,1-1.54-16.9L76.38,128l-13.6-16.32A12,12,0,1,1,81.22,96.32L92,109.25l10.78-12.93a12,12,0,0,1,18.44,15.36L107.62,128l13.6,16.32a12,12,0,1,1-18.44,15.36L92,146.75,81.22,159.68a12,12,0,0,1-16.9,1.54Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
