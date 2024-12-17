var v = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M180,148H156V108h24a32,32,0,1,0-32-32v24H108V76a32,32,0,1,0-32,32h24v40H76a32,32,0,1,0,32,32V156h40v24a32,32,0,1,0,32-32ZM156,76a24,24,0,1,1,24,24H156ZM52,76a24,24,0,0,1,48,0v24H76A24,24,0,0,1,52,76Zm48,104a24,24,0,1,1-24-24h24Zm8-72h40v40H108Zm72,96a24,24,0,0,1-24-24V156h24a24,24,0,0,1,0,48Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
