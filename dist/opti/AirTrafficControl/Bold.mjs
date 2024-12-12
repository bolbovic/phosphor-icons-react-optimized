var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && h(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    m.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var l = o, { children: a } = l, t = d(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232.38,68.52A20,20,0,0,0,216,60H140V36h12a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24h12V60H40A20,20,0,0,0,21.2,86.83l26.19,72A20.06,20.06,0,0,0,66.18,172H92v60a12,12,0,0,0,24,0V172h24v60a12,12,0,0,0,24,0V172h25.82a20.06,20.06,0,0,0,18.79-13.17l26.19-72A20,20,0,0,0,232.38,68.52ZM114,148,102.38,84h51.24L142,148ZM45.71,84H78l11.64,64H69ZM187,148H166.38L178,84h32.27Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
