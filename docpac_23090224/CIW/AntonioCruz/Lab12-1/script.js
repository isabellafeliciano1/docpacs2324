$(function(){
	$('input').click(function(){
		var ourText = $('p');
		var currFontSize = ourText.css('fontSize');
		var finalNum = parseFloat(currFontSize, 10);
		var stringEnding = currFontSize.slice(-2);
		<p>
		if(this.id == "large") {
			finalNum *= 5
		}
		else if (this.id == "small"){
			finalNum /= 5
		}
		</p>
		ourText.css('fontSize', finalNum + stringEnding);
	});
});
