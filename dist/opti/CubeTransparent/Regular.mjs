var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (e, r, a) => r in e ? h(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, M = (e, r) => {
  for (var a in r || (r = {}))
    Z.call(r, a) && H(e, a, r[a]);
  if (l)
    for (var a of l(r))
      o.call(r, a) && H(e, a, r[a]);
  return e;
};
var V = (e, r) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && o.call(e, t) && (a[t] = e[t]);
  return a;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, a) => {
  var m = t, { children: e } = m, r = V(m, ["children"]);
  return /* @__PURE__ */ p.createElement(f, M({ ref: a }, r), e, /* @__PURE__ */ p.createElement("path", { d: "M221.66,90.34h0l-56-56A8,8,0,0,0,160,32H40a8,8,0,0,0-8,8V160a8,8,0,0,0,2.3,5.61l56,56h0A8,8,0,0,0,96,224H216a8,8,0,0,0,8-8V96A8,8,0,0,0,221.66,90.34ZM168,59.31,196.69,88H168ZM88,196.69,59.31,168H88ZM88,152H48V59.31l40,40ZM59.31,48H152V88H99.31ZM152,104v48H104V104ZM104,208V168h52.69l40,40Zm104-11.31-40-40V104h40Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
