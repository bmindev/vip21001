var boostPFSIntegrationTemplate = {
  compileTemplate: {
    reviews: "var itemReviewsHtml = '';   itemReviewsHtml += \"<div class='arv-collection arv-collection--\" + data.id + \"' product-id='\" + data.id + \"'></div>\";itemHtml = itemHtml.replace(/{{itemReviews}}/g, itemReviewsHtml);"
  },
  call3rdFunction: {
    reviews: "if (typeof $ !== 'undefined') {$.aliReviewsAddRatingCollection();} else {jQ.aliReviewsAddRatingCollection();}"
  }
};