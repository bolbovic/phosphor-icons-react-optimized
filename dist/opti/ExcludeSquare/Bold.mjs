var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && o(a, e, m[e]);
  if (l)
    for (var e of l(m))
      H.call(m, e) && o(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var Z = t, { children: a } = Z, m = p(Z, ["children"]);
  return /* @__PURE__ */ d.createElement(c, V({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M228,160V96a12,12,0,0,0-12-12H172V40a12,12,0,0,0-12-12H40A12,12,0,0,0,28,40V96h0v64a12,12,0,0,0,12,12H84v44a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V160Zm-63,44-32-32H155l32,32ZM52,69l32,32V123L52,91ZM91,52l32,32H101L69,52Zm17,96V108h40v40Zm64,7V133l32,32V187Zm32-24-23-23h23ZM148,75,125,52h23ZM52,125l23,23H52Zm56,56,23,23H108Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
