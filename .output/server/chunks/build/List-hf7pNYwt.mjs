import { _ as __nuxt_component_0$1 } from './nuxt-link-r7fq5fTi.mjs';
import { defineComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { d as usePostStore, f as formatDateToKhmer } from './index-BjZolGNS.mjs';
import moment from 'moment';
import { u as useLazyAsyncData } from './asyncData-_fhhJZpV.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      validator: (value) => ["all", "featured"].includes(value),
      required: false,
      default: "all"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center py-3" }, _attrs))}><div class="text-slate-800 font-bold text-2xl border-l-4 border-blue-500 px-2"> \u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u1787\u17BC\u1793\u178A\u17C6\u178E\u17B9\u1784 </div>`);
      if (props.type === "featured") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: "/news", state: { isFeature: 1 } },
          class: "text-blue-600 font-bold text-lg link hover:text-blue-800 link_transition px-2 flex items-center gap-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="inline-block text-inherit h-[1em] w-[1em]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"${_scopeId}><path class="" fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"${_scopeId}></path></svg><span${_scopeId}>\u1798\u17BE\u179B\u1794\u1793\u17D2\u1790\u17C2\u1798</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "inline-block text-inherit h-[1em] w-[1em]",
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fas",
                  "data-icon": "list",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512"
                }, [
                  createVNode("path", {
                    class: "",
                    fill: "currentColor",
                    d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                  })
                ])),
                createVNode("span", null, "\u1798\u17BE\u179B\u1794\u1793\u17D2\u1790\u17C2\u1798")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Post/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col sm:flex-row md:flex-row items-start md:items-center gap-3 py-3 md:px-5 border-b" }, _attrs))}><div class="w-[300px] flex items-center justify-start gap-3"><div class="w-[180px] h-[20px] skeleton"></div><div class="w-full min-w-[160px] h-[32px] skeleton"></div></div><div class="w-full lg:w-[400px] h-[24px] skeleton"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Post/Skeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col sm:flex-row md:flex-row items-start md:items-center text-slate-500 gap-2 py-3 md:px-5 border-b" }, _attrs))}><div class="w-[300px] flex items-center justify-start"><div class="w-[180px] text-sm">${ssrInterpolate(("formatDateToKhmer" in _ctx ? _ctx.formatDateToKhmer : unref(formatDateToKhmer))(
        unref(moment)(((_a = props.item) == null ? void 0 : _a.publishedAt) || ((_b = props.item) == null ? void 0 : _b.createdAt)).unix()
      ))}</div><div class="w-full mx-2 min-w-[160px]"><span class="type-text-badge-text !text-xs w-full inline-block text-white p-2 uppercase text-bold text-center tracking-wide rounded-sm" style="${ssrRenderStyle({ backgroundColor: (_c = props.item.category) == null ? void 0 : _c.color })}">${ssrInterpolate((_d = props.item.category) == null ? void 0 : _d.name)}</span></div></div><div class="w-5/5 md:max-w-[64%] xl:max-w-[67%] text-slate-700">${(_a2 = (_e = props.item) == null ? void 0 : _e.body) != null ? _a2 : ""}</div>`);
      if (((_f = props.item.category) == null ? void 0 : _f.type) == "update") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/update-laws?date=" + unref(moment)(((_g = props.item) == null ? void 0 : _g.publishedAt) || ((_h = props.item) == null ? void 0 : _h.createdAt)).format(
            "YYYY-MM-DD"
          ),
          class: "link text-blue-600 text-nowrap hover:text-blue-800 link_transition px-2 flex items-center gap-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="inline-block text-inherit h-[1em] w-[1em]" aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"${_scopeId}><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"${_scopeId}></path></svg><span${_scopeId}>\u1798\u17BE\u179B\u179B\u1798\u17D2\u17A2\u17B7\u178F</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "inline-block text-inherit h-[1em] w-[1em]",
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "far",
                  "data-icon": "copy",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 448 512"
                }, [
                  createVNode("path", {
                    fill: "currentColor",
                    d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                  })
                ])),
                createVNode("span", null, "\u1798\u17BE\u179B\u179B\u1798\u17D2\u17A2\u17B7\u178F")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Post/Item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePostStore();
    useLazyAsyncData(
      "news",
      () => {
        var _a;
        return store.getMany({ isFeatured: Number(!((_a = history == null ? void 0 : history.state) == null ? void 0 : _a.isFeature) || 1) });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PostSkeleton = __nuxt_component_0;
      const _component_PostItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-3" }, _attrs))}>`);
      if (unref(store).loading) {
        _push(`<!--[-->`);
        ssrRenderList(unref(store).items, (item) => {
          _push(ssrRenderComponent(_component_PostSkeleton, {
            key: item.id
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if ((_a = unref(store).items) == null ? void 0 : _a.length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(store).items, (item) => {
          _push(ssrRenderComponent(_component_PostItem, {
            key: item.id,
            item
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Post/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$3 as _, _sfc_main as a };
//# sourceMappingURL=List-hf7pNYwt.mjs.map
