var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? H(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && h(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && h(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(f, Z({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M168,108H88a36,36,0,0,0-36,36v8a36,36,0,0,0,36,36h80a36,36,0,0,0,36-36v-8A36,36,0,0,0,168,108Zm28,44a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28v-8a28,28,0,0,1,28-28h80a28,28,0,0,1,28,28ZM208,44a28,28,0,0,0-27.71,24H75.71A28,28,0,0,0,20,72v80a68.07,68.07,0,0,0,68,68h80a68.07,68.07,0,0,0,68-68V72A28,28,0,0,0,208,44Zm20,108a60.07,60.07,0,0,1-60,60H88a60.07,60.07,0,0,1-60-60V72a20,20,0,0,1,40,0,4,4,0,0,0,4,4H184a4,4,0,0,0,4-4,20,20,0,0,1,40,0Zm-128-4a8,8,0,1,1-8-8A8,8,0,0,1,100,148Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,148Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
