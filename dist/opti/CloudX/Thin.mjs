var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(L, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M160,44A84.11,84.11,0,0,0,83.59,93.12,60.71,60.71,0,0,0,72,92a60,60,0,0,0,0,120h88a84,84,0,0,0,0-168Zm0,160H72a52,52,0,1,1,8.55-103.3A83.66,83.66,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,76,76Zm26.83-89.17L165.66,136l21.17,21.17a4,4,0,0,1-5.66,5.66L160,141.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L154.34,136l-21.17-21.17a4,4,0,0,1,5.66-5.66L160,130.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
