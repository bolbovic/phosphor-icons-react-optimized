var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, V = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    d.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && l.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((m, a) => {
  var r = m, { children: e } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(H, V({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V76H44V60ZM44,196V100H212v96Zm136-72a52,52,0,0,1-104,0,12,12,0,0,1,24,0,28,28,0,0,0,56,0,12,12,0,0,1,24,0Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
