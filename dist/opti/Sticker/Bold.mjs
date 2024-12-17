var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var m = o, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M168,28H88A60.07,60.07,0,0,0,28,88v80a60.07,60.07,0,0,0,60,60h48a11.9,11.9,0,0,0,3.79-.62c27.63-9.21,78.38-60,87.59-87.59A11.9,11.9,0,0,0,228,136V88A60.07,60.07,0,0,0,168,28ZM52,168V88A36,36,0,0,1,88,52h80a36,36,0,0,1,36,36v36H184a60.07,60.07,0,0,0-60,60v20H88A36,36,0,0,1,52,168Zm96,27.63V184a36,36,0,0,1,36-36h11.63C184,164.11,164.11,184,148,195.63Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
