var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import M from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M152,34H72a6,6,0,0,0-6,6V168a78.09,78.09,0,0,0,78,78,6,6,0,0,0,6-6V174h2a70,70,0,0,0,0-140ZM78,62.91,133.74,162H78Zm60,82.19L82.26,46H138ZM78.28,174H138v59.73A66.1,66.1,0,0,1,78.28,174ZM152,162h-2V46h2a58,58,0,0,1,0,116Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
