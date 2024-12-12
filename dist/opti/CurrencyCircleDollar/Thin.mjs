var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
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
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const A = d((m, e) => {
  var h = m, { children: a } = h, t = c(h, ["children"]);
  return /* @__PURE__ */ f.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm36-72a24,24,0,0,1-24,24h-8v12a4,4,0,0,1-8,0V172H104a4,4,0,0,1,0-8h36a16,16,0,0,0,0-32H116a24,24,0,0,1,0-48h8V72a4,4,0,0,1,8,0V84h20a4,4,0,0,1,0,8H116a16,16,0,0,0,0,32h24A24,24,0,0,1,164,148Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
