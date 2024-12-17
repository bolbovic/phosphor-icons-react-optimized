var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? V(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const A = f((t, e) => {
  var c = t, { children: a } = c, m = n(c, ["children"]);
  return /* @__PURE__ */ s.createElement(h, Z({ ref: e }, m), a, /* @__PURE__ */ s.createElement("path", { d: "M92,108a24,24,0,1,0,24,24A24,24,0,0,0,92,108Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,92,148Zm72-40a24,24,0,1,0,24,24A24,24,0,0,0,164,108Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,164,148ZM128,20C72.86,20,28,63.07,28,116c0,33.43,18.33,64.64,48,82v18a12,12,0,0,0,12,12h80a12,12,0,0,0,12-12V198c29.67-17.38,48-48.59,48-82C228,63.07,183.14,20,128,20Zm46.06,172.19a4,4,0,0,0-2.06,3.5V216a4,4,0,0,1-4,4H148V192a4,4,0,0,0-8,0v28H116V192a4,4,0,0,0-8,0v28H88a4,4,0,0,1-4-4V195.69a4,4,0,0,0-2.06-3.5C53.6,176.48,36,147.29,36,116c0-48.52,41.27-88,92-88s92,39.48,92,88C220,147.29,202.4,176.48,174.06,192.19Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
