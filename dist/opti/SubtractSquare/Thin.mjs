var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const c = n((r, e) => {
  var m = r, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M216,92H164V40a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V160a4,4,0,0,0,4,4H92v52a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V96A4,4,0,0,0,216,92ZM161.66,212l-48-48h44.68l48,48ZM164,158.34V113.66l48,48v44.68ZM212,100v50.34l-48-48V100ZM44,44H156V156H44Zm56,120h2.34l48,48H100Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
