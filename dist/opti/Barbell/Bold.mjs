var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? l(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, h = (a, H) => {
  for (var e in H || (H = {}))
    V.call(H, e) && r(a, e, H[e]);
  if (m)
    for (var e of m(H))
      v.call(H, e) && r(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && v.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((t, e) => {
  var o = t, { children: a } = o, H = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(c, h({ ref: e }, H), a, /* @__PURE__ */ d.createElement("path", { d: "M244,116V88a20,20,0,0,0-20-20H208V64a20,20,0,0,0-20-20H164a20,20,0,0,0-20,20v52H112V64A20,20,0,0,0,92,44H68A20,20,0,0,0,48,64v4H32A20,20,0,0,0,12,88v28a12,12,0,0,0,0,24v28a20,20,0,0,0,20,20H48v4a20,20,0,0,0,20,20H92a20,20,0,0,0,20-20V140h32v52a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20v-4h16a20,20,0,0,0,20-20V140a12,12,0,0,0,0-24ZM36,164V92H48v72Zm52,24H72V68H88Zm96,0H168V68h16Zm36-24H208V92h12Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
