var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M208,36H83.31a12,12,0,0,0-8.48,3.51L39.52,74.83A11.9,11.9,0,0,0,36,83.31V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM84,44h88V80a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V83.31a4,4,0,0,1,1.17-2.82L76,49.66V80A12,12,0,0,0,88,92h80a12,12,0,0,0,12-12V44h28a4,4,0,0,1,4,4Zm-84-92a36,36,0,1,0,36,36A36,36,0,0,0,128,116Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,180Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
