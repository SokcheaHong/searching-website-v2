<script setup lang="ts">
import { useDocument } from '~/stores/documentStore';
const route = useRoute();
const store = useDocument();
// await store.getDocument(route.params.id);
const fragment = '#';
const applyStyle = (cssText: any): any => {
  const styleTag = document?.createElement('style');
  styleTag.textContent = cssText += `span{line-height:normal}`;
  document?.head?.appendChild(styleTag);
};
const config = ref({
  toolbar: {
    toolbarViewerLeft: {
      previous: true,
      next: true,
      zoomIn: true,
      zoomOut: true,
      pageNumber: true,
    },
    toolbarViewerRight: {
      openFile: false,
      print: true,
      download: true,
      bookmarks: true,
      rotateCw: true,
      rotateCcw: true,
      documentProperties: true,
    },
  },
  sidebar: {
    thumbnails: true,
    outline: true,
    attachments: true,
    layers: true,
    toggled: false,
    sidebarContainer: false,
    viewerContainer: false,
    toggleSidebar: false,
  },
  mainContainer: {
    viewBookmark: true,
    viewAttachments: true,
    viewLayers: true,
  },
});

const parentChange = (item: any, selected: any, id: any, type: any) => {
  const content: any = document.getElementById(id);
  console.log(content);
  if (selected) {
    content.classList.remove('__hide-content');
  } else {
    content.classList.add('__hide-content');
  }
  for (let child of item.children) {
    let content: any = document.getElementById(child.value);
    if (selected) {
      content.classList.remove('__hide-content');
    } else {
      content.classList.add('__hide-content');
    }
    child.state.selected = selected;
    if (child.children.length > 0) {
      for (let subChild of child.children) {
        let content: any = document.getElementById(subChild.value);
        if (selected) {
          content.classList.remove('__hide-content');
        } else {
          content.classList.add('__hide-content');
        }
        subChild.state.selected = selected;
      }
    }
  }
};

const toggleFolder = (folder: any) => {
  folder.state.opened = !folder.state.opened;
};
onMounted(() => {
  watchEffect(() => applyStyle(store.document?.css))
});
</script>

<template>
  <template v-if="store.loading || status == 'pending'">
    <div class="w-[90%] m-auto h-screen flex item-center justify-center">
      <Spinner />
    </div>
  </template>
  <template
    v-else-if="!store.loading && store.document && store.document.content"
  >
    <div
      class="breadcrumbs w-[80%] m-auto text-sky-400 bg-slate-50 text-md mb-2"
    >
      <ul class="w-[100%] m-auto">
        <li>
          <NuxtLink href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="24"
              fill="#00B3F0"
            >
              <path
                d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
              />
            </svg>
            ទំព័រដើម
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :href="'/result?type=all'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="24"
              fill="#00B3F0"
            >
              <path
                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"
              />
            </svg>
            ឯកសារ
          </NuxtLink>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="24"
              fill="#00B3F0"
            >
              <path
                d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
              />
            </svg>
            លម្អិត
          </a>
        </li>
      </ul>
    </div>
    <div
      class="flex overscroll-contain overflow-Y-auto h-auto item-start justify-center"
    >
      <div
        class="min-h-screen overflow-hidden overflow-y-auto overflow-x-auto w-[400px] border border-gray sticky top-0"
      >
        <div
          role="tablist"
          class="tabs grid md:grid-flow-col grid-cols-2 tabs-lifted w-full m-auto"
        >
          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            class="tab flex-wrap !text-xl [--tab-bg:#1608d4] [--tab-border-color:#1608d4] !rounded-tl-none !rounded-tr-none"
            aria-label="
                មាតិកា"
            checked
          />
          <div role="tabpanel" class="tab-content active w-full p-2 pt-4">
            <div class="folder-tree-wrapper">
              <div
                v-if="store.loading && store.document && store.document.heading"
              ></div>
              <ul v-else class="folder-tree" ref="folderTree">
                <li v-for="(h1, index) in store.document.heading" :key="index">
                  <div class="flex items-center flex-nowrap">
                    <input
                      type="checkbox"
                      class="checkbox checkbox-info !rounded-none ![--chkbg:white] ![--chkfg:#1608d4] !border-[#1608d4]"
                      :name="h1.text"
                      :checked="h1.state.selected"
                      @click="h1.state.selected = !h1.state.selected"
                      v-on:change="
                        parentChange(
                          h1,
                          h1.state.selected,
                          h1.value,
                          h1.heading
                        )
                      "
                    />
                    <div class="text-nowrap w-full pl-1">
                      <a
                        :href="h1.href"
                        class="text-md link !text-[#1608d4] text-wrap hover:font-bold ml-2"
                        :class="fragment === h1.href ? 'link-info' : ''"
                        >{{ h1.text }}</a
                      >
                    </div>
                    <div v-show="h1.children?.length > 0" class="arrow px-1">
                      <font-awesome-icon
                        :icon="['fas', 'angle-right']"
                        class="transform transition-transform duration-500 text-2xl text-[#1608d4]"
                        :class="
                          h1.state.opened == false ? 'rotate-90' : 'rotate-180'
                        "
                        @click="toggleFolder(h1)"
                      />
                    </div>
                  </div>
                  <ul
                    class="ml-2"
                    v-show="h1.state.opened == false && h1.children.length > 0"
                  >
                    <li v-for="(h2, h2Index) in h1?.children" :key="h2Index">
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-info !rounded-none ![--chkbg:white] ![--chkfg:#1608d4] !border-[#1608d4]"
                          :name="h2.text"
                          :checked="h2.state.selected"
                          @click="h2.state.selected = !h2.state.selected"
                          v-on:change="
                            parentChange(
                              h2,
                              h2.state.selected,
                              h2.value,
                              h2.heading
                            )
                          "
                        />
                        <div class="pl-1">
                          <a
                            :href="h2.href"
                            class="text-md link text-[#1608d4] hover:font-bold text-wrap ml-2"
                            >{{ h2.text }}</a
                          >
                        </div>
                        <div v-show="h2.children.length > 0" class="arrow px-1">
                          <font-awesome-icon
                            :icon="['fas', 'angle-right']"
                            class="transform transition-transform duration-500 text-2xl text-[#1608d4]"
                            :class="
                              h2.state.opened == false
                                ? 'rotate-90'
                                : 'rotate-180'
                            "
                            @click="toggleFolder(h2)"
                          />
                        </div>
                      </div>
                      <ul
                        class="ml-2"
                        v-show="
                          h2.state.opened == false && h2.children.length > 0
                        "
                      >
                        <li
                          v-for="(h3, h3Index) in h2?.children"
                          :key="h3Index"
                        >
                          <div class="flex items-center">
                            <input
                              type="checkbox"
                              class="checkbox checkbox-info !rounded-none ![--chkbg:white] ![--chkfg:#1608d4] !border-[#1608d4]"
                              :name="h3.text"
                              :checked="h3.state.selected"
                              @click="h3.state.selected = !h3.state.selected"
                              v-on:change="
                                parentChange(
                                  h3,
                                  h3.state.selected,
                                  h3.value,
                                  h3.heading
                                )
                              "
                            />
                            <div class="pl-1">
                              <a
                                :href="h3.href"
                                class="text-md link !text-[#1608d4] hover:font-bold text-wrap ml-2"
                                >{{ h3.text }}</a
                              >
                            </div>
                            <div
                              v-show="h3.children.length > 0"
                              class="arrow px-1"
                            >
                              <font-awesome-icon
                                :icon="['fas', 'angle-right']"
                                class="transform transition-transform duration-500 text-2xl text-[#1608d4]"
                                :class="
                                  h3.state.opened == false
                                    ? 'rotate-90'
                                    : 'rotate-180'
                                "
                                @click="toggleFolder(h3)"
                              />
                            </div>
                          </div>
                          <ul
                            class="ml-2"
                            v-show="
                              h3.state.opened == false && h3.children.length > 0
                            "
                          >
                            <!-- h4 -->
                            <li
                              v-for="(h4, h4Index) in h3.children"
                              :key="h4Index"
                            >
                              <div class="flex items-center">
                                <input
                                  type="checkbox"
                                  class="checkbox checkbox-info !rounded-none ![--chkbg:white] ![--chkfg:#1608d4] !border-[#1608d4]"
                                  :name="h4.text"
                                  :checked="h4.state.selected"
                                  @click="
                                    h4.state.selected = !h4.state.selected
                                  "
                                  v-on:change="
                                    parentChange(
                                      h4,
                                      h4.state.selected,
                                      h4.value,
                                      h4.heading
                                    )
                                  "
                                />
                                <div class="pl-1">
                                  <a
                                    :href="h4.href"
                                    class="text-md link text-[#1608d4] hover:font-bold text-wrap ml-2"
                                    >{{ h4.text }}</a
                                  >
                                </div>
                                <div
                                  v-show="h4.children.length > 0"
                                  class="arrow px-1"
                                >
                                  <font-awesome-icon
                                    :icon="['fas', 'angle-right']"
                                    class="transform transition-transform duration-500 text-2xl text-[#1608d4]"
                                    :class="
                                      h4.state.opened == false
                                        ? 'rotate-90'
                                        : 'rotate-180'
                                    "
                                    @click="toggleFolder(h4)"
                                  />
                                </div>
                              </div>
                              <ul
                                class="ml-2"
                                v-show="
                                  h4.state.opened == false &&
                                  h4.children.length > 0
                                "
                              >
                                <!-- h5 -->
                                <li
                                  v-for="(h5, h5Index) in h4.children"
                                  :key="h5Index"
                                >
                                  <div class="flex items-center">
                                    <input
                                      type="checkbox"
                                      class="checkbox checkbox-info !rounded-none ![--chkbg:white] ![--chkfg:#1608d4] !border-[#1608d4]"
                                      :name="h5.text"
                                      :checked="h5.state.selected"
                                      @click="
                                        h5.state.selected = !h5.state.selected
                                      "
                                      v-on:change="
                                        parentChange(
                                          h5,
                                          h5.state.selected,
                                          h5.value,
                                          h5.heading
                                        )
                                      "
                                    />
                                    <div class="pl-1">
                                      <a
                                        :href="h5.href"
                                        class="text-md link text-[#1608d4] hover:font-bold text-wrap ml-2"
                                        >{{ h5.text }}</a
                                      >
                                    </div>
                                    <div
                                      v-show="h5.children.length > 0"
                                      class="arrow px-1"
                                    >
                                      <font-awesome-icon
                                        :icon="['fas', 'angle-right']"
                                        class="transform transition-transform duration-500 text-2xl text-[#1608d4]"
                                        :class="
                                          h5.state.opened == false
                                            ? 'rotate-90'
                                            : 'rotate-180'
                                        "
                                        @click="toggleFolder(h5)"
                                      />
                                    </div>
                                  </div>
                                  <ul
                                    class="ml-2"
                                    v-show="
                                      h5.state.opened == false &&
                                      h5.children.length > 0
                                    "
                                  >
                                    <!-- h6 -->
                                    <li
                                      v-for="(h6, h6Index) in h5.children"
                                      :key="h6Index"
                                    >
                                      <div class="flex items-center">
                                        <input
                                          type="checkbox"
                                          class="checkbox checkbox-info !rounded-none ![--chkbg:white] ![--chkfg:#1608d4] !border-[#1608d4]"
                                          :name="h6.text"
                                          :checked="h6.state.selected"
                                          @click="
                                            h6.state.selected =
                                              !h6.state.selected
                                          "
                                          v-on:change="
                                            parentChange(
                                              h6,
                                              h6.state.selected,
                                              h6.value,
                                              h6.heading
                                            )
                                          "
                                        />
                                        <div class="pl-1">
                                          <a
                                            :href="h6.href"
                                            class="text-md link text-[#1608d4] hover:font-bold text-wrap ml-2"
                                            >{{ h6.text }}</a
                                          >
                                        </div>
                                        <!-- If there are more levels of headings, continue nesting here -->
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            class="tab text-slate-800 !text-xl [--tab-bg:#1608d4] [--tab-border-color:#1608d4] !rounded-tl-none !rounded-tr-none"
            aria-label="លម្អិត"
          />
          <div role="tabpanel" class="tab-content pt-4 __details p-2">
            <div class="text-lg">
              <div class="mt-2 font-bold text-sky-500">ចំណងជើង :</div>
              <div class="mt-2 text-slate-700">
                <!-- {{ props.document?.name }} -->
              </div>
              <div class="mt-2 font-bold text-sky-500">
                កាលបរិច្ឆេទប្រកាសឲ្យប្រើ :
              </div>
              <span class="text-slate-700">
                <!-- {{ getDateFormat() }} -->
              </span>
              <div class="mt-2 font-bold text-sky-500">កាលបរិច្ឆេទបង្ហោះ :</div>
              <span class="text-slate-700">
                <!-- {{ props.document.date ? formatDateToKhmer(props.document?.date || 123456789) : '' }} -->
              </span>
            </div>
          </div>
          <input
            type="radio"
            name="my_tabs_3"
            role="tab"
            class="tab text-slate-800 !text-xl [--tab-bg:#1608d4] [--tab-border-color:#1608d4] !rounded-tl-none !rounded-tr-none"
            aria-label="មើលជាទម្រង់PDF"
          />
          <div role="tabpanel" class="tab-content pt-4 __details p-2">
            <div>
              <div class="w-full text-center items-center justify-center">
                <span
                  class="loading loading-spinner w-[2rem] text-sky-500"
                ></span>
              </div>
            </div>
            <div>
              <!-- <VuePdfApp style="height: 100vh;width: 100%;" :pdf="pdfUrl"></VuePdfApp> -->
            </div>
          </div>
        </div>
      </div>
      <div class="__wrapper_content col-span-7" style="zoom: 100%">
        <div
          class="break-word whitespace-normal leading-relaxed tracking-normal"
          ref="printableContent"
          v-html="store.document.content"
        ></div>
      </div>
    </div>
  </template>
</template>
<style>
@media print {
  .__sub_title {
    display: none !important;
  }
}

@page {
  size: A4;
  margin: 25.4mm;
  /* 1 inch = 25.4 mm */
}

.__wrapper_content {
  width: 24cm;
  padding: 0 1cm 1cm 1cm;
}
.__bg_content {
  overflow-x: auto;
  width: 20cm;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 2cm;
  page-break-after: always;
}

.__content img,
video {
  margin: auto !important;
  object-fit: contain;
}

table {
  border: 1px;
  border-style: solid;
}

ul ol li {
  list-style-type: disc;
}

/* sidebar style */

.tab {
  --tab-color: #000000 !important;
  --tab-bg: #00b3f0 !important;
  --tab-border-color: #00b3f0 !important;
}

.tab:focus {
  --tab-color: #ffffff !important;
  --tab-bg: #00b3f0 !important;
  --tab-border-color: #00b3f0 !important;
}

.__sidebar-heading {
  /* background: red; */
  display: flex;
  align-items: flex-start;
}

.__sidebar-heading .checkbox {
  margin-top: 0px !important;
}

.__sidebar-heading input {
  margin-top: 10px;
}

.__hide-content {
  visibility: hidden;
  display: none;
  background-color: red;
}

.dd {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  /* max-width: 600px; */
  list-style: none;
  line-height: 20px;
}

.dd-list {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

.dd-list {
  padding-left: 10px;
}

.dd-item {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 20px;
  line-height: 20px;
}

.dd-handle {
  display: block;
  margin: 7px 0;
  /* padding: 10px 10px; */
  display: flex;
  align-items: center;
  /* text-decoration: none; */
}

.folder-tree-wrapper {
}

.folder-tree {
  list-style: none;
  cursor: pointer;
  padding-left: 10px;
}

.folder-tree li {
  margin-bottom: 10px;
  font-size: 14px;
  transition: all 0.4s ease;
  position: relative;
  margin-left: 0px;
}

.folder-tree li:hover {
}

.folder-tree li i {
  color: rgb(242, 176, 53);
}

.folder-tree li ul {
  padding-left: 10px;
  padding-top: 8px;
}

/* .folder-tree ul {
  display: none;
  position: relative;
} */

.folder-tree li ul li:before {
  position: absolute;
  content: '';
  left: -10px;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: transparent;
  border-left: solid 1px #c2c2c2;
  border-bottom: solid 1px #c2c2c2;
}

.folder-tree li ul li {
  display: block;
  padding: 5px 0;
  margin: 0;
}

/* .folder-tree .arrow {
  position: absolute;
  top: 40px;
  left: -21px;
  width: 10px;
  height: 10px;
  transition: all .4s ease;
  transform: rotate(-90deg);
} */

.folder-tree .arrow i {
  color: #595959;
  transition: all 0.4s ease;
}

.folder-tree .arrow:hover i {
  color: #292929;
}

.folder-tree li.expanded > ul {
  display: block;
}

.folder-tree li.expanded > .arrow {
  transform: rotate(0deg);
}

/*  */
</style>
