var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((m, e) => {
  var H = m, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M248,68H8a4,4,0,0,0,0,8H20V192a4,4,0,0,0,8,0V140H228v52a4,4,0,0,0,8,0V76h12a4,4,0,0,0,0-8ZM28,76h96v56H28Zm200,56H132V76h96ZM92,104a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H88A4,4,0,0,1,92,104Zm72,0a4,4,0,0,1,4-4h24a4,4,0,0,1,0,8H168A4,4,0,0,1,164,104Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
