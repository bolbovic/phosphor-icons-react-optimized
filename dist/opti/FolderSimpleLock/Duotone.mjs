var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && H(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && v.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((o, e) => {
  var p = o, { children: a } = p, t = n(p, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M224,168v40H152V168Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M232,88v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Zm0,80v40a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8h8v-4a28,28,0,0,1,56,0v4h8A8,8,0,0,1,232,168Zm-56-8h24v-4a12,12,0,0,0-24,0Zm40,16H160v24h56Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};