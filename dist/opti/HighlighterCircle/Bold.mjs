var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = V((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M204.37,51.59A108,108,0,1,0,236,128,108.11,108.11,0,0,0,204.37,51.59ZM140,136H116V111.39l24-12Zm-40,71.25V160h56v47.25a84.73,84.73,0,0,1-56,0Zm87.4-19.84a84.53,84.53,0,0,1-7.4,6.55V156a20,20,0,0,0-16-19.6V80a12,12,0,0,0-17.37-10.73l-48,24A12,12,0,0,0,92,104v32.41A20,20,0,0,0,76,156v38a84.53,84.53,0,0,1-7.4-6.55,84,84,0,1,1,118.8,0Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
