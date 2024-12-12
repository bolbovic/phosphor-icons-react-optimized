var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var L = (e, t) => {
  var a = {};
  for (var l in e)
    c.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && n.call(e, l) && (a[l] = e[l]);
  return a;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const E = f((l, a) => {
  var m = l, { children: e } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M96,240l16-80L48,136,160,16,144,96l64,24Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
