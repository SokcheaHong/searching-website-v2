import { _ as _sfc_main$3 } from './index-BTyjDCwb.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$4 } from './List-hf7pNYwt.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-r7fq5fTi.mjs';
import { a as useAPI } from './index-BjZolGNS.mjs';
import { useSSRContext, defineComponent, watch, withCtx, createTextVNode, withAsyncContext, ref, unref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { a as useRoute, b as useSeoMeta } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './asyncData-_fhhJZpV.mjs';
import 'moment';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useAPI("/api/about")), __temp = await __temp, __restore(), __temp);
    const about = ref(
      '<p>\u1782\u17C1\u17A0\u1791\u17C6\u1796\u17D0\u179A\u1793\u17C1\u17C7 \u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u1794\u1784\u17D2\u1780\u17BE\u178F\u17A1\u17BE\u1784\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1785\u1784\u1780\u17D2\u179A\u1784\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u1780\u17D2\u1793\u17BB\u1784\u1780\u17D2\u179A\u1794\u1781\u178E\u17D2\u178C\u179C\u17B7\u179F\u17D0\u1799\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB \u1780\u17D2\u1793\u17BB\u1784\u1782\u17C4\u179B\u1794\u17C6\u178E\u1784\u1795\u17D2\u178F\u179B\u17CB\u1797\u17B6\u1796\u1784\u17B6\u1799\u179F\u17D2\u179A\u17BD\u179B\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1780\u17B6\u179A\u179F\u17D2\u179A\u17B6\u179C\u1787\u17D2\u179A\u17B6\u179C\u17D4 \u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB \u179A\u17BD\u1798\u1798\u17B6\u1793 \u1782\u17C4\u179B\u1793\u1799\u17C4\u1794\u17B6\u1799 \u1796\u17D2\u179A\u17C7\u179A\u17B6\u1787\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799 \u1780\u17D2\u179A\u1798 \u1785\u17D2\u1794\u17B6\u1794\u17CB \u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799 \u1794\u17D2\u179A\u1780\u17B6\u179F \u179F\u17B6\u179A\u17B6\u1785\u179A\u178E\u17C2\u1793\u17B6\u17C6 \u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u178E\u17C2\u1793\u17B6\u17C6 \u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785 \u1794\u1791\u1794\u1789\u17D2\u1787\u17B6 \u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u1794\u17D2\u179A\u1780\u17B6\u179F\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u17D4 \u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1791\u17B6\u17C6\u1784\u1793\u17C1\u17C7 \u1782\u17BA\u1787\u17B6\u1785\u17D2\u1794\u17B6\u1794\u17CB\u1785\u1798\u17D2\u179B\u1784\u1791\u17B6\u17C6\u1784\u179F\u17D2\u179A\u17BB\u1784\u178F\u17B6\u1798\u1785\u17D2\u1794\u17B6\u1794\u17CB\u178A\u17BE\u1798 \u1785\u1784\u1780\u17D2\u179A\u1784\u178A\u17C6\u1794\u17BC\u1784(\u1786\u17D2\u1793\u17B6\u17C6\u17E1\u17E9\u17E8\u17E5 \u200B\u178A\u179B\u17CB\u1786\u17D2\u1793\u17B6\u17C6 \u17E2\u17E0\u17E2\u17E3) \u178A\u17C4\u1799 \u17AF\u1780\u17A7\u178F\u17D2\u178F\u1798\u179F\u17B6\u179F\u17D2\u179A\u17D2\u178F\u17B6\u1785\u17B6\u179A\u17D2\u1799\u1794\u178E\u17D2\u178C\u17B7\u178F \u17A0\u17B6\u1794\u17CB \u1795\u179B\u17D2\u1792\u17B8\u17D4 \u1782\u1798\u17D2\u179A\u17C4\u1784\u1785\u1784\u1780\u17D2\u179A\u1784\u1782\u17C1\u17A0\u1791\u17C6\u1796\u17D0\u179A\u1793\u17C1\u17C7 \u1794\u17B6\u1793\u1791\u1791\u17BD\u179B\u1780\u17B6\u179A\u17A7\u1794\u178F\u17D2\u1790\u1798\u17D2\u1797\u1782\u17B6\u17C6\u1791\u17D2\u179A\u1795\u17D2\u1793\u17C2\u1780\u1790\u179C\u17B7\u1780\u17B6\u1796\u17B8 \u1792\u1793\u17B6\u1782\u17B6\u179A \u179C\u178C\u17D2\u178D\u1793\u17C8\u17A2\u17B6\u179F\u17CA\u17B8 \u1785\u17C6\u1780\u17B6\u178F\u17CB (ABA)\u17D4 \u179F\u17BC\u1798\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u1787\u17B6\u1798\u17BD\u1799\u179A\u17B6\u1787\u1780\u17B7\u1785\u17D2\u1785\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u17AF\u1780\u179F\u17B6\u179A\u1795\u17D2\u179B\u17BC\u179C\u1780\u17B6\u179A\u17D4 \u1780\u179A\u178E\u17B8\u1798\u17B6\u1793\u1780\u17C6\u17A0\u17BB\u179F\u17A2\u1780\u17D2\u1781\u179A\u17B6\u179C\u17B7\u179A\u17BB\u1791\u17D2\u1792 \u179F\u17BC\u1798\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784\u1798\u1780\u1780\u17B6\u1793\u17CB\u178F\u17C1\u179B\u17C1\u1780\u17D2\u179A\u17B6\u1798 \u179B\u17C1\u1781\u1791\u17BC\u179A\u179F\u1796\u17D2\u1791 <a href="https://t.me/+855975269072" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 102, 204);">(097 526 90 72)\u200B</a>\u17D4 \u179F\u17BC\u1798\u1790\u17D2\u179B\u17C2\u1784\u17A2\u17C6\u178E\u179A\u1782\u17BB\u178E\u1791\u17BB\u1780\u1787\u17B6\u1798\u17BB\u1793\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1780\u17B7\u1785\u17D2\u1785\u179F\u17A0\u1780\u17B6\u179A\u1796\u17B8\u1782\u17D2\u179A\u1794\u17CB\u1798\u1787\u17D2\u1788\u178A\u17D2\u178B\u17B6\u1793\u17D4</p>'
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      if (unref(status) != "success") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "block h-60 w-full skeleton" }, _attrs))}></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-gray-900" }, _attrs))}>${(_a2 = ((_b = (_a = unref(data)) == null ? void 0 : _a.data) == null ? void 0 : _b.content) || unref(about)) != null ? _a2 : ""}</div>`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        id: "pagetop",
        class: "btn btn-info fixed right-5 bottom-5 rounded-full p-2 animate-pulse duration-100 z-50",
        style: unref(show) ? null : { display: "none" }
      }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square"><path d="M18 15l-6-6-6 6"></path></svg></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollToTop.vue");
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
          title: "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798 | \u1780\u17D2\u179A\u179F\u17BC\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB\u200B | MLMUPC"
        });
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Search = _sfc_main$3;
      const _component_PostHeader = _sfc_main$3$1;
      const _component_PostList = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_About = _sfc_main$2;
      const _component_ScrollToTop = _sfc_main$1;
      _push(`<!--[--><section class="search_section_layout">`);
      _push(ssrRenderComponent(_component_Search, null, null, _parent));
      _push(`</section><section class="mt-9">`);
      _push(ssrRenderComponent(_component_PostHeader, { type: "featured" }, null, _parent));
      _push(`<div class="border-b my-2"></div>`);
      _push(ssrRenderComponent(_component_PostList, null, null, _parent));
      _push(`</section><section class="mt-2"><div class="text-slate-900 py-5 text-lg"> \u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u17A2\u17C6\u1796\u17B8\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F </div><div class="grid gap-4 grid-cols-1 md:grid-cols-2"><div class="about_info_and_legal_standard_letter_box"><ul class="flex flex-col gap-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/update-laws",
        class: "link text-blue-700 cursor-pointer hover:text-blue-800 link_transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u178A\u17C2\u179B\u1791\u17BE\u1794\u1794\u17B6\u1793\u1792\u17D2\u179C\u17BE\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796`);
          } else {
            return [
              createTextVNode("\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u178A\u17C2\u179B\u1791\u17BE\u1794\u1794\u17B6\u1793\u1792\u17D2\u179C\u17BE\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/laws-register",
        class: "link text-blue-700 cursor-pointer hover:text-blue-800 link_transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u178F\u17B6\u179A\u17B6\u1784\u1794\u1789\u17D2\u1787\u17B8\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u179F\u179A\u17BB\u1794\u1780\u17D2\u1793\u17BB\u1784\u1782\u17C1\u17A0\u1791\u17C6\u1796\u17D0\u179A`);
          } else {
            return [
              createTextVNode("\u178F\u17B6\u179A\u17B6\u1784\u1794\u1789\u17D2\u1787\u17B8\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u179F\u179A\u17BB\u1794\u1780\u17D2\u1793\u17BB\u1784\u1782\u17C1\u17A0\u1791\u17C6\u1796\u17D0\u179A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="about_info_and_legal_standard_letter_box">`);
      _push(ssrRenderComponent(_component_About, null, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_ScrollToTop, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-d3pkD3i8.mjs.map
