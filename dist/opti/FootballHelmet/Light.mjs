var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import p, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const s = Z((l, e) => {
  var h = l, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M94,164a10,10,0,1,1-10-10A10,10,0,0,1,94,164Zm136,12v32a14,14,0,0,1-14,14H180a14.1,14.1,0,0,1-13.43-10l-11.22-38h-26.1l4.33,14.56c0,.13.07.27.1.4A14,14,0,0,1,120,206H72.14A6,6,0,0,1,68.75,205,98,98,0,0,1,26,124c0-53.27,43.35-97.22,96.61-98A98,98,0,0,1,222,124v4a6,6,0,0,1-6,6H156l8.27,28H216A14,14,0,0,1,230,176ZM122,191.71l-15.54-52.26c0-.14-.07-.28-.1-.41A14,14,0,0,1,120,122h90a86,86,0,0,0-86-84h-1.24C76,38.66,38,77.22,38,124a86,86,0,0,0,36,70h46a2,2,0,0,0,2-2.29ZM151.79,162l-8.27-28H120a2,2,0,0,0-2,2.29L125.66,162ZM218,176a2,2,0,0,0-2-2H167.85l10.21,34.57A2,2,0,0,0,180,210h36a2,2,0,0,0,2-2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
