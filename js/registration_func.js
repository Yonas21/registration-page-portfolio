	/*  Wizard */
	jQuery(function ($) {
		"use strict";
		$('form#wrapped').attr('action', 'registration.php');
		$("#wizard_container").wizard({
			stepsWrapper: "#wrapped",
			submit: ".submit",
			beforeSelect: function (event, state) {
				if ($('input#website').val().length != 0) {
					return false;
				}
				if (!state.isMovingForward)
					return true;
				var inputs = $(this).wizard('state').step.find(':input');
				return !inputs.length || !!inputs.valid();
			}
		}).validate({
			errorPlacement: function (error, element) {
				if (element.is(':radio') || element.is(':checkbox')) {
					error.insertBefore(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		});
		//  progress bar
		$("#progressbar").progressbar();
		$("#wizard_container").wizard({
			afterSelect: function (event, state) {
				$("#progressbar").progressbar("value", state.percentComplete);
				$("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
			}
		});
		// Validate select
		$('#wrapped').validate({
			ignore: [],
			rules: {
				select: {
					required: true
				}
			},
			errorPlacement: function (error, element) {
				if (element.is('select:hidden')) {
					error.insertAfter(element.next('.nice-select'));
				} else {
					error.insertAfter(element);
				}
			}
		});
	});

	// Summary 
	function getVals(formControl, controlType) {
		switch (controlType) {

			case 'property_name':
				// Get the value for a input text
				var value = $(formControl).val();
				$("#property_name").text(value);
				break;

			case 'property_star':
				// Get the value for a input text
				var value = $(formControl).val();
				$("#property_star").text(value);
				break;

			case 'property_type':
				// Get the value for a input text
				var value = $(formControl).val();
				$("#property_type").text(value);
				break;

			 case 'manager_name':
				// Get the value for a select
				var value = $(formControl).val();
				$("#manager_name").text(value);
				break;

			case 'manager_phone':
				// Get the value for a input text
				var value = $(formControl).val();
				$("#manager_phone").text(value);
				break;

			case 'manager_email':
				// Get the value for a input text
				var value = $(formControl).val();
				$("#manager_email").text(value);
				break;
		}
	}