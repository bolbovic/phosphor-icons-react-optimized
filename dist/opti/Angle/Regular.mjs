var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? H(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && p(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var o = t, { children: a } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M96,72a8,8,0,0,1,8-8A104.11,104.11,0,0,1,208,168a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88A8,8,0,0,1,96,72ZM240,192H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64V200a8,8,0,0,0,8,8H240a8,8,0,0,0,0-16Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
