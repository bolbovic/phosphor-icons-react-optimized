var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? Z(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && l(a, e, m[e]);
  if (o)
    for (var e of o(m))
      h.call(m, e) && l(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M100,152v56a12,12,0,0,1-24,0V190.07l-6.17,8.81a12,12,0,0,1-19.66,0L44,190.07V208a12,12,0,0,1-24,0V152a12,12,0,0,1,21.83-6.88L60,171.07l18.17-25.95A12,12,0,0,1,100,152Zm84,28a40,40,0,0,1-40,40H128a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h16A40,40,0,0,1,184,180Zm-24,0a16,16,0,0,0-16-16h-4v32h4A16,16,0,0,0,160,180Zm60-92V224a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
