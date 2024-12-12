var Z = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (h)
    for (var e of h(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var o = m, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ V.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,112h-4a28,28,0,0,1,0-56h4ZM36,100h4a28,28,0,0,1,0,56H36Zm0,80h4A52,52,0,0,0,40,76H36V68h80V188H36Zm104,8V68h80v8h-4a52,52,0,0,0,0,104h4v8Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
