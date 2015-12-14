var myModule = (function () {

	var init = function () {
			_setUpListners();
			//то, что должно произойти сразу
	};

	var _setUpListners = function () {
					//прослушка событий 
	}

	return {
		init: init
	};

})();

myModule.init();