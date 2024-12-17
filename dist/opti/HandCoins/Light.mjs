var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var l = m, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-45.24,10.4A26,26,0,0,0,140,114H89.94a29.78,29.78,0,0,0-21.21,8.79L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170ZM164,94a34.54,34.54,0,0,0,7.28-.78,34,34,0,1,0,25.46-42.43A34,34,0,1,0,164,94Zm62-10a22,22,0,1,1-22-22A22,22,0,0,1,226,84ZM164,38a21.94,21.94,0,0,1,21.51,17.49,34,34,0,0,0-15.38,25.65A22,22,0,1,1,164,38Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
