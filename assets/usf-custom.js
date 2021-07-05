// define templates for the theme
var usfFilesUrl;
var _usfProductFormBk = `<form :action="usf.platform.baseUrl + '/cart/add'" method="post" class="variants" :id="'grid-product-form--' + product.id" :data-id="'product-actions-' + product.id" enctype="multipart/form-data">
                            <input v-if="!isSoldOut" type="hidden" name="id" :value="selectedVariantForPrice.id">
                            <input v-if="product.variants.length == 1 && !isSoldOut" type="hidden" name="quantity" value="1">
                            <button v-if="!isSoldOut" data-btn-addtocart="" class="btn add-to-cart-btn" type="submit" :data-form-id="'#grid-product-form--' + product.id" data-translate="products.product.add_to_cart" v-html="loc.addToCart"></button>
                            <!--<a v-if="product.variants.length > 1 && !isSoldOut" class="btn" :href="productUrl" :title="product.title" data-translate="products.product.select_options">
                                Select options
                            </a>-->
                            <button v-if="isSoldOut" class="btn add-to-cart-btn" type="submit" disabled="disabled" data-translate="products.product.unavailable">Unavailable</button>
                        </form>`;
var _usfProductForm = `
<form :action="usf.platform.addToCartUrl" method="post" class="variants" :id="'grid-product-form--' + product.id + '-' + window._usfSectionId" :data-id="'product-actions-' + product.id" enctype="multipart/form-data">
    <button v-if="isSoldOut" class="btn add-to-cart-btn" type="submit" disabled="disabled" data-translate="products.product.unavailable" v-html="window._usfUnavailable"></button>
    <template v-else>
        <template v-if="selectedVariantForPrice.options.length">
            <template v-if="product.options.length == 1 && _usfThemeSettings.option_color_swatch == product.options[0].name && _usfThemeSettings.use_color_swatch">
                <input type="hidden" name="id" :value="selectedVariantForPrice.id" />
                <input type="hidden" name="quantity" value="1" />
                <button data-btn-addToCart class="btn add-to-cart-btn" type="submit" :data-form-id="'#grid-product-form--' + product.id + '-' + window._usfSectionId" data-translate="products.product.add_to_cart" v-html="window._usfAddToCart"></button>
            </template>
            <template v-else>
                <a v-if="_usfThemeSettings.enable_quick_shop" class="btn" :data-href="'/products/' + product.urlName" :title="product.title" data-init-quickshop tabindex v-html="window._usfAddToCart"></a>
                <a v-else class="btn" :data-href="'/products/' + product.urlName" :title="product.title" v-html="window._usfAddToCart"></a>
            </template>
        </template>
        <template v-else>
            <input type="hidden" name="id" :value="selectedVariantForPrice.id" />
            <input type="hidden" name="quantity" value="1" />
            <button v-if="selectedVariantForPrice.available > 0" data-btn-addToCart class="btn add-to-cart-btn" type="submit" :data-form-id="'#grid-product-form--' + product.id + '-' + window._usfSectionId" data-translate="products.product.add_to_cart" v-html="window._usfAddToCart"></button>
            <button v-else data-btn-addToCart class="btn add-to-cart-btn" type="submit" :data-form-id="'#grid-product-form--' + product.id + '-' + window._usfSectionId" data-translate="products.product.pre_order" v-html="_usfPreorder"></button>
        </template>
    </template>
</form>`;
var _usfVariantPopup = `
<div v-if="!isSoldOut && _usfThemeSettings.enable_quick_shop && selectedVariantForPrice.options.length" class="product-card__variant--popup">
    <div class="product-card__variant--popup--content">
        <form :action="usf.platform.addToCartUrl" method="post" class="variants" :id="'swatch-grid-product-form--' + product.id + '-' + window._usfSectionId" :data-id="'product-actions-' + product.id" enctype="multipart/form-data">
            <template v-for="(o,opt_index) in product.options">
                <template v-if="_usfThemeSettings.use_color_swatch">
                    <usf-swatches v-if="o.name == _usfThemeSettings.option_color_swatch" :product="product" :opt="o" :optIndex="opt_index"></usf-swatches>
                    <usf-sizes :product="product" v-else :opt="o" :optIndex="opt_index"></usf-sizes>
                </template>

                <div v-else class="selector-wrapper selector js product-form__item" :class="['selector-wrapper-' + (opt_index + 1)]" :data-option-index="opt_index">
                    <label class="form-label" :class="{'label--hidden': o.name == 'default'}">
                        {{ o.name }}: <span :class="'label-value-' + opt_index">{{ selectedVariantForPrice.options[opt_index] != undefined ? o.values[selectedVariantForPrice.options[opt_index]] : o.values[0]  }}</span>
                    </label>
                    <usf-select-opt :product="product" :opt="o" :optIndex="opt_index"></usf-select-opt>
                </div>

            </template>
            <select name="id" :id="'ProductSelect-' + product.id + '-' + window._usfSectionId" class="product-form__variants no-js">
                <template v-for="v in product.variants" :data-sold="usf.utils.isVariantSoldOut(v)">
                    <option v-if="usf.utils.isVariantSoldOut(v)" disabled="disabled">{{ getVariantTitle(v.options,product) }} - {{ loc.soldOut }}</option>
                    <option v-else :value="v.id">
                        {{ getVariantTitle(v.options,product) }}
                    </option>
                </template>
            </select>
            <div class="product-card__button_cancel_mobile">
                <a class="btn btn-cancel" data-cancel-swatch-qs><svg aria-hidden="true" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-2x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg></a>
            </div>
            <div class="product-card__button2">
                <input type="hidden" name="quantity" value="1" />
                <button data-btn-addToCart class="btn add-to-cart-btn" type="submit" :data-form-id="'#swatch-grid-product-form--' + product.id + '-' + window._usfSectionId" v-html="_usfSubmit"></button>
                <a class="btn btn-cancel" data-cancel-swatch-qs v-html="_usfCancel"></a>
            </div>
        </form>
    </div>
</div>
`;
var _usfFilterBodyTemplate = /*inc_begin_filter-body*/
`<!-- Range filter -->
<div v-if="isRange" class="usf-facet-values usf-facet-range">
    <!-- Range inputs -->
    <div class="usf-slider-inputs usf-clear">
        <span class="usf-slider-input__from">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[0]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[0], 0)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
        <span class="usf-slider-div">-</span>
        <span class="usf-slider-input__to">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[1]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[1], 1)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
    </div>
	<!-- See API reference of this component at https://docs.sobooster.com/search/storefront-js-api/slider-component -->
    <usf-slider :color="facet.sliderColor" :symbols="facet.sliderValueSymbols" :prefix="facet.sliderPrefix" :suffix="facet.sliderSuffix" :min="facet.min" :max="facet.max" :pips="facet.range[0]" :step="facet.range[1]" :decimals="rangeDecimals" :value="range" :converter="rangeConverter" @input="onRangeSliderInput" @change="onRangeSliderChange"></usf-slider>
</div>
<!-- List + Swatch filter -->
<div v-else ref="values" :class="'usf-facet-values usf-facet-values--' + facet.display + (facet.navigationCollections ? ' usf-navigation' : '') + (facet.valuesTransformation ? (' usf-' + facet.valuesTransformation.toLowerCase()) : '') + (facet.circleSwatch ? ' usf-facet-values--circle' : '')" :style="!usf.isMobile && facet.maxHeight ? { maxHeight: facet.maxHeight } : null">
    <!-- Filter options -->                
    <usf-filter-option v-for="o in visibleOptions" :facet="facet" :option="o" :key="o.label"></usf-filter-option>
</div>

<!-- More -->
<div v-if="isMoreVisible" class="usf-more" @click="onShowMore" v-html="loc.more"></div>`
/*inc_end_filter-body*/;
var _usfProductPrice = `
<div class="price-box">
    <div v-if="hasDiscount" class="price-sale">
        <span class="old-price" v-html="displayPrice"></span>
        <span class="special-price">
            <span v-html="priceVaries && !product.selectedVariantId ? displayMinDiscountedPrice : displayDiscountedPrice "></span>
        </span>
    </div>
    <div v-else class="price-regular">
        <span v-html="priceVaries && !product.selectedVariantId ? displayMinDiscountedPrice : displayDiscountedPrice "></span>
    </div>
</div>
`;
var _usfSearchResultsSkeletonItemTpl = `
<div v-if="currentView === 'grid' && window.collectionLayout != 'express-order'" class="usf-sr-product  usf-skeleton" :class="getGridClasses()">
    <div class="grid-view-item" v-if="true">
        <div class="usf-img"></div>
        <div class="usf-meta">            
        </div>
    </div>
</div>
<a class="usf-sr-product list-view-item usf-skeleton" v-else>
    <!-- Image column -->
    <div class="list-view-item__image-column" v-if="true">
        <div class="list-view-item__image-wrapper" v-if="true">
            <div class="usf-img"></div>
        </div>
    </div>

    <!-- Title and Vendor column -->
    <div class="list-view-item__title-column" v-if="true">
        <div class="list-view-item__title"></div>
        <div class="list-view-item__vendor"></div>
    </div>


    <!-- Prices -->
    <div class="list-view-item__price-column" v-if="true">
        <div class="usf-price product-price__price"></div>
    </div>
</a>
`;

var _usfSearchResultsSummaryTpl = /*inc_begin_search-summary*/
`<span class="usf-sr-summary" v-html="loader === true ? '&nbsp;' : usf.utils.format(term ? loc.productSearchResultWithTermSummary : loc.productSearchResultSummary, result.total, term)"></span>`
/*inc_end_search-summary*/;

var _usfSearchResultsViewsTpl =
    `<div class="usf-views"  v-if="window.collectionLayout != 'express-order'">
    <div class="usf-view usf-grid" :class="{'usf-active': currentView === 'grid'}"  @click="onView('grid')"><svg role="presentation" viewBox="0 0 36 36"><path fill="currentColor" d="M8 0L0 0L0 8L8 8L8 0ZM14 0L22 0L22 8L14 8L14 0ZM36 0L28 0L28 8L36 8L36 0ZM0 14L8 14L8 22L0 22L0 14ZM22 14L14 14L14 22L22 22L22 14ZM28 14L36 14L36 22L28 22L28 14ZM8 28L0 28L0 36L8 36L8 28ZM14 28L22 28L22 36L14 36L14 28ZM28 36L28 28L36 28L36 36L28 36Z"/></svg></div>
    <div class="usf-view usf-list" :class="{'usf-active': currentView === 'list'}"  @click="onView('list')"><svg role="presentation" viewBox="0 0 18 18"><path d="M8 1.030067h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-7-15h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" fill="currentColor"></path></svg></div>
</div>`;

var _usfSearchResultsViewsTpl = `
<div class="view-mode" v-if="window.collectionLayout != 'express-order'">
    <span class="icon-mode icon-mode-list"  @click="onView('list')" :class="{'active': currentView === 'list'}" data-col="1"></span>
    <span class="icon-mode icon-mode-grid grid-4 "  @click="onView('grid')"  :class="{'active': currentView === 'grid'}"data-col="4"></span>
</div>
`;

var _usfSearchResultsSortByTpl = /*inc_begin_search-sortby*/
`<usf-dropdown :value="sortBy" :options="sortByOptions" @input="onSortByChanged"></usf-dropdown>`
/*inc_end_search-sortby*/;

usf.templates = {
    // application
    app: /*inc_begin_app*/
`<div id="usf_container" class="usf-zone usf-clear" :class="{'usf-filters-horz': usf.settings.filters.horz}">
    <usf-filters></usf-filters>
    <usf-sr></usf-sr>
</div>`
/*inc_end_app*/,
    searchResults: `
<div class="usf-sr-container" :class="{'usf-no-facets': noFacets, 'usf-empty': !loader && !hasResults, 'usf-nosearch': !showSearchBox}">
    <!-- Search form -->
    <form v-if="showSearchBox" action="/search" method="get" role="search" class="usf-sr-inputbox">
        <input name="q" autocomplete="off" ref="searchInput" v-model="termModel">
        <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><circle class="usf-path" cx="10.981" cy="10.982" r="9.786"></circle> <line class="usf-path" x1="23.804" y1="23.804" x2="17.902" y2="17.901"></line></svg>
        </button>
        <span v-if="termModel" class="usf-remove" @click="clearSearch"></span>
    </form>

    <div class="usf-sr-config" v-if="usf.isMobile">
        <div class="usf-sr-config__mobile-filters-wrapper">
            ` + _usfSearchResultsSortByTpl + `
            <div class="usf-filters" :class="{'usf-has-filters': !!facetFilters}" @click="document.body.classList.toggle('usf-mobile-filters')">
                <span class="usf-icon"><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><g fill="currentColor" fill-rule="evenodd"><rect x="2" width="1" height="5" rx=".5"></rect><rect x="8" width="1" height="9" rx=".5"></rect><rect x="14" width="1" height="3" rx=".5"></rect><rect x="2" y="8" width="1" height="8" rx=".5"></rect><rect x="8" y="12" width="1" height="4" rx=".5"></rect><rect x="14" y="6" width="1" height="10" rx=".5"></rect><path d="M2.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill-rule="nonzero"></path></g></svg></span>
                <span v-html="loc.filters"></span>
            </div>
        </div>
        
        ` + _usfSearchResultsSummaryTpl + _usfSearchResultsViewsTpl + `
    </div>
    <div class="usf-sr-config" v-else>
        ` + _usfSearchResultsSummaryTpl + _usfSearchResultsSortByTpl + _usfSearchResultsViewsTpl + `
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && !result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>
    <template v-if="window.collectionLayout == 'express-order'">
        <div class="coll-express-order"> 
            <div class="express-order-header t-header" v-if="loader === true || hasResults">
                <h4 class="column col-img col-title text-center">
                    
                </h4>        

                <h4 class="column col-prod col-title">
                   PRODUCT
                </h4>

                <h4 class="column col-price col-title text-center">
                    PRICE
                </h4>

                <h4 class="column col-qtt col-title text-center">
                    QTY
                </h4>

                <h4 class="column col-options col-title text-center">
                   OPTIONS
                </h4>
            </div>
            
            <div class="express-order-content t-body product-collection">
                <template v-if="loader === true">` + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl +
        `</template>
                <template v-else>
                    <template v-if="loader === true || hasResults">
                        <template v-for="(p,index) in result.items">
                            <usf-sr-griditem :product="p" :result="result"></usf-sr-griditem>
                        </template>
                    </template>
                    <template v-else>
                        <!-- Empty result -->
                        <div class="usf-sr-empty">
                            <div class="usf-icon"></div>
                            <span v-html="term ? usf.utils.format(loc.productSearchNoResults, term) : loc.productSearchNoResultsEmptyTerm"></span>
                        </div>
                    </template>
                </template>

            </div>
        </div>

        
    </template>
    
    <div id="usf-product-wrapper" class="row" :class="getParentGridClasses()" v-else>
        <template v-if="loader===true">` + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl +
        `</template>
        <template v-else>
            <template v-if="loader === true || hasResults">
                <template >
                    <template v-for="(p,index) in result.items">
                        <template v-if="window.collectionLayout == 'with-banner'">
                            <template v-if="index === 6 && window._usfSectionSettings.show_banner_1" :key="product_banner_1">
                                <div data-gridItem class="grid-item banner-img" :class="window.grid_item_width">
                                    <a class="animate-scale" :href="window._usfSectionSettings.link_banner_1">
                                        <img v-if="window._usfSectionSettings.img_banner1 && window._usfSectionSettings.img_banner1 !=''" data-src="window._usfSectionSettings.img_banner1"
                                            :src="window._usfSectionSettings.img_banner1"
                                            class="lazyautosizes lazyloaded" data-sizes="auto">
                                        <div class="not_img" v-else>
                                            210 x 360px
                                        </div>     
                                    </a>
                                </div>
                            </template>
                            <template v-if="index === 11 && window._usfSectionSettings.show_banner_2" :key="product_banner_2">
                                <div data-gridItem class="grid-item banner-img" :class="window.grid_item_width">
                                    <a class="animate-scale" :href="window._usfSectionSettings.link_banner_2">
                                        <img v-if="window._usfSectionSettings.img_banner2 && window._usfSectionSettings.img_banner2 !=''" data-src="window._usfSectionSettings.img_banner2"
                                            :src="window._usfSectionSettings.img_banner2"
                                            class="lazyautosizes lazyloaded" data-sizes="auto">
                                        <div class="not_img" v-else>
                                            210 x 360px
                                        </div>     
                                    </a>
                                </div>
                            </template>
                            <template v-if="index === 17 && window._usfSectionSettings.show_banner_3" :key="product_banner_3">
                                <div data-gridItem class="grid-item banner-img" :class="window.grid_item_width">
                                    <a class="animate-scale" :href="window._usfSectionSettings.link_banner_3">
                                        <img v-if="window._usfSectionSettings.img_banner3 && window._usfSectionSettings.img_banner3 !=''" data-src="window._usfSectionSettings.img_banner3"
                                            :src="window._usfSectionSettings.img_banner3"
                                            class="lazyautosizes lazyloaded" data-sizes="auto">
                                        <div class="not_img" v-else>
                                            210 x 360px
                                        </div>     
                                    </a>
                                </div>
                            </template>
                            <template v-if="index === 22 && window._usfSectionSettings.show_banner_4" :key="product_banner_4">
                                <div data-gridItem class="grid-item banner-img" :class="window.grid_item_width">
                                    <a class="animate-scale" :href="window._usfSectionSettings.link_banner_4">
                                        <img v-if="window._usfSectionSettings.img_banner4 && window._usfSectionSettings.img_banner4 !=''" data-src="window._usfSectionSettings.img_banner4"
                                            :src="window._usfSectionSettings.img_banner4"
                                            class="lazyautosizes lazyloaded" data-sizes="auto">
                                        <div class="not_img" v-else>
                                            210 x 360px
                                        </div>     
                                    </a>
                                </div>
                            </template>
                        </template>
                        <usf-sr-griditem :product="p" :result="result"></usf-sr-griditem>
                    </template>
                </template>
          
            </template>
            <template v-else>
                <!-- Empty result -->
                <div class="usf-sr-empty">
                    <div class="usf-icon"></div>
                    <span v-html="term ? usf.utils.format(loc.productSearchNoResults, term) : loc.productSearchNoResultsEmptyTerm"></span>
                </div>
            </template>
        </template>
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Paging & load more -->
    <div class="usf-sr-paging" v-if="loader !== true">
        <div class="usf-sr-loader" v-if="loader === 'more'">
            <div class="usf-spinner"></div>
        </div>        
        
        <!-- Load more -->
        <div class="usf-sr-more" v-else-if="hasResults && usf.settings.search.more === 'more'">
            <div class="usf-title" v-html="usf.utils.format(loc.youHaveViewed, itemsLoaded, result.total)"></div>
            <div class="usf-progress">
                <div :style="{width: (itemsLoaded * 100 / result.total) + '%'}"></div>
            </div>
            <div v-if="itemsLoaded < result.total" class="usf-load-more" @click="onLoadMore" v-html="loc.loadMore"></div>
        </div>
        <usf-sr-pages v-else-if="hasResults && usf.settings.search.more === 'page'" :page="page" :pages-total="pagesTotal" :pages-to-display="4" :side-pages-to-display="1"></usf-sr-pages>
    </div>
</div>
`,
    searchResultsGridViewItem: `
<div :class="getGridClasses()">
    <div :class="'inner product-item' + (isSoldOut ? ' sold-out' : '')" :data-product-id="'product-' + product.id">
        <div class="inner-top">
            <div class="product-top">
            <div class="product-hover-overlay"></div>
                <div :class="'product-image' + (hoverImageUrl ? ' image-swap' : '')">
                    <a :href="productUrl" @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" class="product-grid-image" data-collections-related="/collections/all?view=related">
                        <img :src="_usfGetScaledImageUrl(scaledSelectedImageUrl,'300')" :alt="product.title" class="images-one lazyload" :data-src="_usfGetScaledImageUrl(scaledSelectedImageUrl,'800')" :data-srcie="_usfGetScaledImageUrl(scaledSelectedImageUrl,'300')" :data-srcief="_usfGetScaledImageUrl(scaledSelectedImageUrl,'400')" :data-widths="'[' + _usfImageWidths.join(',') + ']'" :data-aspectratio="selectedImage.width/selectedImage.height" data-sizes="auto">
                        <!--<img :alt="product.title" class="images-one lazyload" :data-src="selectedImageUrl" :data-srcie="selectedImageUrl" :data-srcief="selectedImageUrl" :data-widths="_usfImageWidths" :data-aspectratio="image.width/image.height" data-sizes="auto" sizes="210px" :src="selectedImageUrl" >-->
                        <span class="images-two" v-if="hoverImage">
                            <img :src="_usfGetScaledImageUrl(scaledHoverImageUrl,'300')" :alt="product.title" class="lazyload" :data-src="_usfGetScaledImageUrl(scaledHoverImageUrl,'800')" :data-srcie="_usfGetScaledImageUrl(scaledHoverImageUrl,'300')" :data-srcief="_usfGetScaledImageUrl(scaledHoverImageUrl,'400')" :data-widths="'[' + _usfImageWidths.join(',') + ']'" :data-aspectratio="hoverImage.width/hoverImage.height" data-sizes="auto">
                        
                            <!--<img :alt="product.title" class="lazyautosizes lazyload" :data-src="hoverImageUrl" :data-srcie="hoverImageUrl" :data-srcief="hoverImageUrl " :data-widths="_usfImageWidths" :data-aspectratio="image.width/image.height" data-sizes="auto" sizes="210px" :src="hoverImageUrl ">-->
                        </span>
                    </a>
                </div>
                <!-- sale badge -->
                <div class="product-label">
                    <strong class="label sale-label" v-if="hasDiscount && usf.settings.search.showSale && !isSoldOut" >-{{ salePercent }}%</strong>
                    <strong class="label sold-out-label" v-if="isSoldOut && usf.settings.search.showSoldOut" v-html="loc.soldOut"></strong>
                    <br>
                </div>
                <div class="product-des abs-center">
                <div class="hover-sizes">
                    <p class="mb-1">AVAILABLE SIZES</p>
                    <ul class="sizes-list" v-html="sizeLists(product)"></ul>
                </div>
                    <!--wishlist-->
                    <a class="wishlist" data-icon-wishlist href="#" :data-product-handle="product.urlName" :data-id="product.id">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="95.388" height="87.526" viewBox="0 0 95.388 87.526">
                            <defs>
                            <filter id="Path_25879" x="0" y="0" width="95.388" height="87.526" filterUnits="userSpaceOnUse">
                                <feOffset dy="3" input="SourceAlpha"></feOffset>
                                <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                                <feFlood flood-opacity="0.424"></feFlood>
                                <feComposite operator="in" in2="blur"></feComposite>
                                <feComposite in="SourceGraphic"></feComposite>
                            </filter>
                            </defs>
                            <g id="Group_2786" data-name="Group 2786" transform="translate(11.574 8.565)">
                            <g transform="matrix(1, 0, 0, 1, -11.57, -8.56)" filter="url(#Path_25879)">
                                <path id="Path_25879-2" data-name="Path 25879" d="M735.69,587.364a.96.96,0,0,0,.533-.162c13.815-9.176,26.978-24.926,26.978-24.926s18.479-20.534,1.171-34.24c-16.539-13.1-28.687,3-28.687,3h-.064s-12.148-16.094-28.687-3c-17.309,13.706,1.171,34.24,1.171,34.24s13.182,15.772,27.008,24.946a.847.847,0,0,0,.469.142Z" transform="translate(-687.96 -514.34)" fill="#e50219" stroke="#fff" stroke-width="5"></path>
                            </g>
                            </g>
                        </svg>
                    </a>
                    <!-- Wishlist -->
                    <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                   
                    <!-- Product review -->
                   <!--  <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin> -->
                </div>
                <div class="product-des abs-bottom">
                    <!--action-->
                    <div class="action">
              
                        
                         `+ _usfProductForm + _usfVariantPopup+` 
                    </div>
                    <a v-if="_usfGlobalSettings.enable_quick_view" class="quickview-button" href="javascript:void(0)" :id="product.urlName" title="Quick View" data-translate="products.product.quick_view" translate-item="title">
                        <span data-translate="products.product.quick_view" v-html="loc.quickView"></span>
                    </a>
                </div>
            
            </div>
            <div class="product-bottom">
                <!--vendor-->
                <div class="product-vendor" v-if="usf.settings.search.showVendor">
                    <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" :title="product.vendor" v-html="product.vendor"></a>
                </div>
                <!--title-->
                <a class="product-title" :href="productUrl">
                    <span v-html="product.title"></span>
                </a>
                <!--price-->
                `+ _usfProductPrice+`
                <!--swatchs-->
                <product-swatches :product="product" :productUrl="productUrl"></product-swatches>
            </div>
            <div class="product-details">
                <!-- vendor -->
                <div class="product-vendor" v-if="usf.settings.search.showVendor">
                    <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" :title="product.vendor" v-html="product.vendor"></a>
                </div>
                <!--title-->
                <a class="product-title" :href="productUrl">
                    <span v-html="product.title"></span>
                </a>
                <!-- Product review -->
                <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
                <div class="short-description">
                    <div>
                    </div>
                </div>
                <!--price-->
                `+ _usfProductPrice+`
                <!--swatchs-->
                <product-swatches :product="product" :productUrl="productUrl"></product-swatches>
                <!--action-->
                <div class="action">

                         `+ _usfProductForm + _usfVariantPopup+` 
                </div>
                <!--wishlist-->
                <a class="wishlist" data-icon-wishlist="" href="#" :data-product-handle="product.urlName" :data-id="product.id">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span class="wishlist-text text-hover" data-translate="wishlist.general.add_to_wishlist">Add to Wish List</span>
                </a>
            </div>
        </div>
    </div>
</div>
`,

    // Search result pages
    searchResultsPages: `
<center>
<div class="pagination" style="display: inline-block">
    <template v-for="e in elements">
        <span v-if="e.type === 'prev'" class="prev">
            <a href="javascript:void(0)" :title="loc.prevPage" @click="onPrev" style="font-size:14px">←</a>
        </span>
        <span v-else-if="e.type === 'dots'" class="deco" style="padding:0 7px">…</span>
        <span v-else-if="e.type === 'page' && e.current" class="page current" style="padding:0 7px;font-weight:bold;">{{e.page}}</span>
        <span v-else-if="e.type === 'page' && !e.current" class="page" style="padding:0 7px"><a href="javascript:void(0)" @click="ev=>onPage(e.page,ev)" :title="usf.utils.format(loc.gotoPage,e.page)">{{e.page}}</a></span>
        <span v-else-if="e.type === 'next'" class="next" style="padding:0 7px">
            <a href="javascript:void(0)" :title="loc.nextPage" @click="onNext" style="font-size:14px">→</a>
        </span>
    </template>
</div>
</center>
`,

    searchResultsListViewItem: `

`,
    // AddToCart Plugin	
    addToCartPlugin: /*inc_begin_addtocart-plugin*/
`<form class="usf-add-to-cart" :data-form-variant-id="variant.id" method="POST" enctype="multipart/form-data" :action="usf.platform.addToCartUrl">
    <input type="hidden" name="form_type" value="product">
    <input type="hidden" name="utf8" value="✓">
    <input type="hidden" name="quantity" value="1">
    <input type="hidden" name="id" :value="variant.id">
    <button type="submit" name="add" :class="{'usf-visible': args.isHover}" class="usf-add-to-cart-btn" v-html="loc.addToCart" :style="{borderColor:settings.buttonBorderColor,color:settings.buttonTextColor,backgroundColor:settings.buttonBackgroundColor}"></button>
</form>`
/*inc_end_addtocart-plugin*/,
    // Preview Plugin
    previewPlugin: /*inc_begin_preview-plugin*/
`<div class="usf-sr-preview" :class="[{'usf-visible': args.isHover},'usf-sr-' + settings.buttonPosition]" @click="onShowModal" :style="{backgroundColor:settings.iconBackgroundColor}">
    <div><svg :style="'width:initial;height:initial;fill:' + settings.iconTextColor" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g transform="translate(0.000000,281.000000) scale(0.100000,-0.100000)"><path d="M4808.6,2770.8c-1219.3-67-2423.2-610.6-3684.6-1659.5C884.8,912.3,100,140.9,100,104.6c0-34.4,794.3-819.2,1004.9-993.4c1138.9-941.7,2195.4-1468.1,3273-1630.8c306.3-45.9,821.1-55.5,1110.2-19.1C6663.3-2391.4,7832.8-1807.6,9023.4-774C9274.1-553.9,9900,73.9,9900,108.4c0,30.6-803.9,823-1004.9,989.6c-1098.7,909.2-2151.4,1445.1-3177.3,1617.4c-189.5,32.5-625.9,70.8-735,65.1C4944.5,2778.5,4866,2774.7,4808.6,2770.8z M5497.7,2296.2c1181-158.9,2425.1-846,3590.8-1983l212.5-206.7l-231.6-225.9c-1158-1135-2434.7-1829.8-3629.1-1977.2c-227.8-26.8-700.5-23-937.9,7.7c-417.3,57.4-851.8,181.8-1282.4,369.4C2452.4-1384.6,1543.2-743.4,865.6-60L702.9,104.6l172.3,174.2c509.1,513,1248,1075.7,1856.6,1410.7c562.7,310.1,1196.3,530.2,1751.4,606.8C4728.2,2330.6,5250.7,2330.6,5497.7,2296.2z"/><path d="M4670.8,1855.9c-671.8-128.2-1213.5-633.6-1397.3-1307.3c-59.3-212.5-59.3-675.7,0-888.1c172.3-625.9,654.6-1110.2,1276.7-1280.5c222-61.3,677.6-61.3,899.6,0c622.1,170.3,1104.4,654.6,1276.7,1280.5c59.3,212.5,59.3,675.7,0,888.1c-172.3,627.8-662.3,1117.8-1276.7,1280.5C5246.9,1880.8,4875.6,1894.2,4670.8,1855.9z M5373.2,1387c233.5-72.7,386.6-166.5,566.6-344.5c268-266.1,388.6-557,388.6-937.9c0-379-120.6-669.9-390.5-937.9c-268-269.9-558.9-390.5-937.9-390.5c-241.2,0-386.6,34.4-612.5,145.5c-130.2,63.2-195.2,111-325.4,243.1c-273.7,275.6-392.4,557-392.4,939.8c0,382.8,118.7,664.2,392.4,937.9c210.5,212.5,436.4,331.1,723.5,382.8C4929.2,1452.1,5222,1432.9,5373.2,1387z"/><path d="M4818.2,508.4c-283.3-132.1-348.4-509.1-122.5-723.5c281.4-266,744.6-68.9,744.6,319.7c0,179.9-109.1,342.6-271.8,409.6C5072.7,554.4,4912,552.4,4818.2,508.4z"/></g></svg></div>
    <span v-html="loc.quickView" :style="{color:settings.iconTextColor}"></span>
</div>`
/*inc_end_preview-plugin*/,
    previewPluginModal: /*inc_begin_preview-modal*/
`<div><div class="usf-backdrop"></div><div class="usf-preview__wrapper usf-zone">
    <div class="usf-preview">
        <!-- Close button -->
        <div class="usf-remove" @click="onClose"></div>

        <!-- Body content -->
        <div class="usf-preview__body">
            <!-- left - images of product -->
            <div class="usf-preview__content-left">
                <!-- Big image -->
                <div class="usf-preview__image-slider">
                    <div type="button" title="Prev" class="usf-preview__image-slider__prev" @click="onPrevImage(0)" v-if="showBigImageNav">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M358 512c4 0 7-1 9-4 5-5 5-13 0-18L146 269 367 47c5-5 5-13 0-18s-13-5-18 0L119 260c-5 5-5 13 0 18l230 230c3 3 6 4 9 4z"></path></svg>
                    </div>

                    <div class="usf-preview__image-slider__track" :style="'max-width:' + ((image.height/image.width*imageMaxWidth > imageMaxHeight) ? (imageMaxHeight*image.width/image.height) + 'px' : '100%') + ';padding-bottom:' + ((image.height/image.width*imageMaxWidth > imageMaxHeight) ? (imageMaxHeight*100/imageMaxWidth) : (image.height/image.width*100)) + '%'">
                        <div v-for="i in images" class="usf-preview__image" :class="{'usf-active': image === i}">
                            <div class="usf-preview__image-img-wrapper">
                                <img :src="usf.platform.getImageUrl(i.url, 1024)">
                            </div>
                        </div>
                    </div>

                    <div type="button" title="Next" class="usf-preview__image-slider__next" @click="onNextImage(0)" v-if="showBigImageNav">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M128 512c-3 0-7-1-9-4-5-5-5-13 0-18l221-221L119 47c-5-5-5-13 0-18s13-5 18 0l230 231c5 5 5 13 0 18L137 508c-2 3-6 4-9 4z"></path></svg>
                    </div>

                    <ul class="usf-preview__image-slider__dots" v-if="showImageIndices && false">
                        <li :class="{'active':i===image}" v-for="(i,index) in images"  @click="onThumbClick(i)"><button type="button">{{index+1}}</button></li>
                    </ul>
                </div>

                <!-- Thumbnails -->
                <div class="usf-preview__thumbs usf-clear" v-if="showThumbs">
                    <div v-if="showThumbNav" class="usf-preview__thumbs-prev" @click="onPrevImage">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M358 512c4 0 7-1 9-4 5-5 5-13 0-18L146 269 367 47c5-5 5-13 0-18s-13-5-18 0L119 260c-5 5-5 13 0 18l230 230c3 3 6 4 9 4z"></path></svg>
                    </div>

                    <div class="usf-preview__thumbs-inner">
                        <div v-for="i in images" class="usf-preview__thumb" :class="{'usf-active': image === i}">
                            <img :src="usf.platform.getImageUrl(i.url, 'small')" @click="onThumbClick(i)">
                        </div>
                    </div>

                    <div v-if="showThumbNav" class="usf-preview__thumbs-next" @click="onNextImage">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M128 512c-3 0-7-1-9-4-5-5-5-13 0-18l221-221L119 47c-5-5-5-13 0-18s13-5 18 0l230 231c5 5 5 13 0 18L137 508c-2 3-6 4-9 4z"></path></svg>                        
                    </div>
                </div>
            </div>

            <!-- right - info of the product -->
            <div class="usf-preview__content-right">
                <!-- Product title -->
                <h1 class="usf-preview__title" v-html="product.title"></h1>

                <!-- Vendor -->
                <div class="usf-preview__vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

                <!--Prices -->
                <div class="usf-preview__price-wrapper price" :class="{'price--sold-out': isSoldOut}">
                    <span class="usf-price product-price__price" :class="{'usf-has-discount': hasDiscount}" v-html="usf.utils.getDisplayPrice(selectedVariant.compareAtPrice || selectedVariant.price)"></span>
                    <span v-if="hasDiscount" class="usf-discount product-price__price product-price__sale" v-html="usf.utils.getDisplayPrice(selectedVariant.price)"></span>

                    <div v-if="false" class="price__badges price__badges--listing">
                        <span class="price__badge price__badge--sale" aria-hidden="true" v-if="hasDiscount && usf.settings.search.showSale">
                            <span v-html="loc.sale"></span>
                        </span>
                        <span class="price__badge price__badge--sold-out" v-if="isSoldOut && usf.settings.search.showSoldOut">
                            <span v-html="loc.soldOut"></span>
                        </span>
                    </div>
                </div>

                <!-- Description -->
                <div class="usf-preview__description" :class="{'usf-loader':!description}" v-html="description"></div>

                <!-- Add to cart form -->
                <form method="post" enctype="multipart/form-data" :action="usf.platform.addToCartUrl">
                    <!-- variant ID -->
                    <input type="hidden" name="id" :value="selectedVariant.id" />

                    <!-- Options -->
                    <template v-for="(o,index) in product.options">
                        <usf-preview-modal-option :option="o" :index="index"></usf-preview-modal-option>
                    </template>

                    <!-- add to card button -->
                    <div class="usf-preview__field">
                        <label v-html="loc.quantity"></label>
                        <div class="usf-flex usf-preview__add-to-cart">
                            <input pattern="[0-9]*" min="1" :value="quantity" name="quantity" type="number" />
                            <button :title="!hasAvailableVariant ? loc.selectedVariantNotAvailable : ''" :disabled="!hasAvailableVariant" type="submit" name="add" class="usf-preview--add-to-cart-btn" :class="{ 'usf-disabled': !hasAvailableVariant}" :style="{color:settings.buttonTextColor,backgroundColor:settings.buttonBackgroundColor}" v-html="loc.addToCart"></button>
                        </div>
                    </div>
                </form>

                <!-- See details link -->
                <div class="usf-preview__link-wrapper">
                    <a class="usf-preview__link" :href="productUrl" v-html="loc.seeFullDetails"></a>
                </div>
            </div>
        </div>
    </div>
</div></div>`
/*inc_end_preview-modal*/,
    gotoTop: /*inc_begin_goto-top*/
`<div class="usf-goto-top">
    <div class="usf-icon usf-icon-up"></div>
</div>`
/*inc_end_goto-top*/,
    searchResultsBanner: /*inc_begin_search-banner*/        
`<div class="usf-sr-banner">
    <a :href="banner.url || 'javascript:void(0)'" :alt="banner.description">
        <img :src="banner.mediaUrl" style="max-width:100%">
    </a>
</div>
`
/*inc_end_search-banner*/,

    ////////////////////////
    // Filter templates
    // facet filters breadcrumb
    filtersBreadcrumb: /*inc_begin_filters-breadcrumb*/
`<div v-if="usf.settings.filterNavigation.showFilterArea && root.facetFilters && root.facets && facetFilterIds.length" class="usf-refineby">
    <!-- Breadcrumb Header -->
    <div class="usf-title usf-clear">
        <span class="usf-pull-left usf-icon usf-icon-equalizer"></span>
        <span class="usf-label" v-html="loc.filters"></span>

        <!-- Clear all -->
        <button class="usf-clear-all usf-btn" v-html="loc.clearAll" @click="root.removeAllFacetFilters" :aria-label="loc.clearAllFilters"></button>
    </div>

    <!-- Breadcrumb Values -->
    <div class="usf-refineby__body">
        <template v-for="facetId in facetFilterIds" v-if="(facet = root.facets.find(fc => fc.id === facetId)) && (f = root.facetFilters[facetId])">
            <template v-for="queryValStr in f[1]">
                <div class="usf-refineby__item usf-pointer usf-clear" @click="root.removeFacetFilter(facetId, queryValStr)">
                    <button class="usf-btn"><span class="usf-filter-label" v-html="facet.title + ': '"></span><b v-html="root.formatBreadcrumbLabel(facet, f[0], queryValStr)"></b></button><span class="usf-remove"></span>
                </div>
            </template>
        </template>
    </div>
 </div>`
 /*inc_end_filters-breadcrumb*/,

    // facet filters    
    filters: /*inc_begin_filters*/
// Vert & Horz modes have different render order
`<div class="usf-facets usf-no-select usf-zone">
<!-- Mobile view -->
<template v-if="usf.isMobile">
    <div class="usf-close" @click="onMobileBack(1)"></div>
    <div class="usf-facets-wrapper">
        <!-- Header. shows 'Filters', facet name, etc. -->
        <div class="usf-header">
            <!-- Single facet mode -->
            <template v-if="isSingleFacetMode">
                <div class="usf-title" @click="onMobileBack(0)" v-html="facets[0].title"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clear"></div>
            </template>

            <!-- When a filter is selected -->
            <template v-else-if="mobileSelectedFacet">
                <div class="usf-title usf-back" @click="onMobileBack(0)" v-html="mobileSelectedFacet.title"></div>
                <div v-if="facetFilters && facetFilters[mobileSelectedFacet.id]" class="usf-clear" @click="removeFacetFilter(mobileSelectedFacet.id)" v-html="loc.clear"></div>
                <div v-else class="usf-all" v-html="loc.all"></div>
            </template>

            <!-- When no filter is selected -->
            <template v-else>
                <div class="usf-title" @click="onMobileBack(0)" v-html="loc.filters"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clearAll"></div>
            </template>
        </div>

        <div class="usf-body">
            <!-- List all filter options, in single facet mode -->
            <usf-filter v-if="isSingleFacetMode" :facet="facets[0]"></usf-filter>

            <!-- List all filter options, when a filter is selected -->
            <usf-filter v-else-if="mobileSelectedFacet" :facet="mobileSelectedFacet"></usf-filter>

            <!-- List all when there are more than one facet -->
            <template v-else :key="f.id" v-for="f in facets">
                <template v-if="canShowFilter(f)">
                    <div class="usf-facet-value" @click="onMobileSelectFacet(f)">
                        <span class="usf-title" v-html="f.title"></span>
                        <div v-if="(selectedFilterOptionValues = facetFilters && (ff = facetFilters[f.id]) ? ff[1] : null)" class="usf-dimmed">
                            <span v-for="cf in selectedFilterOptionValues" v-html="formatBreadcrumbLabel(f, f.facetName, cf)"></span>
                        </div>
                    </div>
                </template>
            </template>
        </div>

        <!-- View items -->
        <div class="usf-footer">
            <div @click="onMobileBack(1)" v-html="loc.viewItems"></div>
        </div>
    </div>
</template>

<!-- Desktop view -->
<template v-else>
    <usf-filter-breadcrumb></usf-filter-breadcrumb>    
    <!-- Filters Loader -->
    <div v-if="!facets" class="usf-facets__first-loader">
        <template v-for="i in 3">
            <div class="usf-facet"><div class="usf-title usf-no-select"><span class="usf-label"></span></div>
                <div v-if="!usf.settings.filters.horz" class="usf-container"><div class="usf-facet-values usf-facet-values--List"><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div></div></div>
            </div>
        </template>
    </div>
    <!-- Facets body -->
    <div v-else class="usf-facets__body">
        <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
    </div>
</template>
</div>`
/*inc_end_filters*/,

    // facet filter item
    filter: /*inc_begin_filter*/
`<div v-if="canShow" class="usf-facet" :class="{'usf-collapsed': collapsed && !usf.isMobile, 'usf-has-filter': isInBreadcrumb}">
    <!-- Mobile filter -->
    <div v-if="usf.isMobile" class="usf-container">
        <!-- Search box -->
        <input v-if="hasSearchBox" class="usf-search-box" :aria-label="loc.filterOptions" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

        <!-- Values -->
        ` + _usfFilterBodyTemplate +
    `</div>

    <!-- Desktop filter -->
    <template v-else>
        <!-- Filter title -->
        <div class="usf-clear">
            <div class="usf-title usf-no-select" @click="onExpandCollapse">
                <button class="usf-label usf-btn" v-html="facet.title" :aria-label="usf.utils.format(loc.filterBy,facet.title)" :aria-expanded="!collapsed"></button>
                <usf-helptip v-if="facet.tooltip" :tooltip="facet.tooltip"></usf-helptip>            
                <!-- 'Clear all' button to clear the current facet filter. -->
                <button v-if="isInBreadcrumb" class="usf-clear-all usf-btn" :title="loc.clearFilterOptions" :aria-label="usf.utils.format(loc.clearFiltersBy,facet.title)" @click="onClear" v-html="loc.clear"></button>
            </div>
        </div>

        <!-- Filter body -->
        <div class="usf-container">
            <!-- Search box -->
            <input v-if="hasSearchBox" class="usf-search-box" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

            ` + _usfFilterBodyTemplate +
        `
        </div>
    </template>
</div>`
/*inc_end_filter*/,

    // facet filter option
    filterOption: /*inc_begin_filter-option*/
`<div v-if="children" :class="(isSelected ? 'usf-selected ' : '') + ' usf-relative usf-facet-value usf-facet-value-single usf-with-children' + (collapsed ? ' usf-collapsed' : '')">
    <!-- option label -->
    <button class="usf-children-toggle usf-btn" v-if="children" @click="onToggleChildren"></button>
    <button class="usf-label usf-btn" v-html="label" @click="onToggle"></button>

    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobile)) && option.value !== undefined" class="usf-value">{{option.value}}</span>    

    <div class="usf-children-container" v-if="children && !collapsed">
        <button :class="'usf-child-item usf-btn usf-facet-value' + (isChildSelected(c) ? ' usf-selected' : '')" v-for="c in children" v-html="getChildLabel(c)" @click="onChildClick(c)"></span>
    </div>
</div>
<div v-else :class="(isSelected ? 'usf-selected ' : '') + (swatchImage ? ' usf-facet-value--with-background' : '') + (' usf-relative usf-facet-value usf-facet-value-' + (facet.multiple ? 'multiple' : 'single'))" :title="isSwatch || isBox ? option.label + ' (' + option.value + ')' : undefined" :style="usf.isMobile ? null : swatchStyle" @click="onToggle">
    <!-- checkbox -->
    <div v-if="!isBox && !isSwatch && facet.multiple" :class="'usf-checkbox' + (isSelected ? ' usf-checked' : '')">
        <span class="usf-checkbox-inner"></span>
    </div>

    <!-- swatch image in mobile -->
    <div v-if="swatchImage && usf.isMobile" class="usf-mobile-swatch" :style="swatchStyle"></div>

    <!-- option label -->
    <button class="usf-label usf-btn" v-html="label"></button>

    <!-- helper for swatch -->
    <button v-if="isSwatch" class="usf-btn-helper usf-btn" :aria-checked="isSelected" role="checkbox"></button>
    
    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobile)) && option.value !== undefined" class="usf-value">{{option.value}}</span>
</div>`
/*inc_end_filter-option*/,



    // Instant search popup
    instantSearch: /*inc_begin_instantsearch*/
`<div :class="'usf-popup usf-zone usf-is usf-is--' + position + (shouldShow ? '' : ' usf-hide') + (isEmpty ? ' usf-empty' : '') + (firstLoader ? ' usf-is--first-loader': '')"  :style="usf.isMobile ? null : {left: this.left + 'px',top: this.top + 'px',width: this.width + 'px'}">
    <!-- Mobile search box -->
    <div v-if="usf.isMobile">
        <form class="usf-is__inputbox" :action="searchUrl" method="get" role="search">
            <span class="usf-icon usf-icon-back usf-close" @click="close"></span>
            <input name="q" autocomplete="off" ref="searchInput" :value="term" @input="onSearchBoxInput">
            <span class="usf-remove" v-if="term" @click="onClear"></span>
        </form>
    </div>

    <!-- First loader -->
    <div class="usf-is__first-loader" v-if="firstLoader">
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
    </div>

    <!-- All JS files loaded -->
    <template v-else>
        <!-- Empty view -->
        <div v-if="isEmpty" class="usf-is__no-results">
            <div style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-items.png?t=2') center no-repeat;min-height:160px"></div>
            <div v-html="usf.utils.format(loc.noMatchesFoundFor, term)"></div>
        </div>
        <template v-else>
            <!-- Body content -->
            <div class="usf-is__content">
                <!-- Products -->
                <div class="usf-is__matches">
                    <div class="usf-title" v-html="loc.productMatches"></div>
                    
                    <div class="usf-is__products" v-if="result.items.length">
                        <!-- Product -->
                        <usf-is-item v-for="p in result.items" :product="p" :result="result" :key="p.id + '-' + p.selectedVariantId"></usf-is-item>
                    </div>
                    <div class="usf-is__products" v-else style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-products.png?t=2') center no-repeat;min-height:250px"></div>
                </div>

                <!-- Suggestions, Collections, Pages -->
                <div class="usf-is__suggestions">
                    <!-- Suggestions -->
                    <template v-if="result.suggestions && result.suggestions.length">
                        <div class="usf-title" v-html="loc.searchSuggestions"></div>
                        <span v-for="s in result.suggestions" class="usf-is__suggestion" v-html="usf.utils.highlight(s, result.query)" @click="search(s)"></span>
                    </template>
                    
                    <!-- Collections -->
                    <template v-if="result.collections && result.collections.length">
                        <div class="usf-title" v-html="loc.collections"></div>

                        <template v-if="result.collections">
                            <span v-for="c in result.collections" class="usf-is__suggestion" v-html="usf.utils.highlight(c.title, result.query)" @click="selectCollection(c)"></span>
                        </template>
                    </template>

                    <!-- Pages -->
                    <template v-if="result.pages && result.pages.length">
                        <div class="usf-title" v-html="loc.pages"></div>

                        <template v-if="result.pages">
                            <span v-for="p in result.pages" class="usf-is__suggestion" v-html="usf.utils.highlight(p.title, result.query)" @click="selectPage(p)"></span>
                        </template>
                    </template>
                </div>
            </div>

            <!-- Footer -->
            <div class="usf-is__viewall">
                <span @click="search(queryOrTerm)" v-html="usf.utils.format(queryOrTerm ? loc.viewAllResultsFor : loc.viewAllResults, queryOrTerm)"></span>
            </div>
            
            <!-- Loader -->
            <div v-if="loader" class="usf-is__loader">
                <div class="usf-spinner"></div>
            </div>
        </template>
    </template>
</div>`
/*inc_end_instantsearch*/
    ,

    // Instant search item
    instantSearchItem:/*inc_begin_instantsearch-item*/
`<span class="usf-is__product usf-clear" @click="onItemClick">
    <!-- Image -->
    <div class="usf-img-wrapper usf-pull-left">
        <img class="usf-img" :src="selectedImageUrl">
    </div>
    
    <div class="usf-pull-left">
        <!-- Title -->
        <div class="usf-title" v-html="usf.utils.highlight(product.title, result.query)"></div>

        <!-- Vendor -->
        <div class="usf-vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

        <!-- Prices -->
        <div class="usf-price-wrapper">
            <span class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice"></span>
            <span v-if="hasDiscount" class="usf-discount product-price__price product-price__sale" v-html="displayDiscountedPrice"></span>
        </div>
    </div>
</span>`
/*inc_end_instantsearch-item*/,
};


function getGridClasses() {
    if (currentView == 'grid')
        switch (window.collectionLayout) {
            case 'default':
            case 'fullwidth':
                return `grid-item ${window.grid_item_width} ${window._usfGlobalSettings.product_image_border ? ' grid-item-border ' : ''}`
            case 'mansory':
                return `grid-item-mansory grid-item  ${window.grid_item_width} ${window._usfGlobalSettings.product_image_border ? ' grid-item-border ' : ''}`
            default:
                return `grid-item ${window.grid_item_width} ${window._usfGlobalSettings.product_image_border ? ' grid-item-border ' : ''}`
        }
    else {
        switch (window.collectionLayout) {
            case 'mansory':
                return `grid-item-mansory grid-item  col-12 ${window._usfGlobalSettings.product_image_border ? ' grid-item-border ' : ''}`
            default:
                return `grid-item col-12 ${window._usfGlobalSettings.product_image_border ? ' grid-item-border ' : ''}`
        }
    }
}

function getParentGridClasses() {
    if (currentView == 'grid') return `product-collection ${window.rows} row`
    return 'product-collection row products-list'
}

var _usfImageWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048];

var _usf_getIMGBySizeFromRawURL = function (t, r) {
    //console.log("t : ", t)
    if (t.includes('no-image.')) return t;
    try {
        if ("original" == r)
            return t;
        var e = t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
        return e[1] + "_" + r + "." + e[2]
    } catch (o) {
        //console.log(t)
        return t
    }
}

var sizeLists = function (product) {
    var html = "";
    var sizeShowed = {};
    var count = 0;
    var rendered = 0;
    console.log('Product',product)
    var option = product.options.find(o => o.name === 'Size');
    console.log('Product',option)
    if (option) {
        ////console.log(product.title + ">" + option)

        for (let j = 0; j < product.variants.length; j++) {
            var v = product.variants[j];
            for (let i = 0; i < option.values.length; i++) {
                for (let n = 0; n < v.options.length; n++) {
                    var optVal = option.values[i];
                    if (optVal == option.values[v.options[n]] && !usf.utils.isVariantSoldOut(v) && !sizeShowed[optVal]) {
                        count++;
                        sizeShowed[optVal] = 1;

                        if (count <= 4) {
                            rendered++;
                            html += `<li class="size-item">
                                        <a title="${optVal}" href="/products/${product.urlName}?variant=${v.id}">${optVal}</a>
                                    </li>`
                        }
                    }
                }
            }
        }
        if (count > rendered) {
            html += `<li class="item-size-more hide-col5">
                        <a href="/products/${product.urlName}" title="More Size">
                        + ${count - rendered}
                        </a>
                    </li>`
        }
    }
    return html
}

function merge(obj1, obj2) {
    answer = {}
    for (key in obj1) {
        answer[key] = obj1[key];
    }

    for (key in obj2) {
        if (answer[key] === undefined || answer[key] === null || (obj2[key] != undefined && obj2[key] != null))
            answer[key] = obj2[key];
    }
    return answer
}

var defaultSectionSettings = {
    show_banner_1: '',
    link_banner_1: '',
    img_banner1: '',
    show_banner_2: '',
    link_banner_2: '',
    img_banner2: '',
    show_banner_3: '',
    link_banner_3: '',
    img_banner3: '',
    show_banner_4: '',
    link_banner_4: '',
    img_banner4: '',
}

var defaultGlobalSettings = {
    type_label_sale: null,
    enable_quick_view: true,
    product_image_border: false,
    image_swap: true,
    show_vendor: false
}

var usfFilesUrl;
var currentView;
var onView = function (view) {
    currentView = view;
    usf.event.raise('rerender')
}


usf.event.add('init', function () {
  
    usf.event.add(['sr_updated', 'sr_viewChanged', 'rerender'], function () {
        setTimeout(function () {
            if(window._usfElla){
                 _usfElla.initWishListIcons();
                _usfElla.initQuickshop()
            }
               
        }, 200);
    }); 
    var nodes = document.head.children;
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (n.href && (n.href.indexOf('theme-styles.css') !== -1)) {
            usfFilesUrl = n.href;
            var m = usfFilesUrl.indexOf('/assets/');
            while (usfFilesUrl[--m] !== '/');
            while (usfFilesUrl[--m] !== '/');
            var k = usfFilesUrl.indexOf('?v=');
            usfFilesUrl = usfFilesUrl.substring(0, m) + "/files/";
            break;
        }
    }
    // handle search icon
    if (usf.settings.instantSearch.online && usf.isMobile) {
        // User clicks on the input
        var searchIcon = document.querySelector('.icon-search[data-search-mobile-toggle]')
        if (searchIcon)
            searchIcon.addEventListener('click', function (e) {
                var target = document.createElement('input');
                usf.event.raise('is_show', target);
                usf.utils.stopEvent(e)
            });
    }

    currentView = usf.queryRewriter.view;

    if (window.collectionLayout == 'no-sidebar') usf.settings.filters.horz = true
    if (window.collectionLayout == 'express-order') usf.settings.mobileBreakpoint = 1200;

    var nodes = document.head.children;
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (n.href && (n.href.indexOf('vendor.min.css') !== -1 || n.href.indexOf('usf.css') !== -1)) {
            usfFilesUrl = n.href;
            usfFilesUrl = usfFilesUrl.substring(0, usfFilesUrl.lastIndexOf('/')) + "/";
        }
    }

    window._usfSectionSettings = window._usfSectionSettings || {};
    window._usfSectionSettings = merge(defaultSectionSettings, (window._usfSectionSettings || {}))

    window._usfGlobalSettings = window._usfGlobalSettings || {};
    window._usfGlobalSettings = merge(defaultGlobalSettings, (window._usfGlobalSettings || {}))



    var ProductSwatches = {
        props: ['product', 'productUrl'],
        data() {
            return {
                max: 4
            }
        },
        methods: {
            renderVariant(h, opt, index) {
                var option_count = 0;
                var x = [];
                var downcased_opt = opt.name.toLowerCase();
                if (downcased_opt.includes('color') || downcased_opt.includes('colour')) {
                    var colorlist = [];
                    // if (this.product.variants.length <= 1) return '';
                    this.product.variants.map((v) => {
                        if (option_count >= this.max) return;
                        //console.log("xxxxxxxxxxxx")
                        var color = opt.values[v.options[index]];
                        if (!colorlist.includes(color)) {
                            option_count++;
                            colorlist.push(color)
                            var text = _usfHandlezie(color);
                            var attrs = {
                                title: color,
                                'data-value': text
                            }
                            var hasImg = this.product.images[v.imageIndex];
                            if (hasImg) attrs['data-img'] = _usf_getIMGBySizeFromRawURL(hasImg.url, '800x');
                            x.push(h('li', [
                                h('div', {
                                    staticClass: 'tooltip'
                                }, color),
                                h('label', {
                                    attrs: attrs,
                                    style: {
                                        backgroundColor: (text.replace(' ', '')),
                                        backgroundImage: hasImg ? `url(${_usfGetOriginImgWithSize(hasImg.url,'24x')})` : `url("${(usfFilesUrl + text + '.png')}")`
                                    }
                                })
                            ]))
                        }
                    })
                }
                if (option_count >= this.max && (opt.values.length - this.max != 0)) {
                    x.push(h('li', {
                        staticClass: 'item-swatch-more'
                    }, [
                        h('a', {
                            attrs: {
                                href: this.productUrl,
                                title: 'More Color'
                            }
                        }, `+ ${opt.values.length - this.max}`)
                    ]))
                }
                //console.log("x : ", x)
                return x;
            }
        },
        render(h) {
            if (this.product.options.length <= 0) return;

            return h('ul', {
                class: 'item-swatch'
            }, [
                this.product.options.map((opt, index) => {
                    return this.renderVariant(h, opt, index)
                })
            ]);
        }
    }
    usf.register(ProductSwatches, null, 'product-swatches');

    // register or override components
    // ...    
    /*var SearchResultsGridItem2 = {
        template: usf.templates.searchResultsGridViewItem,
    } 
    usf.register(SearchResultsGridItem2, usf.components.SearchResultsGridItem, "usf-sr-griditem");*/

    const search_toggles = document.querySelectorAll("[data-search-mobile-toggle]");
    if (usf.isMobile) {
        for (let i = 0; i < search_toggles.length; i++) {
            search_toggles[i].addEventListener("click", function (e) {
                var t = e.currentTarget;
                var hs = t.closest('div')
                if (hs) {
                    var input = hs.querySelector('.header-search__input');
                    //console.log("input : ", input)
                    if (input) setTimeout(function () { input.click(); }, 150);
                }
            });
        }
    }

    document.querySelectorAll(".quickSearchResultsWrap").forEach(e => e.parentNode.removeChild(e));


    /**
 * USF option component
 * */
 var UsfOption = {
    props: {
        product: Object,
        name: String,
        opt: Object,
        optIndex: Number
    },
    data() {
        var product = this.product;
        var option;
        var option_index = 0;
        var option_with_values = [];
        var optionRendereds = {};
        var selectedOptionValue = '';
        if (this.opt) {
            option = this.opt;
            option_index = this.optIndex
        } else {
            for (let i = 0; i < product.options.length; i++) {
                var o = product.options[i];
                if (this.name.includes(o.name)) {
                    option_index = i;
                    option = o;
                    break;
                }
            }
        }
        
        if (option) {
            selectedOptionValue = this.$parent.selectedVariantForPrice.options[option_index] != undefined ? option.values[this.$parent.selectedVariantForPrice.options[option_index]] : '';
            option.values.filter(o => {
                for (let x = 0; x < product.variants.length; x++) {
                    var v = product.variants[x];
                    if (v.options[option_index] != undefined) {
                        var vrOpt = option.values[v.options[option_index]];
                        if (o === vrOpt && !optionRendereds[o]) {
                            optionRendereds[o] = 1;
                            option_with_values.push({
                                value: o,
                                image: product.images[v.imageIndex],
                                variant: v
                            })
                        }
                    }
                }
            })
        }
        return {
            option: option,
            option_index: option_index,
            option_with_values: option_with_values,
            selectedOptionValue: selectedOptionValue
        }
    },
}
usf.components.UsfOption = usf.register(UsfOption, null, 'usf-option');

/**
* select option component
* */
var UsfSelectOpt = {
    mixins: [usf.components.UsfOption],
    render(h) {
        if (this.option_with_values.length) return h('select', {
            class: 'single-option-selector single-option-selector-quick product-form__input form-control single-option-selector-' + window._usfSectionId
        }, [
            this.option_with_values.map((o, index) => {
                return h('option',{
                    attrs:{
                        value: o.value,
                        selected: this.selectedOptionValue == o.value
                    }
                },[o.value])
            })
        ])
    }
}
usf.register(UsfSelectOpt, null, 'usf-select-opt');



/**
* color swatch component
* */
var UsfSwatches = {
    mixins: [usf.components.UsfOption],
    render(h) {
        if (this.option_with_values.length) return h('div', {
            class: 'selector-wrapper selector-wrapper-1 swatch js product-form__item option-color hide',
            attrs:{
                'data-option-index': 0,
                'data-option-position': this.option_index,
            }
        }, [
            h('label',{
                staticClass: 'form-label',
                class: {
                    'label--hidden': this.option.name == 'dafault'
                }
            },[
                this.option.name + ':', 
                h('span', {class: `label-value-` + (this.option_index + 1)},[this.selectedOptionValue])
            ]),
            this.option_with_values.map((o, index) => {
                var optHandled = _usfHandlezie(o.value);
                var _sold = usf.utils.isVariantSoldOut(o.variant);
                var imgCompact;
                if(o.image)
                    imgCompact = _usfGetOriginImgWithSize(o.image.url, 'compact');
                return h('div',{
                    class: `swatch-element color ${optHandled} ${usf.utils.isVariantSoldOut(o.variant) ? 'soldout' : 'available'}`,
                    attrs:{
                        'data-value': o.value
                    }
                },[
                    h('input',{
                        class: 'single-option-selector single-option-selector-quick single-option-selector-' + window._usfSectionId,
                        attrs:{
                            disabled: usf.utils.isVariantSoldOut(o.variant),
                            type: 'radio',
                            name: `SingleOptionSelector-${this.option_index}-${this.product.id}-${window._usfSectionId}`,
                            'data-index': 'option' + (this.option_index + 1),
                            value: o.value,
                            id: `SingleOptionSelector${this.option_index}-${ o.value }-${ this.product.id }-${ window._usfSectionId }`,
                            checked: this.selectedOptionValue == o.value
                        }
                    }),
                    h('label',{
                        attrs:{
                            'data-toggle':'tooltip',
                            'data-placement': 'top',
                            'title': o.value,
                            for: `SingleOptionSelector${this.option_index}-${ o.value }-${ this.product.id }-${ window._usfSectionId }`,
                            'data-imge': imgCompact,
                        },
                        style: _usfThemeSettings.show_product_variant_img ? `background-color: ${optHandled}; background-image: url(${usfFilesUrl + optHandled + '.png'})` : `background-color: ${optHandled};`
                    },[o.value]),
                    o.image ? h('img',{
                        class:'lazyload',
                        attrs:{
                            'data-srcset':_usfGetOriginImgWithSize(o.image.url, '34x34'),
                            'alt':'',
                            'data-image': true
                        }
                    }) : null,
                ])
            }),
        ])
    }
}
usf.register(UsfSwatches, null, 'usf-swatches');


/**
* select option component
* */
var UsfSizes = {
    mixins: [usf.components.UsfOption],
    render(h) {
        if (this.option_with_values.length) return h('div', {
            class: 'selector-wrapper selector-wrapper-' + (this.option_index == 0 ? 2 : this.option_index + 1) + ' swatch js product-form__item',
            attrs:{
                'data-option-index' : this.option_index == 0 ? 1 : this.option_index 
            }
        }, [
            h('label',{
                staticClass: 'form-label',
                class: {
                    'label--hidden': this.option.name == 'dafault'
                }
            },[
                this.option.name + ':', 
                h('span', {class: `label-value-` + (this.option_index + 1)},[this.selectedOptionValue])
            ]),

            this.option_with_values.map((o, index) => {
                var _sold = usf.utils.isVariantSoldOut(o.variant);
                var optHandled = _usfHandlezie(o.value);
                return h('div',{
                    class: `swatch-element size ${optHandled} ${usf.utils.isVariantSoldOut(o.variant) ? 'soldout' : 'available'}`,
                    attrs:{
                        'data-value': o.value,
                        'data-available': o.variant.available
                    }
                },[
                    h('input',{
                        class: 'single-option-selector single-option-selector-quick single-option-selector-' + window._usfSectionId,
                        attrs:{
                            disabled: usf.utils.isVariantSoldOut(o.variant),
                            type: 'radio',
                            name: `SingleOptionSelector-${this.option_index}-${this.product.id}-${window._usfSectionId}`,
                            'data-index': 'option' + (this.option_index + 1),
                            value: o.value,
                            id: `SingleOptionSelector${this.option_index}-${ o.value }-${ this.product.id }-${ window._usfSectionId }`,
                        }
                    }),
                    h('label',{
                        attrs:{
                            'data-toggle':'tooltip',
                            'data-placement': 'top',
                            'title': o.value,
                            for: `SingleOptionSelector${this.option_index}-${ o.value }-${ this.product.id }-${ window._usfSectionId }`,
                        },
                    },[o.value]),
                ])
            })
        ])
    }
}
usf.register(UsfSizes, null, 'usf-sizes');


});


function getVariantTitle(options, p) {
    if(!p.options.length)
        return 'default'
    var arrs = [];
    for (let i = 0; i < options.length; i++) {
        var o = options[i];
        arrs.push(p.options[i].values[o])
    }
    return arrs.join(' / ');
}
