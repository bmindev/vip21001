// Override Settings
var boostPFSFilterConfig = {
	general: {
		limit: boostPFSConfig.custom.products_per_page,
		// Optional
		loadProductFirst: true,
		filterTreeMobileStyle: 'style1',
		showLimitList: '12,16,20,24,50'
	},
};

var boostPFSTemplate = {
	'gridBorderClass': 'grid-item-border',
	'onSaleClass': 'on-sale',
	'soldOutClass': 'sold-out',

	'quickViewHtml': '<a class="quickview-button" href="javascript:void(0)" id="{{itemHandle}}" title="' + boostPFSConfig.label.quick_view + '"><span>' + boostPFSConfig.label.quick_view + '</span></a>',
	'reviewHtml': '<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>',
	'showLimitHtml': 	'<div class="label-tab" data-toggle="dropdown" aria-expanded="false">' +
							'<span name="paginateBy" class="label-text">{{currentLimitItem}}</span>' +
							'<span class="icon-dropdown"><i class="fa fa-angle-down"></i></span>' +
						'</div>' +
						'<ul class="dropdown-menu">{{showLimitItems}}</ul>',

	// Grid Template
	'productGridItemHtml': '<div class="grid-item ' + boostPFSConfig.custom.grid_item_width + ' {{itemGridBorderClass}}">' +
								'<div class="inner product-item {{itemSoldOutClass}} {{itemSaleClass}} " data-product-id="product-{{itemId}}" data-json-product={{itemJson}}>' +
									'<div class="inner-top">' +
										'<div class="product-top">' +
											'<div class="product-image {{itemFlipImageLabel}}">' +
												'<a href="{{itemUrl}}" class="product-grid-image adaptive_height" data-collections-related="{{itemCollectionRelated}}" {{itemStyles}}>' +
													'{{itemImages}}' +
												'</a>' +
											'</div>' +
											'{{itemLabels}}' +
											'<div class="product-des abs-center">' +
												'{{itemWishlist}}' +
												'{{itemAddToCart}}' +
												'{{itemReviews}}' +
											'</div>' +
											'<div class="product-des abs-bottom">' +
												'{{itemSizeSwatches}}' +
												'{{itemQuickView}}' +
											'</div>' +
										'</div>' +
										// Product Bottom
										'<div class="product-bottom">' +
											'<div class="wrapper-compare">' +
												'{{itemVendor}}' +
												'{{itemCompare}}' +
											'</div>' +
											'<a class="product-title" href="{{itemUrl}}">{{itemTitleMultilang}}</a>' +
											'<div class="price-box">{{itemPrice}}</div>' +
											'<a href="{{itemUrl}}" style="text-decoration: none;"></a>' +
										
										'</div>' +
										// Product Detail
										'<div class="product-details">' +
											'{{itemVendor}}' +
											'<a class="product-title" href="{{itemUrl}}">{{itemTitleMultilang}}</a>' +
											'{{itemReview}}' +
											'<div class="short-description">{{itemDescription}}</div>' +
											'<div class="price-box">{{itemPrice}}</div>' +
											'{{itemColorSwatches}}' +
											'<div class="action">{{itemAddToCart}}</div>' +
											'{{itemWishlist}}' +
										'</div>' +
										// End Product Detail
									'</div>' +
								'</div>' +
							'</div>',
	
							// Grid Template
	'productGridItem2Html': '<div class="grid-item ' + boostPFSConfig.custom.grid_item_width + ' {{itemGridBorderClass}}">' +
								'<div class="inner product-item {{itemSoldOutClass}} {{itemSaleClass}} " data-product-id="product-{{itemId}}" data-json-product={{itemJson}}>' +
									'<div class="inner-top">' +
										'<div class="product-top">' +
											'<div class="product-image {{itemFlipImageLabel}}">' +
												'<a href="{{itemUrl}}" class="product-grid-image adaptive_height" data-collections-related="{{itemCollectionRelated}}" {{itemStyles}}>' +
													'{{itemImages}}' +
												'</a>' +
											'</div>' +
											'{{itemLabels}}' +
											'{{itemQuickView}}' +
											'<div class="product-des abs-center">' +
												'{{itemAddToCart}}' +
												'{{itemReviews}}' +
											'</div>' +
										'</div>' +
										// Product Bottom
										'<div class="product-bottom">' +
											'<div class="wrapper-vendor">' +
												'{{itemVendor}}' +
												'{{itemWishlist}}' +
											'</div>' +
											'<div class="wrapper-compare">' +
												'{{itemColorSwatches}}' + 
											'</div>' +
											'<a class="product-title" href="{{itemUrl}}">{{itemTitleMultilang}}</a>' +
											'<div class="price-box">{{itemPrice}}</div>' +
											'<div class="wrapper-size">' + 
												'{{itemSizeSwatches}}' +
											'</div>' +
											'<a href="{{itemUrl}}" style="text-decoration: none;"></a>' +
											'{{itemColorSwatches}}' +
										'</div>' +
										// Product Detail
										'<div class="product-details">' +
											'{{itemVendor}}' +
											'<a class="product-title" href="{{itemUrl}}">{{itemTitleMultilang}}</a>' +
											'{{itemReview}}' +
											'<div class="short-description">{{itemDescription}}</div>' +
											'<div class="price-box">{{itemPrice}}</div>' +
											'{{itemColorSwatches}}' +
											'<div class="action">{{itemAddToCart}}</div>' +
											'{{itemWishlist}}' +
										'</div>' +
										// End Product Detail
									'</div>' +
								'</div>' +
							'</div>',

	// List Template
	'productListItemHtml':  '<div class="grid-item product-item {{itemSoldOutClass}} {{itemSaleClass}} wow fadeIn" data-wow-delay="{{delayTime}}ms" id="product-{{itemId}}">' +
								'<div class="product-image">' +
									'<a href="{{itemUrl}}" class="product-list-thumb product-grid-image">' +
										'<img src="{{itemThumbUrl}}" alt="{{itemTitle}}">' +
									'</a>' +
									'{{itemLabels}}' +
								'</div>' +

								'<div class="product-details">' +
									'<a class="product-title" href="{{itemUrl}}">{{itemTitle}}</a>' +
									'{{itemVendor}}' +
									'{{itemReview}}' +
									'<div class="short-description">{{itemDescription}}</div>' +
									'{{itemColorSwatches}}' +
									'<div class="price-box">{{itemPrice}}</div>' +
									'<div class="action">{{itemAddToCart}}</div>' +
									'{{itemWishlist}}' +
								'</div>' +
							'</div>',

	// Pagination Template
	'previousActiveHtml': '<li class="text"><a href="{{itemUrl}}" title="' + boostPFSConfig.label.toolbar_previous + '"><i class="fa fa-angle-left" aria-hidden="true"></i><span>' + boostPFSConfig.label.toolbar_previous + '</span></a></li>',
	'previousDisabledHtml': '<li class="disabled"><i class="fa fa-angle-left" aria-hidden="true"></i><span>' + boostPFSConfig.label.toolbar_previous + '</span></li>',
	'nextActiveHtml': '<li class="text"><a href="{{itemUrl}}" title="' + boostPFSConfig.label.toolbar_next + '"><span>' + boostPFSConfig.label.toolbar_next + '</span><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>',
	'nextDisabledHtml': '<li class="disabled"><i class="fa fa-angle-right" aria-hidden="true"></i><span>' + boostPFSConfig.label.toolbar_next + '</span></li>',
	'pageItemHtml': '<li><a href="{{itemUrl}}">{{itemTitle}}</a></li>',
	'pageItemSelectedHtml': '<li class="active"><span>{{itemTitle}}</span></li>',
	'pageItemRemainHtml': '<li><span>{{itemTitle}}</span></li>',
	'paginateHtml': '{{previous}}{{pageItems}}{{next}}',
	// Sorting Template
	'sortingHtml': '<span class="boost-pfs-filter-sorting-label">' + boostPFSConfig.label.sorting + '</span><label><span><span class="boost-pfs-filter-top-sorting-label">' + boostPFSConfig.label.sorting + '</span></span></label><ul class="boost-pfs-filter-filter-dropdown">{{sortingItems}}</ul>',
	
	
};

(function() {
	BoostPFS.inject(this);

	ProductGridItem.prototype.compileTemplate = function(data, index, totalProduct) {
		if (!data) data = this.data;
		if (!index) index = this.index;
		if (!totalProduct) totalProduct = this.totalProduct;

		/*** Prepare data ***/
		var images = data.images_info;
		// Displaying price base on the policy of Shopify, have to multiple by 100
		var soldOut = !data.available; // Check a product is out of stock
		var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		var priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Get First Variant (selected_or_first_available_variant)
		var firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) { return e.id == Utils.getParam('variant'); });
			if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
		for (var i = 0; i < data['variants'].length; i++) {
			if (data['variants'][i].available) {
				firstVariant = data['variants'][i];
				break;
			}
		}
		}
		/*** End Prepare data ***/

		// Get Template
		var itemHtml = '';
		if (boostPFSConfig.custom.style_product_grid == 'style_product_grid_2') {
			itemHtml = boostPFSTemplate.productGridItem2Html;
		} else {
			itemHtml = boostPFSTemplate.productGridItemHtml;
		}

		// Add class
		itemHtml = boostPFSConfig.custom.product_image_border ? itemHtml.replace(/{{itemGridBorderClass}}/g, boostPFSTemplate.gridBorderClass) : itemHtml.replace(/{{itemGridBorderClass}}/g, '');
		itemHtml = boostPFSConfig.custom.product_image_crop ? itemHtml.replace(/{{itemCropImageClass}}/g, 'crop_image') : itemHtml.replace(/{{itemCropImageClass}}/g, 'no_crop_image');
		itemHtml = soldOut ? itemHtml.replace(/{{itemSoldOutClass}}/g, boostPFSTemplate.soldOutClass) : itemHtml.replace(/{{itemSoldOutClass}}/g, '');
		itemHtml = onSale ? itemHtml.replace(/{{itemSaleClass}}/g, boostPFSTemplate.onSaleClass) : itemHtml.replace(/{{itemSaleClass}}/g, '');
		itemHtml = itemHtml.replace(/{{delayTime}}/g, boostPFSConfig.custom.time_lazy_load * index);

		// Add Thumbnail
		//     var itemThumbUrl = images.length > 0 ? Utils.optimizeImage(images[0]['src'], '1024x1024') : boostPFSConfig.general.no_image_url;
		//     var itemFlipImageUrl = images.length > 1 ? Utils.optimizeImage(images[1]['src'], '1024x1024') : itemThumbUrl;

		// Add item images
		var aspect_ratio = images.length > 0 ? images[0]['width'] / images[0]['height'] : 1;
		var itemImagesHtml = '';
		var itemStylesHtml = '';
		if (!boostPFSConfig.custom.product_image_resize) {
			itemStylesHtml += 'style="padding-top: ' + 1/aspect_ratio*100 + '%"';
		}
		if (images.length > 1 && boostPFSConfig.custom.image_swap) {
			itemImagesHtml += 	'<picture data-index="0">' +
									'<source data-srcset="' + Utils.optimizeImage(images[0]['src'], '300x') + '" media="(max-width: 767px)" />' +
									'<source data-srcset="' + buildDataSrcset(images[0]['src']) + '" media="(min-width: 768px)" />' +
									'<img alt="{{itemTitle}}" class="images-one lazyload" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="' + aspect_ratio + '" data-sizes="auto" data-srcset="' + buildDataSrcset(images[0]['src']) + '" data-image>' +
								'</picture>' + 
								'<span class="images-two">'+ 
									'<picture data-index="1">' +
										'<source data-srcset="' + Utils.optimizeImage(images[1]['src'], '300x') + '" media="(max-width: 767px)"/>' +
										'<source data-srcset="' + buildDataSrcset(images[1]['src']) + '" media="(min-width: 768px)" />' +
										'<img alt="{{itemTitle}}" class="lazyload" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="' + aspect_ratio + '" data-sizes="auto" data-srcset="' + buildDataSrcset(images[1]['src']) + '" data-image>' +
									'</picture>' +
								'</span>';
		} else {
			var imgSrc = images.length > 0 ? images[0]['src'] : boostPFSConfig.general.no_image_url;
			itemImagesHtml += 	'<picture data-index="0">' +
									'<source data-srcset="' + Utils.optimizeImage(imgSrc, '300x') + '" media="(max-width: 767px)" />' +
									'<source data-srcset="' + buildDataSrcset(imgSrc) + '" media="(min-width: 768px)" />' +
									'<img alt="{{itemTitle}}" class="lazyload" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="' + aspect_ratio + '" data-sizes="auto" data-srcset="' + buildDataSrcset(imgSrc) + '" data-image>' +
								'</picture>';
		}
		itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);
		itemHtml = itemHtml.replace(/{{itemStyles}}/g, itemStylesHtml);
		// Add Thumbnail
		var itemThumbUrl = images.length > 0 ? images[0]['src'] : boostPFSConfig.general.no_image_url;
		var itemFlipImageUrl = images.length > 1 ? Utils.optimizeImage(images[1]['src'], '1024x1024') : itemThumbUrl;
		if (Globals.queryParams.hasOwnProperty('pf_opt_color')) {
			//var selectedColor = Globals.queryParams.pf_opt_color[0].toLowerCase();
			var selectedColors = Globals.queryParams.pf_opt_color;
			for (var k = 0; k < selectedColors.length; k++) {
				var selectedColor = selectedColors[k].toLowerCase();
				for (var i = 0; i < data.variants.length; i++) {
					var variant = data['variants'][i];
					if (variant.hasOwnProperty('merged_options') && variant['merged_options'].length > 0) {
						for (var j = 0; j < variant['merged_options'].length; j++) {
							var mergeValue = variant['merged_options'][j].toLowerCase();
							if (mergeValue.indexOf(selectedColor) > -1 && variant['image']) {
								var itemThumbUrl = variant['image'];
								break;
							}
						}
					}
				}
			}
		}
		itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

		var itemFlipImageLabel = images.length > 1 ? 'image-swap ' : '';
		itemHtml = itemHtml.replace(/{{itemFlipImageLabel}}/g, itemFlipImageLabel);

		itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);
		itemHtml = itemHtml.replace(/{{itemFlipImageUrl}}/g, itemFlipImageUrl);

		// Add Label
		var itemLabelsHtml = '';
		if (onSale || soldOut) {
			itemLabelsHtml += '<div class="product-label">';
			if (onSale) {
				itemLabelsHtml += '<strong class="label sale-label">' + boostPFSConfig.label.sale + '</strong>';
			}
			if (soldOut) {
				itemLabelsHtml += '<strong class="label sold-out-label">' + boostPFSConfig.label.sold_out + '</strong>';
			}
			itemLabelsHtml += '</div>';
		}
		itemHtml = itemHtml.replace(/{{itemLabels}}/g, itemLabelsHtml);

		// Add Price
		var itemPriceHtml = '';
		if (onSale) {
			itemPriceHtml += '<p class="sale">';
			itemPriceHtml += '<span class="old-price"> ' + Utils.formatMoney(data.compare_at_price_min) + '</span>';
			itemPriceHtml += '<span class="special-price">';
			if (priceVaries) {
				itemPriceHtml += '<em>' + boostPFSConfig.label.from_price + ' </em>';
			}
			itemPriceHtml += Utils.formatMoney(data.price_min);
			itemPriceHtml += '</span>';
			itemPriceHtml += '</span></p>';
		} else {
			itemPriceHtml += '<p class="regular-product"><span>';
			if (priceVaries) {
				itemPriceHtml += '<em>' + boostPFSConfig.label.from_price + ' </em>'
			}
			itemPriceHtml += Utils.formatMoney(data.price_min, Globals.moneyFormat);
			itemPriceHtml += '</span></p>';
		}
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

		// Add Vendor
		var itemVendorHtml = '';
		if (boostPFSConfig.custom.show_vendor) {
			itemVendorHtml = '<div class="product-vendor">' + data.vendor + '</div>';
		}
		itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);


		// Add compare
		var itemCompareHtml = '';
		if (boostPFSConfig.custom.enable_compare_product) {
			itemCompareHtml += '<a class="compare-button" data-icon-compare href="javascript:void(0)" data-compare-product-handle="{{itemHandle}}" data-id="{{itemId}}" title="' + boostPFSConfig.label.add_to_compare + '">';
			itemCompareHtml += '<span ckass="compare-text" ';
			if (boostPFSConfig.custom.style_product_grid == 'style_product_grid_3') {
				itemCompareHtml += 'data-change-text-compare';
			}
			itemCompareHtml += '>';
			if (boostPFSConfig.custom.style_product_grid == 'style_product_grid_3') {
				itemCompareHtml += boostPFSConfig.label.add_to_compare;
			} else {
				itemCompareHtml += boostPFSConfig.label.compare_title;
			}
			if (boostPFSConfig.custom.style_product_grid == 'style_product_grid_2') {
				itemCompareHtml += '<svg class="icon" viewBox="0 0 1024 1024"><path d="M815.415 818.951c-15.614 0-28.278-12.667-28.278-28.278v-489.739c0-43.452-35.349-78.8-78.8-78.8h-145.669c-15.614 0-28.278-12.667-28.278-28.278s12.667-28.278 28.278-28.278h145.669c74.676 0 135.36 60.684 135.36 135.36v489.739c0 15.614-12.667 28.278-28.278 28.278z"></path><path d="M595.808 309.182c-6.039 0-12.078-2.062-16.938-6.481l-86.606-76.884c-8.395-7.513-13.257-18.265-13.257-29.605s4.861-22.095 13.257-29.605l86.606-77.034c10.458-9.426 26.659-8.395 35.939 2.062s8.395 26.659-2.062 35.939l-77.034 68.49 77.034 68.49c10.458 9.426 11.489 25.481 2.062 35.939-5.008 5.891-11.93 8.69-18.999 8.69z"></path><path d="M447.194 822.045h-145.669c-74.676 0-135.36-60.684-135.36-135.36v-489.885c0-15.614 12.667-28.278 28.278-28.278s28.278 12.667 28.278 28.278v489.739c0 43.452 35.349 78.8 78.8 78.8h145.669c15.614 0 28.278 12.667 28.278 28.278 0 15.76-12.667 28.428-28.278 28.428z"></path><path d="M414.053 904.231c-7.069 0-13.994-2.946-18.999-8.543-9.28-10.458-8.395-26.659 2.062-35.939l77.034-68.49-77.034-68.49c-10.458-9.426-11.489-25.481-2.062-35.939 9.426-10.458 25.481-11.489 35.939-2.062l86.606 76.884c8.395 7.513 13.257 18.265 13.257 29.605s-4.861 22.095-13.257 29.605l-86.606 76.884c-4.861 4.419-11.046 6.481-16.938 6.481z"></path></svg>';
			}
			itemCompareHtml += '</span>';
			itemCompareHtml += '</a>';
		}
		itemHtml = itemHtml.replace(/{{itemCompare}}/g, itemCompareHtml);

		// Add to cart
		var itemAddToCartHtml = '';
		if (boostPFSConfig.custom.display_button) {
			var itemAddToCartHtml = '<div class="action"><form action="/cart/add" method="post" class="variants" id="product-actions-{{itemId}}" enctype="multipart/form-data" style="padding:0px;">';
			if (soldOut) {
				itemAddToCartHtml += '<input class="btn add-to-cart-btn" type="submit" value="' + boostPFSConfig.label.unavailable + '" disabled="disabled"/>';
			} else {
				if (data.variants.length > 1) {
					itemAddToCartHtml += '<input class="btn" type="button" onclick="window.location.href=\'{{itemUrl}}\'" value="' + boostPFSConfig.label.select_options + '" />';
				} else {
					itemAddToCartHtml += '<input type="hidden" name="id" value="' + firstVariant.id + '" />';
					itemAddToCartHtml += '<button data-btn-addtocart="" class="btn add-to-cart-btn" type="submit" data-form-id="#product-actions-{{itemId}}" data-translate="products.product.add_to_cart">' + boostPFSConfig.label.add_to_cart + '</button>';
				}
			}
			itemAddToCartHtml += '</form></div>';
		}
		itemHtml = itemHtml.replace(/{{itemAddToCart}}/g, itemAddToCartHtml);

		//collection related
		var relatedCollection = window.location.pathname + '?view=related';
		itemHtml = itemHtml.replace(/{{itemCollectionRelated}}/g, relatedCollection);


		// Add item swatch
		itemHtml = itemHtml.replace(/{{itemSizeSwatches}}/g, buildSizeSwatches(data));

		// Add Quick view
		var itemQuickViewHtml = '';
		if (boostPFSConfig.custom.enable_quick_view) {
			itemQuickViewHtml = boostPFSTemplate.quickViewHtml;
		}
		itemHtml = itemHtml.replace(/{{itemQuickView}}/g, itemQuickViewHtml);

		// Add Reviews
		if (typeof Integration !== 'undefined' && !Integration.hascompileTemplate('reviews')) {
			var itemReviewHtml = boostPFSConfig.custom.display_product_reviews ? boostPFSTemplate.reviewHtml : '';
			itemHtml = itemHtml.replace(/{{itemReviews}}/g, itemReviewHtml);
		}

		// Add Color Swatches
		itemHtml = itemHtml.replace(/{{itemColorSwatches}}/g, buildColorSwatches(data));

		// Add Wishlist
		itemHtml = itemHtml.replace(/{{itemWishlist}}/g, buildWishlist(data));


		// Add Description
		var itemDescription = '';
		if (data.body_html != '') {
			itemDescription = jQ('<p>' + data.body_html + '</p>').text();
			var tempArr = itemDescription.split('[/countdown]');
			itemDescription = tempArr.pop();
			itemDescription = Utils.truncateByWord(itemDescription, 50);
		}
		itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);

		// Add item title with multilang
		var itemTitleMultilangHtml = '';
		if (boostPFSConfig.custom.enable_multilang && data.title.indexOf('|') !== null) {
			var titleMultilang = data.title.split('|');
			itemTitleMultilangHtml += '<span class="lang1">' + titleMultilang[0].trim() + '</span><span class="lang2">' + titleMultilang[1].trim() + '</span>';
		} else {
			itemTitleMultilangHtml += '<span>' + data.title.split('|')[0] + '</span>'
		}
		itemHtml = itemHtml.replace(/{{itemTitleMultilang}}/g, itemTitleMultilangHtml);

		// Add main attribute
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
		itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));

		return itemHtml;
	}

	ProductListItem.prototype.compileTemplate = function(data, index, totalProduct) {
		if (!data) data = this.data;
		if (!index) index = this.index;
		if (!totalProduct) totalProduct = this.totalProduct;

		/*** Prepare data ***/
		var images = data.images_info;
		// Displaying price base on the policy of Shopify, have to multiple by 100
		var soldOut = !data.available; // Check a product is out of stock
		var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		var priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Get First Variant (selected_or_first_available_variant)
		var firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
		var paramVariant = data.variants.filter(function(e) { return e.id == Utils.getParam('variant'); });
		if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
		for (var i = 0; i < data['variants'].length; i++) {
			if (data['variants'][i].available) {
			firstVariant = data['variants'][i];
			break;
			}
		}
		}
		/*** End Prepare data ***/

		// Get Template
		var itemHtml = boostPFSTemplate.productListItemHtml;

		// Add class
		itemHtml = soldOut ? itemHtml.replace(/{{itemSoldOutClass}}/g, boostPFSTemplate.soldOutClass) : itemHtml.replace(/{{itemSoldOutClass}}/g, '');
		itemHtml = onSale ? itemHtml.replace(/{{itemSaleClass}}/g, boostPFSTemplate.onSaleClass) : itemHtml.replace(/{{itemSaleClass}}/g, '');
		itemHtml = itemHtml.replace(/{{delayTime}}/g, boostPFSConfig.custom.time_lazy_load * index);

		// Add Thumbnail
		var itemThumbUrl = images.length > 0 ? Utils.optimizeImage(images[0]['src']) : boostPFSConfig.general.no_image_url;
		itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

		// Add Label
		var itemLabelsHtml = '';
		if (onSale || soldOut) {
			itemLabelsHtml += '<div class="product-label">';
			if (onSale) {
				itemLabelsHtml += '<strong class="label">' + boostPFSConfig.label.sale + '</strong>';
			}
			if (soldOut) {
				itemLabelsHtml += '<strong class="sold-out-label">' + boostPFSConfig.label.sold_out + '</strong>';
			}
			itemLabelsHtml += '</div>';
		}
		itemHtml = itemHtml.replace(/{{itemLabels}}/g, itemLabelsHtml);

		// Add Price
		var itemPriceHtml = '';
		if (onSale) {
			itemPriceHtml += '<p class="sale">';
			itemPriceHtml += '<span class="old-price money"> ' + Utils.formatMoney(data.compare_at_price_min) + '</span>';
			if (priceVaries) {
				itemPriceHtml += '<span class="special-price"><em>' + boostPFSConfig.label.from_price + ' </em>';
			} else {
				itemPriceHtml += '<span class="special-price">';
			}
			itemPriceHtml += Utils.formatMoney(data.price_min, Globals.moneyFormat);
			itemPriceHtml += '</span></p>';
		} else {
			itemPriceHtml += '<p class="regular-product">';
			if (priceVaries) {
				itemPriceHtml += '<span class="money"><em>' + boostPFSConfig.label.from_price + ' </em>' + Utils.formatMoney(data.price_min) + '</span>';
			} else {
				itemPriceHtml += '<span class="money">' + Utils.formatMoney(data.price_min) + '</span>';
			}
			itemPriceHtml += '</p>';
		}
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

		// Add Vendor
		var itemVendorHtml = '';
		if (boostPFSConfig.custom.show_vendor) {
			itemVendorHtml = '<div class="product-vendor">' + data.vendor + '</div>';
		}
		itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

		// Add to cart
		var itemAddToCartHtml = '<form action="/cart/add" method="post" class="variants" id="product-actions-{{itemId}}" enctype="multipart/form-data" style="padding:0px;">';
		if (soldOut) {
			itemAddToCartHtml += '<input class="btn add-to-cart-btn" type="submit" value="' + boostPFSConfig.label.unavailable + '" disabled="disabled"/>';
		} else {
			if (data.variants.length > 1) {
				itemAddToCartHtml += '<input class="btn" type="button" onclick="window.location.href=\'{{itemUrl}}\'" value="' + boostPFSConfig.label.select_options + '" />';
			} else {
				itemAddToCartHtml += '<input type="hidden" name="id" value="' + firstVariant.id + '" />';
				itemAddToCartHtml += '<input class="btn add-to-cart-btn" data-form-id="#product-actions-{{itemId}}" type="submit" value="' + boostPFSConfig.label.add_to_cart + '" />';
			}
		}
		itemAddToCartHtml += '</form>';
		itemHtml = itemHtml.replace(/{{itemAddToCart}}/g, itemAddToCartHtml);

		// Add Quick view
		var itemQuickViewHtml = '';
		if (boostPFSConfig.custom.enable_quick_view) {
			itemQuickViewHtml = boostPFSTemplate.quickViewHtml;
		}
		itemHtml = itemHtml.replace(/{{itemQuickView}}/g, itemQuickViewHtml);

		// Add Reviews
		if (typeof Integration === 'undefined' || !Integration.hascompileTemplate('reviews')) {
			var itemReviewHtml = boostPFSConfig.custom.display_product_reviews ? boostPFSTemplate.reviewHtml : '';
			itemHtml = itemHtml.replace(/{{itemReviews}}/g, itemReviewHtml);
		}

		// Add Color Swatches
		itemHtml = itemHtml.replace(/{{itemColorSwatches}}/g, buildColorSwatches(data));

		// Add Wishlist
		itemHtml = itemHtml.replace(/{{itemWishlist}}/g, buildWishlist(data));

		// Add Description
		var itemDescription = '';
		if (data.body_html.indexOf('[countdown]') !== -1) {
			itemDescription = jQ('<p>' + data.body_html + '</p>').text();
			var tempArr = itemDescription.split('[/countdown]');
			itemDescription = tempArr.pop();
			itemDescription = Utils.truncateByWord(itemDescription, 50);
		}
		itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);

		// Add item title with multilang
		var itemTitleMultilangHtml = '';
		if (boostPFSConfig.custom.enable_multilang && data.title.indexOf('|') !== null) {
			var titleMultilang = data.title.split('|');
			itemTitleMultilangHtml += '<span class="lang1">' + titleMultilang[0].trim() + '</span><span class="lang2">' + titleMultilang[1].trim() + '</span>';
		} else {
			itemTitleMultilangHtml += '<span>' + data.title.split('|')[0] + '</span>'
		}
		itemHtml = itemHtml.replace(/{{itemTitleMultilang}}/g, itemTitleMultilangHtml);

		// Add main attribute
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
		itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));

		return itemHtml;
	}

	// Build Wishlist
	function buildWishlist(data) {
		if (!data) data = this.data;

		// Add Wishlist
		var wishlistHtml = '';
		if (boostPFSConfig.custom.enable_wishlist) {
			var value = (data.id).toString();
			var productId = (data.id).toString();
			for (var k = 0; k < boostPFSConfig.customer.tags.length; k++) {

				var tagID = boostPFSConfig['customer']['tags'][k];
				if (tagID.indexOf(productId) > -1) {
				value = 'x' + tagID;
				}
				if (value.length == 0) value = productId;
			}
			if (value.length > 0) {
				var check = ((value.length - productId.length) / 2).toString();
				check = check.split('.');
				var display = check.length > 1 && check[1].indexOf('5') > -1 ? false : true;
			}

			wishlistHtml += '<a class="wishlist" data-icon-wishlist href="#" data-product-handle="' + data.handle + '"title="' + boostPFSConfig.label.wishlist_note + '" data-id="' + data.id + '">' +
				'<i class="fa fa-heart" aria-hidden="true"></i>' +
				'<span class="wishlist-text text-hover">' + boostPFSConfig.label.add_to_wishlist + '</span>' +
				'</a>';
		}
		return wishlistHtml;
	}

	// Build Size Swatches
	function buildSizeSwatches(data) {
		if (!data) data = this.data;

		var sizeSwatchesHtml = '';
		if (boostPFSConfig.custom.enable_size_swatch && data.available && data.variants.length > 0) {
		sizeSwatchesHtml += '<ul class="sizes-list">';

		for (var index = 0; index < data.options.length; index++) {
			var option = data['options'][index].toLowerCase();
			if (option == 'size') {
				var sizelist = '';
				var size = '';
				var totalVariants = 0;
				for (var k = 0; k < data.variants.length; k++) {
					var variant = data['variants'][k];
					size = variant['options'][index];
					if (sizelist.indexOf(size) == -1) {
						if (totalVariants < 4) {
							sizeSwatchesHtml += '<li class="size-item">';
							sizeSwatchesHtml += '<a title="' + size + '" href="' + Utils.buildProductItemUrl(data) + '?variant=' + variant.id + '">' + size + '</a>';
							sizeSwatchesHtml += '</li>';
						}
						var templist = sizelist + size + ' ';
						sizelist = templist;

						totalVariants++;
					}
				}

				if (totalVariants >= 4) {
					sizeSwatchesHtml += '<li class="item-size-more">';
					sizeSwatchesHtml += '<a href="{{itemUrl}}" title="More Size">+' + (totalVariants - 3) + '</a>';
					sizeSwatchesHtml += '</li>';
					totalVariants = 0;
				}
			}
		}

		sizeSwatchesHtml += '</ul>';
		}

		return sizeSwatchesHtml;
	}

	// Build Color Swatches
	function buildColorSwatches(data) {
		if (!data) data = this.data;

		var colorSwatchesHtml = '';
		if (boostPFSConfig.custom.display_item_swatch) {
		colorSwatchesHtml += '<ul class="item-swatch">';
		for (var index = 0; index < data.options.length; index++) {
			var option = data['options'][index].toLowerCase();
			if (option == 'color') {
				var colorlist = '';
				var color = '';
				var totalVariants = 0;
				for (var k = 0; k < data.variants.length; k++) {
					var variant = data['variants'][k];
					color = variant['options'][index];
					if (colorlist.indexOf(color) == -1) {
					if (totalVariants < 4) {
						var text = Utils.slugify(color);
						var border = text == 'white' ? 'border: 1px solid #cbcbcb;' : '';
						var backgroundImage = Utils.optimizeImage(variant.image, '24x');
						var dataImg = '';
						var dataColor = '#fff';
						if (variant.image !== null) {
							dataImg = "data-img='" + Utils.optimizeImage(variant.image) + "'";
						} else {
							var _file = variant.option_color.toLowerCase().replace(/ /g, '-');
							var dataColors = variant.option_color.toLowerCase().split(' ');
							var i = dataColors.length - 1;
							if (dataColors[i] !== '' && dataColors[i] !== 'colors') {
								dataColor = dataColors[i];
							}

							backgroundImage = boostPFSConfig.general.asset_url.replace('boost-pfs.js', _file + '.png')
						}

						colorSwatchesHtml += '<li>';
						colorSwatchesHtml += '<div class="tooltip">' + color + '</div>';
						colorSwatchesHtml += '<label style="' + border + 'background-image: url(' + backgroundImage + '); background-color: ' + dataColor + ';"' + dataImg + '></label>';

						// colorSwatchesHtml += '<label style="' + border + 'background-image: url(' + Utils.optimizeImage(variant.image, '24x') + ');"' + if (variant.image !== null){ + 'data-img="' + Utils.optimizeImage(variant.image) + '"' + } '></label>';
						colorSwatchesHtml += '</li>';

					}
					var templist = colorlist + color + ' ';
					colorlist = templist;

					totalVariants++;

					}

				}

				if (totalVariants > 4) {
					colorSwatchesHtml += '<li class="item-swatch-more">';
					colorSwatchesHtml += '<a href="{{itemUrl}}" title="More Color">+' + (totalVariants - 4) + '</a>';
					colorSwatchesHtml += '</li>';
					totalVariants = 0;
				}
			}
		}
		colorSwatchesHtml += '</ul>';
		}
		return colorSwatchesHtml;
	}

	function buildDataSrcset (imageSrc) {
		var html = Utils.optimizeImage(imageSrc, '360x') + ' 360w, ' + Utils.optimizeImage(imageSrc, '540x') + ' 540w, ' + Utils.optimizeImage(imageSrc, '720x') + ' 720w, ' + Utils.optimizeImage(imageSrc, '720x') + ' 900w';
		return html;
	}

	// Build Pagination
	ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
		if (!totalProduct) totalProduct = this.totalProduct;

		// Get page info
		var currentPage = parseInt(Globals.queryParams.page);
		var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);

		if (totalPage > 1) {
			var paginationHtml = boostPFSTemplate.paginateHtml;

			// Build Previous
			var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
			previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
			paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

			// Build Next
			var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
			nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
			paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

			// Create page items array
			var beforeCurrentPageArr = [];
			for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
				beforeCurrentPageArr.unshift(iBefore);
			}
			if (currentPage - 4 > 0) {
				beforeCurrentPageArr.unshift('...');
			}
			if (currentPage - 4 >= 0) {
				beforeCurrentPageArr.unshift(1);
			}
			beforeCurrentPageArr.push(currentPage);

			var afterCurrentPageArr = [];
			for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
				afterCurrentPageArr.push(iAfter);
			}
			if (currentPage + 3 < totalPage) {
				afterCurrentPageArr.push('...');
			}
			if (currentPage + 3 <= totalPage) {
				afterCurrentPageArr.push(totalPage);
			}

			// Build page items
			var pageItemsHtml = '';
			var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
			for (var iPage = 0; iPage < pageArr.length; iPage++) {
				if (pageArr[iPage] == '...') {
					pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
				} else {
					pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
				}
				pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
				pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
			}
			paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

			return paginationHtml;
		}

		return '';
	};

	// Build Sorting
	ProductSorting.prototype.compileTemplate = function() {
		if (boostPFSTemplate.hasOwnProperty('sortingHtml')) {
			var self = this;
			var sortingArr = Utils.getSortingList();
			if (sortingArr) {
				// Build content
				var sortingItemsHtml = '';
				for (var k in sortingArr) {
					var activeClass = Globals.queryParams.sort == k ? 'active' : '';
					sortingItemsHtml += '<li><a data-boost-sort-value="' + sortingArr[k] + '" href="#" data-boost-sort="' + k + '" class="' + activeClass + '">' + sortingArr[k] + '</a></li>';
				}
				var html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
				return jQ.parseHTML(html);
				
			}
		}
		return '';
	};

	// Build Sorting event
	ProductSorting.prototype.bindEvents = function () {
		var _this = this;
		jQ(Selector.topSorting).find('a').click(function (e) {
			e.preventDefault();
			// Append "sort" param to url
			// Used to Scroll to the previous position after returning from Product page
			FilterApi.setParam('sort', jQ(this).data('boost-sort'));
			FilterApi.setParam('page', 1);
			FilterApi.applyFilter('sort');
		})

		var sortingSelector = jQ(Selector.topSorting);
		sortingSelector.find('label').click(function(e) {
			e.preventDefault();
			if (!sortingSelector.find('.boost-pfs-filter-filter-dropdown').is(':animated')) {
			sortingSelector.find('.boost-pfs-filter-filter-dropdown').toggle();
			sortingSelector.toggleClass('boost-pfs-filter-sort-active');
			}
		});
	};

	ProductSorting.prototype.afterBindEvents = function () {
		var sortingSelector = jQ(Selector.topSorting);
		sortingSelector.removeClass('boost-pfs-filter-sort-active');
		sortingSelector.find('.boost-pfs-filter-top-sorting-label').text(sortingSelector.find('a[data-boost-sort="' + Globals.queryParams.sort + '"]').data('boost-sort-value'));
	};

	// Build Show Limit
	ProductLimit.prototype.compileTemplate = function() {
		if (boostPFSTemplate.hasOwnProperty('showLimitHtml')) {

			var numberList = Settings.getSettingValue('general.showLimitList');
			if (numberList != '') {
				// Build content
				var showLimitItemsHtml = '';
				var arr = numberList.split(',');
				for (var k = 0; k < arr.length; k++) {
					if (arr[k] == Globals.queryParams.limit) {
						showLimitItemsHtml += '<li><span class="active" data-value="' + arr[k] + '">' + arr[k] + '</span></li>';
					} else {
						showLimitItemsHtml += '<li><span  data-value="' + arr[k] + '">' + arr[k] + '</span></li>';
					}
				}
				var html = boostPFSTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
				html = html.replace(/{{currentLimitItem}}/g, Globals.queryParams.limit);
				return html;
			}
		}
		return '';
	};
	ProductLimit.prototype.bindEvents = function() {
		jQ(Selector.topShowLimit + ' li').click(function(e) {
			FilterApi.setParam('limit', jQ(this).find('span').data('value'));
			FilterApi.setParam('page', 1);
			FilterApi.applyFilter();
		})
	}

	ProductList.prototype.afterRender = function(data) {
		if (!data) data = this.data; 

		/**
		 * Reinit theme function
		 * 1. Add `var bcElla;` to assets/ella.min.js
		 * 2. In assets/ella.min.js, find XXX.init(), for example: f.init()
		 * 3. Go to the end of assets/ella.min.js, replace: `}(jQuery);` by `bcElla = XXX;}(jQuery);`   * 
		 */
		if (typeof bcElla != 'undefined') {
			bcElla.initAddToCart();
			bcElla.initGroupedAddToCart();
			bcElla.changeQuantityAddToCart();
			bcElla.initStickyAddToCart();
			bcElla.initQuickView();
			bcElla.initColorSwatchGrid();
		}
		var activeClass = '';
		var activeViewAs = jQ('.view-mode').find('.active').data('col');
		switch (activeViewAs) {
			case 1: 
				activeClass = 'col-12';
				break;
			case 2:
				activeClass = 'col-6';
				break;
			case 3: 
				activeClass = 'col-6 col-md-4';
				break;
			case 4:
				activeClass = 'col-6 col-md-4 col-lg-3';
				break;
			default:
				activeClass = 'col-6 col-md-4 col-lg-3 col5';  
		}
		jQ(Selector.products + ' .grid-item').removeClass(boostPFSConfig.custom.grid_item_width).addClass(activeClass);
	};

	// Build Additional Elements
	FilterResult.prototype.afterRender = function(data) {
		if (!data) data = this.data;

		if(jQ('.boost-pfs-filter-total-products').length > 0 && data.products.length > 0 && Settings.getSettingValue('general.paginationType') !== 'load_more'){
			var from = Globals.queryParams.page == 1 ? Globals.queryParams.page : (Globals.queryParams.page - 1) * Globals.queryParams.limit + 1;
			var to = from + data.products.length - 1;
			var totalProductsSelector = jQ('.boost-pfs-filter-total-products');
			var totalProduct = boostPFSConfig.label.toolbar_showing + ' ' + from + '-' + to + ' ' +  boostPFSConfig.label.toolbar_of + ' ' + data.total_product;
			totalProductsSelector.empty().html(totalProduct);  
        } else {
        	jQ('.toolbar-bottom').hide();
        }
		var sortingSelector = jQ(Selector.topSorting);
		jQ(document).click(function (e) {
			var container = sortingSelector.find('label');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
			sortingSelector.find('.boost-pfs-filter-filter-dropdown').hide();
			sortingSelector.removeClass('boost-pfs-filter-sort-active');
			}
		});
	};

})();