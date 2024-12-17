var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((t, e) => {
  var H = t, { children: a } = H, r = v(H, ["children"]);
  return /* @__PURE__ */ c.createElement(i, l({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M192,120a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H152V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8A40,40,0,0,1,64,64a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H88v56a64.07,64.07,0,0,0,64,64h40a8,8,0,0,0,8-8V184a8,8,0,0,0-8-8H160a8,8,0,0,1-8-8V120Zm-32,72h24v32H152a48.05,48.05,0,0,1-48-48V112a8,8,0,0,0-8-8H72V79.43A56.13,56.13,0,0,0,119.43,32H136V72a8,8,0,0,0,8,8h40v24H144a8,8,0,0,0-8,8v56A24,24,0,0,0,160,192Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
