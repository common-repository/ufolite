/**
 * (c) 2020 Moki-Moki Ios Corporation
 */
jQuery(document).ready(function($) {
	new UFO($).init();
});
	
function UFO($) {
	
	const UFO_IMAGE = ' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAACACAMAAAA1bk45AAAC8VBMVEUAAAD////////////////////////////////////////+/v7///////////8mJib///////8LCwv///9NTU3///////////8DAwMXFxf////+/v48PDwHBwf5+fmYmJjCwsImJib///9ycnIODg4RERH///////81NTVYWFhJSUlzc3NdXV27u7sgICAaGhrd3d0wMDA9PT2Li4spKSmgoKD19fVOTk6ioqLCwsIUFBQAAABoNpaORMJfNpaWNk+SkpLCRFCaRMKRwkREwqz/ZOuZmZkSExNnZ2dnOqNVHixZLYB2dnb/LnmeOlVyOqPGRVI7FBl8Oqj/Ze+nStItaP+bQsX9ZZvTTXtj//4gCxGXtf9lkP6X////l7wt//1KKXX/ZvOampqSx0AXFxeRa6rIPElGRkaRfpqNmpm/QkZDxq2RzjmUOsRmiLaaPsgMBQxijrVgL5Q/zKz/aPibOcyQQcMKDQyVjni4TXSQM0Z9fX1mL5v2X9iWiH8EKirsW8iVVLSRukuYRb7MSWlBImCVNE0TDSUFNjSh//85hYF5eHnIRlxVVFQ5HVNs//9bmbNGva1UhaZWKnd/KkJJGyWWSM2WY6JZU5uWf4YgEzM/d/+AW77nWLziVaXJTZ4eYlltJToy//+Fqv+hSMv/b6eHh4dyWoCpP219hmO5JFglGUNQhP9VqbFVaqCHoVcxDxPRUbEdhoZjYGGbzUp0brszWrprRYsKgYFwbnCTqF3NR1RcesNJ0bn/dq5EvqtHrqhJpKeIsUVPaiQ2XMNKs6xPlaKWlpaUnmgfMmNvK2ElJiX6YePZW4wjdGk4ODgmDhz/o8k0UZmQb5O7R48lP3+DNmCrPEdAGTswMDAt//9tmv+oQdyuVGE2SRmkw/8swb+KP7Z+WaEZSkUlMxBd5+VY0dCgP5CKcnQnMk2WtP+I+Pch5+ZyjdBFa84xXM2ReKA7T3xUIU1nijBFXCAz//9RfvA0aO7/kr/uK3DMKGLehxFcAAAAO3RSTlMAAwkHDRUYJREbHiwoTyOpeyDqNHZBOkj6wF1UgPVwRTmaWVjczWVgkGnCpbaF5LF32c6dpo6N46+cfzIRoGgAABcSSURBVHja7NVdbsIwDAdw+pE0SUtZVoWqAgFF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';
	const UFO_HTML = '<div id="ufo"><img src="' + UFO_IMAGE + '" alt="UFO"/></div>';
	const UFO_ELEMENT_ID = 'ufo';	
	const MIN_REPEAT_TIME = 1000;
	const MAX_REPEAT_TIME = 20000;
	const REFRESH_INTERVAL = 25;
	const Z_INDEX_ON_TOP = 9999999;
	const AMPLITUDE = 25;
	const UFO_TOTAL_FRAMES = 3;
	
	this.x = 0;
	this.y = 0;
	this.width = 64;
	this.height = 64;
	this.$ufoImage = $('#' + UFO_ELEMENT_ID + ' img');
	this.$ufo = $('#' + UFO_ELEMENT_ID);
	this.direction = 1;
	this.intervalHandle = 0;
	
	let self = this;
	
	UFO.prototype.init = function() {
		if (this.intervalHandle != 0) {
			return; // Some multiplication of instances.
		}
		
		if ($('#' + UFO_ELEMENT_ID).length === 0) {
			$('body').prepend(UFO_HTML);
		}
		$('#' + UFO_ELEMENT_ID).css({
			'position': 'fixed',
			'width': this.width,
			'height': this.height,
			'z-index': Z_INDEX_ON_TOP,
			'pointer-events': 'none',
			'overflow' : 'hidden',
			'left' : -this.width,
			'top' : this.height
		});
		
		$('#' + UFO_ELEMENT_ID + ' img').css({
			'position' : 'relative',
			'width' : UFO_TOTAL_FRAMES * this.width,
			'height' : this.height
		});
		
		setTimeout(function() { 
			self.start();
		}, Math.random() * MAX_REPEAT_TIME);
	}
	
	UFO.prototype.start = function() {
		this.x = -this.width;
		this.y = Math.random() * (document.body.clientHeight - this.height);
		this.direction = Math.random() < 0.5 ? 1 : -1;
		
		this.intervalHandle = setInterval(function() { 
			self.moveUFO();
		}, REFRESH_INTERVAL);		
	}
	
	UFO.prototype.stop = function() {
		clearInterval(this.intervalHandle);
		this.intervalHandle = 0;
		setTimeout(function() { 
			self.init(); 
		}, Math.random() * (MAX_REPEAT_TIME - MIN_REPEAT_TIME) + MIN_REPEAT_TIME);
	}
	
	UFO.prototype.moveUFO = function() {
		this.x += this.width / 10;
		
		let offset = Math.sin(this.x / 50) * AMPLITUDE;

		let frame = 0;
		
		if (offset > 20) {
			frame = 0;
		} else if (offset < -20) {
			frame = 1;
		} else {
			frame = 2;
		}
		
		if (this.direction > 0) {
			this.y += Math.sin(this.x/this.height) * (this.height / 32);
		} else {
			this.y -= Math.sin(this.x/this.height) * (this.height / 32);
		}
		
		if (this.y + this.height < 0 || this.y > document.body.clientHeight) {
			this.direction *= -1;
		}
		
		let $ufoImage = $('#' + UFO_ELEMENT_ID + ' img');
		switch(frame) {
			case 0: $ufoImage.css('left', '0'); break;
			case 1: $ufoImage.css('left', -1 * this.width + 'px'); break;
			case 2: $ufoImage.css('left', -2 * this.width + 'px'); break;
			default: break;
		}
		
		$('#' + UFO_ELEMENT_ID).css({
			'left' : this.x + 'px',
			'top' : this.y + offset + 'px'
		});		
		
		if (this.x > $('body').width() + this.width) {
			this.stop();
		}

	}	

}