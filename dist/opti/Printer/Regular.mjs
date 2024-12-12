var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var V = (a, H, e) => H in a ? s(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, l = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && V(a, e, H[e]);
  if (r)
    for (var e of r(H))
      c.call(H, e) && V(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const i = Z((t, e) => {
  var m = t, { children: a } = m, H = p(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
