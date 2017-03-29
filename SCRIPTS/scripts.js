/****Global Variables****/
var $addToAlbumBtn = $('.add-to-album-btn');


/****Event Listeners****/
$addToAlbumBtn.on('click', function() {
	console.log(this);
	var $inputTitle = $('.input-title').val();
	console.log($inputTitle)
	var $inputCaption = $('.input-caption').val();
	console.log($inputCaption)
	var $inputFile = $('.inputfile').val();
	console.log($inputFile)

	photoCard($inputTitle, $inputCaption);
});


/****Functions****/
function photoCard () {
	$('#photo-display-area').append(`<article class="photo-card">
			<p class="photo-card-title">${'$inputTitle'}<p>
			<img class="photo-card-img" src=""/>
			<p class="photo-card-caption">${'$inputCaption'}</p>
			<div class="photo-card-bottom">
				<input type="image" src="photos/delete.svg" class="photo-card-delete-btn" />
				<input type="image" src="photos/favorite.svg" class="photo-card-fav-btn" />
			</div>
			</article>`);
}

/****Input File Button****/
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
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector('span').innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});
