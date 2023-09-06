  var state = [
            {
                fullName: "Kuwait",
                 desc: "country",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1280px-Flag_of_Kuwait.svg.png",
                id: 10300
            },
            {
                fullName: "Kanada",
                desc : "country",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
                id: 10302
            }
        ];

        var state2 = [
            {
                    fullName: "Kanada",
                    desc: "country",
                    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
                    id: 10310
                },
                {
                    fullName: "Kuwait",
                    desc: "country",
                    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1280px-Flag_of_Kuwait.svg.png",
                    id: 10320
                }
            ];
                
   let select2Value ="select previos"; 
    function formatState(state) {
       
        if (!state.id) {
            return state.fullName;
        }
          var baseUrl = "http://localhost:2990/jira/secure/projectavatar?size=xsmall"; // Correct the base URL

        var $state = $(
            // '<div class="container"> <div class="row"><img src="' + state.iconUrl + '" class="img-flag" width = "40px" style = "border-radius : 100%"/> <h3>' + state.fullName + '</h3> <p>'+ state.desc +'</p><div class="row" ><div>'
                `<div class="container container-down" style = "font-size:15px ; font-family:'Cairo';  ">
                    <div class="row"  >
                        <div class="col"  >
                           <img src="${state.iconUrl }" class="img-flag" width = "60px" height="60px"   style = "  border: 2px solid #f1f1f1;
                               background-color: rgba(0, 0, 0, 0.9); border-radius : 100px ;"/>
                      
                        </div>
                        <div class="col-7">
                            <h3 style = "font-size:20px">${state.fullName }</h3>
                           <p style = "color:#d3d3d3;">${state.desc }</p>
                        </div>
                        <div class="col" >
                          <p class="" style ="text-algin:center; margin-top:14px;">${state.desc }</p>
                        </div>
                    </div>
                    </div>`
        );
        
        return $state;
    };
  
    $(".selector1").select2({
        data: state,
        // placeholder:"from",
        minimumResultsForSearch: Infinity,
        templateResult: formatState,
         templateSelection: function (selected) {
          return selected;
            // $('span .select2-selection__rendered').eq(0).append('<img src="' + selected.iconUrl + '" width="50px" style="border-radius:100px;"> ' + selected.fullName);
        },
    });

       $(".selector2").select2({
            data: state2,
            //  placeholder: "to",
            minimumResultsForSearch: Infinity,
            templateResult: formatState,
            templateSelection: function (selected) {
                return selected;
           },
         });

const OnWay =  function () { 
    let $element = `<div class="date" id="reservationdateOneWay" data-target-input="nearest" >
                <div id="color-calendar" style = "position:relative; z-index:999; width:100%; margin:10px;"></div>
                    <div style = "position:relative; ">  
                                            <p style="position: absolute; border-radius: 100%; width: 120px; margin-left: 50px; z-index: 9999; margin-top: -12px; background-color: white; font-weight: 600; color: rgb(153, 153, 153);">single of date</p>
                    <input type="text" class="input-date" style="width: 400px; font-family: Times, Arial, sans-serif;" data-target="#reservationdate"  />
                        <i class="fas fa-calendar-alt fa-lg"
                            style="color: #575f6b;position: absolute; z-index:999; margin-left: -30px; margin-top: 18px;"></i>
                </div>
                </div>`;
                                
    $("#reservationdate").fadeOut(500, function () {
        $(this).replaceWith($element);
        $(document).ready(function () {
            let myCal = new Calendar({
                id: "#color-calendar",
                calendarSize: "small",
            });
            $('#color-calendar').css({ 'display': 'none', 'margin-top': '-315px' });

            $('.input-date').click(function () {
                $('#color-calendar').slideToggle("fast");
            });
            $('#color-calendar').click(function () {
                let date = myCal.getSelectedDate()
                let formattedDate = date.toLocaleString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
                $('.input-date').val(formattedDate);
                $('#color-calendar').css({
                    'display': 'none'
                });
            });
        });
    });
 }


     $('input[type=radio][name=Form_forms]').change(function () { 
        $val = this.value;

        switch ($val) {

            // Rount trip choice
            case "Round trip":

            $('.append-form').empty();
             $('.class-append').empty();
                let $element1 = `<div class=" date" id="reservationdate" data-target-input="nearest" >
                    <div  style="position: relative; ">  
                   <p style="position: absolute; border-radius: 100%; width: 120px; margin-left: 50px; z-index: 9999; margin-top: -12px; background-color: white; font-weight: 600; color: rgb(153, 153, 153);">range of date</p>
                    <input type="text" class=" datetimepicker-input input-date" style="width: 400px; font-family: Times, Arial, sans-serif;" data-target="#reservationdate"  />
                        <i class="fas fa-calendar-alt fa-lg"
                            style="color: #575f6b;position: absolute; z-index:999; margin-left: -30px; margin-top: 18px;"></i>
                </div> 
                </div>`;
                 $('#reservationdateOneWay').fadeOut(800, function () { 
                     $(this).replaceWith($element1);
                      $('#reservationdate').daterangepicker({
                         format: 'L',
                         drops: "up"
                     }, function (start, end, label) {
                         // This function will be called when the user applies a date range
                         var startDate = start.format('YYYY-MM-DD');
                         var endDate = end.format('YYYY-MM-DD');

                         console.log('Selected start date: ' + startDate);
                         console.log('Selected end date: ' + endDate);
                         $('.input-date').val(startDate + ' to ' + endDate);
                         // You can use the startDate and endDate variables as needed
                     });
                 });
               
                
                break;

        // one way choice
            case "one way":
               OnWay();
               $('.append-form').empty();
                $('.class-append').empty();
                break;
                

        // Multi city choice
            case "Multi city":
                 let count = 0;
              OnWay();
            
        const state = [
            {
                fullName: "Kuwait",
                 desc: "country",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1280px-Flag_of_Kuwait.svg.png",
                id: 10300
            },
            {
                fullName: "Kanada",
                desc : "country",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
                id: 10302
            },
             {
                fullName: "Kanada",
                desc : "country",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
                id: 10302
            }
            ,
             {
                fullName: "Kanada",
                desc : "country",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
                id: 10302
            },
             {
                fullName: "Kanada",
                desc : "country",
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
                id: 10302
            }
        ];

        $('.class-append').html(`<div style = "display:flex;"> <div class="plus-button-append" id="plus-1" style="height:48px; width: 48px; margin-right:4px">
                 <i class="fas fa-arrow-down" style="color: rgb(95, 95, 243);"></i>
                      </div>
                     <div class="close-button-append" id="close-1" style="height:48px; width: 48px; margin-right:4px">
                            <i class="fas fa-arrow-up" style="color: rgb(245, 123, 123);"></i>
                      </div>
             `);
            
     $('.plus-button-append').click(function () {    
       if (count < 5 ) {
        let htmlTemplate =`
       <div class="row div-more-city" style = "margin-top:10px">
    <div class="col">
        <div class="dropdown-addional dropdown-addional${count}">
            <p style="position: absolute; width: 50px; margin-left: 10px; z-index: 9999; margin-top: -24px;
         background-color: white; font-weight: 600; 
         color: rgb(153, 153, 153); border-radius: 100%;">
                From</p>
            <p class = "PreviosLocation"></p>
        </div>
    </div>
    <div class="col">
        <div class="dropdown-addional dropdown-addional${count}">
        
            <p
                style="position: absolute; width: 50px; margin-left: 10px; z-index: 9999; margin-top: -24px; background-color: white; font-weight: 600; color: rgb(153, 153, 153); border-radius: 100%;">
                To</p>

                 <span class="selector-paragraph selector-paragraph${count}"></span>
            <div class="dropdown-additional-content${count} dropdown-additional-content">
          
              
                                  ${ state.map((element) => 
                                    `  <div class=" option-additional-row container-down-passenger" style="font-size:15px ; font-family:'Cairo';  "> 
                                    <div class="row">
                                <div class="col" style="text-align: start;">
                                    <img src="${element.iconUrl}" class="imgOptions">
                                </div>
                                <div class="col-8 fullNameDiv" style="text-align: start;">
                                    <h3 style="font-size:20px">${element.fullName}</h3>
                                    <p style="color:#b4b4b4;">${element.desc}</p>
                                </div>
                                <div class="col-2" style="color:#b4b4b4;">
                                    <p style="color:#b4b4b4;">${element.desc}<p>
                                </div>

                            </div> </div>`
                       )}

             
            </div>
        </div>
  
        </div>
            <div class="col">
                    <div class="date" id="reservationdateOneWay" data-target-input="nearest" >
                        <div id="color-calendar-additional${count}" class="color-calendar-additional" style="position:relative;display: none; margin-top: -305px; z-index:99999; width:100%;"></div>
                    <div style="position:relative;">
                        <p
                            style="position: absolute; border-radius: 100%; width: 120px; margin-left: 50px; z-index: 9999; margin-top: -12px; background-color: white; font-weight: 600; color: rgb(153, 153, 153);">
                            single of date</p>
                        <input type="text" class="input-date-additional"
                            style="width: 300px; font-family: Times, Arial, sans-serif;" data-target="#"/>
                                <i class=" fas fa-calendar-alt fa-lg" style="color: #575f6b;position: absolute; z-index:999; margin-left: -30px; margin-top: 18px;"></i>
                    </div>
                </div>
            </div>
        </div>
            `;     

                    
                $('.append-form').append(htmlTemplate);
        

                $('.dropdown-addional'+count).click(function () {
                    $(this).find('.dropdown-additional-content').slideToggle("fast");     
                });


                    let level = count;
                    if (level > 0) {
                        let currentDropdown = $('.dropdown-addional' + level);
                        let previousDropdown = $('.dropdown-addional' + (level - 1)).find('.selector-paragraph');

                        if (currentDropdown.length !== 0 && previousDropdown.length !== 0) {
                            currentDropdown.find('.PreviosLocation').text(previousDropdown.text());
                        }
                    }
            
                
               $('.dropdown-addional0').eq(0).text($('.select2-selection__rendered').eq(1).text());


                $(`.append-form`).on('click', `.option-additional-row`, function () {
                     let valFullName = $(this).find('.fullNameDiv>h3').text(); 
                      $(this).parent().siblings(`.selector-paragraph`).text(valFullName);
                       let nextDivMoreCity = $(this).closest('.div-more-city').next('.div-more-city');
                       nextDivMoreCity.find('.PreviosLocation').text(valFullName);
                    });

             let myCal = new Calendar({
                id: "#color-calendar-additional"+count,
                calendarSize: "small",
            });

            $('.input-date-additional').eq(count).click(function () {
                $(this).closest('#reservationdateOneWay').find('.color-calendar-additional').slideToggle("fast");
            });

                $('.color-calendar-additional').click(function () {
                let date = myCal.getSelectedDate()
                let formattedDate = date.toLocaleString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
                $(this).parent().parent().find('.input-date-additional').val(formattedDate);
                $('.color-calendar-additional').css({
                    'display': 'none'
                });
            });

             count++;
            }

            // $('.color-calendar-additional').css({ 'display': 'none', 'margin-top': '-305px' });

            // $('.input-date-additional').click(function () {
            //     $(this).closest('#reservationdateOneWay').find('.color-calendar-additional').slideToggle("fast");
            // });
   


            // $('.input-date').click(function () {
            //     $('#color-calendar').slideToggle("fast");
            // });



        //  console.log( $('.PreviosLocation'));
        });
                     $('.select2-selection__rendered').on('input' ,function () {
                        $('.PreviosLocation').eq(0).text(select2Value);
                        });
                
                 $('.close-button-append').click(function () {
                        if (count > 0 && count <= 5 ) {
                         $('div .div-more-city:last').remove();
                         count--;
                        }
                  });
                  
                break;        


            default:
                break;
        }
        
        

      });
    
     $(document).ready(function () {     
            $('.card-container').css({ width:'92%', borderRadius: 90 })
              .animate({ width: '100%', borderRadius:20 }, 900);
            $('.FormButton').css({top :'-20px'})
            .animate({ top: '40px' }, 900);
            
            });

    $(document).ready(function () {
        const rotateImage = $('.arrow-click');
        let rotationDegree = 0;

        function rotate() {
            rotationDegree += 180; // Adjust the angle as needed
            rotateImage.css({transform: `rotate(${rotationDegree}deg)`});
        }

       $('.arrow-passenger').on('click', rotate);
    });

    

        $(document).ready(function () {
            if ($('#reservationdate')) {
                $('#reservationdate').daterangepicker({
                format: 'L',
                drops:"up"
            }, function (start, end, label) {
                    // This function will be called when the user applies a date range
                    var startDate = start.format('YYYY-MM-DD');
                    var endDate = end.format('YYYY-MM-DD');

                    console.log('Selected start date: ' + startDate);
                    console.log('Selected end date: ' + endDate);
                   $('.input-date').val(startDate + ' to '+endDate );
                    // You can use the startDate and endDate variables as needed
                });
            }else{
                                $('#reservationdate2').click(function () { 
                                    console.log('reservationdate2');
                                 })

            }

                
            });

    $('b[role="presentation"]').hide();
    $('.select2-selection__arrow').append('<i class="fa fa-angle-down"></i>');
    $('document').ready(function () {
        
        $(document).ready(function () {
            $('.select2-container--default .select2-selection--single').css({ "background-color": "white", "height": "55px", 'font-size': "22px", 'padding-top': '10px' , 'border-radius': "13px" , 'opacity' :" 0.9" , 'border' :'1px solid black'});
            $('.select2-selection__arrow').css({ 'font-size': "19px", 'padding-right': '30px', 'padding-top': '10px' });
            $('.selection').css({'padding-right': '30px', 'padding-top': '10px' ,'border-radius':'100px' , 'color' :'#999' });
            $('.select2-selection__placeholder').eq(0).text('From');
            $('.select2-selection__placeholder').eq(1).text('To');
            $('.select2-selection').eq(0).append('<p style="margin-top:-20px; margin-left:20px; width:40px;padding:0px;background-color:white; z-index:999;border-radius:100px ;font-size:15px">From</p>');
            $('.select2-selection').eq(1).append('<p style="margin-top:-20px; margin-left:20px; width:40px;padding:0px;background-color:white; z-index:999;border-radius:100px ;font-size:15px">To</p>');
            $('.input-date').css({'text-align':'center' , 'padding':'10px', 'font-size' : '22px' , 'color' : "rgb(114 112 112)" });
            $('.arrow-passenger').click(function () {
                $(".dropdown-passenger-content").slideToggle("fast");
                // $(".dropdown-passenger-content").
            });
                   $('.switch-Button').click(function () {
                 let select1 =  $('.select2-selection__rendered').eq(0).html();
                 let select2 =  $('.select2-selection__rendered').eq(1).html();
                 
                 $('.select2-selection__rendered').eq(0).html(select2);
                  $('.select2-selection__rendered').eq(1).html(select1);
            });

           
       
        });
    });
        $(document).ready(function () { 
                $('.container-down').slideDown();
        });

        $(".selector1, .selector2").on("select2:select", function (e) {
                var selected = e.params.data;   
                var imageUrl = selected.iconUrl;
            let fullName = selected.fullName;
                // var $selectedImage = $('<img src="' + imageUrl + '" width="50px" style="border-radius: 100px;">');
                $(this).siblings(".select2").find(".select2-selection__rendered").append('<img src="' + imageUrl + '" width="30px" height="30px" style="border-radius: 100px; margin-top:-7px; border:2px solid #b9b7b7;"> ' + fullName );
                  select2Value = fullName;
                if ( $(this).closest('.card-container').find('.dropdown-addional0')) {
                    $(this).closest('.card-container').find('.dropdown-addional0').eq(0).text(fullName);
                }
                
                // console.log($(this).closest('.card-container').find('.dropdown-addional0'));
                                // Scroll to the end of the input area
             var inputContainer = $(this).siblings(".select2").find(".select2-selection__rendered");
                inputContainer.animate({ scrollLeft: inputContainer.prop("scrollWidth") }, "slow");
           });
         

            $('.plus-button').click(function () {
              let Adult_degree = parseInt($('span.Adult-degree').text()) ?? 0;
              let Child_degree = parseInt($('span.Child-degree').text()) ?? 0;
              let Infant_degree = parseInt($('span.Infant-degree').text()) ?? 0;
                let name_span = $(this).attr('id');
                switch (name_span) {
                    case 'plus-1':
                        Adult_degree +=1; 
                        console.log($('div~div span.Adult-degree').html);
                        $('span.Adult-degree').text(Adult_degree <= 10 ? Adult_degree : 0);
                        $('span.Adult-degree-input').text(Adult_degree <= 10 ? Adult_degree : 0);
                       
                        break;
                    case 'plus-2':
                        Child_degree += 1;
                        $('span.Child-degree').text(Child_degree  <= 10 ? Child_degree : 0);
                        $('span.Child-degree-input').text(Child_degree <= 10 ? Child_degree : 0);

                        break;
                    case 'plus-3':
                        Infant_degree += 1;
                        $('span.Infant-degree').text(Infant_degree <= 10 ? Infant_degree : 0);
                         $('span.Infant-degree-input').text(Infant_degree <= 10 ? Infant_degree : 0);
                       break;               
                    default:
                        break;
                }
            });


            $('.minus-button').click(function () {
                let Adult_degree = parseInt($('span.Adult-degree').text()) ?? 0;
                let Child_degree = parseInt($('span.Child-degree').text()) ?? 0;
                let Infant_degree = parseInt($('span.Infant-degree').text()) ?? 0;
                let name_span = $(this).attr('id');
                switch (name_span) {
                    case 'minus-1':
                        Adult_degree -= 1;
                        $('span.Adult-degree').text(Adult_degree <= 0 ? 0 : Adult_degree);
                        $('span.Adult-degree-input').text(Adult_degree <= 0 ? 0 : Adult_degree);

                        break;
                    case 'minus-2':
                        Child_degree -= 1;
                        $('span.Child-degree').text(Child_degree <= 0 ? 0 : Child_degree );
                           $('span.Child-degree-input').text(Child_degree <= 0 ? 0 : Child_degree);

                        break;
                    case 'minus-3':
                        Infant_degree -= 1;
                        $('span.Infant-degree').text(Infant_degree <= 0 ? 0 : Infant_degree);
                       $('span.Infant-degree-input').text(Infant_degree <= 0 ? 0 : Infant_degree);

                        break;
                    default:
                        break;
                }
            });
            
          
        $(document).ready(function () {
            $('.class').click(function () { 
                  let name_class = $(this).attr('class');
                  let class_click  = name_class.split(' ')[1];
                  let class_val = class_click == 'economy' ? 'economy' : class_click == 'business' ? 'business' : class_click=='first' ? 'first': 'non define';
                  $('.classes').text(class_val);
             })
        });
     
        $(function () {
            $(".state").click(function () { 
                $('.span-state').html($(this).html());
             });
               $(".currency").click(function () {
                $('.span-currency').html($(this).html());
            });
            $(".language").click(function () {
                $('.span-language').html($(this).html());
            });       
        });