var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, v({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M212.24,195.76a6,6,0,1,1-8.48,8.48L184,184.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L175.52,176l-19.76-19.76a6,6,0,0,1,8.48-8.48L184,167.52l19.76-19.76a6,6,0,0,1,8.48,8.48L192.48,176ZM160,118a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v40A6,6,0,0,0,160,118Zm40,0a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0v80A6,6,0,0,0,200,118Zm-80-12a6,6,0,0,0-6,6v88a6,6,0,0,0,12,0V112A6,6,0,0,0,120,106ZM80,146a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V152A6,6,0,0,0,80,146ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
