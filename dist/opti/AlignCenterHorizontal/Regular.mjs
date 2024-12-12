var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, v = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && o(a, e, r[e]);
  if (H)
    for (var e of H(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var m = t, { children: a } = m, r = h(m, ["children"]);
  return /* @__PURE__ */ l.createElement(i, v({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M208,136H136V120h48a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H136V32a8,8,0,0,0-16,0V48H72A16,16,0,0,0,56,64v40a16,16,0,0,0,16,16h48v16H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h72v16a8,8,0,0,0,16,0V208h72a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM72,64H184v40H72ZM208,192H48V152H208v40Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
