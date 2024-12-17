var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && h(a, e, H[e]);
  if (m)
    for (var e of m(H))
      i.call(H, e) && h(a, e, H[e]);
  return a;
};
var V = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, H = V(r, ["children"]);
  return /* @__PURE__ */ n.createElement(l, p({ ref: e }, H), a, /* @__PURE__ */ n.createElement("path", { d: "M240,84H106.47L83.58,38.21A4,4,0,0,0,80,36H48a4,4,0,0,0-4,4V84H24a4,4,0,0,0,0,8H44V212H24a4,4,0,0,0,0,8H128a4,4,0,0,0,0-8H108V92H212v92a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4v-8a4,4,0,0,0-8,0v8a12,12,0,0,0,12,12h16a12,12,0,0,0,12-12V92h20a4,4,0,0,0,0-8ZM52,44H77.53l20,40H52Zm0,168V156h48v56Zm48-64H52V92h48Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
