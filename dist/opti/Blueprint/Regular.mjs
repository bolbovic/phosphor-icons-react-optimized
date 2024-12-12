var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, H, e) => H in a ? Z(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, V = (a, H) => {
  for (var e in H || (H = {}))
    m.call(H, e) && h(a, e, H[e]);
  if (t)
    for (var e of t(H))
      o.call(H, e) && h(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var v = r, { children: a } = v, H = p(v, ["children"]);
  return /* @__PURE__ */ l.createElement(f, V({ ref: e }, H), a, /* @__PURE__ */ l.createElement("path", { d: "M232,56H72V40a8,8,0,0,0-8-8H48A32,32,0,0,0,16,64V176a32,32,0,0,0,32,32H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56ZM32,64A16,16,0,0,1,48,48h8v96H48a31.82,31.82,0,0,0-16,4.29ZM224,192H48a16,16,0,0,1,0-32H64a8,8,0,0,0,8-8V72H224ZM104,136a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16H176V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16Zm32-16h24v16H136Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
