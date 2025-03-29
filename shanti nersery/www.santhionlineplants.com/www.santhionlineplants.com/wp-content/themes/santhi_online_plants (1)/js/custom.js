jQuery(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#back-top").fadeIn();
        } else {
            $("#back-top").fadeOut();
        }
    });
    $("#back-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(document).ready(function() {
        $(".popup-with-zoom-anim").magnificPopup({
            type: "inline",
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: "auto",
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in",
        });
    });
    jQuery("#billing_phone").mask("0000000000");
    jQuery(document.body).trigger("wc_fragment_refresh");
    // setInterval(function () {
    //   if (jQuery(':input[name="update_cart"]').prop("disabled")) {
    //     jQuery(document.body).trigger("wc_fragment_refresh");
    //   }
    // }, 1000);

    $(document.body).on("updated_cart_totals", function() {
        const errorNotice = document.querySelector(
            ".coupen_right .coupon-error-notice"
        );
        $(".loader").fadeOut();
        if (errorNotice) {
            console.log("Coupon error detected");
            const couponContainer = $("#coupon_code_clone").parent(".coupon");

            // Remove existing error messages inside `.coupon`
            couponContainer.find(".coupon-error-notice").remove();

            // Append the new error message
            couponContainer.append(
                `<p class="coupon-error-notice" role="alert">${errorNotice.innerHTML}</p>`
            );
        }
    });
    $(document.body).on("updated_checkout", function() {
        const errorNotice = document.querySelector(
            ".checkout_coupon .coupon-error-notice"
        );
        $(".loader").fadeOut();
        if (errorNotice) {
            console.log("Coupon error detected on checkout");
            const couponContainer = $("#coupon_code_clone").parent(".coupon");

            // Remove existing error messages inside `.coupon`
            couponContainer.find(".coupon-error-notice").remove();

            // Append the new error message
            couponContainer.append(
                `<p class="coupon-error-notice" role="alert">${errorNotice.innerHTML}</p>`
            );
        }
    });

    $(document).on("DOMSubtreeModified", ".woocommerce-Price-amount", function(event) {
        jQuery(document.body).trigger("wc_fragment_refresh");
        jQuery(document.body).trigger("wc_fragment_refresh");
    });
    $(document).on("click", ".carousel-inner .item", function(e) {
        window.location.href = $(this).find(".banner-link").attr("href");
    });
    $(document).on(
        "click",
        ".single_add_to_cart_button_cart,.single_add_to_cart_button",
        function(e) {
            e.preventDefault();
            var qty = $(this).parent("form").find("input.qty").val();
            console.log(qty);
            var product_id = $(this).data("product");
            if (!product_id) product_id = $(this).val();
            $(".loader").fadeIn();
            $.ajax({
                url: base_url + "ajax",
                method: "POST",
                data: {
                    product_id: product_id,
                    qty: qty,
                    action: "add_to_cart"
                },
                cache: false,
                success: function(response) {
                    $(".loader").fadeOut();
                    jQuery(document.body).trigger("wc_fragment_refresh");
                    if (response == "success") {
                        $("#toast")
                            .text("Your product was added to cart successfully.")
                            .addClass("show");
                        setTimeout(function() {
                            $("#toast").removeClass("show").text("");
                        }, 3000);
                    } else if (response == "not_allowed") {
                        $("#toast")
                            .text(
                                "You can not buy this now. Please clear the cart and try again."
                            )
                            .addClass("show");
                        setTimeout(function() {
                            $("#toast").removeClass("show").text("");
                        }, 5000);
                    }
                },
                error: function(xhr, status, error) {
                    console.log(xhr.responseText);
                },
            });
            return false;
        }
    );
    $(document).on("click", "#send_message", function(event) {
        event.preventDefault();
        $(".contact-form-area form .error-message").hide();
        $(".contact-form-area form input,.contact-form-area form textarea").css(
            "border-color",
            "#ced4da"
        );
        $(".contact-form-area form input,.contact-form-area form textarea").trigger(
            "keyup"
        );
        if ($(".has-error").length == 0) {
            $(".loader").fadeIn("slow");
            $("#overlayer").fadeIn("slow");
            var first_name = $(".contact-form-area form #first_name").val();
            var email = $(".contact-form-area form #email").val();
            var subject = $(".contact-form-area form #subject").val();
            var message = $(".contact-form-area form #message").val();
            var _wpnonce = $(
                ".contact-form-area form #woocommerce-contact-nonce"
            ).val();
            var _wp_http_referer = $(
                ".contact-form-area form input[name=_wp_http_referer"
            ).val();

            $.ajax({
                type: "POST",
                url: base_url + "ajax",
                data: {
                    action: "contact",
                    first_name: first_name,
                    email: email,
                    subject: subject,
                    message: message,
                    _wpnonce: _wpnonce,
                    _wp_http_referer: _wp_http_referer,
                },
                success: function(response) {
                    if (response == "success") {
                        $(".loader").fadeOut("slow");
                        $(".contact-form-area form #first_name").val("");
                        $(".contact-form-area form #email").val("");
                        $(".contact-form-area form #subject").val("");
                        $(".contact-form-area form #message").val("");
                        $("#toast")
                            .text(
                                "Thank you for contacting us. We will get back to you ASAP."
                            )
                            .addClass("show");
                        setTimeout(function() {
                            $("#toast").removeClass("show").text("");
                        }, 3000);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
            });
            return false;
        }
    });
    $(document).on("click", "#subscribe", function(event) {
        $(".subscriber_form .error-message").hide();
        $(".subscriber_form input").css("border-color", "#ced4da");
        $(".subscriber_form input").trigger("keyup");
        event.preventDefault();
        if ($(".has-error").length == 0) {
            $(".loader").fadeIn("slow");
            $("#overlayer").fadeIn("slow");
            var email = $(".subscriber_form #subs_email").val();
            var _wpnonce = $(".subscriber_form #woocommerce-subscribe-nonce").val();
            var _wp_http_referer = $(
                ".subscriber_form input[name=_wp_http_referer"
            ).val();

            $.ajax({
                type: "POST",
                url: base_url + "ajax",
                data: {
                    action: "subscribe",
                    email: email,
                    _wpnonce: _wpnonce,
                    _wp_http_referer: _wp_http_referer,
                },
                success: function(response) {
                    if (response == "success") {
                        $(".loader").fadeOut("slow");
                        $(".subscriber_form #subs_email").val("");
                        $("#toast").text("Thank You For Subscribing!").addClass("show");
                        setTimeout(function() {
                            $("#toast").removeClass("show").text("");
                        }, 3000);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
            });
            return false;
        }
    });
    $(document).on("keyup", ".subscriber_form #subs_email", function(event) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(this.value) || this.value == "") {
            $(this).parent(".subscriber_form").find(".error-message").show();
            $(this).addClass("has-error");
        } else {
            $(this).parent(".subscriber_form").find(".error-message").hide();
            $(this).removeClass("has-error");
        }
    });
    $(document).on("keyup", ".contact-form-area #email", function(event) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(this.value) || this.value == "") {
            $(this).parent(".form-wrap").find(".error-message").show();
            $(this).addClass("has-error");
        } else {
            $(this).parent(".form-wrap").find(".error-message").hide();
            $(this).removeClass("has-error");
        }
    });
    $(document).on("keyup", ".contact-form-area #first_name", function(event) {
        var nameReg = /^(?![ .]+$)[a-zA-Z .]*$/;
        if (!nameReg.test(this.value) || this.value == "") {
            $(this).parent(".form-wrap").find(".error-message").show();
            $(this).addClass("has-error");
        } else {
            $(this).parent(".form-wrap").find(".error-message").hide();
            $(this).removeClass("has-error");
        }
    });
    $(document).on("keyup", ".contact-form-area #subject", function(event) {
        var subjectReg = /[A-Za-z0-9_~\-!@#\$%\^&\*\(\)]+$/;
        if (!subjectReg.test(this.value) || this.value == "") {
            $(this).parent(".form-wrap").find(".error-message").show();
            $(this).addClass("has-error");
        } else {
            $(this).parent(".form-wrap").find(".error-message").hide();
            $(this).removeClass("has-error");
        }
    });
    $(document).on("keyup", ".contact-form-area #message", function(event) {
        var messageReg = /[A-Za-z0-9_~\-!@#\$%\^&\*\(\)]+$/;
        if (!messageReg.test(this.value) || this.value == "") {
            $(this).parent(".form-wrap").find(".error-message").show();
            $(this).addClass("has-error");
        } else {
            $(this).parent(".form-wrap").find(".error-message").hide();
            $(this).removeClass("has-error");
        }
    });
    //price range (top products)
    $(window).load(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 9000,
            values: [50, 6000],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            },
        });
        $("#amount").val(
            "$" +
            $("#slider-range").slider("values", 0) +
            " - $" +
            $("#slider-range").slider("values", 1)
        );
    });

    // flexisel (for special offers)
    $(window).load(function() {
        $("#flexiselDemo1").flexisel({
            visibleItems: 3,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1,
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 2,
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 2,
                },
            },
        });

        $(function() {
            // Owl Carousel
            var owl = $(".owl-carousel");
            owl.owlCarousel({
                items: 1,
                margin: 10,
                loop: true,
                nav: true,
                navText: [
                    '<i class="fa fa-chevron-left"></i>',
                    '<i class="fa fa-chevron-right"></i>',
                ],
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
            });
        });
    });

    // password-script
    window.onload = function() {
        document.getElementById("password1").onchange = validatePassword;
        document.getElementById("password2").onchange = validatePassword;
    };

    function validatePassword() {
        var pass2 = document.getElementById("password2").value;
        var pass1 = document.getElementById("password1").value;
        if (pass1 != pass2)
            document
            .getElementById("password2")
            .setCustomValidity("Passwords Don't Match");
        else document.getElementById("password2").setCustomValidity("");
        //empty string means no validation error
    }
    //Product cateogory description read more/read less
    $(document).ready(function() {
        length = 200;
        cHtml = $(".term-description").html();
        cText = $(".term-description").text().substr(0, length).trim();
        $(".term-description")
            .addClass("compressed")
            .html(cText + "... <a href='#' class='exp'>Read more ></a>");
        window.handler = function() {
            $(".exp").click(function() {
                if ($(".term-description").hasClass("compressed")) {
                    $(".term-description").html(
                        cHtml + "<a href='#' class='exp'>< Read less</a>"
                    );
                    $(".term-description").removeClass("compressed");
                    handler();
                    return false;
                } else {
                    $(".term-description").html(
                        cText + "... <a href='#' class='exp'>Read more ></a>"
                    );
                    $(".term-description").addClass("compressed");
                    handler();
                    return false;
                }
            });
        };
        handler();
    });
});



jQuery(document).ready(function($) {
    $(".product-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            '<span class="owl-prev-btn">‹</span>',
            '<span class="owl-next-btn">›</span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});


jQuery(document).ready(function($) {
    $(".offer_week-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            '<span class="owl-prev-btn">‹</span>',
            '<span class="owl-next-btn">›</span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});


jQuery(document).ready(function($) {
    $(".new_arrivals-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            '<span class="owl-prev-btn">‹</span>',
            '<span class="owl-next-btn">›</span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

jQuery(document).ready(function($) {
    $(".customer_reviews").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            '<span class="owl-prev-btn">‹</span>',
            '<span class="owl-next-btn">›</span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

setTimeout(() => {
    document.querySelector(".customer_reviews").classList.remove("owl-theme");
}, 500);


jQuery(document).ready(function($) {
    $(document).off("click", ".quantity .minus, .quantity .plus").on("click", ".quantity .minus, .quantity .plus", function(e) {
        e.preventDefault(); // Prevent unwanted behavior

        let $button = $(this);
        let $wrapper = $button.closest(".quantity");
        let $qtyInput = $wrapper.find(".qty");
        let $updateCartBtn = $("button[name='update_cart']");

        if (!$qtyInput.length) return;

        let min = parseInt($qtyInput.attr("min")) || 1;
        let max = parseInt($qtyInput.attr("max")) || 99;
        let currentValue = parseInt($qtyInput.val()) || min;

        if ($button.hasClass("plus") && currentValue < max) {
            $qtyInput.val(currentValue + 1);
        } else if ($button.hasClass("minus") && currentValue > min) {
            $qtyInput.val(currentValue - 1);
        }

        // Enable "Update Cart" button after change
        $updateCartBtn.prop("disabled", false);
    });

    // Fix: Ensure it works after cart update via AJAX
    $(document.body).on("updated_wc_div", function() {
        console.log("Cart updated, event listeners still active.");
    });
});

jQuery(document).ready(function($) {
    // Sync the cloned input field with the WooCommerce coupon field
    $('#coupon_code_clone').on('input', function() {
        $('#coupon_code').val($(this).val());
    });

    // Apply coupon on cart page
    $('button[name="apply_coupon"]').on('click', function(e) {
        e.preventDefault();
        $('#coupon_code').val($('#coupon_code_clone').val());

        // Detect if on Cart Page
        if ($('.woocommerce-cart-form').length) {
            $('form.woocommerce-cart-form').submit();
        }

        // Detect if on Checkout Page
        if ($('.checkout_coupon.woocommerce-form-coupon').length) {
            $('form.checkout_coupon.woocommerce-form-coupon').submit();
        }
    });

    // // Custom "ADD" button (triggers apply coupon)
    $("#apply_coupon_clone").on("click", function(e) {
        e.preventDefault();
        $(".loader").fadeIn();
        $("#coupon_code").val($("#coupon_code_clone").val());

        // Instead of clicking apply_coupon button (to prevent loops), directly trigger the event
        $('button[name="apply_coupon"]').trigger("click");
    });
});