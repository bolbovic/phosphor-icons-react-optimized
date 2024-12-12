var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V192a20,20,0,0,0,20,20H60v28a12,12,0,0,0,19.68,9.22L124.34,212H165.1a20.06,20.06,0,0,0,12.81-4.64l42.89-35.74a19.93,19.93,0,0,0,7.2-15.37V48A20,20,0,0,0,208,28Zm-4,126.38L163.66,188H120a12,12,0,0,0-7.68,2.78L84,214.38V200a12,12,0,0,0-12-12H52V52H204ZM156,136V88a12,12,0,0,1,24,0v48a12,12,0,0,1-24,0Zm-48,0V88a12,12,0,0,1,24,0v48a12,12,0,0,1-24,0Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
