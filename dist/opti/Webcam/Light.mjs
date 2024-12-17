var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M166,104a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Zm122,98H134V181.75a78,78,0,1,0-12,0V202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM62,104a66,66,0,1,1,66,66A66.08,66.08,0,0,1,62,104Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
