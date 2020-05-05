jQuery(document).ready(function($) {
	var reveal_str = $( 'meta[name=reveal-modal-cfg-str]' ).attr('content');
	$( document ).ajaxComplete( function( e ) {
		var $content = $( '#reveal-modal-id' );
		if ( $content.find( '.woocommerce').length > 0 || ! $( 'body' ).hasClass( 'woocommerce-checkout' ) ) {
			$content.addClass( 'modal-bigger' );
			if ( $content.find( '.woocommerce').length > 0 ) {
				$content.find( 'h1').first().remove();
			}
			if ( $content.find( '[name="_wp_http_referer"]' ).length > 0 ) {
				if ( 'localhost' === window.location.hostname || 'dev.brasa.art.br' === window.location.hostname ) {
					$content.find( '[name="_wp_http_referer"]' ).val( window.location.href );
				} else {
					$content.find( '[name="_wp_http_referer"]' ).val( '/?home' );
				}
			}
		} else {
			$content.removeClass( 'modal-bigger' );
		}
	});
	$( 'body' ).on( 'click', '#reveal-modal-id a', function( e ){
		var _href = $(this).attr('href');

		if ( _href !== undefined && _href.lastIndexOf(reveal_str) != -1 ) {
			e.preventDefault();
			$( '#reveal-modal-id' ).find( '.close-reveal-modal').trigger( 'click' );
			$.get( _href + '?reveal-modal-ajax=true', {}, function( response ){
				var html = '<a class="close-reveal-modal">&#215;</a>' + response;
				$( '#reveal-modal-id' ).html( html );
				 setTimeout( function(){
				 	$( '#reveal-modal-id' ).foundation('reveal', 'open');
				 }, 500 );
			});
		}
	} );
	$( 'body.unlogged-user .add_to_cart_button, body.unlogged-user .single_add_to_cart_button' ).on( 'click', function( e ){
		$modal_link = $( '.prices-warn .pull-left a' );

		if ( $modal_link.length && $modal_link.attr( 'href' ).lastIndexOf(reveal_str) != -1 ) {
			$modal_link.trigger( 'click' );
			e.preventDefault();
		}
	} );
	$( 'body.unlogged-user' ).on( 'closed.fndtn.reveal', '#reveal-modal-id', function( e ){
		setTimeout( function(){
			location.reload();
		}, 120 );
	} );
	$( 'body.unlogged-user' ).on( 'click', '.woocommerce-infos .myacc', function( e ){
		$modal_link = $( '.prices-warn .pull-left a' );

		if ( $modal_link.length && $modal_link.attr( 'href' ).lastIndexOf(reveal_str) != -1 ) {
			$modal_link.trigger( 'click' );
			e.preventDefault();
		}
	});
});

/* my account login page */
jQuery(document).ready(function($) {
	$('.donate_button_div input[type=radio]').change(function(e) {
		console.log('mudou');
		escolha = $( this ).attr('id');
		console.log(escolha);
		var data = {
			'action': 'donation_checkout_field_ajax',
			'instituicao': escolha
		};
		$.ajax({
			type: 'POST',
			url: odin.ajax_url,
			data: data,
			complete: function( response ){
				console.log(response.responseText)
			}
		});
	});
	$( 'body').on( 'submit', 'form.brasa-check-delivery-container', function( e ) {
		e.preventDefault();
		var $form = $( this );
		var $elements_div = $( this ).children( '.elements' );
		var $submit_btn = $elements_div.children( 'button' );
		if ( $elements_div.children( '[name="check-delivery"]' ).val().replace(/\s+/g, '' ) == '' ) {
			return;
		}
		var default_text = $submit_btn.html();
		$submit_btn.html( $submit_btn.attr( 'data-load' ) );

		var data = {
			'action': 'brasa_check_delivery',
			'postcode': $elements_div.children( '[name="check-delivery"]' ).val()
		};
		$.ajax({
			type: 'POST',
			url: odin.ajax_url,
			data: data,
			complete: function( response ){
				if ( response.getResponseHeader( 'delivery-status' ) == 'false' ) {
					window.location = $form.attr( 'data-redirect-error' );
				} else {
					$elements_div.children( '.response' ).html( response.responseText );
					if( $form.attr( 'data-redirect-success' ) && $form.attr( 'data-redirect-success' ) != '' ) {
						 setTimeout( function(){
						 	window.location = $form.attr( 'data-redirect-success' );
						 }, 4000);
					}
				}
				$submit_btn.html( default_text );
			}
		});
	});
	$( 'body').on( 'submit', '.register-check-delivery', function( e ) {
		e.preventDefault();
		var $form = $( this ).children( '.brasa-check-delivery-container' );
		var $elements_div = $form.children( '.elements' );
		var $submit_btn = $elements_div.children( 'button' );
		if ( $elements_div.children( '[name="check-delivery"]' ).val() == '' ) {
			return;
		}

		var data = {
			'action': 'brasa_check_delivery',
			'show_accept_message': 'true',
			'close_modal': 'true',
			'postcode': $elements_div.children( '[name="check-delivery"]' ).val(),
			'email': $( 'input[name="email"]' ).val(),
			'phone': $( 'input[name="phone"]' ).val()

		};
		if ( $elements_div.children( '[name="check-delivery"]' ).val().replace(/\s+/g, '') == '' ) {
			return;
		}
		var default_text = $submit_btn.html();
		$submit_btn.html( $submit_btn.attr( 'data-load' ) );

		$.ajax({
			type: 'POST',
			url: odin.ajax_url,
			data: data,
			complete: function( response ){
				if ( response.getResponseHeader( 'delivery-status' ) == 'false' ) {
					window.location = $form.attr( 'data-redirect-error' );
				} else {
					$elements_div.children( '.response' ).html( response.responseText );
					if( $form.attr( 'data-redirect-success' ) && $form.attr( 'data-redirect-success' ) != '' ) {
						 setTimeout( function(){
						 	window.location = $form.attr( 'data-redirect-success' );
						 }, 4000);
					}
				}
				$submit_btn.html( default_text );
			}
		});
	});
	$( 'body' ).on( 'click', '.close-modal', function( e ){
		e.preventDefault();
		$( '#reveal-modal-id .close-reveal-modal' ).trigger( 'click' );
	});
	$( 'body' ).on( 'click', '.btn-show-element', function( e ){
		e.preventDefault();
		var $elem = $( $( this ).attr( 'data-element' ) );
		$elem.show( 1000 );
	});
	if ( $( 'body').hasClass( 'woocommerce-checkout' ) ) {
		$( document ).ajaxComplete( function() {
			if ( $( '#shipping-status' ).attr( 'data-value' ) == 'true' ) {
				$( '#place_order' ).show();
				$( 'form.woocommerce-checkout' ).removeAttr( 'onsubmit' );
			} else {
				$( '#place_order' ).hide();
				$( 'form.woocommerce-checkout' ).attr('onsubmit', 'return false');
			}
		});
		$( 'form.woocommerce-checkout' ).on( 'submit', function( e ) {
			if ( $( '#shipping-status' ).attr( 'data-value' ) == 'false' ) {
				e.preventDefault();
			}
		});
	}
} );