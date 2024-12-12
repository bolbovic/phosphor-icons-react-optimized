var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      c.call(r, e) && o(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var m = t, { children: a } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M212,136c-1.18,0-2.35.06-3.51.17l-32.9-98.7A8,8,0,0,0,168,32H136a8,8,0,0,0,0,16h26.23l17.44,52.31L124.21,168H79.77a36,36,0,1,0-1.83,16H128a8,8,0,0,0,6.19-2.93l51.46-62.81,7.66,23A36,36,0,1,0,212,136ZM44,192a20,20,0,1,1,20-20A20,20,0,0,1,44,192Zm168,0a20,20,0,1,1,20-20A20,20,0,0,1,212,192Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
