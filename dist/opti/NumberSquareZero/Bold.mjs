var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && c(e, a, t[a]);
  if (o)
    for (var a of o(t))
      s.call(t, a) && c(e, a, t[a]);
  return e;
};
var l = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && s.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = H((m, a) => {
  var r = m, { children: e } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,188c28.26,0,48-24.67,48-60s-19.74-60-48-60S80,92.67,80,128,99.74,188,128,188Zm0-96c23.33,0,24,32.32,24,36s-.67,36-24,36-24-32.32-24-36S104.67,92,128,92Zm80-64H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
