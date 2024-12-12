var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (r)
    for (var a of r(t))
      A.call(t, a) && i(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && A.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = l((m, a) => {
  var o = m, { children: e } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, n({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,116a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,116Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,196Zm79.22-64L177.43,47.8A52,52,0,0,0,79,46.66h0L49.45,130.17A84,84,0,1,0,207.22,132ZM128,236A76.06,76.06,0,0,1,57,132.92L86.5,49.33a44,44,0,0,1,83.35,1.05l29.82,84.28A76,76,0,0,1,128,236Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
