import { _ as __nuxt_component_0$1 } from './nuxt-link-r7fq5fTi.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-img-DDFseaCD.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const socials = [
  {
    title: "Facebook",
    name: "facebook",
    link: "https://web.facebook.com/mlmupc.pressteam",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 50 50"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook"
        role="img"
      >
        <path
          d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
        ></path></svg>`
  },
  {
    title: "YouTube",
    name: "youtube",
    link: "https://www.youtube.com/@MLMUPC_KH",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="youtube"
        role="img"
      >
        <path
          d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
        ></path></svg>`
  },
  {
    title: "Telegram",
    name: "telegram",
    link: "https://t.me/MLMUPCofCambodia",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 50 50"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="telegram"
        role="img"
      >
        <path
          d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"
        ></path></svg>`
  },
  {
    title: "TikTok",
    name: "tiktok",
    link: "https://www.tiktok.com/@mlmupc_kh?is_from_webapp=1&amp;sender_device=pc",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="tiktok"
        role="img"
      >
        <path
          d="M16.707 0.027c1.747-0.027 3.48-0.013 5.213-0.027 0.107 2.040 0.84 4.12 2.333 5.56 1.493 1.48 3.6 2.16 5.653 2.387v5.373c-1.92-0.067-3.853-0.467-5.6-1.293-0.76-0.347-1.467-0.787-2.16-1.24-0.013 3.893 0.013 7.787-0.027 11.667-0.107 1.867-0.72 3.72-1.8 5.253-1.747 2.56-4.773 4.227-7.88 4.28-1.907 0.107-3.813-0.413-5.44-1.373-2.693-1.587-4.587-4.493-4.867-7.613-0.027-0.667-0.040-1.333-0.013-1.987 0.24-2.533 1.493-4.96 3.44-6.613 2.213-1.92 5.307-2.84 8.2-2.293 0.027 1.973-0.053 3.947-0.053 5.92-1.32-0.427-2.867-0.307-4.027 0.493-0.84 0.547-1.48 1.387-1.813 2.333-0.28 0.68-0.2 1.427-0.187 2.147 0.32 2.187 2.427 4.027 4.667 3.827 1.493-0.013 2.92-0.88 3.693-2.147 0.253-0.44 0.533-0.893 0.547-1.413 0.133-2.387 0.080-4.76 0.093-7.147 0.013-5.373-0.013-10.733 0.027-16.093z"
        ></path>
      </svg>`
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Social",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "hidden lg:flex items-center text-[#051a53] gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(socials), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.link,
          title: item.title,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a;
            if (_push2) {
              _push2(`<div${_scopeId}>${(_a = item.icon) != null ? _a : ""}</div>`);
            } else {
              return [
                createVNode("div", {
                  innerHTML: item.icon
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Social.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_NuxtImg = __nuxt_component_0$2;
  const _component_HeaderSocial = _sfc_main$3;
  _push(`<header${ssrRenderAttrs(_attrs)}><div class="justify-between md:flex-col lg:flex-row items-center shadow-lg sticky top-0 z-50 md:flex bg-[#86c6e0] px-1 py-2 md:px-10 md:py-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { path: "/", force: true },
    class: "w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center gap-1 md:gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtImg, {
          alt: "MLMUPC",
          src: "/mlmupc-512.png",
          format: "webp",
          loading: "lazy",
          class: "block object-contain w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]"
        }, null, _parent2, _scopeId));
        _push2(`<div class="grid gap-2"${_scopeId}><p class="header_site_title text-[11.5px] sm:text-[18.5px] md:text-xl text-slate-900 font-semibold"${_scopeId}> \u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB </p><p class="text-[8.7px] sm:text-[14px] md:text-[15px] text-slate-900"${_scopeId}> Ministry of Land Management, Urban Planning and Construction </p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center gap-1 md:gap-2" }, [
            createVNode(_component_NuxtImg, {
              alt: "MLMUPC",
              src: "/mlmupc-512.png",
              format: "webp",
              loading: "lazy",
              class: "block object-contain w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]"
            }),
            createVNode("div", { class: "grid gap-2" }, [
              createVNode("p", { class: "header_site_title text-[11.5px] sm:text-[18.5px] md:text-xl text-slate-900 font-semibold" }, " \u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB "),
              createVNode("p", { class: "text-[8.7px] sm:text-[14px] md:text-[15px] text-slate-900" }, " Ministry of Land Management, Urban Planning and Construction ")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HeaderSocial, null, null, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$2;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-[#86c6e0] z-[99999] overflow-hidden mt-9 text-white" }, _attrs))}><div class="w-full bg-[#1d2846] py-10 px-2 flex flex-wrap items-center justify-center gap-6"><div class="w-5/5 lg:w-2/5 flex flex-col lg:flex-row items-center justify-center gap-4">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    alt: "MLMUPC",
    src: "mlmupc-512.png",
    loading: "lazy",
    format: "webp",
    class: "block object-contain w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
  }, null, _parent));
  _push(`<div class="text-center lg:text-start"><p class="text-xl text-white font-bold"> \u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB </p><p class="text-xs mt-2 text-white"> Ministry of Land Management, Urban Planning and Construction </p></div></div><div class="lg:w-2/5 w-[100%] grid grid-cols-2 gap-4 items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://maps.app.goo.gl/ep8cPkufQYYvhsvZ6",
    class: "footer_place_and_phone_box"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u1791\u17B8\u178F\u17B6\u17C6\u1784`);
      } else {
        return [
          createTextVNode(" \u1791\u17B8\u178F\u17B6\u17C6\u1784")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="footer_place_and_phone_box">\u179B\u17C1\u1781\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784</div></div></div><div class="block w-full text-sm lg:text-lg text-center py-8 px-4 bg-[#eaddc3] text-blue-900"><p>\xA9 \u179A\u1780\u17D2\u179F\u17B6\u179F\u17B7\u1791\u17D2\u1792\u17B7\u1782\u17D2\u179A\u1794\u17CB\u1799\u17C9\u17B6\u1784\u178A\u17C4\u1799 \u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="min-h-[calc(100vh-410px)] p-4 bg-white">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BPkmhyXh.mjs.map
