var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ H.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M168,106H88a38,38,0,0,0-38,38v8a38,38,0,0,0,38,38h80a38,38,0,0,0,38-38v-8A38,38,0,0,0,168,106Zm26,46a26,26,0,0,1-26,26H88a26,26,0,0,1-26-26v-8a26,26,0,0,1,26-26h80a26,26,0,0,1,26,26ZM208,42a30.05,30.05,0,0,0-29.4,24H77.4A30,30,0,0,0,18,72v80a70.08,70.08,0,0,0,70,70h80a70.08,70.08,0,0,0,70-70V72A30,30,0,0,0,208,42Zm18,110a58.07,58.07,0,0,1-58,58H88a58.07,58.07,0,0,1-58-58V72a18,18,0,0,1,36,0,6,6,0,0,0,6,6H184a6,6,0,0,0,6-6,18,18,0,0,1,36,0Zm-124-4a10,10,0,1,1-10-10A10,10,0,0,1,102,148Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,148Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
