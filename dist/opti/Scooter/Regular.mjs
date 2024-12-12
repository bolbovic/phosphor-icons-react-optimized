var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      c.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const n = A((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M212,136c-1.18,0-2.35.06-3.51.17l-32.9-98.7A8,8,0,0,0,168,32H136a8,8,0,0,0,0,16h26.23l17.44,52.31L124.21,168H79.77a36,36,0,1,0-1.83,16H128a8,8,0,0,0,6.19-2.93l51.46-62.81,7.66,23A36,36,0,1,0,212,136ZM44,192a20,20,0,1,1,20-20A20,20,0,0,1,44,192Zm168,0a20,20,0,1,1,20-20A20,20,0,0,1,212,192Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
