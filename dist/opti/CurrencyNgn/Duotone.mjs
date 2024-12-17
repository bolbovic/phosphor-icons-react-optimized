var v = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (H)
    for (var e of H(t))
      c.call(t, e) && l(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const i = V((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M192,112v98l-51.51-66H64V46l51.51,66Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M216,136H200V120h16a8,8,0,0,0,0-16H200V46a8,8,0,0,0-16,0v58H119.42L70.31,41.08A8,8,0,0,0,56,46v58H40a8,8,0,0,0,0,16H56v16H40a8,8,0,0,0,0,16H56v58a8,8,0,0,0,16,0V152h64.58l49.11,62.92A8,8,0,0,0,192,218a7.8,7.8,0,0,0,2.6-.44A8,8,0,0,0,200,210V152h16a8,8,0,0,0,0-16Zm-32-16v16H144.39L131.9,120ZM72,69.25,99.12,104H72ZM72,136V120h39.61l12.49,16Zm112,50.75L156.88,152H184Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
