import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-r7fq5fTi.mjs';
import { u as useDocumentStore, e as uniqueArray, f as formatDateToKhmer } from './index-BjZolGNS.mjs';
import moment from 'moment';
import { u as useSearch } from './index-BTyjDCwb.mjs';
import { u as useLazyAsyncData } from './asyncData-_fhhJZpV.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-3 lg:divide-x-2 gap-3 bg-zinc-100 p-5 rounded-sm" }, _attrs))}><div class="w-full lg:col-span-2 grid"><div class="mb-1 w-[120px] h-[28px] skeleton"></div><div class="h-[28px] w-11/12 skeleton"></div></div><div class="lg:col-span-1 w-full flex justify-between items-center gap-2 ps-0 lg:ps-3"><div class="flex-1 flex flex-col md:justify-start gap-2 w-full lg:basis-1/3"><div class="h-[20px] w-5/6 skeleton"></div><div class="h-[20px] w-4/5 skeleton"></div></div><div class="h-6 w-6 skeleton"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateLaw/Skeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("pdf.ByiRBl0c.png");
const _imports_1 = "" + buildAssetsURL("docx.BNt02SMu.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DocumentDownload",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    onHide: { type: Function }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: props.show ? null : { display: "none" },
        class: "fixed inset-0 z-50 overflow-y-auto backdrop-contrast-50 shadow-lg flex items-center justify-center"
      }, _attrs))} data-v-f52637f5><div class="relative block m-2" data-v-f52637f5><button role="button" class="btn btn-sm btn-circle btn-info absolute right-0 -top-9" aria-label="Close" data-v-f52637f5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-[20px] h-[20px]" data-v-f52637f5><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" data-v-f52637f5></path></svg></button><div class="flex flex-wrap justify-center bg-zinc-50 p-5 h-auto rounded shadow-sm" data-v-f52637f5><div class="download_option_item" data-v-f52637f5><img${ssrRenderAttr("src", _imports_0)} class="block object-contain h-16 sm:h-20 w-auto" data-v-f52637f5><span class="text-sm sm:text-base" data-v-f52637f5>\u1791\u17B6\u1789\u1799\u1780\u1787\u17B6\u1791\u1798\u17D2\u179A\u1784\u17CB PDF</span></div><div class="download_option_item" data-v-f52637f5><img${ssrRenderAttr("src", _imports_1)} class="block object-contain h-16 sm:h-20 w-auto" data-v-f52637f5><span class="text-sm sm:text-base" data-v-f52637f5>\u1791\u17B6\u1789\u1799\u1780\u1787\u17B6\u1791\u1798\u17D2\u179A\u1784\u17CB WORD</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DocumentDownload.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f52637f5"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_DocumentDownload = __nuxt_component_1;
      _push(`<!--[--><div class="grid lg:grid-cols-3 lg:divide-x-2 gap-3 bg-zinc-100 p-5 rounded-sm"><div class="w-full lg:col-span-2"><div class="flex gap-3 mb-1">`);
      if (((_a = props.item) == null ? void 0 : _a.categories) && ((_c = (_b = props.item) == null ? void 0 : _b.categories) == null ? void 0 : _c.length)) {
        _push(`<!--[-->`);
        ssrRenderList(("uniqueArray" in _ctx ? _ctx.uniqueArray : unref(uniqueArray))((_d = props.item) == null ? void 0 : _d.categories, "id"), (category) => {
          _push(`<span class="inline-block bg-gray-500 text-white p-1 text-sm text-center min-w-[120px] rounded-sm">${ssrInterpolate(category == null ? void 0 : category.name)}</span>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/document/" + ((_e = props.item) == null ? void 0 : _e.id),
        class: "font-black text-xl link-hover text-blue-800 lg:basis-3/5 link_transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate((_a2 = props.item) == null ? void 0 : _a2.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b2 = props.item) == null ? void 0 : _b2.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:col-span-1 w-full flex justify-between items-center gap-2 ps-0 lg:ps-3"><div class="flex-1 flex flex-col md:justify-start gap-2 text-slate-600 text-sm w-full lg:basis-1/3"><div> \u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791\u1794\u17D2\u179A\u1780\u17B6\u179F\u17B2\u17D2\u1799\u1794\u17D2\u179A\u17BE: ${ssrInterpolate(("formatDateToKhmer" in _ctx ? _ctx.formatDateToKhmer : unref(formatDateToKhmer))(unref(moment)((_g = (_f = props.item) == null ? void 0 : _f.attributes[0]) == null ? void 0 : _g.value).unix()))}</div><div>\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791\u1794\u1784\u17D2\u17A0\u17C4\u17C7\u200B: ${ssrInterpolate(("formatDateToKhmer" in _ctx ? _ctx.formatDateToKhmer : unref(formatDateToKhmer))((_h = props.item) == null ? void 0 : _h.date))}</div></div><button type="button" aria-label="Download" class="btn btn-ghost btn-info btn-sm btn-circle text-blue-700"><svg class="inline-block text-inherit h-[1em] w-[1em]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg></button></div></div>`);
      _push(ssrRenderComponent(_component_DocumentDownload, {
        show: unref(show),
        "on-hide": () => show.value = false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateLaw/Item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDocumentStore();
    const { params } = useSearch();
    const { status } = useLazyAsyncData(
      "update-laws",
      () => store.getMany(params.value),
      {
        watch: [params.value]
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UpdateLawSkeleton = __nuxt_component_0;
      const _component_UpdateLawItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-2" }, _attrs))}>`);
      if (unref(store).loading || unref(status) != "success") {
        _push(`<!--[-->`);
        ssrRenderList(unref(store).items, (item) => {
          _push(ssrRenderComponent(_component_UpdateLawSkeleton, {
            key: item == null ? void 0 : item.id
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if ((_a = unref(store).items) == null ? void 0 : _a.length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(store).items, (item) => {
          _push(ssrRenderComponent(_component_UpdateLawItem, {
            key: item == null ? void 0 : item.id,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateLaw/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=List-DcZQ6PSG.mjs.map
