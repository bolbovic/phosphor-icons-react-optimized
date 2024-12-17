var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M184,208a16,16,0,1,1-16-16A16,16,0,0,1,184,208Zm-64-16a16,16,0,1,0,16,16A16,16,0,0,0,120,192Zm-48,0a16,16,0,1,0,16,16A16,16,0,0,0,72,192ZM236,92a80.09,80.09,0,0,1-80,80H76A56,56,0,0,1,76,60a56.76,56.76,0,0,1,6.39.36A80.08,80.08,0,0,1,236,92Zm-24,0a56.06,56.06,0,0,0-112-3.31,12,12,0,1,1-24-1.38c.06-1.11.15-2.21.26-3.31H76a32,32,0,0,0,0,64h80A56.06,56.06,0,0,0,212,92Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
