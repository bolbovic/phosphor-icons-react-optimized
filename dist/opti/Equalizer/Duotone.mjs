var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, c = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && h(a, e, m[e]);
  if (H)
    for (var e of H(m))
      p.call(m, e) && h(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, c({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M232,64V192H24V80A16,16,0,0,1,40,64Z", opacity: "0.2" }), /* @__PURE__ */ Z.createElement("path", { d: "M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm-8,24H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm80-64H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm80-96H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM184,72h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16Zm48,48H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
