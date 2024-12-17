var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
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
import A, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const Z = f((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ A.createElement(l, h({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M128,114a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,114Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,194Zm81.1-62.68L179.3,47.11A54,54,0,0,0,77.08,46h0L47.56,129.52a86,86,0,1,0,161.54,1.8ZM128,234A74.05,74.05,0,0,1,58.8,133.72c0-.05,0-.09.05-.13L88.39,50h0a42,42,0,0,1,79.53.92s0,.08.05.13l29.82,84.28A74.06,74.06,0,0,1,128,234Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
