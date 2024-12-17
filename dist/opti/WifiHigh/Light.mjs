var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204ZM235.81,88.55a170,170,0,0,0-215.62,0,6,6,0,1,0,7.62,9.27,158,158,0,0,1,200.38,0,6,6,0,1,0,7.62-9.27Zm-32.08,35.79a122,122,0,0,0-151.46,0,6,6,0,0,0,7.46,9.41,110,110,0,0,1,136.54,0A6,6,0,0,0,200,135a6,6,0,0,0,3.73-10.7Zm-32.2,35.81a74,74,0,0,0-87.06,0,6,6,0,0,0,7.06,9.7,62,62,0,0,1,72.94,0,6,6,0,0,0,8.38-1.32A6,6,0,0,0,171.53,160.15Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
