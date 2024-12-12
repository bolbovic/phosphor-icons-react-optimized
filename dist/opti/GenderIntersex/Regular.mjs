var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      V.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M208,24H168a8,8,0,0,0,0,16h20.69L163.54,65.15A64,64,0,1,0,112,175.48V192H88a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V208h24a8,8,0,0,0,0-16H128V175.48a63.92,63.92,0,0,0,45.84-98L200,51.31V72a8,8,0,0,0,16,0V32A8,8,0,0,0,208,24ZM120,160a48,48,0,1,1,48-48A48.05,48.05,0,0,1,120,160Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
