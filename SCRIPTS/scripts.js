

/****Event Listeners****/
$('.add-to-album-btn').on('click', function() {
	var $inputTitle = $('.input-title').val();
	var $inputCaption = $('.input-caption').val();
	var $inputFile = $('.inputfile').val();
	var $newFile = $inputFile.replace(/C:\\fakepath\\/i, '');
	photoCard($inputTitle, $newFile, $inputCaption);
	$('#photo-display-area h3').remove();

});

$('.input-field').on('input', function() {
	  disableEnableState();
});

$('.inputfile').on('change', function() {
		disableEnableState();
});


/****Functions****/
function photoCard ($inputTitle, $newFile, $inputCaption) {
	$('#photo-display-area').append(`<article class="photo-card">
			<p class="photo-card-title">${$inputTitle}</p>
			<section id="photo-card-img-area">
				<img src="photos/${$newFile}" alt="puppies" class="photo-card-img"/>
			</section>
			<p class="photo-card-caption">${$inputCaption}</p>
			<div class="photo-card-bottom">
				<div class="photo-card-delete-img"></div>
				<input type="image" src="photos/favorite.svg" class="photo-card-fav-img" />
			</div>
			</article>`);

			deletePhotoCard();
			chooseFavoritePhoto();
}

function deletePhotoCard() {
	$('.photo-card-delete-img').on('click', function() {
		$(this).closest('.photo-card').remove();
		// $(this).toggleClass('delete-active-state');
		if($(this).attr("src") == "photos/delete.svg"){
			$(this).attr("src", "photos/delete-active.svg");
		}else{
			$(this).attr("src", "photos/delete.svg");
		}
	});
}

function chooseFavoritePhoto() {
	$('.photo-card-fav-img').on('click', function() {
		$(this).attr('src', 'photos/favorite-active.svg');
		$(this).parents('.photo-card').css('background-color', '#a0d6b4');
	});
}

function disableEnableState() {
	var $inputTitle = $('.input-title').val();
	var $inputCaption = $('.input-caption').val();
	var $inputFile = $('.inputfile').val();

	if ( $inputTitle === '' || $inputCaption	=== '' || $inputFile === '') {
		$('.add-to-album-btn').prop('disabled', true);
	} else {
		$('.add-to-album-btn').prop('disabled', false);
	}
}

message();
function message() {
	$('#photo-display-area').append(`<h3>Add your selection to the photo gallery</h3>`);

}


/****Input File****/
var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();;

		if( fileName )
			label.querySelector('span').innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

// $(window).load(function() {
// 	disableState();
// });
