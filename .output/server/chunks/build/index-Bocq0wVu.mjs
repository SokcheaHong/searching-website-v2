import { _ as _sfc_main$6 } from './index-BTyjDCwb.mjs';
import { useSSRContext, defineComponent, watch, unref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { b as arabicToKhmer, c as useLawStore } from './index-BjZolGNS.mjs';
import { u as useLazyAsyncData } from './asyncData-_fhhJZpV.mjs';
import { a as useRoute, b as useSeoMeta } from './server.mjs';
import './nuxt-link-r7fq5fTi.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center py-3" }, _attrs))}><div class="text-slate-800 font-bold text-2xl px-2"> \u178F\u17B6\u179A\u17B6\u1784\u1794\u1789\u17D2\u1787\u17B8\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u178A\u17C2\u179B\u1791\u17BE\u1794\u1794\u17B6\u1793\u1792\u17D2\u179C\u17BE\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796 </div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RegisterLaw/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-slate-800 font-bold text-md md:text-xl px-2 border-l-4 border-blue-500" }, _attrs))}> \u178F\u17B6\u179A\u17B6\u1784\u1794\u1789\u17D2\u1787\u17B8\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u179F\u179A\u17BB\u1794 </div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RegisterLaw/Title.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tr${ssrRenderAttrs(_attrs)}><td class="h-[90px] border border-slate-500"><div class="block h-4 w-4 mx-auto skeleton"></div></td><td class="h-[90px] border border-slate-500 w-[400px] skeleton"><div class="block h-4 w-11/12 skeleton"></div><div class="block h-4 w-4/6 mt-2 skeleton"></div></td><td class="h-[90px] border border-slate-500 w-[120px] skeleton"><div class="block h-4 w-11/12 mx-auto skeleton"></div><div class="block h-4 w-4/6 mx-auto mt-2 skeleton"></div></td><td class="h-[90px] border border-slate-500 w-[80px] skeleton"><div class="block h-4 w-11/12 mx-auto skeleton"></div><div class="block h-4 w-4/6 mx-auto mt-2 skeleton"></div></td><td class="h-[90px] border border-slate-500 w-[80px] skeleton"><div class="block h-4 w-11/12 mx-auto mt-2 skeleton"></div></td></tr>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RegisterLaw/Skeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    index: {},
    item: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<tr${ssrRenderAttrs(_attrs)}><td class="border border-slate-500 text-center">${ssrInterpolate(("arabicToKhmer" in _ctx ? _ctx.arabicToKhmer : unref(arabicToKhmer))(props.index))}</td><td class="border border-slate-500 w-[400px] p-2">${ssrInterpolate((_a = props.item) == null ? void 0 : _a.officialName)}</td><td class="border border-slate-500 text-center w-[120px] p-2">${ssrInterpolate((_b = props.item) == null ? void 0 : _b.numberAndDate)}</td><td class="border border-slate-500 text-center w-[80px]">${ssrInterpolate((_c = props.item) == null ? void 0 : _c.abbreviatedName)}</td><td class="border border-slate-500 text-center w-[80px]">${ssrInterpolate((_d = props.item) == null ? void 0 : _d.additionalInformation)}</td></tr>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RegisterLaw/Item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLawStore();
    const { status } = useLazyAsyncData("aws-register", () => store.getMany());
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_RegisterLawSkeleton = __nuxt_component_0;
      const _component_RegisterLawItem = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex text-slate-700 overflow-x-auto" }, _attrs))}><table class="table-fixed overflow-scroll w-full border-collapse border border-slate-500"><thead><tr class="bg-slate-100 text-xs font-[KhmerOSMoul]"><th class="border border-slate-500 text-center w-[40px] py-4">\u179B.\u179A</th><th class="border border-slate-500 w-[400px]">\u1788\u17D2\u1798\u17C4\u17C7\u1795\u17D2\u179B\u17BC\u179C\u1780\u17B6\u179A</th><th class="border border-slate-500 w-[200px] md:w-[120px]"> \u179B\u17C1\u1781 \u1793\u17B7\u1784\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 </th><th class="border border-slate-500 w-[100px]">\u1788\u17D2\u1798\u17C4\u17C7\u17A0\u17C5\u1780\u17B6\u178F\u17CB</th><th class="border border-slate-500 w-[80px]">\u1795\u17D2\u179F\u17C1\u1784\u17D7</th></tr></thead><tbody>`);
      if (unref(store).loading || unref(status) != "success") {
        _push(`<!--[-->`);
        ssrRenderList(unref(store).items, (item) => {
          _push(ssrRenderComponent(_component_RegisterLawSkeleton, {
            key: item == null ? void 0 : item.id
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if ((_a = unref(store).items) == null ? void 0 : _a.length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(store).items, (item, index) => {
          _push(ssrRenderComponent(_component_RegisterLawItem, {
            key: item == null ? void 0 : item.id,
            item,
            index
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RegisterLaw/List.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    watch(
      () => route.fullPath,
      () => {
        useSeoMeta({
          title: "\u178F\u17B6\u179A\u17B6\u1784\u1794\u1789\u17D2\u1787\u17B8\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F | \u1780\u17D2\u179A\u179F\u17BC\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
        });
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Search = _sfc_main$6;
      const _component_RegisterLawHeader = __nuxt_component_1;
      const _component_RegisterLawTitle = __nuxt_component_2;
      const _component_RegisterLawList = _sfc_main$1;
      _push(`<!--[--><section class="search_section_layout">`);
      _push(ssrRenderComponent(_component_Search, null, null, _parent));
      _push(`</section><section class="mt-9">`);
      _push(ssrRenderComponent(_component_RegisterLawHeader, null, null, _parent));
      _push(`<div class="border-b my-2"></div><div class="grid gap-3 py-2 px-6">`);
      _push(ssrRenderComponent(_component_RegisterLawTitle, null, null, _parent));
      _push(ssrRenderComponent(_component_RegisterLawList, null, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/laws-register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bocq0wVu.mjs.map
