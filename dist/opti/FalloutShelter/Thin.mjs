var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var l = m, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ n.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm67.53-93.89A4,4,0,0,0,192,124H135.47l27.86-41.78A4,4,0,0,0,160,76H96a4,4,0,0,0-3.33,6.22L120.53,124H64a4,4,0,0,0-3.33,6.22l32,48a4,4,0,0,0,6.66,0l28.67-43,28.67,43a4,4,0,0,0,6.66,0l32-48A4,4,0,0,0,195.53,126.11ZM152.53,84,128,120.79,103.47,84ZM96,168.79,71.47,132h49.06Zm64,0L135.47,132h49.06Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
