// Override Settings
var boostPFSInstantSearchConfig = {
  search: {
    suggestionPosition: 'right'
  }
};

(function() {
	BoostPFS.inject(this);

	// Customize style of Suggestion box
	SearchInput.prototype.customizeInstantSearch = function(suggestionElement, searchElement, searchBoxId) {
		if (!suggestionElement) suggestionElement = this.$uiMenuElement; 
		if (!searchElement) searchElement = this.$element;
		if (!searchBoxId) searchBoxId = this.id;
	};

})();